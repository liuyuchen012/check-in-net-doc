using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 动态扫卡：内嵌网页端 /scan（摄像头实时取流 → 服务端辨识答题卡 → 自动上传）。
/// 试卷选择、多页归并、识别与考号闸门都在网页/服务端，本页只负责：
/// ① 要相机权限；② **保证登录态有效**（令牌 24h 过期，过期就先静默换新，
/// 换不了就把用户引到本 App 的登录页，而不是让他停在网页登录页不知所措）；
/// ③ 承载 WebView（网页里 getUserMedia 需由 Chrome Client 授权，见 Controls/CameraWebView.cs）。
/// </summary>
public partial class AnswerSheetScannerPage : ContentPage
{
    public AnswerSheetScannerPage()
    {
        InitializeComponent();
        Web.Navigated += OnNavigated;
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();
        await StartAsync();
    }

    private async Task StartAsync()
    {
        ErrorBox.IsVisible = false;
        ReloginButton.IsVisible = false;

        // 网页里的 getUserMedia 最终走 Android 相机权限：先进 app 层把权限要到手
        var status = await Permissions.RequestAsync<Permissions.Camera>();
        if (status != PermissionStatus.Granted)
        {
            LoadingBox.IsVisible = false;
            ShowError("未授予相机权限，无法动态扫卡；请到系统设置里允许 AgoraIn 使用相机", needLogin: false);
            return;
        }

        LoadingBox.IsVisible = true;
        if (!await App.Api.ValidateSessionAsync())
        {
            LoadingBox.IsVisible = false;
            ShowError("登录已过期，请重新登录后再扫卡", needLogin: true);
            return;
        }

        var url = $"{ApiClient.ServerBaseUrl}/scan?token={Uri.EscapeDataString(App.Api.Token)}&app=1&embed=1&m=1";
        Web.Source = new UrlWebViewSource { Url = url };
    }

    private void ShowError(string text, bool needLogin)
    {
        ErrorLabel.Text = text;
        ErrorBox.IsVisible = true;
        ReloginButton.IsVisible = needLogin;
    }

    private void OnNavigated(object? sender, WebNavigatedEventArgs e)
    {
        if (e.Result != WebNavigationResult.Success)
        {
            if (e.Result == WebNavigationResult.Failure)
            {
                LoadingBox.IsVisible = false;
                ShowError("页面加载失败，请检查网络后重试", needLogin: false);
            }
            return;
        }

        LoadingBox.IsVisible = false;
        ErrorBox.IsVisible = false;

        // 网页那边若被踢回登录页（令牌在跳转途中失效），别让用户对着网页登录框登录：
        // 引到 App 自己的登录页，登录成功后凭据会被保存，下次扫卡就能自动登录了。
        if (e.Url?.Contains("/login", StringComparison.OrdinalIgnoreCase) == true)
            ShowError("登录已过期，请重新登录后再扫卡", needLogin: true);
    }

    private void OnRetry(object? sender, EventArgs e) => MainThread.BeginInvokeOnMainThread(async () => await StartAsync());

    private async void OnRelogin(object? sender, EventArgs e)
    {
        AppShell.SwitchToLogin();
        await Task.CompletedTask;
    }
}
