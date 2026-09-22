/*
 * Second, independent QR decode pass using jsQR (a different decoder from the
 * OpenCV one in qr.decode.py). OpenCV's detector rejects some valid high-version
 * codes, so agreeing decoders matter here.
 *
 * test/qr.rgba.py dumps the rendered pixels as raw RGBA first.
 * Run: python test/qr.rgba.py && node test/qr.decode-jsqr.cjs
 */
'use strict';

var fs = require('fs');
var path = require('path');

/*
 * jsQR is a dev-only second opinion, not a runtime dependency, so it is not
 * vendored. Get it with:  npm pack jsqr  (then unpack the tarball)  and point
 * JSQR_PATH at dist/jsQR.js, or drop it at test/vendor/jsqr.js.
 */
var candidates = [
  process.env.JSQR_PATH,
  path.join(__dirname, 'vendor', 'jsqr.js'),
  path.join(process.env.TEMP || '/tmp', 'qrfetch', 'jsqr', 'dist', 'jsQR.js')
].filter(Boolean);

var jsQR = null;
for (var i = 0; i < candidates.length; i++) {
  try {
    jsQR = require(candidates[i]);
    break;
  } catch (e) { /* try the next candidate */ }
}
if (!jsQR) {
  console.error('jsQR not found. Tried:\n  ' + candidates.join('\n  '));
  console.error('\nRun `npm pack jsqr`, unpack it, and set JSQR_PATH to dist/jsQR.js.');
  process.exit(2);
}
jsQR = jsQR.default || jsQR;

var OUT = path.join(__dirname, 'qr-out');
var images = JSON.parse(fs.readFileSync(path.join(OUT, 'rgba-manifest.json'), 'utf8'));

var failed = [];
images.forEach(function (img) {
  var raw = fs.readFileSync(path.join(OUT, img.name + '.rgba'));
  var data = new Uint8ClampedArray(raw);
  var res = jsQR(data, img.width, img.height);
  var decoded = res && res.data ? res.data : '';
  if (decoded === img.text) {
    console.log('  ok   ' + img.name.padEnd(14) + ' ' + decoded.length + ' chars');
  } else {
    failed.push({ name: img.name, expected: img.text, decoded: decoded });
    console.log('  FAIL ' + img.name);
  }
});

console.log();
if (failed.length) {
  console.log('FAILED: ' + failed.length + ' of ' + images.length);
  failed.forEach(function (f) {
    console.log('  - ' + f.name);
    console.log('    expected: ' + JSON.stringify(f.expected));
    console.log('    decoded : ' + JSON.stringify(f.decoded));
  });
  process.exit(1);
}
console.log('jsQR decoded all ' + images.length + ' images back to their exact payload.');
