/*
 * Bundles the site into one self-contained HTML file at dist/index.html.
 *
 * This is a convenience artifact, not a requirement: the multi-file version in
 * the repository root is already a working static site with no build step, and
 * it is the one the tests exercise. Use the single file when you want to hand
 * someone one page, open it straight from the filesystem, or drop it somewhere
 * that cannot take sibling assets.
 *
 * Run: node build-single.cjs
 */
'use strict';

var fs = require('fs');
var path = require('path');

var ROOT = __dirname;
var OUT_DIR = path.join(ROOT, 'dist');
var INLINE = ['vendor/qrcode.js', 'intent-uri.js', 'presets.js'];

var html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
var inlinedBytes = 0;

INLINE.forEach(function (rel) {
  var tag = '<script src="' + rel + '"></script>';
  if (html.indexOf(tag) < 0) {
    throw new Error('expected script tag not found in index.html: ' + tag);
  }
  var js = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  inlinedBytes += Buffer.byteLength(js);
  /* A "</script" anywhere in the source would close the inline block early. */
  var escaped = js.replace(/<\/script/gi, '<\\/script');
  /* Function replacement: a string one would let "$&", "$'" etc. in the
   * bundled source be re-interpreted as replacement patterns. */
  html = html.replace(tag, function () {
    return '<script>\n/* ---- ' + rel + ' ---- */\n' + escaped + '\n</script>';
  });
});

var leftover = html.match(/<script[^>]+src=/gi);
if (leftover) {
  throw new Error('external script references remain: ' + leftover.join(', '));
}
if (/<link[^>]+stylesheet/i.test(html)) {
  throw new Error('external stylesheet reference remains');
}

fs.mkdirSync(OUT_DIR, { recursive: true });
var out = path.join(OUT_DIR, 'index.html');
fs.writeFileSync(out, html);

console.log('index.html          ' + Buffer.byteLength(fs.readFileSync(path.join(ROOT, 'index.html'))) + ' bytes');
console.log('inlined js          ' + inlinedBytes + ' bytes');
console.log('dist/index.html     ' + Buffer.byteLength(html) + ' bytes');
console.log('external requests   none');
