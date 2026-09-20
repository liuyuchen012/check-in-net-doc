"""Decode the QR images produced by qr.check.cjs with OpenCV's detector.

This is the independent half of the QR check: the JS side claims "this matrix is
what the page draws", and OpenCV has to actually read the payload back out of
the rendered pixels, including the non-ASCII cases.
"""
import json
import os
import sys

import cv2

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "qr-out")


def main():
    with open(os.path.join(OUT, "manifest.json"), encoding="utf-8") as fh:
        manifest = json.load(fh)

    detector = cv2.QRCodeDetector()
    failures = []

    for item in manifest:
        path = os.path.join(OUT, item["name"] + ".pgm")
        img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
        if img is None:
            failures.append((item["name"], "could not read " + path))
            continue
        payload, points, _ = detector.detectAndDecode(img)
        if not payload:
            failures.append((item["name"], "decoder returned nothing"))
            continue
        if payload != item["text"]:
            failures.append(
                (item["name"], "mismatch\n    expected: %r\n    decoded:  %r" % (item["text"], payload))
            )
            continue
        print("  ok   %-12s %3d modules -> %r" % (item["name"], item["modules"], payload[:58]))

    print()
    if failures:
        print("FAILED: %d of %d" % (len(failures), len(manifest)))
        for name, why in failures:
            print("  - %s: %s" % (name, why))
        return 1
    print("All %d QR codes decoded back to their exact payload." % len(manifest))
    return 0


if __name__ == "__main__":
    sys.exit(main())
