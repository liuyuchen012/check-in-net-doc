using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 家长与老师的对话：/api/v4/parent/messages（按孩子维度，与家长小程序同源接口）。
/// 家长发的消息靠右蓝色，老师/系统的靠左白色 —— 气泡直接在代码里拼，省一层模板转换器。
/// </summary>
public partial class ChatPage : ContentPage
{
    private readonly string _studentId;
    private readonly string _studentName;

    public ChatPage(string studentId, string studentName)
    {
        InitializeComponent();
        _studentId = studentId;
        _studentName = studentName;
        Title = $"对话 · {studentName}";
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();
        await LoadAsync();
    }

    private async Task LoadAsync()
    {
        MsgList.Children.Clear();
        try
        {
            var msgs = await App.Api.GetMessagesAsync(_studentId);
            foreach (var m in msgs ?? [])
                MsgList.Children.Add(BuildBubble(m));
            if (MsgList.Children.Count == 0)
                MsgList.Children.Add(Hint("还没有留言：给老师发一条吧（留言会带上班级与孩子信息）"));
            await ScrollToEndAsync();
        }
        catch (Exception ex)
        {
            MsgList.Children.Add(Hint("加载失败：" + ex.Message, "#f56c6c"));
        }
    }

    private static Label Hint(string text, string color = "#8a94a6") => new()
    {
        Text = text,
        FontSize = 12,
        TextColor = Color.FromArgb(color),
        Padding = new Thickness(8),
    };

    private View BuildBubble(ParentMessage m)
    {
        var mine = m.IsMine;
        var who = mine ? "我" : m.SenderRole == 0 ? "老师" : m.SenderName;
        return new Border
        {
            Stroke = Color.FromArgb("#e3e8ef"),
            StrokeShape = new Microsoft.Maui.Controls.Shapes.RoundRectangle
            {
                CornerRadius = new CornerRadius(10),
            },
            Padding = 10,
            MaximumWidthRequest = 300,
            BackgroundColor = mine ? Color.FromArgb("#e8f0fe") : Colors.White,
            Content = new VerticalStackLayout
            {
                Spacing = 3,
                Children =
                {
                    new Label
                    {
                        Text = $"{who} · {m.CreatedAt:MM-dd HH:mm}",
                        FontSize = 10,
                        TextColor = Color.FromArgb("#a5adba"),
                    },
                    new Label { Text = m.Content, FontSize = 14 },
                },
            },
            HorizontalOptions = mine ? LayoutOptions.End : LayoutOptions.Start,
        };
    }

    private async void OnSendClicked(object? sender, EventArgs e)
    {
        var text = InputEntry.Text?.Trim();
        if (string.IsNullOrEmpty(text)) return;
        try
        {
            await App.Api.SendMessageAsync(null, _studentId, text, App.Api.CurrentUser?.Username ?? "家长");
            InputEntry.Text = "";
            await LoadAsync();
        }
        catch (Exception ex)
        {
            MsgList.Children.Add(Hint("发送失败：" + ex.Message, "#f56c6c"));
            await ScrollToEndAsync();
        }
    }

    private async Task ScrollToEndAsync()
    {
        // 等一帧让新气泡参与布局，否则滚动高度还是旧的
        await Task.Delay(60);
        await MsgScroll.ScrollToAsync(0, Math.Max(0, MsgScroll.ContentSize.Height), false);
    }
}
