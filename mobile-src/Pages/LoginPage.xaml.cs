namespace AgoraIn.Mobile.Pages;

public partial class LoginPage : ContentPage
{
    public LoginPage()
    {
        InitializeComponent();

        // 回填上次用户名；服务器地址固定为官方域名
        var lastUser = Preferences.Default.Get("agorain_last_username", "");
        if (!string.IsNullOrEmpty(lastUser)) UsernameEntry.Text = lastUser;
        ServerLabel.Text = App.Api.BaseUrl;
    }

    private async void OnGoRegisterClicked(object? sender, EventArgs e)
    {
        await Shell.Current.GoToAsync("register");
    }

    /// <summary>
    /// 扫码登录电脑端。
    ///
    /// 为什么未登录时先提示再放行、而不是直接拦死：服务端 <c>/auth/qr/scan</c> 要求
    /// **确认人已登录**（用"是谁确认的"来给电脑端发会话），所以未登录确实无法确认。
    /// 但入口必须一直在（这就是之前"移动端没有扫码登录区域"的原因）：
    /// 用户点了才知道有这个功能，再按提示去登录，而不是满界面找不到入口。
    /// </summary>
    private async void OnWebLoginScanClicked(object? sender, EventArgs e)
    {
        if (!App.Api.IsLoggedIn)
        {
            var go = await DisplayAlertAsync("需要先登录 App",
                "扫码确认要用你当前登录的账号给电脑端授权，所以请先在本 App 登录（教师或管理员账号）。\n\n"
                + "登录后再回到这里扫电脑上的二维码即可。", "去登录", "取消");
            if (go)
            {
                // 光标直接落到用户名框：用户点完"去登录"就能立刻输账号
                UsernameEntry.Focus();
            }
            return;
        }
        await Navigation.PushAsync(new WebLoginScanPage());
    }

private async void OnLoginClicked(object? sender, EventArgs e)
    {
        var username = UsernameEntry.Text?.Trim() ?? "";
        var password = PasswordEntry.Text ?? "";

        if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
        {
            ShowError("请填写用户名和密码");
            return;
        }

        SetBusy(true);
        try
        {
            await App.Api.LoginAsync(username, password);
            Preferences.Default.Set("agorain_last_username", username);
            AppShell.SwitchToMain();
        }
        catch (Exception ex)
        {
            ShowError($"登录失败：{ex.Message}");
        }
        finally
        {
            SetBusy(false);
        }
    }

    private void ShowError(string msg)
    {
        ErrorLabel.Text = msg;
        ErrorLabel.IsVisible = true;
    }

    private void SetBusy(bool busy)
    {
        Busy.IsRunning = busy;
        Busy.IsVisible = busy;
        LoginButton.IsEnabled = !busy;
    }
}
