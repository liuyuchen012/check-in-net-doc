/*
 * Android intent:// URI builder.
 *
 * Semantics of the generated strings are modelled on AOSP
 * frameworks/base/core/java/android/content/Intent.java
 * (Intent.parseUri / Intent.toUri), which is what an Android browser uses to
 * turn one of these links into a real Intent. The parts that matter:
 *
 *   - The substring before the last "#Intent;" is the data URI. parseUri does
 *     `data = data.substring(7); if (scheme != null) data = scheme + ':' + data;`
 *     so "intent://h/p" + scheme=weixin becomes "weixin://h/p", while
 *     "intent:10086" + scheme=smsto becomes the opaque "smsto:10086".
 *     Keeping the "//" (or not) is therefore significant.
 *   - Every name=value pair is split on the FIRST '=' and terminated by ';',
 *     and the value is Uri.decode()d. So ';' must be escaped, '=' need not be.
 *   - Extra prefixes are S.=String, B.=boolean, b.=byte, c.=char, d.=double,
 *     f.=float, i.=int, l.=long, s.=short. Note B/b: byte is lowercase, boolean
 *     is uppercase.
 *   - The parameter list ends at the literal token "end".
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.IntentURI = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var ACTION_VIEW = 'android.intent.action.VIEW';
  var CATEGORY_BROWSABLE = 'android.intent.category.BROWSABLE';
  var CATEGORY_DEFAULT = 'android.intent.category.DEFAULT';

  /* prefix -> Bundle type put by Intent.parseUri */
  var EXTRA_TYPES = [
    { prefix: 'S', label: 'String', kind: 'string' },
    { prefix: 'i', label: 'int', kind: 'int' },
    { prefix: 'l', label: 'long', kind: 'int' },
    { prefix: 's', label: 'short', kind: 'int' },
    { prefix: 'b', label: 'byte', kind: 'int' },
    { prefix: 'B', label: 'boolean', kind: 'bool' },
    { prefix: 'f', label: 'float', kind: 'number' },
    { prefix: 'd', label: 'double', kind: 'number' },
    { prefix: 'c', label: 'char', kind: 'char' }
  ];

  function extraType(prefix) {
    for (var i = 0; i < EXTRA_TYPES.length; i++) {
      if (EXTRA_TYPES[i].prefix === prefix) return EXTRA_TYPES[i];
    }
    return null;
  }

  /* ------------------------------------------------------------------ *
   * Encoding
   * ------------------------------------------------------------------ */

  function enc(s) {
    return encodeURIComponent(String(s));
  }

  /* Uri.encode(type, "/") keeps the slash so "text/plain" stays readable. */
  function encType(s) {
    return enc(s).replace(/%2F/gi, '/');
  }

  /* Authority: keep ':' (host:port), '@' (userinfo) and brackets (IPv6). */
  function encAuthority(s) {
    return String(s).replace(/[^A-Za-z0-9\-._~:@[\]!$&'()*+,;=]/g, function (c) {
      return enc(c);
    });
  }

  /* Path: encode each segment, keep the '/' separators. */
  function encPath(s) {
    if (!s) return '';
    return String(s).split('/').map(enc).join('/');
  }

  /* Query: keep the structure, encode keys and values. */
  function encQuery(s) {
    if (!s) return '';
    return String(s).split('&').map(function (pair) {
      if (pair === '') return '';
      var eq = pair.indexOf('=');
      if (eq < 0) return enc(pair);
      return enc(pair.slice(0, eq)) + '=' + enc(pair.slice(eq + 1));
    }).join('&');
  }

  /*
   * The data part is passed through as the user wrote it, with the minimum
   * escaping needed to survive Intent.parseUri's grammar. A '%' that is not
   * already the start of an escape gets escaped so we never corrupt existing
   * percent-encoding.
   */
  function escapeDataPart(s) {
    return String(s).replace(/%(?![0-9A-Fa-f]{2})|[;\s<>"\\^`{|}]/g, function (c) {
      return enc(c);
    });
  }

  /* ------------------------------------------------------------------ *
   * Target URI (the URI the app will actually receive as its data)
   * ------------------------------------------------------------------ */

  /*
   * Accepts "weixin://dl/nav?k=v", "smsto:10086", "weixin:", "https://x/y#z".
   * Returns { scheme, authority, path, query, fragment, opaque, hierarchical }.
   */
  function parseTargetUri(input) {
    var raw = String(input == null ? '' : input).trim();
    if (raw === '') return null;

    var scheme = null;
    var rest = raw;
    var m = /^([A-Za-z][A-Za-z0-9+.\-]*):/.exec(raw);
    if (m) {
      scheme = m[1];
      rest = raw.slice(m[0].length);
    }

    var hierarchical = rest.indexOf('//') === 0;
    var authority = '';
    var pathAndQuery = rest;
    if (hierarchical) {
      var afterSlashes = rest.slice(2);
      var cut = afterSlashes.search(/[/?#]/);
      if (cut < 0) {
        authority = afterSlashes;
        pathAndQuery = '';
      } else {
        authority = afterSlashes.slice(0, cut);
        pathAndQuery = afterSlashes.slice(cut);
      }
    }

    var fragment = null;
    var hash = pathAndQuery.indexOf('#');
    if (hash >= 0) {
      fragment = pathAndQuery.slice(hash + 1);
      pathAndQuery = pathAndQuery.slice(0, hash);
    }

    var query = null;
    var q = pathAndQuery.indexOf('?');
    if (q >= 0) {
      query = pathAndQuery.slice(q + 1);
      pathAndQuery = pathAndQuery.slice(0, q);
    }

    return {
      scheme: scheme,
      authority: authority,
      path: pathAndQuery,
      query: query,
      fragment: fragment,
      hierarchical: hierarchical,
      opaque: !hierarchical && rest !== '',
      /* true when the URI carries nothing but a scheme, e.g. "weixin:" */
      schemeOnly: !hierarchical && rest === ''
    };
  }

  /*
   * Build a target URI from structured fields. Returns the URI plus any
   * problems that make it unusable.
   */
  function buildTargetUri(parts) {
    var p = parts || {};
    var errors = [];
    var warnings = [];
    var scheme = String(p.scheme == null ? '' : p.scheme).trim().replace(/:$/, '');

    if (scheme === '') {
      errors.push('目标 scheme 不能为空');
    } else if (!/^[A-Za-z][A-Za-z0-9+.\-]*$/.test(scheme)) {
      errors.push('scheme 只能包含字母、数字、+ . -，且必须以字母开头：' + scheme);
    }

    var authority = String(p.authority == null ? '' : p.authority).trim();
    var path = String(p.path == null ? '' : p.path).trim();
    var query = String(p.query == null ? '' : p.query).trim();
    var fragment = String(p.fragment == null ? '' : p.fragment).trim();
    var mode = p.mode || 'hierarchical'; /* 'hierarchical' | 'opaque' */

    var uri = scheme + ':';

    if (mode === 'opaque') {
      if (p.path == null || String(p.path).trim() === '') {
        errors.push('opaque 模式需要填写 scheme 之后的部分，例如 smsto:10086 里的 10086');
      }
      uri += escapeDataPart(String(p.path == null ? '' : p.path).trim());
    } else if (authority === '' && path === '' && query === '') {
      /* scheme-only: "weixin://" is the conventional form apps expect. */
      uri += '//';
    } else {
      uri += '//' + encAuthority(authority) + encPath(path);
      if (query !== '') uri += '?' + encQuery(query);
    }

    if (fragment !== '') {
      uri += '#' + encPath(fragment);
      warnings.push(
        '数据部分里的 # 会原样保留（AOSP 用 lastIndexOf("#") 定位 #Intent;），' +
        '但部分第三方 App 的解析实现不认，按需改用 %23。'
      );
    }

    if (authority !== '' && path !== '' && path.charAt(0) !== '/' && path.indexOf('?') !== 0) {
      /* "weixin://hostpath" — almost always a typo for weixin://host/path */
      warnings.push('有 authority 时路径建议以 / 开头，否则会和 host 连在一起');
    }

    return { uri: uri, errors: errors, warnings: warnings };
  }

  /* ------------------------------------------------------------------ *
   * Extra values
   * ------------------------------------------------------------------ */

  function encodeExtraValue(prefix, raw) {
    var type = extraType(prefix);
    if (!type) return { error: '未知的 extra 类型：' + prefix + '.' };
    var v = raw == null ? '' : String(raw);

    if (type.kind === 'bool') {
      var low = v.trim().toLowerCase();
      if (low !== 'true' && low !== 'false') {
        return { error: prefix + '.' + ' 只接受 true / false，收到：' + v };
      }
      /* Boolean.parseBoolean only treats "true" as true. */
      return { value: low };
    }
    if (type.kind === 'int') {
      if (!/^[+-]?\d+$/.test(v.trim())) {
        return { error: prefix + '. 需要整数，收到：' + v };
      }
      var n = Number(v.trim());
      if (prefix === 'i' && (n < -2147483648 || n > 2147483647)) {
        return { error: 'i. 超出 int 范围：' + v };
      }
      if (prefix === 's' && (n < -32768 || n > 32767)) {
        return { error: 's. 超出 short 范围：' + v };
      }
      if (prefix === 'b' && (n < -128 || n > 127)) {
        return { error: 'b. 超出 byte 范围：' + v };
      }
      return { value: String(n) };
    }
    if (type.kind === 'number') {
      if (!/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(v.trim())) {
        return { error: prefix + '. 需要数字，收到：' + v };
      }
      return { value: v.trim() };
    }
    if (type.kind === 'char') {
      /* parseUri does value.charAt(0), so anything longer is silently cut. */
      var chars = Array.from(v);
      if (chars.length !== 1) {
        return { error: 'c. 需要单个字符，收到 ' + chars.length + ' 个' };
      }
      return { value: enc(chars[0]) };
    }
    return { value: enc(v) };
  }

  /* ------------------------------------------------------------------ *
   * intent:// URI
   * ------------------------------------------------------------------ */

  /*
   * cfg: {
   *   target: { scheme, authority, path, query, fragment, mode }  (structured)
   *        | { raw: "weixin://dl/nav" }
   *   action, categories: [], type, package, component, launchFlags,
   *   extras: [{ prefix, key, value }]
   * }
   */
  function buildIntentUri(cfg) {
    var c = cfg || {};
    var errors = [];
    var warnings = [];

    var targetStr = '';
    var tgt = null;
    var hasRawTarget = c.target && c.target.raw != null && String(c.target.raw).trim() !== '';
    var hasStructuredTarget =
      c.target && String(c.target.scheme == null ? '' : c.target.scheme).trim() !== '';

    if (hasRawTarget) {
      targetStr = String(c.target.raw).trim();
      tgt = parseTargetUri(targetStr);
    } else if (hasStructuredTarget) {
      var built = buildTargetUri(c.target);
      errors = errors.concat(built.errors);
      warnings = warnings.concat(built.warnings);
      targetStr = built.uri;
      tgt = parseTargetUri(targetStr);
    }
    /* Neither: a data-less Intent, e.g. action=android.settings.SETTINGS.
     * Rendering that as "intent:#Intent;…" is what makes parseUri leave the
     * data unset rather than inventing a "//" data URI. */

    var scheme = (tgt && tgt.scheme) || '';
    var action = c.action == null ? ACTION_VIEW : String(c.action).trim();
    var categories = (c.categories || []).filter(function (x) {
      return String(x).trim() !== '';
    });

    if (scheme === '' && action === '') {
      errors.push('至少需要 scheme 或 action 之一，否则系统无法匹配到任何应用');
    }

    /* data part: "intent:" + everything after "scheme:" */
    var afterScheme = targetStr.replace(/^[A-Za-z][A-Za-z0-9+.\-]*:/, '');
    var dataPart = 'intent:' + escapeDataPart(afterScheme);

    var params = [];
    if (scheme !== '') params.push('scheme=' + enc(scheme));
    if (action !== '') params.push('action=' + enc(action));
    for (var i = 0; i < categories.length; i++) {
      params.push('category=' + enc(String(categories[i]).trim()));
    }
    if (c.type) params.push('type=' + encType(c.type));
    if (c.package) params.push('package=' + enc(String(c.package).trim()));
    if (c.component) params.push('component=' + enc(String(c.component).trim()));
    if (c.launchFlags != null && String(c.launchFlags).trim() !== '') {
      var flags = String(c.launchFlags).trim();
      if (!/^(0[xX][0-9A-Fa-f]+|[+-]?\d+)$/.test(flags)) {
        errors.push('launchFlags 需要十进制或 0x 十六进制整数，收到：' + c.launchFlags);
      } else {
        params.push('launchFlags=' + flags);
      }
    }

    var extras = c.extras || [];
    for (var j = 0; j < extras.length; j++) {
      var e = extras[j];
      if (!e || String(e.key == null ? '' : e.key).trim() === '') {
        errors.push('第 ' + (j + 1) + ' 个 extra 缺少 key');
        continue;
      }
      var got = encodeExtraValue(e.prefix, e.value);
      if (got.error) {
        errors.push(got.error);
        continue;
      }
      params.push(e.prefix + '.' + enc(String(e.key).trim()) + '=' + got.value);
    }

    if (params.length === 0) {
      errors.push('至少需要一个 Intent 参数（scheme / action / category …）');
    }

    /* Warnings that mirror how browsers actually behave. */
    var lowerScheme = scheme.toLowerCase();
    if (c.component) {
      warnings.push(
        'component= 指定了显式组件。Chrome 在解析时会调用 setComponent(null) 把它清掉，' +
          '所以从网页唤起基本不会生效；只有 adb / WebView 等场景可用。'
      );
    }
    if (c.package) {
      warnings.push(
        'package= 会把 Intent 定向到该包。留空时由系统自己挑应用（系统自动识别）；' +
          '填错包名会直接唤起失败。'
      );
    }
    if (lowerScheme === 'http' || lowerScheme === 'https') {
      if (!c.package) {
        warnings.push(
          'http/https 目标只有在 App 声明了已验证的 App Link（assetlinks.json）时才会' +
            '直接进 App，否则 Chrome 会自己打开网页。'
        );
      }
    } else if (lowerScheme === 'javascript' || lowerScheme === 'data' || lowerScheme === 'blob') {
      errors.push(lowerScheme + ': 不能作为 Intent 的 data（浏览器会直接拦截）');
    } else if (lowerScheme === 'file' || lowerScheme === 'content') {
      warnings.push(
        lowerScheme + ': 作为 data 在 Android 上合法，但浏览器侧的拦截策略各版本不一，' +
          '可能唤不起来；能用标准 action + 授权 URI 时优先用后者。'
      );
    }
    if (
      categories.indexOf(CATEGORY_BROWSABLE) < 0 &&
      (lowerScheme === 'http' || lowerScheme === 'https')
    ) {
      warnings.push('建议保留 category=android.intent.category.BROWSABLE（Chrome 会自己补上，其他环境不会）');
    }
    if (targetStr === '' && !c.type && action === ACTION_VIEW) {
      warnings.push(
        '既没有 data 也没有 type，只带 VIEW 的 Intent 会匹配到很宽的一类应用，' +
          '通常不是想要的结果。补上目标 URI，或换成一个具体的 action'
      );
    }

    return {
      uri: dataPart + '#Intent;' + params.join(';') + ';end',
      dataUri: scheme === '' ? afterScheme : scheme + ':' + afterScheme,
      errors: errors,
      warnings: warnings
    };
  }

  /* ------------------------------------------------------------------ *
   * Classify an arbitrary link, for the quick-launch box
   * ------------------------------------------------------------------ */

  var BROWSER_HANDLED = { http: 1, https: 1, file: 1, content: 1, data: 1, javascript: 1, blob: 1, about: 1, chrome: 1 };

  function classifyInput(input) {
    var raw = String(input == null ? '' : input).trim();
    if (raw === '') return { kind: 'empty', label: '空', hint: '粘贴一个链接' };

    var m = /^([A-Za-z][A-Za-z0-9+.\-]*):/.exec(raw);
    if (!m) {
      return {
        kind: 'relative',
        label: '不是完整 URI',
        hint: '缺少 scheme，例如 weixin://… 或 https://…'
      };
    }
    var scheme = m[1].toLowerCase();

    if (scheme === 'intent') {
      if (/#Intent;/i.test(raw)) {
        return {
          kind: 'intent',
          scheme: scheme,
          label: 'intent:// 链接',
          hint: '浏览器会解析成 Intent 后交给系统匹配（系统自动识别）'
        };
      }
      return {
        kind: 'intent-bare',
        scheme: scheme,
        label: 'intent: 但缺少 #Intent; 参数段',
        hint:
          '没有 #Intent;…;end 的 intent: 链接会被当成纯数据 URI，scheme 变成 intent 本身，唤不起 App。' +
          '点“改成 intent:// 链接”补上参数。',
        warn: true
      };
    }
    if (scheme === 'android-app') {
      return {
        kind: 'android-app',
        scheme: scheme,
        label: 'android-app:// 链接',
        hint: '按包名唤起（android-app://com.example.app），系统自动找到该 App'
      };
    }
    if (BROWSER_HANDLED[scheme]) {
      return {
        kind: 'web',
        scheme: scheme,
        label: scheme + ':// 链接',
        hint:
          scheme === 'http' || scheme === 'https'
            ? '若 App 声明了已验证的 App Link，系统会直接打开 App；否则由浏览器自己处理'
            : '浏览器会自己处理这个 scheme，不会交给外部 App',
        warn: scheme !== 'http' && scheme !== 'https'
      };
    }
    return {
      kind: 'scheme',
      scheme: scheme,
      label: '自定义 scheme：' + scheme + '://',
      hint:
        '浏览器无法处理 ' + scheme + '，会转交系统；系统按 scheme 自动匹配已安装的 App。' +
        '未安装则没有任何反应。'
    };
  }

  /* Wrap a plain URI so it goes through Android's Intent resolver. */
  function toIntentUri(input, opts) {
    var raw = String(input == null ? '' : input).trim();
    var tgt = parseTargetUri(raw);
    if (!tgt || !tgt.scheme) return { uri: '', errors: ['无法解析出 scheme'], warnings: [] };
    var o = opts || {};
    var categories = o.categories || [CATEGORY_BROWSABLE, CATEGORY_DEFAULT];
    return buildIntentUri({
      target: { raw: raw },
      action: o.action || ACTION_VIEW,
      categories: categories,
      package: o.package || ''
    });
  }

  return {
    ACTION_VIEW: ACTION_VIEW,
    CATEGORY_BROWSABLE: CATEGORY_BROWSABLE,
    CATEGORY_DEFAULT: CATEGORY_DEFAULT,
    EXTRA_TYPES: EXTRA_TYPES,
    extraType: extraType,
    parseTargetUri: parseTargetUri,
    buildTargetUri: buildTargetUri,
    buildIntentUri: buildIntentUri,
    classifyInput: classifyInput,
    toIntentUri: toIntentUri,
    encodeExtraValue: encodeExtraValue,
    escapeDataPart: escapeDataPart,
    encQuery: encQuery,
    encPath: encPath
  };
});
