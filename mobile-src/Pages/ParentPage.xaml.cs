using System.Collections.ObjectModel;
using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 家长中心：孩子列表（邀请码绑定）、成绩查询入口、与老师对话、班级公告。
/// 接口与家长小程序同源（/api/v4/parent/*）。
/// </summary>
public partial class ParentPage : ContentPage
{
    public ObservableCollection<ChildVm> Children { get; } = [];
    public ObservableCollection<NoticeVm> Notices { get; } = [];

    public ParentPage()
    {
        InitializeComponent();
        ChildrenList.ItemsSource = Children;
        NoticesList.ItemsSource = Notices;
    }

    public sealed class ChildVm
    {
        public string StudentId { get; init; } = "";
        public string DisplayName { get; init; } = "";
        public string SubInfo { get; init; } = "";
    }

    public sealed class NoticeVm
    {
        public string Title { get; init; } = "";
        public string Content { get; init; } = "";
        public string CreatedAtText { get; init; } = "";
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();
        await LoadAsync();
    }

    private async void OnRefreshClicked(object? sender, EventArgs e) => await LoadAsync();

    private async Task LoadAsync()
    {
        StatusLabel.Text = "";
        try
        {
            var children = await App.Api.GetChildrenAsync();
            Children.Clear();
            foreach (var c in children ?? [])
            {
                Children.Add(new ChildVm
                {
                    StudentId = c.StudentId,
                    DisplayName = c.DisplayName,
                    SubInfo = string.IsNullOrEmpty(c.ClassName) ? c.StudentNo : $"{c.ClassName} · {c.StudentNo}",
                });
            }
            if (Children.Count == 0)
                StatusLabel.Text = "还没有绑定孩子：向老师要孩子的绑定邀请码，填在上方完成绑定";

            var notices = new Dictionary<string, NoticeVm>();
            foreach (var c in Children)
            {
                List<ParentNotice>? list;
                try { list = await App.Api.GetNoticesAsync(c.StudentId); }
                catch { continue; }   // 某个孩子没绑定好不影响其他孩子
                foreach (var n in list ?? [])
                    notices.TryAdd(n.Id, new NoticeVm
                    {
                        Title = n.Title,
                        Content = n.Content,
                        CreatedAtText = n.PublishAt.ToString("MM-dd HH:mm"),
                    });
            }

            Notices.Clear();
            foreach (var n in notices.Values.OrderByDescending(n => n.CreatedAtText))
                Notices.Add(n);
        }
        catch (Exception ex)
        {
            StatusLabel.Text = "加载失败：" + ex.Message;
        }
    }

    private async void OnBindClicked(object? sender, EventArgs e)
    {
        var code = InviteEntry.Text?.Trim();
        if (string.IsNullOrEmpty(code))
        {
            StatusLabel.Text = "请先输入邀请码";
            return;
        }
        try
        {
            await App.Api.BindChildAsync(code, null);
            InviteEntry.Text = "";
            StatusLabel.Text = "绑定成功";
            await LoadAsync();
        }
        catch (Exception ex)
        {
            StatusLabel.Text = "绑定失败：" + ex.Message;
        }
    }

    private async void OnScoresClicked(object? sender, EventArgs e)
    {
        if ((sender as Button)?.CommandParameter is not ChildVm kid) return;
        await Navigation.PushAsync(new ChildScoresPage(kid.StudentId, kid.DisplayName));
    }

    private async void OnChatClicked(object? sender, EventArgs e)
    {
        if ((sender as Button)?.CommandParameter is not ChildVm kid) return;
        await Navigation.PushAsync(new ChatPage(kid.StudentId, kid.DisplayName));
    }

    private async void OnResourcesClicked(object? sender, EventArgs e)
    {
        if ((sender as Button)?.CommandParameter is not ChildVm kid) return;
        await Navigation.PushAsync(new ChildResourcesPage(kid.StudentId, kid.DisplayName));
    }

    private async void OnDutyClicked(object? sender, EventArgs e)
    {
        if ((sender as Button)?.CommandParameter is not ChildVm kid) return;
        await Navigation.PushAsync(new ChildDutyPage(kid.StudentId, kid.DisplayName));
    }
}
