using Microsoft.Extensions.Logging;
using ZXing.Net.Maui.Controls;

namespace AgoraIn.Mobile;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.UseBarcodeReader() // ZXing.Net.MAUI 真机扫码
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
				fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
			});

		// 注册服务
		builder.Services.AddSingleton<Services.ApiClient>();

		// 动态扫卡页的 WebView 要让网页用摄像头（getUserMedia）：
		// Android 上由自定义 Handler 的 Chrome Client 授权；其余平台用系统默认。
		builder.ConfigureMauiHandlers(handlers =>
		{
#if ANDROID
			handlers.AddHandler<Controls.CameraWebView, Controls.CameraWebViewHandler>();
#else
			handlers.AddHandler<Controls.CameraWebView, Microsoft.Maui.Handlers.WebViewHandler>();
#endif
		});

#if ANDROID
		// ⚠️ 关键：MAUI 的 WebViewHandler 是在 **mapper 的 MapWebChromeClient** 里装自己的
		// MauiWebChromeClient 的，而 mapper 在本 Handler 的 ConnectHandler **之后**才跑 ——
		// 只在 Handler 里 SetWebChromeClient 会被它顶掉（真机现象：网页 getUserMedia 直接
		// 拿 NotAllowedError，我们的 OnPermissionRequest 一次都没被调用，因为
		// MauiWebChromeClient 没有实现权限授予）。这里往 mapper 末尾追加一条：
		// 每次属性映射结束后都再装一遍授权 Client，最终留下的就是会授权的那个。
		Microsoft.Maui.Handlers.WebViewHandler.Mapper.AppendToMapping(
			"AgoraCameraPermissionGrant", (handler, view) =>
			{
				if (view is Controls.CameraWebView
					&& handler is Controls.CameraWebViewHandler cameraHandler)
				{
					Controls.CameraWebViewHandler.EnsureGrantClient(cameraHandler.PlatformView);
				}
			});
#endif

#if DEBUG
		builder.Logging.AddDebug();
#endif

		return builder.Build();
	}
}
