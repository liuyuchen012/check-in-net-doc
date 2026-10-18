using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

public partial class HomePage : ContentPage
{
    public HomePage()
    {
        InitializeComponent();
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();

        if (!App.Api.IsLoggedIn) return;

        var user = App.Api.CurrentUser;
        WelcomeLabel.Text = $"你好，{user?.Username ?? "同学"}";
        RoleLabel.Text = RoleText(user?.Role);
        var isTeacher = user?.Role is "admin" or "teacher";
        DashboardButton.IsVisible = isTeacher;
        TeacherBox.IsVisible = isTeacher;

        // 训练数据采集是平台级入口（仅主区域系统管理员）：登录快照里的区域/权限可能过期，
        // 先静默刷一次 /auth/me 再决定显隐，避免"有权限却看不到入口"或"看到入口点进去吃 403"
        if (App.Api.IsLoggedIn)
        {
            await App.Api.RefreshSessionAsync();
            user = App.Api.CurrentUser;
            RoleLabel.Text = RoleText(user?.Role);
        }
        TrainingButton.IsVisible = user?.CanUseTrainingCapture == true;

        await LoadClassesAsync();
    }

    private async Task LoadClassesAsync()
    {
        try
        {
            var classes = await App.Api.GetClassesAsync();
            ClassesLabel.Text = classes is { Count: > 0 }
                ? string.Join("\n", classes.Select(c => $"· {c.Name}"))
                : "暂无班级";
        }
        catch
        {
            ClassesLabel.Text = "无法加载班级（请检查服务器连接）";
        }
    }

    private static string RoleText(string? role) => role switch
    {
        "admin" => "管理员",
        "teacher" => "教师",
        "parent" => "家长",
        "student" => "学生",
        _ => "用户",
    };

    private async void OnScanClicked(object? sender, EventArgs e)
        => await Shell.Current.GoToAsync("//scan");

    private async void OnTasksClicked(object? sender, EventArgs e)
        => await Shell.Current.GoToAsync("tasks");

    private async void OnParentClicked(object? sender, EventArgs e)
        => await Navigation.PushAsync(new Pages.ParentPage());

    private async void OnMoreClicked(object? sender, EventArgs e)
        => await Navigation.PushAsync(new Pages.WebFunctionsPage());

    private async void OnDashboardClicked(object? sender, EventArgs e)
        => await Shell.Current.GoToAsync("dashboard");

    // 答题卡扫卡 / 阅卷：与网页端同一套页面（内嵌 WebView 带令牌自动登录）
    private async void OnScanSheetClicked(object? sender, EventArgs e)
        => await Shell.Current.GoToAsync("scanner");

    private async void OnGradingClicked(object? sender, EventArgs e)
        => await Shell.Current.GoToAsync("grading");

    /// <summary>扫码登录电脑端：扫网页登录页的二维码，当场确认（需教师/管理员账号）。</summary>
    private async void OnWebLoginScanClicked(object? sender, EventArgs e)
        => await Navigation.PushAsync(new WebLoginScanPage());

    /// <summary>手写训练数据采集（平台级：仅主区域系统管理员）。</summary>
    private async void OnTrainingCaptureClicked(object? sender, EventArgs e)
        => await Navigation.PushAsync(new TrainingCapturePage());
}
