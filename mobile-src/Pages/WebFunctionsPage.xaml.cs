using System.Collections.ObjectModel;
using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 「更多功能」：把网页端的全部功能页列出来，App 内用 WebView 打开并带令牌自动登录。
/// 逐页重写原生界面不现实且会与网页端分叉，这样手机端与电脑端的功能就完全一致了。
/// </summary>
public partial class WebFunctionsPage : ContentPage
{
    private readonly ObservableCollection<FuncVm> _items = [];

    public WebFunctionsPage()
    {
        InitializeComponent();
        FuncList.ItemsSource = _items;
    }

    protected override void OnAppearing()
    {
        base.OnAppearing();
        var user = App.Api.CurrentUser;
        var isManager = user?.Role is "admin" or "teacher";
        // 平台级入口（训练打标等）与网页端同一口径：主区域管理员 + exams.manage
        var platform = user?.CanUseTrainingCapture == true;
        _items.Clear();
        foreach (var f in All())
        {
            if (f.ManagerOnly && !isManager) continue;
            if (f.PlatformOnly && !platform) continue;
            _items.Add(f);
        }
    }

    private static IEnumerable<FuncVm> All() =>
    [
        new("📊", "仪表盘", "总览：签到、班级、设备与近期活动", "dashboard"),
        new("🏫", "班级管理", "建班、班主任、学生名单", "classes"),
        new("🧑‍🎓", "学生管理", "学生档案、考号、导入导出", "students"),
        new("📱", "设备管理", "打卡设备绑定与在线状态", "devices", true),
        new("⏱", "课时管理", "课时统计与结算口径", "classhours"),
        new("🗓", "课程表", "班级课表与调课", "schedule"),
        new("📣", "通知公告", "发布通知、查看已读情况", "notices"),
        new("📚", "学习资源", "上传资料并下发到家长", "resources"),
        new("📄", "试卷与答题卡", "试卷模板、答题卡版面、扫码入口", "exams"),
        new("✍️", "训练集导出", "导出「图 + 标注」zip（在试卷页底部）", "exams"),
        new("🏷", "训练打标（人工匹配）", "模型识别 → 人工判定/选字，进训练集", "training-label", PlatformOnly: true),
        new("🏆", "成绩统计", "班级成绩分布、逐题得分率、导出", "scores"),
        new("💬", "家校留言", "家长留言回复与归档", "messages"),
        new("👤", "用户与权限", "账号、角色、区域成员", "users", true),
        new("🌐", "区域管理", "多区域（租户）开通与配置", "regions", true),
        new("🔑", "授权管理", "授权码与套餐信息", "license", true),
        new("🤖", "AI 批改设置", "模型、密钥与批改策略", "ai-settings", true),
        new("⚙️", "系统设置", "服务器、隐私开关等全局配置", "settings", true),
    ];

    private async void OnItemTapped(object? sender, TappedEventArgs e)
    {
        if ((sender as BindableObject)?.BindingContext is not FuncVm f) return;

        // 进网页前把登录态弄扎实（令牌过期就静默换新），避免停在网页登录页
        if (!await App.Api.ValidateSessionAsync())
        {
            var goLogin = await DisplayAlertAsync("登录已过期", "请在 App 里重新登录后再打开网页功能", "去登录", "取消");
            if (goLogin) AppShell.SwitchToLogin();
            return;
        }

        // m=1：显式要求**手机版界面**。App 最清楚自己跑在手机上，而 WebView 的视口宽度
        // 不一定等于真实手机宽度（部分机型/缩放设置下会接近平板宽度），只靠宽度判定会
        // 误落到桌面面板。服务端拿到 m=1 后由路由守卫把 /classes 这类桌面路径映射成
        // /m/classes（见 src/utils/device.ts），因此这里继续写桌面路径即可 ——
        // 同一份"功能清单"两端共用，不必在 App 里再维护一套手机版路径。
        var url = $"{ApiClient.ServerBaseUrl}/{f.Path}?token={Uri.EscapeDataString(App.Api.Token)}&embed=1&m=1";
        await Navigation.PushAsync(new GradingWebViewPage(url, f.Title));
    }

    public sealed record FuncVm(string Icon, string Title, string Desc, string Path,
        bool ManagerOnly = false, bool PlatformOnly = false);
}
