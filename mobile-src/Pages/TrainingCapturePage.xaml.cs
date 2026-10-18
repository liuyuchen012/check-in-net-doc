using AgoraIn.Mobile.Services;

namespace AgoraIn.Mobile.Pages;

/// <summary>
/// 手写训练数据采集（移动端专用适配）。
///
/// 为什么移动端要单独做一页，而不是照搬桌面端「扫卡工作站」：
///   · 桌面端的取图通道是 **Windows WIA 扫描仪**（平板/输稿器），手机上根本没有；
///   · 桌面端是"扫描一张 → 排进队列 → 并发 3 路上传"，手机拍照是**相机/相册**两张图源，
///     且一次只拍一张，用队列反而把交互搞复杂；
///   · 桌面端把「卡类型 + 参数 + 队列 + 服务端原始返回」平铺在一屏（够宽），
///     手机窄屏必须收敛成"① 选纸张 → ② 拍照 → ③ 看结果"的单列流程。
/// 但**服务端接口完全一致**（/training/scan、/training/scan-paper），
/// 所以切行/切格、二维码对卡、远端加密存储这些核心行为与电脑端一字不差。
///
/// 权限：训练语料是平台自己的资产，只有**主区域（manager）的系统管理员**能用；
/// 服务端也会拦（DenyIfNotPlatform），这里只负责提前把话说清楚，别让用户白拍一张再吃 403。
/// </summary>
public partial class TrainingCapturePage : ContentPage
{
    private bool _busy;
    private int _sessionPages;
    private int _sessionSamples;

    public TrainingCapturePage()
    {
        InitializeComponent();
    }

    protected override async void OnAppearing()
    {
        base.OnAppearing();
        await RefreshAccessAsync();
        _ = RefreshStatsAsync();
    }

    /// <summary>
    /// 判定当前账号能否采集：必须已登录、且是主区域管理员（与网页端/客户端同一口径）。
    /// 登录快照可能过期/缺区域字段，所以先刷一次 /auth/me（失败则沿用原快照）。
    /// </summary>
    private async Task RefreshAccessAsync()
    {
        if (!App.Api.IsLoggedIn)
        {
            ShowDeny("采集训练数据需要先登录平台账号（平台级功能，仅运营方可用）。");
            return;
        }

        await App.Api.RefreshSessionAsync();
        var user = App.Api.CurrentUser;
        if (user?.CanUseTrainingCapture == true)
        {
            DenyBox.IsVisible = false;
            return;
        }

        ShowDeny(user?.IsManager == true
            ? "当前账号没有采集训练数据的权限：该功能仅主区域的系统管理员可用。"
            : "当前账号属于机构区域：手写训练语料是平台自己的资产，只有主区域（运营方）的系统管理员能采集。");
    }

    private void ShowDeny(string text)
    {
        DenyLabel.Text = text;
        DenyBox.IsVisible = true;
    }

    private static string RoleText(string? role) => role switch
    {
        "admin" => "管理员",
        "owner" => "机构管理员",
        "teacher" => "教师",
        "parent" => "家长",
        "student" => "学生",
        _ => role ?? "用户",
    };

    private void OnGoLoginClicked(object? sender, EventArgs e) => AppShell.SwitchToLogin();

    /// <summary>切换「训练卡 / 方格纸」时显示对应的参数区。</summary>
    private void OnKindChanged(object? sender, CheckedChangedEventArgs e)
    {
        var isCard = CardKind.IsChecked;
        CardOptions.IsVisible = isCard;
        PaperOptions.IsVisible = !isCard;
    }

    // ── 取图 ──

    private async void OnCameraClicked(object? sender, EventArgs e)
    {
        if (await EnsureAllowedAsync()) await CaptureAsync(fromCamera: true);
    }

    private async void OnGalleryClicked(object? sender, EventArgs e)
    {
        if (await EnsureAllowedAsync()) await CaptureAsync(fromCamera: false);
    }

    private async Task<bool> EnsureAllowedAsync()
    {
        if (_busy) return false;
        if (!App.Api.IsLoggedIn)
        {
            await DisplayAlertAsync("需要登录", "请先登录平台账号（仅主区域系统管理员可采集训练数据）。", "知道了");
            AppShell.SwitchToLogin();
            return false;
        }
        var user = App.Api.CurrentUser;
        if (user?.CanUseTrainingCapture != true)
        {
            await DisplayAlertAsync("无权限",
                "手写训练数据采集是平台级功能，仅主运营方（主区域系统管理员）可用。", "知道了");
            return false;
        }
        return true;
    }

