[README.md](https://github.com/user-attachments/files/32435938/README.md)
# Intent Launcher

用 `intent://` URI 唤起 Android 原生应用的纯静态网页。

核心思路：**不写死包名**。生成的链接只描述「要做什么」（scheme / action / category /
extras），由 Android 的 Intent 解析器去决定「哪个 App 来处理」——也就是系统自动识别。
需要定向到某个 App 时，才在高级参数里填 `package=`。

## 文件

| 文件 | 作用 |
| --- | --- |
| `index.html` | 整个页面（界面、样式、逻辑都在里面） |
| `intent-uri.js` | intent:// 链接的构造与解析核心，UMD，浏览器和 Node 都能用 |
| `presets.js` | 预设列表：系统标准 action + 第三方 App 自定义 scheme |
| `vendor/qrcode.js` | 第三方二维码库（qrcode-generator 2.0.4，MIT，见同目录 README） |
| `.nojekyll` | 空文件，让 GitHub Pages 跳过 Jekyll 处理 |
| `build-single.cjs` | 可选：把整站打包成单个自包含的 `dist/index.html` |
| `test/` | 测试，见下方「验证」 |

没有后端、没有依赖、没有构建步骤。四个文件放进任意静态空间就能跑。

## 部署到 GitHub Pages

把 `intent-launcher/` 里的东西放到仓库根目录（`index.html` 必须在根），然后
**Settings → Pages → Source 选 "Deploy from a branch" → 分支选 `main`、目录选 `/ (root)`**，
保存后访问 `https://<用户名>.github.io/<仓库名>/`。不需要 Actions，不需要配构建。

几点实测确认过的：

- 页面里所有引用都是**相对路径**，所以放在 `/仓库名/` 这种子路径下一切正常
  （子路径和根路径的行为差异是新项目最容易踩的坑，我按子路径跑过一遍）。
- 二维码里的「页面链接」由 `location.href` 推导，会**自动带上子路径**，
  所以扫码回到的是 `https://<用户名>.github.io/<仓库名>/#u=<链接>`，链接不丢。
- GitHub Pages 是 HTTPS，`navigator.clipboard` 能直接用（局域网 `http://` 下不行，
  页面里有 `execCommand` 兜底）。
- 部署到 Pages 之后，手机不用和电脑同一个 Wi-Fi 了，扫码即可用 —— 也可以直接把网址发给别人。

想让二维码里的页面链接指向你自己的域名，就在 `index.html` 里改 `pageLinkFor()`。

### 只想要一个文件

```bash
node build-single.cjs   # 生成 dist/index.html，约 140KB，零外部请求
```

`dist/index.html` 把 CSS 和三个 JS 全部内联了，可以单独打开、单独发给别人、
或者丢到任何不能带同级资源的地方。它是**生成物**，改代码请改仓库根目录那几个文件
再重新生成 —— 根目录那套多文件版本才是测试覆盖的对象，也才是你在浏览器里看到的版本。

## 本地预览

```bash
cd intent-launcher
python -m http.server 8000
```

打开 `http://127.0.0.1:8000/`。要在手机上试而在本地起服务，就用
`python -m http.server 8000 --bind 0.0.0.0`，然后在**同一 Wi-Fi 下**用手机 Chrome
打开 `http://<电脑的局域网IP>:8000/`（Windows 查 IP：`ipconfig`）。
直接双击 `index.html` 用 `file://` 打开也能用，只是少了 HTTPS 带来的剪贴板便利。

> `intent://` 只有 Android 系统能解析。桌面浏览器点「唤起应用」不会有任何反应 ——
> 这不是 bug，页面顶部也会提示。桌面上可以正常构造、复制、生成二维码。

## 页面里有什么

- **快速唤起**：粘贴任意链接，自动判断类型并给出实际会被唤起的链接。
  自定义 scheme（`weixin://…`）默认会包一层 `intent://`，走系统解析器并带上 `BROWSABLE`；
  也可以关掉这个开关，直接投递原始链接。
- **可视化构建**：目标 URI（可直接粘贴，也可按 scheme/host/path/query 拆开填）＋
  action / category / type / package / component / launchFlags / extras /
  `browser_fallback_url`，实时生成链接，并单独显示 App 最终收到的 data。
- **常见应用**：37 个预设，分「系统 Intent」（标准 action，任何设备都能应答）和
  「第三方 App」（自定义 scheme，属于约定值）两组，可一键唤起或载入构建器继续改。
- **语法与限制**：URI 结构、参数表、浏览器的唤起限制清单、排错速查。
- **二维码**：默认编码「本页 + `#u=<链接>`」，手机扫码后打开的就是带着这条链接的页面，
  再点一下按钮（Chrome 要求唤起必须来自真实用户手势）；也可以切换成直接编码链接本身。
- 最近唤起的记录存在 localStorage，不上传任何东西。

## 链接语法（要点）

```
intent://<host><path>?<query>#Intent;scheme=…;action=…;category=…;S.key=value;end
```

两个最容易写错的地方：

1. **`intent://host` 和 `intent:opaque` 不是一回事。**
   Android 的还原规则是 `data = scheme + ":" + 去掉 intent: 之后的原文`，所以
   `intent://dl/nav` 配 `scheme=weixin` 得到 `weixin://dl/nav`，而
   `intent:10086` 配 `scheme=smsto` 得到 `smsto:10086`（**没有** `//`）。
   `tel:`、`smsto:`、`mailto:`、`geo:` 这类 opaque URI 必须写成没有斜杠的形式。
2. **`B.` 是 boolean，`b.` 是 byte。**
   大小写和不少博客写的相反，以 AOSP `Intent.parseUri` 源码为准。
   完整前缀：`S.` 字符串、`i.`/`l.`/`s.`/`b.` 整型、`B.` 布尔、`f.`/`d.` 浮点、`c.` 字符。

另外：参数值里的 `;` 必须转义（它是分隔符），`#Intent;…;end` 的 `end` 是结束标记；
`component=` 指定的显式 Intent 会被 Chrome 用 `setComponent(null)` 清掉，从网页基本无效。

## 浏览器什么时候会拒绝唤起

摘自分发到 Chromium `components/external_intents` 与 Chrome 的
[Android Intents with Chrome](https://developer.chrome.com/docs/android/intents) 文档：

- 不是真实用户手势触发的（定时器、自动跳转、加载即触发）会被拦；
- 指定的 Intent 解析不到任何应用 → 静默无反应，可用 `S.browser_fallback_url` 兜底；
- 显式 Intent（带 `component`）、或缺少 `BROWSABLE` category 的会被拦
  （Chrome 自己会给 Intent 补上 `BROWSABLE`）；
- 从重定向链路上来的 Intent URI 不会被唤起；
- 浏览器自己能处理的 scheme（http/https）不会被抢走，除非 App 声明了**已验证**的
  App Link（`autoVerify` + `/.well-known/assetlinks.json`）；
- 同一个用户手势里重复尝试唤起会被当成指纹探测而拦截；
- `file:` / `content:` 等属于受限 scheme。

App 内置浏览器（微信 / QQ / 微博等）普遍直接屏蔽唤起，请用 Chrome 测试。

## 验证

```bash
node test/uri.test.cjs        # 96 项：链接语法
node test/qr.check.cjs        # 生成二维码图
python test/qr.rgba.py        # 导出像素
node test/qr.decode-jsqr.cjs  # 用 jsQR 解码回读
```

`test/uri.test.cjs` 不是自说自话的断言：`test/aosp-oracle.js` 是
**AOSP `Intent.parseUri` 的移植**，每个生成的链接都用它解析回来，断言「Android 实际会
看到什么」——包括 data URI 的还原方式、extras 各自落成什么 Bundle 类型、以及
`;` `=` `#` `中文` 这些会撞上语法的值。其中一项直接对照 Chrome 文档里的 ZXing 示例，
要求**逐字节一致**。

`node test/uri.test.cjs` 的输出里有一条值得单独说的是：
`B.`/`b.` 的映射是照着 AOSP 源码写的，测试用 oracle 的 `parseNum`/布尔分支独立验证了一遍。

二维码用两个解码器交叉验证（OpenCV 的 `QRCodeDetector` 会拒掉一些合法的高版本码，
所以以 jsQR 的结果为准）。`vendor/qrcode.js` 默认的字节编码器会把每个字符截成 8 位，
页面里已经换成它自带的 UTF-8 编码器，否则含中文的链接会生成扫不出来的码。

### 验证到什么程度

- ✅ intent:// 语法：与 AOSP `Intent.parseUri` 的移植实现逐字段对照，含边界与错误输入。
- ✅ 页面交互：真实浏览器里逐个操作过（构建器、extras 校验、预设、二维码弹层、
  `#u=` 参数恢复、开关行为），并在 412×915 的手机视口下确认过布局。
- ✅ 二维码：页面 canvas 里实际画出来的图能被独立解码器读回原串。
- ⚠️ **没有在真实 Android 设备 / 模拟器上跑过。** 本机没有连接设备，也没有下载系统镜像，
  所以「Chrome 点了之后到底跳不跳」这一步是按 Chromium 与 Chrome 的文档写的，
  没有端到端实测。真机第一次用时建议先点「系统设置」这个预设 —— 它不依赖任何第三方 App，
  能验证页面本身是通的。

## 用途

生成的链接就是普通字符串，可以直接放进任意网页的 `<a href>`、二维码、或
`adb shell am start` 里：

```bash
adb shell am start -a android.intent.action.VIEW -d "intent://#Intent;scheme=weixin;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end"
```
