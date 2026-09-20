/*
 * Tests for intent-uri.js.
 *
 * Every generated link is parsed back with test/aosp-oracle.js — a port of
 * Android's Intent.parseUri — so the assertions are about what Android will
 * actually see, not about what we meant to write.
 *
 * Run: node test/uri.test.cjs
 */
'use strict';

var IU = require('../intent-uri.js');
var oracle = require('./aosp-oracle.js');

var passed = 0;
var failures = [];

function check(name, fn) {
  try {
    fn();
    passed++;
    console.log('  ok   ' + name);
  } catch (e) {
    failures.push({ name: name, message: e.message });
    console.log('  FAIL ' + name + '\n       ' + e.message);
  }
}

function eq(actual, expected, what) {
  var a = JSON.stringify(actual);
  var b = JSON.stringify(expected);
  if (a !== b) throw new Error((what || 'value') + '\n       expected: ' + b + '\n       actual:   ' + a);
}

function ok(cond, msg) {
  if (!cond) throw new Error(msg || 'expected truthy');
}

function noErrors(res) {
  if (res.errors.length) throw new Error('unexpected errors: ' + res.errors.join(' | '));
}

/* The data part is everything before the last "#Intent;". */
function dataPartOf(uri) {
  return uri.slice(0, uri.lastIndexOf('#Intent;'));
}

console.log('\n== ground truth: the documented Chrome/ZXing example ==');

/* https://developer.chrome.com/docs/android/intents */
var DOC_EXAMPLE =
  'intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;' +
  'S.browser_fallback_url=http%3A%2F%2Fzxing.org;end';

check('the documented example parses as documented', function () {
  var i = oracle.parseIntentUri(DOC_EXAMPLE);
  eq(i.data, 'zxing://scan/', 'data');
  eq(i.package, 'com.google.zxing.client.android', 'package');
  eq(i.extras.browser_fallback_url, 'http://zxing.org', 'browser_fallback_url extra');
  eq(i.categories, [], 'categories');
});

check('our builder reproduces the documented example byte for byte', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'zxing://scan/' },
    action: '',
    categories: [],
    package: 'com.google.zxing.client.android',
    extras: [{ prefix: 'S', key: 'browser_fallback_url', value: 'http://zxing.org' }]
  });
  noErrors(res);
  eq(res.uri, DOC_EXAMPLE, 'generated uri');
});

console.log('\n== data URI reconstruction (intent://host vs intent:opaque) ==');

check('hierarchical target keeps its authority and path', function () {
  var res = IU.buildIntentUri({ target: { raw: 'weixin://dl/nav/x' } });
  noErrors(res);
  eq(res.uri.split('#')[0], 'intent://dl/nav/x', 'intent-side data part');
  eq(oracle.parseIntentUri(res.uri).data, 'weixin://dl/nav/x', 'app-side data');
});

check('opaque target stays opaque — smsto:10086, not smsto://10086', function () {
  var res = IU.buildIntentUri({
    target: { scheme: 'smsto', path: '10086', mode: 'opaque' }
  });
  noErrors(res);
  ok(res.uri.indexOf('intent:10086#Intent;') === 0, 'should not insert //, got ' + res.uri);
  eq(oracle.parseIntentUri(res.uri).data, 'smsto:10086', 'app-side data');
});

check('an opaque target typed by hand also stays opaque', function () {
  var res = IU.buildIntentUri({ target: { raw: 'tel:+8613800138000' } });
  eq(oracle.parseIntentUri(res.uri).data, 'tel:+8613800138000', 'app-side data');
});

check('scheme-only target yields scheme://', function () {
  var res = IU.buildIntentUri({ target: { scheme: 'weixin', mode: 'hierarchical' } });
  noErrors(res);
  eq(res.uri.split('#')[0], 'intent://', 'intent-side data part');
  eq(oracle.parseIntentUri(res.uri).data, 'weixin://', 'app-side data');
});

check('a "#" in the data part survives (parseUri uses lastIndexOf)', function () {
  var res = IU.buildIntentUri({ target: { raw: 'https://example.com/p#frag' } });
  eq(dataPartOf(res.uri), 'intent://example.com/p#frag', 'intent-side data part');
  eq(oracle.parseIntentUri(res.uri).data, 'https://example.com/p#frag', 'app-side data');
});

check('a bare intent: link without #Intent; is reported as unusable', function () {
  var c = IU.classifyInput('intent://foo/bar');
  eq(c.kind, 'intent-bare', 'kind');
  ok(c.warn === true, 'should be flagged');
  /* and Android really does treat it as a plain data URI */
  eq(oracle.parseIntentUri('intent://foo/bar').data, 'intent://foo/bar', 'app-side data');
});

