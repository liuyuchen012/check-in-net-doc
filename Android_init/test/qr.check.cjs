/*
 * Renders the exact QR the page draws (same library, same UTF-8 encoder, same
 * margin and cell maths) into PGM files so a real decoder can check them.
 * Run: node test/qr.check.cjs && python test/qr.decode.py
 */
'use strict';

var fs = require('fs');
var path = require('path');
var qrcode = require('../vendor/qrcode.js');
var IU = require('../intent-uri.js');

/* the page does this too: the default encoder truncates every char to 8 bits */
qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

var OUT = path.join(__dirname, 'qr-out');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

/* Mirrors drawQR() in index.html. Keep the 560 in step with the page. */
function render(text) {
  var qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  var n = qr.getModuleCount();
  var margin = 4;
  var total = n + margin * 2;
  var cell = Math.max(2, Math.floor(560 / total));
  var size = total * cell;
  var px = Buffer.alloc(size * size, 255);
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      if (!qr.isDark(r, c)) continue;
      for (var dy = 0; dy < cell; dy++) {
        for (var dx = 0; dx < cell; dx++) {
          px[((r + margin) * cell + dy) * size + (c + margin) * cell + dx] = 0;
        }
      }
    }
  }
  return { size: size, modules: n, cell: cell, px: px };
}

function writePGM(file, img) {
  var head = Buffer.from('P5\n' + img.size + ' ' + img.size + '\n255\n', 'ascii');
  fs.writeFileSync(file, Buffer.concat([head, img.px]));
}

var cases = [
  ['simple', 'https://example.com'],
  ['settings', IU.buildIntentUri({ action: 'android.settings.SETTINGS' }).uri],
  ['wechat', IU.buildIntentUri({ target: { raw: 'weixin://' } }).uri],
  /* non-ASCII is where the default byte encoder would have failed */
  ['cjk', IU.buildIntentUri({ target: { raw: 'geo:39.9087,116.3975?q=天安门' } }).uri],
  ['cjk-extra', IU.buildIntentUri({
    target: { raw: 'demo://x' },
    extras: [{ prefix: 'S', key: 'text', value: '中文标签 · 测试' }]
  }).uri],
  /* the kind of long real-world link the tool produces */
  ['long', IU.buildIntentUri({
    target: { raw: 'weixin://dl/business/?t=AbCdEf123456&scene=1&click_id=98765' },
    action: 'android.intent.action.VIEW',
    categories: ['android.intent.category.BROWSABLE', 'android.intent.category.DEFAULT'],
    extras: [
      { prefix: 'S', key: 'browser_fallback_url', value: 'https://example.com/download' },
      { prefix: 'S', key: 'android.intent.extra.TEXT', value: '来自 intent:// 的分享内容' }
    ]
  }).uri]
];

var manifest = [];
cases.forEach(function (c) {
  var img = render(c[1]);
  writePGM(path.join(OUT, c[0] + '.pgm'), img);
  manifest.push({ name: c[0], text: c[1], modules: img.modules, size: img.size });
  console.log(c[0] + ': ' + img.modules + ' modules, ' + img.size + 'px');
});

fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('\nwrote ' + cases.length + ' images to ' + OUT);
