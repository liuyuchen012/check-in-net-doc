/*
 * Presets for the launcher.
 *
 * Every preset deliberately leaves `package` unset, so the built link makes
 * Android's own resolver pick the app (system auto-detection) instead of us
 * hard-coding a package name.
 *
 * Two tiers, and the distinction is the honest one:
 *   system  — standard actions from the platform. These are stable and any
 *             device answers them; they are the good demo of "系统自动识别".
 *   app     — third-party custom schemes. These are community-maintained
 *             conventions: a given app may rename, restrict or drop its scheme
 *             in any release, so treat them as a starting point for testing.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.IntentPresets = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var A = 'android.intent.action.';
  var S = 'android.settings.';
  var CAT = 'android.intent.category.';

  var BROWSER_CATS = [CAT + 'BROWSABLE', CAT + 'DEFAULT'];

  var ALL = [
    /* ---------------- system ---------------- */
    {
      id: 'settings',
      group: 'system',
      name: '系统设置',
      note: '无 data 的纯 action Intent',
      cfg: { action: S + 'SETTINGS' }
    },
    {
      id: 'settings-wifi',
      group: 'system',
      name: 'WLAN 设置',
      note: '直接跳到无线网络页',
      cfg: { action: S + 'WIFI_SETTINGS' }
    },
    {
      id: 'settings-bt',
      group: 'system',
      name: '蓝牙设置',
      note: '可直接配对的场景常用',
      cfg: { action: S + 'BLUETOOTH_SETTINGS' }
    },
    {
      id: 'app-details',
      group: 'system',
      name: '应用详情页',
      note: 'data 用 package:，把占位符换成目标包名',
      cfg: {
        action: S + 'APPLICATION_DETAILS_SETTINGS',
        target: { raw: 'package:com.tencent.mm' }
      }
    },
    {
      id: 'dial',
      group: 'system',
      name: '拨号盘（预填号码）',
      note: '只打开拨号盘，不直接拨出',
      cfg: { action: A + 'DIAL', target: { raw: 'tel:10086' } }
    },
    {
      id: 'call',
      group: 'system',
      name: '直接拨号',
      note: 'opaque data：tel:+8613800138000（注意是 tel: 而不是 tel://）',
      cfg: { action: A + 'CALL', target: { raw: 'tel:+8613800138000' } }
    },
    {
      id: 'sms',
      group: 'system',
      name: '发短信（预填号码）',
      note: 'opaque data smsto:10086，走系统短信应用',
      cfg: { action: A + 'SENDTO', target: { raw: 'smsto:10086' } }
    },
    {
      id: 'geo',
      group: 'system',
      name: '地图搜索坐标',
      note: 'geo: 由系统弹出地图选择器，实现“系统自动识别地图应用”',
      cfg: { action: A + 'VIEW', target: { raw: 'geo:39.9087,116.3975?q=天安门' } }
    },
    {
      id: 'share-text',
      group: 'system',
      name: '分享一段文本',
      note: 'SEND + type=text/plain + EXTRA_TEXT，系统给出可分享的应用列表',
      cfg: {
        action: A + 'SEND',
        type: 'text/plain',
        extras: [
          { prefix: 'S', key: 'android.intent.extra.TEXT', value: '来自 intent:// 的分享' }
        ]
      }
    },
    {
      id: 'web',
      group: 'system',
      name: '打开网页',
      note: '声明了 App Link 的站点会直接进 App，否则留在浏览器',
      cfg: { target: { raw: 'https://developer.android.com' }, categories: BROWSER_CATS }
    },
    {
      id: 'market',
      group: 'system',
      name: '应用商店详情页',
      note: 'market://details?id=包名',
      cfg: { action: A + 'VIEW', target: { raw: 'market://details?id=com.tencent.mm' } }
    },
    {
      id: 'camera',
      group: 'system',
      name: '打开相机拍照',
      note: 'android.media.action.IMAGE_CAPTURE，无 data',
      cfg: { action: 'android.media.action.IMAGE_CAPTURE' }
    },
    {
      id: 'contacts',
      group: 'system',
      name: '打开通讯录',
      note: 'content: 作为 data（部分浏览器会拦截，见警告）',
      cfg: { action: A + 'VIEW', target: { raw: 'content://contacts/people/' } }
    },

    /* ---------------- third-party app schemes ---------------- */
    { id: 'weixin', group: 'app', name: '微信', scheme: 'weixin' },
    { id: 'alipay', group: 'app', name: '支付宝', scheme: 'alipays' },
    { id: 'taobao', group: 'app', name: '淘宝', scheme: 'taobao' },
    { id: 'jd', group: 'app', name: '京东', scheme: 'openapp.jdmobile' },
    { id: 'pdd', group: 'app', name: '拼多多', scheme: 'pinduoduo' },
    { id: 'qq', group: 'app', name: 'QQ', scheme: 'mqq' },
    { id: 'weibo', group: 'app', name: '微博', scheme: 'sinaweibo' },
    { id: 'zhihu', group: 'app', name: '知乎', scheme: 'zhihu' },
    { id: 'bilibili', group: 'app', name: '哔哩哔哩', scheme: 'bilibili' },
    { id: 'douyin', group: 'app', name: '抖音', scheme: 'snssdk1128' },
    { id: 'kuaishou', group: 'app', name: '快手', scheme: 'kwai' },
    { id: 'xhs', group: 'app', name: '小红书', scheme: 'xhsdiscover' },
    { id: 'amap', group: 'app', name: '高德地图', scheme: 'amapuri' },
    { id: 'baidumap', group: 'app', name: '百度地图', scheme: 'baidumap' },
    { id: 'meituan', group: 'app', name: '美团', scheme: 'imeituan' },
    { id: 'didi', group: 'app', name: '滴滴出行', scheme: 'diditaxi' },
    { id: 'dingtalk', group: 'app', name: '钉钉', scheme: 'dingtalk' },
    { id: 'lark', group: 'app', name: '飞书', scheme: 'lark' },
    { id: 'neteasemusic', group: 'app', name: '网易云音乐', scheme: 'orpheus' },
    { id: 'qqmusic', group: 'app', name: 'QQ 音乐', scheme: 'qqmusic' },
    { id: 'tencentvideo', group: 'app', name: '腾讯视频', scheme: 'tenvideo' },
    { id: 'iqiyi', group: 'app', name: '爱奇艺', scheme: 'iqiyi' },
    { id: 'youku', group: 'app', name: '优酷', scheme: 'youku' },
    { id: 'douban', group: 'app', name: '豆瓣', scheme: 'douban' }
  ];

  /* Normalise the shorthand entries into full builder configs. */
  function normalise(p) {
    if (p.cfg) return p;
    return {
      id: p.id,
      group: p.group,
      name: p.name,
      note: '自定义 scheme，仅打开 App（未安装则无反应）',
      cfg: {
        target: { raw: p.scheme + '://' },
        categories: BROWSER_CATS
      }
    };
  }

  var presets = ALL.map(normalise);

  function byGroup(group) {
    return presets.filter(function (p) {
      return p.group === group;
    });
  }

  return { all: presets, byGroup: byGroup };
});