console.log('\n== extras: prefix -> Bundle type ==');

var EXTRA_CASES = [
  ['S', 'K', 'hello world', 'hello world'],
  ['i', 'K', '-42', -42],
  ['l', 'K', '9007199254740991', 9007199254740991],
  ['s', 'K', '300', 300],
  ['b', 'K', '-7', -7],
  ['B', 'K', 'true', true],
  ['B', 'K', 'false', false],
  ['f', 'K', '1.5', 1.5],
  ['d', 'K', '-2.25', -2.25],
  ['c', 'K', 'Z', 'Z']
];

EXTRA_CASES.forEach(function (c) {
  check(c[0] + '. gives a ' + typeof c[3] + ' in the Bundle', function () {
    var res = IU.buildIntentUri({
      target: { raw: 'demo://x' },
      extras: [{ prefix: c[0], key: c[1], value: c[2] }]
    });
    noErrors(res);
    var i = oracle.parseIntentUri(res.uri);
    eq(i.extras[c[1]], c[3], 'extra value');
    eq(typeof i.extras[c[1]], typeof c[3], 'extra typeof');
  });
});

check('B. is boolean and b. is byte (the commonly-swapped pair)', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    extras: [
      { prefix: 'B', key: 'flag', value: 'true' },
      { prefix: 'b', key: 'small', value: '5' }
    ]
  });
  var i = oracle.parseIntentUri(res.uri);
  eq(typeof i.extras.flag, 'boolean', 'B. type');
  eq(typeof i.extras.small, 'number', 'b. type');
  eq(i.extras.small, 5, 'b. value');
});

console.log('\n== extras: values that collide with the grammar ==');

check('a ; in a string extra does not truncate the parameter list', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    action: 'android.intent.action.SEND',
    extras: [{ prefix: 'S', key: 'android.intent.extra.TEXT', value: 'a;b=c#d&e' }]
  });
  noErrors(res);
  var i = oracle.parseIntentUri(res.uri);
  eq(i.extras['android.intent.extra.TEXT'], 'a;b=c#d&e', 'extra value');
  eq(i.action, 'android.intent.action.SEND', 'action survived');
});

check('CJK and quotes in an extra survive', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    extras: [{ prefix: 'S', key: 'q', value: '中文 & "引号" <tag>' }]
  });
  eq(oracle.parseIntentUri(res.uri).extras.q, '中文 & "引号" <tag>', 'extra value');
});

check('a pasted target URI is not double-encoded, but extras are literal', function () {
  var res = IU.buildIntentUri({ target: { raw: 'demo://x?already=%E4%B8%AD%20a' } });
  eq(oracle.parseIntentUri(res.uri).data, 'demo://x?already=%E4%B8%AD%20a', 'data kept its encoding');
});

/* The extras value box is a literal value: whatever is typed is what the app
 * receives, so "%20" typed there means the four characters %20. */
[['p q', 'p q'], ['p%20q', 'p%20q'], ['中文', '中文'], ['a&b=c', 'a&b=c']].forEach(function (c) {
  check('a literal extra value ' + JSON.stringify(c[0]) + ' arrives unchanged', function () {
    var res = IU.buildIntentUri({
      target: { raw: 'demo://x' },
      extras: [{ prefix: 'S', key: 'u', value: c[0] }]
    });
    noErrors(res);
    eq(oracle.parseIntentUri(res.uri).extras.u, c[1], 'extra value');
  });
});

console.log('\n== intent fields ==');

check('action / category / type / package / launchFlags round-trip', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'https://example.com/p?q=1' },
    action: 'android.intent.action.VIEW',
    categories: ['android.intent.category.BROWSABLE', 'android.intent.category.DEFAULT'],
    type: 'text/html',
    package: 'com.example.app',
    launchFlags: '0x10000000'
  });
  noErrors(res);
  var i = oracle.parseIntentUri(res.uri);
  eq(i.action, 'android.intent.action.VIEW', 'action');
  eq(i.categories, ['android.intent.category.BROWSABLE', 'android.intent.category.DEFAULT'], 'categories');
  eq(i.type, 'text/html', 'type (slash must stay)');
  eq(i.package, 'com.example.app', 'package');
  eq(i.launchFlags, 0x10000000, 'launchFlags from hex');
  eq(i.data, 'https://example.com/p?q=1', 'data');
});