    /// <summary>
    /// 拍照或选相册 → 立刻上传。与桌面端"先入队再并发上传"不同：
    /// 手机一次只拍一张，直接等结果更直观（进度条 + 明确的成功/失败文案）。
    /// </summary>
    private async Task CaptureAsync(bool fromCamera)
    {
        try
        {
            // 相机权限：Android 上 MediaPicker 需要 CAMERA；相册在 API33+ 无需额外权限
            if (fromCamera)
            {
                var status = await Permissions.RequestAsync<Permissions.Camera>();
                if (status != PermissionStatus.Granted)
                {
                    await DisplayAlertAsync("提示", "需要相机权限才能拍照采集", "知道了");
                    return;
                }
            }

            FileResult? shot;
            if (fromCamera)
            {
                if (!MediaPicker.Default.IsCaptureSupported)
                {
                    await DisplayAlertAsync("提示", "当前设备不支持调用相机，请改用「从相册选择」", "知道了");
                    return;
                }
                shot = await MediaPicker.Default.CapturePhotoAsync();
            }
            else
            {
                shot = await MediaPicker.Default.PickPhotoAsync();
            }
            if (shot == null) return;   // 用户取消

            SetBusy(true, "正在上传并切图…");
            await using var stream = await shot.OpenReadAsync();
            await UploadAsync(stream, shot.FileName);
        }
        catch (FeatureNotSupportedException)
        {
            await DisplayAlertAsync("提示", "当前设备不支持该取图方式，请换另一种试试", "知道了");
        }
        catch (PermissionException)
        {
            await DisplayAlertAsync("提示", "取图权限被拒绝：请到系统设置里允许 AgoraIn 访问相机/照片", "知道了");
        }
        catch (Exception ex)
        {
            ShowResult(false, "采集失败", DescribeError(ex));
        }
        finally
        {
            SetBusy(false, "");
        }
    }

    private async Task UploadAsync(Stream content, string fileName)
    {
        var isCard = CardKind.IsChecked;
        if (isCard)
        {
            var cardNo = long.TryParse(CardNoEntry.Text?.Trim(), out var cn) && cn > 0 ? cn : (long?)null;
            var page = int.TryParse(PageEntry.Text?.Trim(), out var pg) && pg > 0 ? pg : (int?)null;
            var r = await App.Api.UploadTrainingCardAsync(content, SafeName(fileName, "card.jpg"), cardNo, page);
            if (r == null)
            {
                ShowResult(false, "服务端没有返回结果", "请稍后重试；若反复如此请检查服务端日志");
                return;
            }
            if (!string.IsNullOrWhiteSpace(r.Error))
            {
                ShowResult(false, "这张没能切出样本", r.Error!);
                return;
            }

            _sessionPages++;
            _sessionSamples += r.Saved;
            var how = r.QrDecoded ? "二维码自动识别" : "手填卡号";
            ShowResult(true,
                $"已入库 {r.Saved} 个样本",
                $"卡 A{r.CardNo:D6} 第 {r.Page} 页（{how}，旋转 {r.Rotation * 90}°）\n"
                + $"其中自动判定可用 {r.AutoOk} 个、空格剔除 {r.AutoBad} 个，其余待人工抽查。\n"
                + "可以去「人工匹配页」抽查，或到网页端「试卷与答题卡」导出训练集。");
            LabelPageButton.IsVisible = true;
        }
        else
        {
            var rows = int.TryParse(RowsEntry.Text?.Trim(), out var rr) && rr > 0 ? rr : (int?)null;
            var cols = int.TryParse(ColsEntry.Text?.Trim(), out var cc) && cc > 0 ? cc : (int?)null;
            var offset = int.TryParse(RowOffsetEntry.Text?.Trim(), out var off) && off > 0 ? off : (int?)null;
            var r = await App.Api.UploadGridPaperAsync(content, SafeName(fileName, "paper.jpg"),
                rows, cols, offset, IncludeRows.IsChecked);
            if (r == null || !r.Ok)
            {
                ShowResult(false, "这张方格纸没能切出格子", r?.Error ?? "服务端没有返回结果");
                return;
            }

            _sessionPages++;
            _sessionSamples += r.Saved;
            var geom = r.Detected ? "按格线自动量出" : "按你填的行列等分";
            ShowResult(true,
                $"已入库 {r.Saved} 个样本",
                $"{geom} {r.Cols} 列 × {r.Rows} 行；空白格剔除 {r.Blank} 个，待人工匹配 {r.Pending} 个。\n"
                + "方格纸没有印刷标注，需要到「人工匹配页」逐条判定/选字后才能进训练集。");
            LabelPageButton.IsVisible = true;
        }

        SessionLabel.Text = $"已采集 {_sessionPages} 页，共入库 {_sessionSamples} 个样本";
        _ = RefreshStatsAsync();
    }

