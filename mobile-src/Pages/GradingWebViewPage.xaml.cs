namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 通用网页容器：把网页端某个路由（?token= 注入登录态）直接搬进 App。
/// 逐题批改（/grading/{id}）与「更多功能」里的班级/学生/设备/成绩统计等都走这里，
/// 好处是与电脑端永远同一套界面，不必为每页重写原生 UI。
/// 返回键走系统返回（MAUI Shell 自动处理 Navigation 返回栈）。
/// </summary>
public partial class GradingWebViewPage : ContentPage
{
    public GradingWebViewPage(string url, string? title = null)
    {
        InitializeComponent();
        Title = title ?? "逐题批改";
        Browser.Source = new UrlWebViewSource { Url = url };
    }
}