check('decimal launchFlags are accepted too', function () {
  var res = IU.buildIntentUri({ target: { raw: 'demo://x' }, launchFlags: '268435456' });
  eq(oracle.parseIntentUri(res.uri).launchFlags, 0x10000000, 'launchFlags from decimal');
});

check('component round-trips through Android parsing', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    component: 'com.example.app/.MainActivity'
  });
  eq(oracle.parseIntentUri(res.uri).component, 'com.example.app/.MainActivity', 'component');
});

console.log('\n== target URI assembly escapes structural characters ==');

check('spaces and CJK in a path are escaped, then decode back exactly', function () {
  var built = IU.buildTargetUri({ scheme: 'demo', authority: 'h', path: '/a b/中文' });
  noErrors(built);
  eq(built.uri, 'demo://h/a%20b/%E4%B8%AD%E6%96%87', 'target uri');
  var i = oracle.parseIntentUri(IU.buildIntentUri({ target: { raw: built.uri } }).uri);
  eq(i.data, 'demo://h/a%20b/%E4%B8%AD%E6%96%87', 'data');
});

check('query strings keep their key=value structure', function () {
  var built = IU.buildTargetUri({
    scheme: 'alipays',
    authority: 'platformapi',
    path: '/startapp',
    query: 'appId=20000056&name=a b'
  });
  noErrors(built);
  eq(built.uri, 'alipays://platformapi/startapp?appId=20000056&name=a%20b', 'target uri');
  eq(
    oracle.parseIntentUri(IU.buildIntentUri({ target: { raw: built.uri } }).uri).data,
    'alipays://platformapi/startapp?appId=20000056&name=a%20b',
    'data'
  );
});

console.log('\n== data-less intents (action only) ==');

check('an action-only intent leaves the data unset, not "//"', function () {
  var res = IU.buildIntentUri({ action: 'android.settings.SETTINGS' });
  noErrors(res);
  eq(res.uri, 'intent:#Intent;action=android.settings.SETTINGS;end', 'generated uri');
  var i = oracle.parseIntentUri(res.uri);
  eq(i.data, null, 'data must be null so a data-less intent-filter can match');
  eq(i.action, 'android.settings.SETTINGS', 'action');
});

check('an action-only intent still refuses to build with nothing at all', function () {
  var res = IU.buildIntentUri({ action: '' });
  ok(res.errors.length > 0, 'expected an error when there is neither scheme nor action');
});

console.log('\n== validation ==');

check('a non-numeric int extra is an error', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    extras: [{ prefix: 'i', key: 'n', value: 'abc' }]
  });
  ok(res.errors.length === 1, 'expected one error, got ' + JSON.stringify(res.errors));
  ok(/整数/.test(res.errors[0]), 'should explain it needs an integer');
});

check('an out-of-range byte extra is an error', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    extras: [{ prefix: 'b', key: 'n', value: '999' }]
  });
  ok(res.errors.length === 1, 'expected one error');
});

check('javascript: and data: targets are refused outright', function () {
  ['javascript:alert(1)', 'data:text/html,x'].forEach(function (u) {
    var res = IU.buildIntentUri({ target: { raw: u } });
    ok(res.errors.length > 0, 'should refuse ' + u);
  });
});

check('file: and content: targets are allowed but warned about', function () {
  ['file:///sdcard/a.txt', 'content://contacts/people/'].forEach(function (u) {
    var res = IU.buildIntentUri({ target: { raw: u } });
    noErrors(res);
    ok(res.warnings.length > 0, 'should warn about ' + u);
  });
});

check('an invalid scheme is an error', function () {
  var res = IU.buildTargetUri({ scheme: '1bad', authority: 'h' });
  ok(res.errors.length === 1, 'expected one error');
});

check('a missing scheme is an error', function () {
  var res = IU.buildTargetUri({ scheme: '', authority: 'h' });
  ok(res.errors.length === 1, 'expected one error');
});

check('component= and package= come with an explanatory warning', function () {
  var res = IU.buildIntentUri({
    target: { raw: 'demo://x' },
    package: 'com.example.app',
    component: 'com.example.app/.Main'
  });
  ok(res.warnings.length >= 2, 'expected warnings for both');
  ok(res.warnings.some(function (w) { return /setComponent\(null\)/.test(w); }),
    'component warning should cite what Chrome does');
});

check('http targets without a package warn about App Links', function () {
  var res = IU.buildIntentUri({ target: { raw: 'https://example.com/x' } });
  ok(res.warnings.some(function (w) { return /App Link/.test(w); }), 'expected an App Links warning');
});