    /// <summary>服务端只认文件名，去掉路径分隔符避免 multipart 头里出现非法字符。</summary>
    private static string SafeName(string? fileName, string fallback)
    {
        if (string.IsNullOrWhiteSpace(fileName)) return fallback;
        var name = Path.GetFileName(fileName);
        return string.IsNullOrWhiteSpace(name) ? fallback : name;
    }

    private static string DescribeError(Exception ex) => ex switch
    {
        ApiException api when api.Status == 403 => api.Message,
        ApiException api => api.Message,
        TaskCanceledException or TimeoutException => "上传超时：请检查网络后重试（扫描件较大时需要一点时间）",
        _ => ex.Message,
    };

    // ── 人工匹配页 ──

    /// <summary>
    /// 打开网页端打标页（与电脑端同一套界面，内嵌 WebView + 令牌自动登录）。
    /// 训练集打标是精细活，服务端已经有一套完整页面，移动端不重复实现。
    /// </summary>
    private async void OnOpenLabelPageClicked(object? sender, EventArgs e)
    {
        if (!App.Api.IsLoggedIn)
        {
            AppShell.SwitchToLogin();
            return;
        }
        if (!await App.Api.ValidateSessionAsync())
        {
            await DisplayAlertAsync("登录已过期", "请重新登录后再打标", "知道了");
            AppShell.SwitchToLogin();
            return;
        }
        // /m/training-label 是手机版打标页（触屏大按钮、可点选字）。
        // 桌面版的打标页靠键盘快捷键（1/2/3/空格），手机上没法用。
        var url = $"{ApiClient.ServerBaseUrl}/m/training-label?token={Uri.EscapeDataString(App.Api.Token)}&embed=1&m=1";
        await Navigation.PushAsync(new GradingWebViewPage(url, "训练打标（人工匹配）"));
    }

    // ── 统计 ──

    private async void OnRefreshStatsClicked(object? sender, EventArgs e) => await RefreshStatsAsync();

    private async Task RefreshStatsAsync()
    {
        if (!App.Api.IsLoggedIn) return;
        try
        {
            var s = await App.Api.GetTrainingStatsAsync();
            if (s == null)
            {
                StatsLabel.Text = "取不到训练集统计（请检查网络）";
                return;
            }
            var samples = s.Samples;
            StatsLabel.Text =
                $"样本 {samples?.Total ?? 0} 条（可用 {samples?.Usable ?? 0} · 待标 {samples?.Pending ?? 0} · 剔除 {samples?.Bad ?? 0}）\n"
                + $"已训练 {s.TrainedChars} 字，覆盖内置字表 {s.CharsetTrained}/{s.CharsetTotal}"
                + $"（{s.Coverage * 100:0.#}%），平均每字 {s.AvgTimes:0.#} 次"
                + (s.Accuracy is { } acc ? $"\n模型正确率 {acc * 100:0.#}%" : "\n模型正确率：暂无（还没有带模型结果的已标样本）");
            CoverageBar.Progress = Math.Clamp(s.Coverage, 0, 1);
        }
        catch
        {
            StatsLabel.Text = "取不到训练集统计（请检查网络）";
        }
    }

    // ── 界面状态 ──

    private void SetBusy(bool busy, string label)
    {
        _busy = busy;
        BusyBox.IsVisible = busy;
        Busy.IsRunning = busy;
        BusyLabel.Text = label;
        CameraButton.IsEnabled = !busy;
        GalleryButton.IsEnabled = !busy;
    }

    private void ShowResult(bool ok, string title, string detail)
    {
        ResultCard.IsVisible = true;
        ResultCard.BackgroundColor = ok ? Color.FromArgb("#E6F4EA") : Color.FromArgb("#FCE8E6");
        ResultTitle.Text = title;
        ResultTitle.TextColor = ok ? Color.FromArgb("#137333") : Color.FromArgb("#C5221F");
        ResultDetail.Text = detail;
        if (!ok) LabelPageButton.IsVisible = false;
    }
}
