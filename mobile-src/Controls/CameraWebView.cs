using Microsoft.Maui.ApplicationModel;
using Microsoft.Maui.Handlers;

namespace AgoraIn.Mobile.Controls
{
    /// <summary>
    /// 允许网页调用摄像头的 WebView（动态扫卡页用）：
    /// Android 上 getUserMedia 需要 WebChromeClient.OnPermissionRequest 显式授予，
    /// MAUI 默认的 Chrome Client 不授予 —— 网页会一直拿不到摄像头。
    /// 其他平台用系统默认 Handler（iOS/WKWebView 自行管理相机权限）。
    /// </summary>
    public class CameraWebView : WebView
    {
        public static readonly BindableProperty SkipFileFallbackProperty =
            BindableProperty.Create(nameof(SkipFileFallback), typeof(bool), typeof(CameraWebView), false);

        /// <summary>App 内嵌时置 true：隐藏网页里依赖文件选择器的"拍照上传"兜底（Chrome Client 未实现文件选择）。</summary>
        public bool SkipFileFallback
        {
            get => (bool)GetValue(SkipFileFallbackProperty);
            set => SetValue(SkipFileFallbackProperty, value);
        }
    }

#if ANDROID
    public class CameraWebViewHandler : WebViewHandler
    {
        // 三重保险：CreatePlatformView（早）→ ConnectHandler（中）→ MauiProgram 里追加的
        // mapper（晚，见 EnsureGrantClient）。MAUI 会在 mapper 阶段装上自己的
        // MauiWebChromeClient，只有最后一次安装才作数。
        protected override Android.Webkit.WebView CreatePlatformView()
        {
            var view = base.CreatePlatformView();
            Apply(view);
            return view;
        }

        protected override void ConnectHandler(Android.Webkit.WebView platformView)
        {
            base.ConnectHandler(platformView);
            Apply(platformView);
        }

        protected override void DisconnectHandler(Android.Webkit.WebView platformView)
        {
            platformView.SetWebChromeClient(new Android.Webkit.WebChromeClient());
            base.DisconnectHandler(platformView);
        }

        /// <summary>
        /// 确保当前 Chrome Client 是会授权摄像头的那一个（MauiProgram 的 mapper 每次映射后调用）。
        /// 顺便把 MediaPlaybackRequiresUserGesture 再压一次 —— MAUI 的属性映射跑在我们前面，
        /// 这里必须重设，否则无手势的取景自动播放会被拦。
        /// </summary>
        public static void EnsureGrantClient(Android.Webkit.WebView view)
        {
            Apply(view);
            if (System.Threading.Interlocked.Increment(ref _applied) <= 8)
                Android.Util.Log.Info("AgoraWebView", $"grant client (re)installed #{_applied}");
        }

        private static int _applied;

        /// <summary>把下载交给系统（浏览器/下载器）处理：App 不申请存储权限，避免"没有权限"。</summary>
        private sealed class SystemDownloadListener : Java.Lang.Object, Android.Webkit.IDownloadListener
        {
            public void OnDownloadStart(string? url, string? userAgent, string? contentDisposition,
                                        string? mimeType, long contentLength)
            {
                if (string.IsNullOrWhiteSpace(url)) return;
                try
                {
                    var ctx = Android.App.Application.Context;
                    var intent = new Android.Content.Intent(Android.Content.Intent.ActionView, Android.Net.Uri.Parse(url)!);
                    intent.AddFlags(Android.Content.ActivityFlags.NewTask);
                    ctx.StartActivity(intent);
                    Android.Util.Log.Info("AgoraWebView", "download handed to system: " + url);
                }
                catch (Exception ex)
                {
                    Android.Util.Log.Error("AgoraWebView", "download handoff failed: " + ex.Message);
                }
            }
        }

        private static void Apply(Android.Webkit.WebView view)
        {
            view.SetWebChromeClient(new GrantClient());
            // getUserMedia 的视频流自动播放需要关掉"媒体播放必须用户手势"；
            // DOM 存储（localStorage 存 token）MAUI 已开，这里显式再保一次。
            view.Settings.MediaPlaybackRequiresUserGesture = false;
            view.Settings.JavaScriptEnabled = true;
            view.Settings.DomStorageEnabled = true;
            // 网页里的下载链接（如"下载安装新版 App"）：WebView 默认什么都不做，用户看到"无法下载"。
            // 交给系统浏览器/下载器接管 —— App 自己不碰存储权限，也就不会弹"没有权限"。
            view.SetDownloadListener(new SystemDownloadListener());
            Android.Util.Log.Debug("AgoraWebView", "grant client + settings applied");
        }

        /// <summary>
        /// 授予网页请求的摄像头/麦克风权限（动态扫卡只要 VIDEO_CAPTURE）。
        /// Grant 必须"当场同步"调用：Chromium 对授权决定有超时，隔一个消息循环再授予
        /// 会被当成拒绝（网页拿到的是 NotAllowedError: Permission denied）。
        /// </summary>
        private sealed class GrantClient : Android.Webkit.WebChromeClient
        {
            public override void OnPermissionRequest(Android.Webkit.PermissionRequest? request)
            {
                if (request == null) return;
                var res = string.Join(",", request.GetResources() ?? Array.Empty<string>());
                Android.Util.Log.Info("AgoraWebView", $"permission request: {res} (thread {(MainThread.IsMainThread ? "UI" : "bg")})");
                try
                {
                    request.Grant(request.GetResources());
                    Android.Util.Log.Info("AgoraWebView", "granted: " + res);
                }
                catch (Exception ex)
                {
                    Android.Util.Log.Error("AgoraWebView", "grant failed: " + ex);
                    try { request.Deny(); } catch { /* 已经失效就算了 */ }
                }
            }

            /// <summary>
            /// App 内是单页流程，不支持弹出新窗口：window.open / target=_blank 在 WebView 里会静默失败
            /// （表现为"点了没反应 / 下不了"）。这里把目标地址就地加载到同一个 WebView。
            /// </summary>
            public override bool OnCreateWindow(Android.Webkit.WebView? view, bool isDialog, bool isUserGesture,
                                               Android.OS.Message? resultMsg)
            {
                if (view == null || resultMsg?.Obj is not Android.Webkit.WebView.WebViewTransport transport) return false;
                try
                {
                    transport.WebView = view;
                    resultMsg.SendToTarget();
                    return true;
                }
                catch (Exception ex)
                {
                    Android.Util.Log.Error("AgoraWebView", "onCreateWindow failed: " + ex.Message);
                    return false;
                }
            }

            // 网页 console.* 转发到 logcat（MAUI 默认 Client 会转发，我们自己接管后要补上），
            // 真机排障时 adb logcat -s AgoraWebView 就能看到页面里的诊断输出。
            public override bool OnConsoleMessage(Android.Webkit.ConsoleMessage? message)
            {
                // 用 ToString()：Java 的 ConsoleMessage.toString 自带 级别/行号/来源，
                // 也避开 .NET 绑定里 MessageLevel 既是嵌套类型又是属性名的歧义。
                if (message != null) Android.Util.Log.Info("AgoraWebView", "console: " + message);
                return true;
            }
        }
    }
#endif
}
