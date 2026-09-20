"""Dump every rendered QR (PGM/PGM sets and the captured page canvas) as raw
RGBA for the jsQR pass in qr.decode-jsqr.cjs."""
import glob
import json
import os

import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "qr-out")

items = []

with open(os.path.join(OUT, "manifest.json"), encoding="utf-8") as fh:
    for entry in json.load(fh):
        path = os.path.join(OUT, entry["name"] + ".pgm")
        items.append((entry["name"], path, entry["text"]))

# the canvas captured from the live page, plus the node render of the same payload
inpage_expected = os.path.join(OUT, "inpage.expected.txt")
if os.path.exists(inpage_expected):
    with open(inpage_expected, encoding="utf-8") as fh:
        text = fh.read()
    for name in ("inpage", "inpage-node-6"):
        path = os.path.join(OUT, name + (".png" if name == "inpage" else ".pgm"))
        if os.path.exists(path):
            items.append((name, path, text))

manifest = []
for name, path, text in items:
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise SystemExit("cannot read " + path)
    rgba = cv2.cvtColor(img, cv2.COLOR_GRAY2RGBA)
    rgba.tofile(os.path.join(OUT, name + ".rgba"))
    manifest.append({"name": name, "width": int(img.shape[1]), "height": int(img.shape[0]), "text": text})
    print("%-14s %dx%d" % (name, img.shape[1], img.shape[0]))

with open(os.path.join(OUT, "rgba-manifest.json"), "w", encoding="utf-8") as fh:
    json.dump(manifest, fh, ensure_ascii=False, indent=1)
print("\nwrote %d RGBA dumps" % len(manifest))
