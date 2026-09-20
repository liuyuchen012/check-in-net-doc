/*
 * A test-only oracle: a faithful port of AOSP Intent.parseUriInternal()
 * (frameworks/base, android.content.Intent) restricted to the URI_INTENT_SCHEME
 * path. Tests parse the URIs we generate with this and assert the resulting
 * Intent fields, so "our link is correct" is checked against Android's own
 * grammar rather than against our own assumptions.
 *
 * java.lang.Byte.parseByte / Short / Integer / Long / Float / Double are
 * emulated, and Uri.decode is Android's lenient UTF-8 percent decoder (which,
 * unlike JS URLSearchParams, does not turn '+' into a space).
 */
'use strict';

function uriDecode(s) {
  return String(s).replace(/(?:%[0-9A-Fa-f]{2})+/g, function (seq) {
    try {
      return decodeURIComponent(seq);
    } catch (e) {
      return seq;
    }
  });
}

function parseNum(type, raw) {
  var n = Number(raw);
  if (raw.trim() === '' || Number.isNaN(n)) throw new Error(type + ': ' + raw);
  switch (type) {
    case 'Byte':
      if (!/^[+-]?\d+$/.test(raw.trim()) || n < -128 || n > 127) throw new Error('Byte: ' + raw);
      return n;
    case 'Short':
      if (!/^[+-]?\d+$/.test(raw.trim()) || n < -32768 || n > 32767) throw new Error('Short: ' + raw);
      return n;
    case 'Integer':
      if (!/^[+-]?\d+$/.test(raw.trim())) throw new Error('Integer: ' + raw);
      return n | 0;
    case 'Long':
      if (!/^[+-]?\d+$/.test(raw.trim())) throw new Error('Long: ' + raw);
      return n;
    case 'Float':
      if (!/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(raw.trim())) throw new Error('Float: ' + raw);
      return Math.fround(n);
    case 'Double':
      if (!/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(raw.trim())) throw new Error('Double: ' + raw);
      return n;
    default:
      throw new Error('unknown numeric type ' + type);
  }
}

/**
 * @returns {{action, data, type, package, component, launchFlags, identifier,
 *            categories: string[], extras: Object}}
 * @throws {SyntaxError} mirroring URISyntaxException
 */
function parseIntentUri(uri) {
  var i = 0;
  var action = 'android.intent.action.VIEW';
  var data = null;
  var type = null;
  var pkg = null;
  var component = null;
  var launchFlags = 0;
  var identifier = null;
  var categories = [];
  var extras = {};

  i = uri.lastIndexOf('#');

  if (i === -1) {
    /* Intent(ACTION_VIEW, Uri.parse(uri)) — the link is taken as raw data. */
    return { action: action, data: uri, type: null, package: null, component: null,
             launchFlags: 0, identifier: null, categories: [], extras: {} };
  }
  if (!uri.startsWith('#Intent;', i)) {
    throw new SyntaxError('not the new #Intent; format (would take the legacy path)');
  }

  var scheme = null;
  data = uri.substring(0, i);
  i += 8; /* length of "#Intent;" */

  while (i >= 0 && !uri.startsWith('end', i)) {
    var eq = uri.indexOf('=', i);
    if (eq < 0) throw new SyntaxError('malformed item without "=" near index ' + i);
    var semi = uri.indexOf(';', i);
    if (semi < 0) throw new SyntaxError('uri end not found');
    var value = eq < semi ? uriDecode(uri.substring(eq + 1, semi)) : '';

    if (uri.startsWith('action=', i)) {
      action = value;
    } else if (uri.startsWith('category=', i)) {
      categories.push(value);
    } else if (uri.startsWith('type=', i)) {
      type = value;
    } else if (uri.startsWith('identifier=', i)) {
      identifier = value;
    } else if (uri.startsWith('launchFlags=', i)) {
      launchFlags = /^0[xX]/.test(value) ? parseInt(value.slice(2), 16) : parseInt(value, 10);
    } else if (uri.startsWith('package=', i)) {
      pkg = value;
    } else if (uri.startsWith('component=', i)) {
      component = value;
    } else if (uri.startsWith('scheme=', i)) {
      scheme = value;
    } else {
      var key = uriDecode(uri.substring(i + 2, eq));
      if (uri.startsWith('S.', i)) extras[key] = value;
      else if (uri.startsWith('B.', i)) extras[key] = value === 'true';
      else if (uri.startsWith('b.', i)) extras[key] = parseNum('Byte', value);
      else if (uri.startsWith('c.', i)) extras[key] = value.charAt(0);
      else if (uri.startsWith('d.', i)) extras[key] = parseNum('Double', value);
      else if (uri.startsWith('f.', i)) extras[key] = parseNum('Float', value);
      else if (uri.startsWith('i.', i)) extras[key] = parseNum('Integer', value);
      else if (uri.startsWith('l.', i)) extras[key] = parseNum('Long', value);
      else if (uri.startsWith('s.', i)) extras[key] = parseNum('Short', value);
      else throw new SyntaxError('unknown EXTRA type at index ' + i);
    }

    i = semi + 1;
  }

  if (data !== null) {
    if (data.startsWith('intent:')) {
      data = data.substring(7);
      if (scheme !== null) data = scheme + ':' + data;
    }
    if (data.length === 0) data = null;
  }

  return {
    action: action,
    data: data,
    type: type,
    package: pkg,
    component: component,
    launchFlags: launchFlags,
    identifier: identifier,
    categories: categories,
    extras: extras
  };
}

/* Android's Context.startActivity resolution would also add BROWSABLE; the
 * browser does it before launching, which is why the docs say Chrome always
 * adds it. Exposed so tests can check what the resolver actually sees. */
function sanitizeForResolve(intent) {
  var copy = JSON.parse(JSON.stringify(intent));
  copy.categories = copy.categories.concat(['android.intent.category.BROWSABLE']);
  copy.component = null;
  return copy;
}

module.exports = { parseIntentUri: parseIntentUri, sanitizeForResolve: sanitizeForResolve, uriDecode: uriDecode };
