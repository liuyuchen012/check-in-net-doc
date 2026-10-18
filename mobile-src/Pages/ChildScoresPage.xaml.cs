using System.Text.Json;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 家长端成绩查询：/api/v4/parent/child/{id}/scores。
/// 隐私开关（parent.showScores）关闭时服务端返回 enabled=false，页面只显示提示。
/// </summary>
public partial class ChildScoresPage : ContentPage
{
    private readonly string _studentId;

    public ChildScoresPage(string studentId, string? studentName = null)
    {
        InitializeComponent();
        _studentId = studentId;
        if (!string.IsNullOrEmpty(studentName)) Title = $"成绩 · {studentName}";
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
            var json = await App.Api.GetChildScoresAsync(_studentId);
            if (json is null)
            {
                StatusLabel.Text = "没有查到成绩";
                return;
            }

            var el = JsonDocument.Parse(JsonSerializer.Serialize(json)).RootElement;
            if (el.TryGetProperty("enabled", out var en) && en.ValueKind == JsonValueKind.False)
            {
                StatusLabel.Text = el.TryGetProperty("message", out var m) ? m.GetString() : "成绩推送未开启";
                return;
            }

            StatusLabel.Text = "";

            // results：逐题结果；按答卷分组 → 每份卷一个卡片（得分 = 组内 Score 求和，*1.0 兼容数字/空）
            var cards = new Dictionary<string, (double Sum, int Count, string Last)>();
            if (el.TryGetProperty("results", out var arr) && arr.ValueKind == JsonValueKind.Array)
            {
                foreach (var r in arr.EnumerateArray())
                {
                    var sid = r.TryGetProperty("submissionId", out var s) ? s.GetString() ?? "" : "";
                    var score = r.TryGetProperty("score", out var sc) && sc.ValueKind == JsonValueKind.Number
                        ? sc.GetDouble() : 0;
                    var comment = r.TryGetProperty("comment", out var cm) ? cm.GetString() ?? "" : "";
                    if (!cards.TryGetValue(sid, out var cur)) cards[sid] = (score, 1, comment);
                    else cards[sid] = (cur.Sum + score, cur.Count + 1, comment);
                }
            }

            ScoreList.Children.Clear();
            if (cards.Count == 0)
            {
                ScoreList.Children.Add(new Label
                {
                    Text = "还没有已确认的成绩单",
                    FontSize = 13,
                    TextColor = Color.FromArgb("#8a94a6"),
                });
                return;
            }

            foreach (var (sid, (sum, count, _)) in cards)
            {
                ScoreList.Children.Add(new Border
                {
                    Stroke = Color.FromArgb("#e3e8ef"),
                    StrokeShape = new Microsoft.Maui.Controls.Shapes.RoundRectangle
                    {
                        CornerRadius = new CornerRadius(10),
                    },
                    Padding = 12,
                    Margin = new Thickness(0, 0, 0, 4),
                    Content = new VerticalStackLayout
                    {
                        Spacing = 4,
                        Children =
                        {
                            new Label
                            {
                                Text = $"答卷 {sid[..8]}…",
                                FontSize = 14,
                                FontAttributes = FontAttributes.Bold,
                            },
                            new Label
                            {
                                Text = $"已批 {count} 题 · 本次得分 {sum:0.#}",
                                FontSize = 13,
                                TextColor = Color.FromArgb("#4285f4"),
                            },
                        },
                    },
                });
            }
        }
        catch (Exception ex)
        {
            StatusLabel.Text = "加载失败：" + ex.Message;
        }
    }
}
