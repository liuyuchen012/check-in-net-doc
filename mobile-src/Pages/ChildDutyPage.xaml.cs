using System.Collections.ObjectModel;
using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 孩子的值日记录（小程序「值日安排」对等页）：/api/v4/parent/child/{id}/duty
/// 展示完成率 + 最近若干次值日，家长一眼能看出孩子有没有认真做值日。
/// </summary>
public partial class ChildDutyPage : ContentPage
{
    private readonly string _studentId;
    private readonly string _studentName;
    private readonly ObservableCollection<RecordVm> _items = [];

    public ChildDutyPage(string studentId, string studentName)
    {
        InitializeComponent();
        _studentId = studentId;
        _studentName = studentName;
        Title = $"值日 · {studentName}";
        RecordList.ItemsSource = _items;
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
            var duty = await App.Api.GetChildDutyAsync(_studentId);
            _items.Clear();
            if (duty == null)
            {
                RateLabel.Text = "—";
                CountLabel.Text = "暂无数据";
                return;
            }

            TitleLabel.Text = $"{_studentName} 的值日完成情况";
            RateLabel.Text = $"{duty.CompletionRate:0.#}%";
            CountLabel.Text = $"完成 {duty.CompletedCount} / 共 {duty.TotalCount} 次";
            foreach (var r in duty.Records)
                _items.Add(new RecordVm(r));
            EmptyLabel.IsVisible = _items.Count == 0;
            EmptyLabel.Text = _items.Count == 0 ? "还没有值日记录" : "";
        }
        catch (Exception ex)
        {
            EmptyLabel.IsVisible = true;
            EmptyLabel.Text = "加载失败：" + ex.Message;
        }
    }

    public sealed class RecordVm
    {
        public RecordVm(ParentDutyRecord r)
        {
            Mark = r.Completed ? "✅" : "⏳";
            PostName = r.PostName;
            SubInfo = $"{r.Date:yyyy-MM-dd}{(string.IsNullOrWhiteSpace(r.Note) ? "" : " · " + r.Note)}";
        }

        public string Mark { get; }
        public string PostName { get; }
        public string SubInfo { get; }
    }
}
