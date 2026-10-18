using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 「扫码登录电脑端」专用页：扫网页登录页上的二维码并当场确认（服务的 App 扫码登录步骤）。
/// 与签到页的扫码共用一个解析/确认流程（<see cref="QrLoginFlow"/>）；需要 App 已登录才能确认。
/// </summary>
public partial class WebLoginScanPage : ContentPage
{
    private bool _cameraOn;
    private bool _busy;

    public WebLoginScanPage()
    {
        InitializeComponent();
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();
        if (!App.Api.IsLoggedIn)
        {
            await DisplayAlertAsync("需要先登录 App", "扫码确认要用你当前登录的账号登录电脑端：请先在本 App 登录后再扫码。", "知道了");
            await Navigation.PopAsync();
            return;
        }
        await StartCameraAsync();
    }

    protected override void OnDisappearing()
    {
        base.OnDisappearing();
        StopCamera();
    }

    private async void OnScanClicked(object? sender, EventArgs e)
    {
        if (_cameraOn) { StopCamera(); return; }
        await StartCameraAsync();
    }

    private async void OnRetryClicked(object? sender, EventArgs e)
    {
        StatusLabel.Text = "对准电脑屏幕上的二维码再扫一次。";
        RetryButton.IsVisible = false;
        await StartCameraAsync();
    }

    private async Task StartCameraAsync()
    {
        try
        {
            var status = await Permissions.RequestAsync<Permissions.Camera>();
            if (status != PermissionStatus.Granted)
            {
                await DisplayAlertAsync("提示", "需要相机权限才能扫码", "知道了");
                return;
            }
            CameraView.Options = new ZXing.Net.Maui.BarcodeReaderOptions
            {
                Formats = ZXing.Net.Maui.BarcodeFormat.QrCode,
                AutoRotate = true,
                Multiple = false,
            };
            _cameraOn = true;
            CameraCard.IsVisible = true;
            ScanButton.Text = "📷 关闭相机";
            StatusLabel.Text = "正在扫码：把电脑上的二维码对准取景框…";
        }
        catch (Exception ex)
        {
            await DisplayAlertAsync("扫码失败", ex.Message, "知道了");
        }
    }

    private void StopCamera()
    {
        _cameraOn = false;
        CameraCard.IsVisible = false;
        ScanButton.Text = "📷 开启相机扫码";
    }

    private void OnBarcodesDetected(object? sender, ZXing.Net.Maui.BarcodeDetectionEventArgs e)
    {
        var value = e.Results?.FirstOrDefault()?.Value;
        if (string.IsNullOrEmpty(value) || _busy) return;

        MainThread.BeginInvokeOnMainThread(async () =>
        {
            if (_busy) return;

            if (!QrLoginFlow.TryParse(value, out var sid, out var nonce))
            {
                // 扫到的不是电脑端登录码：不停相机，换个码继续扫
                StatusLabel.Text = "这不是电脑端登录二维码（请扫网页登录页上的那个）。";
                return;
            }

            _busy = true;
            StopCamera();
            Busy.IsRunning = true;
            Busy.IsVisible = true;
            ScanButton.IsEnabled = false;
            try
            {
                StatusLabel.Text = "已扫到登录码，正在确认…";
                var message = await QrLoginFlow.ConfirmAsync(sid, nonce, pick =>
                    DisplayActionSheetAsync("选择登录身份", "取消", null, pick));
                StatusLabel.Text = message;
                await DisplayAlertAsync("扫码登录电脑端", message, "好的");
                if (message.StartsWith("已确认"))
                {
                    await Navigation.PopAsync();   // 确认成功：回上一页，电脑端已进工作台
                    return;
                }
                RetryButton.IsVisible = true;
            }
            finally
            {
                _busy = false;
                Busy.IsRunning = false;
                Busy.IsVisible = false;
                ScanButton.IsEnabled = true;
            }
        });
    }
}