check('a contentless VIEW intent is flagged as too broad', function () {
  var res = IU.buildIntentUri({ action: 'android.intent.action.VIEW' });
  ok(res.warnings.some(function (w) { return /很宽/.test(w); }), 'expected a breadth warning');
  /* but a contentless intent with a real action is exactly right */
  var ok2 = IU.buildIntentUri({ action: 'android.settings.SETTINGS' });
  ok(!ok2.warnings.some(function (w) { return /很宽/.test(w); }), 'SETTINGS must not be flagged');
});

console.log('\n== classifyInput ==');

var CLASSIFY = [
  ['intent://scan/#Intent;scheme=zxing;end', 'intent'],
  ['intent://foo', 'intent-bare'],
  ['android-app://com.example.app', 'android-app'],
  ['https://example.com', 'web'],
  ['http://example.com', 'web'],
  ['weixin://', 'scheme'],
  ['smsto:10086', 'scheme'],
  ['tel:10086', 'scheme'],
  ['javascript:alert(1)', 'web'],
  ['example.com/no-scheme', 'relative'],
  ['', 'empty']
];

CLASSIFY.forEach(function (c) {
  check('classify ' + JSON.stringify(c[0]) + ' -> ' + c[1], function () {
    eq(IU.classifyInput(c[0]).kind, c[1], 'kind');
  });
});

check('the scheme branch explains that the system picks the app', function () {
  var c = IU.classifyInput('weixin://');
  ok(/系统按 scheme 自动匹配/.test(c.hint), 'hint should mention automatic resolution');
});

console.log('\n== toIntentUri (upgrade a plain link) ==');

check('a custom scheme becomes a resolver-driven intent link', function () {
  var res = IU.toIntentUri('weixin://dl/nav/x');
  noErrors(res);
  eq(res.uri.split('#')[0], 'intent://dl/nav/x', 'data part');
  var i = oracle.parseIntentUri(res.uri);
  eq(i.data, 'weixin://dl/nav/x', 'data');
  eq(i.action, 'android.intent.action.VIEW', 'action');
  eq(
    i.categories,
    ['android.intent.category.BROWSABLE', 'android.intent.category.DEFAULT'],
    'categories'
  );
  eq(i.package, null, 'package must stay unset so the system resolves it');
});

console.log('\n== every preset builds and parses cleanly ==');

var presets = require('../presets.js');

check('there are presets in both tiers', function () {
  ok(presets.byGroup('system').length >= 8, 'expected several system presets');
  ok(presets.byGroup('app').length >= 15, 'expected several app presets');
});

presets.all.forEach(function (p) {
  check('preset ' + p.id + ' (' + p.name + ')', function () {
    ok(p.id && p.name && p.note, 'preset must have id/name/note');
    var res = IU.buildIntentUri(p.cfg);
    noErrors(res);
    var i = oracle.parseIntentUri(res.uri);
    ok(i.action, 'parsed intent must have an action');
    eq(i.package, null, 'presets must not pin a package (system should resolve)');
    /* Sanity: the resolved intent must consist of something actionable. */
    ok(i.data || i.type || i.action !== 'android.intent.action.VIEW',
      'preset must carry data, a type, or a specific action');
  });
});

check('app presets carry the BROWSABLE category the browser requires', function () {
  presets.byGroup('app').forEach(function (p) {
    var i = oracle.parseIntentUri(IU.buildIntentUri(p.cfg).uri);
    ok(i.categories.indexOf('android.intent.category.BROWSABLE') >= 0,
      p.id + ' should request BROWSABLE');
  });
});

console.log('\n== determinism / idempotence ==');

check('building the same config twice gives the same string', function () {
  var cfg = { target: { raw: 'weixin://a/b?c=d' }, extras: [{ prefix: 'S', key: 'k', value: 'v;w' }] };
  eq(IU.buildIntentUri(cfg).uri, IU.buildIntentUri(cfg).uri, 'uri');
});

check('an intent link fed back as a target keeps its data part', function () {
  var first = IU.buildIntentUri({ target: { raw: 'demo://a/b' } });
  var tgt = IU.parseTargetUri(first.uri.split('#')[0]);
  eq(tgt.scheme, 'intent', 'scheme of the data part');
  eq(first.uri.split('#')[0], 'intent://a/b', 'no drift');
});

console.log('\n' + '='.repeat(52));
if (failures.length) {
  console.log('FAILED: ' + failures.length + ' of ' + (passed + failures.length));
  failures.forEach(function (f) { console.log('  - ' + f.name); });
  process.exit(1);
}
console.log('All ' + passed + ' checks passed.');
