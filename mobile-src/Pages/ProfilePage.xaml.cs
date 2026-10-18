namespace AgoraIn.Mobile.Pages;

public partial class ProfilePage : ContentPage
{
    public ProfilePage()
    {
        InitializeComponent();
    }

    protected override void OnAppearing()
    {
        base.OnAppearing();
        var user = App.Api.CurrentUser;
        UsernameLabel.Text = user?.Username ?? "未登录";
        RoleLabel.Text = user == null ? "" : $"角色：{RoleText(user.Role)}";
        ServerEntry.Text = App.Api.BaseUrl;
        ServerLabel.Text = $"服务器：{App.Api.BaseUrl}";
        LoginButton.IsVisible = !App.Api.IsLoggedIn;
        LogoutButton.IsVisible = App.Api.IsLoggedIn;
        // 扫码登录入口**始终可见**：未登录时点它会引导先登录（扫码确认必须知道"是谁确认的"）。
        // 早期只在已登录时显示，结果未登录的用户满界面找不到这个功能（用户反馈的问题）。
        WebLoginButton.IsVisible = true;
        WebLoginHint.IsVisible = true;
        WebLoginHint.Text = App.Api.IsLoggedIn
            ? "电脑网页登录时切到「App 扫码登录」，用这里扫一下即可免密码进入（仅教师与管理员账号）"
            : "需要先登录本 App 才能扫码确认（扫码是用你当前登录的账号给电脑端授权）";
    }

    /// <summary>扫码登录电脑端（扫网页登录页二维码并确认；需教师/管理员账号）。</summary>
    private async void OnWebLoginClicked(object? sender, EventArgs e)
    {
        if (!App.Api.IsLoggedIn)
        {
            var go = await DisplayAlertAsync("需要先登录 App",
                "扫码确认要用你当前登录的账号给电脑端授权，请先登录（教师或管理员账号）。", "去登录", "取消");
            if (go) AppShell.SwitchToLogin();
            return;
        }
        await Navigation.PushAsync(new WebLoginScanPage());
    }

    private static string RoleText(string role) => role switch
    {
        "admin" => "管理员",
        "teacher" => "教师",
        "parent" => "家长",
        "student" => "学生",
        _ => role,
    };

    private void OnLoginClicked(object? sender, EventArgs e)
        => AppShell.SwitchToLogin();

    private async void OnLogoutClicked(object? sender, EventArgs e)
    {
        var ok = await DisplayAlertAsync("退出登录", "确定要退出当前账户吗？", "退出", "取消");
        if (!ok) return;
        App.Api.Logout();
        AppShell.SwitchToLogin();
    }
}
