using System.Collections.ObjectModel;
using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 孩子的学习资源（小程序「学习资源」对等页）：/api/v4/parent/resources?studentId=
/// 资源文件下载/外链都需要登录态，所以拼上 ?token= 交给系统浏览器/播放器打开
/// （服务端 <c>JwtBearerEvents.OnMessageReceived</c> 支持 query 里的令牌）。
/// </summary>
public partial class ChildResourcesPage : ContentPage
{
    private readonly string _studentId;
    private readonly string _studentName;
    private readonly ObservableCollection<ResourceVm> _items = [];

    public ChildResourcesPage(string studentId, string studentName)
    {
        InitializeComponent();
        _studentId = studentId;
        _studentName = studentName;
        Title = $"学习资源 · {studentName}";
        ResourceList.ItemsSource = _items;
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();
        await LoadAsync();
    }

    private async Task LoadAsync()
    {
        try
        {
            var list = await App.Api.GetChildResourcesAsync(_studentId);
            _items.Clear();
            foreach (var r in list ?? [])
                _items.Add(new ResourceVm(r));
            EmptyLabel.IsVisible = _items.Count == 0;
            EmptyLabel.Text = _items.Count == 0 ? "老师还没有下发学习资料" : "";
        }
        catch (Exception ex)
        {
            EmptyLabel.IsVisible = true;
            EmptyLabel.Text = "加载失败：" + ex.Message;
        }
    }

    private async void OnOpenClicked(object? sender, EventArgs e)
    {
        if ((sender as Button)?.CommandParameter is not ResourceVm vm || string.IsNullOrEmpty(vm.Url))
            return;
        try
        {
            await Launcher.Default.OpenAsync(vm.Url);
        }
        catch (Exception ex)
        {
            await DisplayAlertAsync("无法打开", ex.Message, "好");
        }
    }

    private async void OnRefreshClicked(object? sender, EventArgs e) => await LoadAsync();

    /// <summary>列表绑定用：带令牌的绝对下载地址 + 给家长看的类型/时间。</summary>
    public sealed class ResourceVm
    {
        public ResourceVm(ParentResource r)
        {
            Title = r.Title;
            Icon = r.Kind switch
            {
                1 => "🖼",
                2 => "🎬",
                3 => "🔗",
                _ => "📘",
            };
            KindText = r.Kind switch
            {
                1 => "图片",
                2 => "视频",
                3 => "链接",
                _ => "文件",
            };
            SubInfo = $"{KindText} · {r.Subject ?? "综合"} · {r.CreatedAt:yyyy-MM-dd}";
            Url = string.IsNullOrEmpty(r.DownloadUrl)
                ? ""
                : $"{ApiClient.ServerBaseUrl}{r.DownloadUrl}?token={Uri.EscapeDataString(App.Api.Token)}";
        }

        public string Title { get; }
        public string Icon { get; }
        public string KindText { get; }
        public string SubInfo { get; }
        public string Url { get; }
    }
}
