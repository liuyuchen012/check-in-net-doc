using System.Net.Http.Json;
using System.Text.Json;

namespace AgoraIn.Mobile.Services;

/// <summary>
/// AgoraIn v4 服务端 API 客户端（JWT 鉴权）。
/// 服务器地址**已锁定**为官方域名（<see cref="ServerBaseUrl"/>），不允许连接第三方服务器。
/// </summary>
public sealed class ApiClient
{
    private static readonly HttpClient Http = new() { Timeout = TimeSpan.FromSeconds(15) };
    private static readonly JsonSerializerOptions JsonOpts = new() { PropertyNameCaseInsensitive = true };

    /// <summary>官方服务端基地址（唯一允许的服务器）。</summary>
    public const string ServerBaseUrl = "https://agorain.615mc.cn";

    private const string TokenKey = "agorain_token";
    private const string UserKey = "agorain_user";

    /// <summary>服务端基地址（只读，恒为官方域名）。</summary>
    public string BaseUrl => ServerBaseUrl;

    public string Token
    {
        get => Preferences.Default.Get(TokenKey, "");
        private set => Preferences.Default.Set(TokenKey, value);
    }

    public UserInfo? CurrentUser
    {
        get
        {
            var json = Preferences.Default.Get(UserKey, "");
            return string.IsNullOrEmpty(json) ? null : JsonSerializer.Deserialize<UserInfo>(json, JsonOpts);
        }
        private set => Preferences.Default.Set(UserKey, value == null ? "" : JsonSerializer.Serialize(value, JsonOpts));
    }

    public bool IsLoggedIn => !string.IsNullOrEmpty(Token);

    // ── 认证 ──
    // 令牌 24h 过期，而内嵌网页（扫卡/批改）靠 ?token= 传令牌 —— 过期后网页会被踢到登录页，
    // 表现为"扫卡不自动登录"。因此登录成功时把凭据存进 SafeStorage，
    // 打开内嵌页前用 EnsureFreshTokenAsync 静默换新令牌。

    private const string CredUserKey = "agorain_cred_user";
    private const string CredPassKey = "agorain_cred_pass";
    private const string TokenAtKey = "agorain_token_at";

    /// <summary>
    /// 保存凭据用于静默续期。SecureStorage 走 Android Keystore，个别机型/系统上会抛异常
    /// （比如 Keystore 被重置）——那种情况只影响"自动续期"，绝不能让登录本身失败。
    /// </summary>
    public async Task SaveCredentialsAsync(string username, string password)
    {
        try
        {
            await Microsoft.Maui.Storage.SecureStorage.Default.SetAsync(CredUserKey, username);
            await Microsoft.Maui.Storage.SecureStorage.Default.SetAsync(CredPassKey, password);
        }
        catch
        {
            /* 存不下就算了：下次令牌过期时用户重新登录一次即可 */
        }
    }

    public void ClearCredentials()
    {
        try
        {
            Microsoft.Maui.Storage.SecureStorage.Default.Remove(CredUserKey);
            Microsoft.Maui.Storage.SecureStorage.Default.Remove(CredPassKey);
        }
        catch { /* 同上：清理失败不影响退出登录 */ }
    }

    /// <summary>
    /// 保证令牌还够用（内嵌网页 / 列表接口都不会自己续期）。
    /// 令牌 24h 过期，剩余不足 12h 才静默重登一次，避免每开一个页面就打一次登录请求。
    /// </summary>
    public async Task<bool> EnsureFreshTokenAsync(bool force = false)
    {
        try
        {
            if (!force && !string.IsNullOrEmpty(Token))
            {
                var issuedAt = Preferences.Default.Get(TokenAtKey, 0L);
                if (issuedAt > 0 && DateTimeOffset.UtcNow.ToUnixTimeSeconds() - issuedAt < 12 * 3600)
                    return true;
            }

            var u = await Microsoft.Maui.Storage.SecureStorage.Default.GetAsync(CredUserKey);
            var p = await Microsoft.Maui.Storage.SecureStorage.Default.GetAsync(CredPassKey);
            if (string.IsNullOrEmpty(u) || string.IsNullOrEmpty(p)) return !string.IsNullOrEmpty(Token);

            await LoginAsync(u, p);
            return true;
        }
        catch
        {
            return !string.IsNullOrEmpty(Token);   // 刷新失败仍带着旧令牌试一试
        }
    }

    public async Task<UserInfo> LoginAsync(string username, string password)
    {
        var res = await PostAsync<LoginResponse>("/api/v4/auth/login", new { username, password });
        if (res == null || string.IsNullOrEmpty(res.Token))
            throw new InvalidOperationException("服务器未返回令牌");

        Token = res.Token;
        Preferences.Default.Set(TokenAtKey, DateTimeOffset.UtcNow.ToUnixTimeSeconds());
        var user = new UserInfo { Username = res.Username, Role = res.Role, Region = res.Region, IsManager = res.IsManager };
        CurrentUser = user;
        await SaveCredentialsAsync(username, password);
        return user;
    }

    /// <summary>
    /// 用 /auth/me 刷新本地会话快照（区域 / 是否主区域）。
    ///
    /// 为什么要刷新：App 是"点开某个功能才发现没有权限"的体验最差。
    /// 手写训练数据采集是**平台级**功能（仅主区域 manager 的系统管理员可用），
    /// 而登录接口返回的区域信息在旧版本里没落盘 —— 只靠登录那一刻的快照会让
    /// 老用户看不到入口、或机构账号看到入口点进去吃 403。
    /// 拉取失败时保留原值（不阻断任何操作）。
    /// </summary>
    public async Task RefreshSessionAsync()
    {
        if (string.IsNullOrEmpty(Token)) return;
        try
        {
            using var req = new HttpRequestMessage(HttpMethod.Get, BaseUrl + "/api/v4/auth/me");
            AddAuth(req);
            using var res = await Http.SendAsync(req);
            if (!res.IsSuccessStatusCode) return;
            using var doc = JsonDocument.Parse(await res.Content.ReadAsStringAsync());
            var root = doc.RootElement;
            string Str(string name) => root.TryGetProperty(name, out var v) && v.ValueKind == JsonValueKind.String
                ? v.GetString() ?? "" : "";
            bool Bool(string name) => root.TryGetProperty(name, out var v) && v.ValueKind is JsonValueKind.True;

            var current = CurrentUser ?? new UserInfo();
            current.Region = Str("region");
            current.IsManager = Bool("isManager");
            var role = Str("role");
            if (!string.IsNullOrEmpty(role)) current.Role = role;
            var name = Str("username");
            if (!string.IsNullOrEmpty(name)) current.Username = name;
            // 权限点并集：平台级入口的显隐要与网页端同一口径（isManager && exams.manage），
            // 只按角色名判断会在复合角色（如"教师+管理员"）上算错
            if (root.TryGetProperty("permissions", out var p) && p.ValueKind == JsonValueKind.Array)
            {
                current.Permissions = [.. p.EnumerateArray()
                    .Select(x => x.GetString() ?? "")
                    .Where(x => x.Length > 0)];
            }
            CurrentUser = current;
        }
        catch
        {
            /* 网络不通：保留原快照，用户照常使用其它功能 */
        }
    }

    public void Logout()
    {
        Token = "";
        CurrentUser = null;
        ClearCredentials();
    }

    // ── 家长端（与家长小程序同源接口：/api/v4/parent/*）──

    public Task<List<ParentChild>?> GetChildrenAsync()
        => GetAsync<List<ParentChild>?>("/api/v4/parent/children");

    public Task<object?> BindChildAsync(string inviteCode, string? alias)
        => PostAsync<object?>("/api/v4/parent/bind", new { inviteCode, alias });

    public Task PostAsyncNoBody(string url) => PostAsync<object?>(url, new { });

    /// <summary>
    /// 网页端扫码登录：App 侧确认（迭代二）。
    /// 服务端会校验区域（跨区域无效）与角色（家长一律 401，与"用户不存在"一致）。
    /// </summary>
    public Task<QrScanAck?> ConfirmQrLoginAsync(string sessionId, string nonce, string? identity = null)
        => PostAsync<QrScanAck>("/api/v4/auth/qr/scan", new { sessionId, nonce, identity });

    public Task<object?> GetChildScoresAsync(string studentId)
        => GetAsync<object?>($"/api/v4/parent/child/{studentId}/scores");

    public Task<List<ParentMessage>?> GetMessagesAsync(string studentId)
        => GetAsync<List<ParentMessage>?>($"/api/v4/parent/messages?studentId={Uri.EscapeDataString(studentId)}");

    public Task<ParentMessage?> SendMessageAsync(string? classId, string studentId, string content, string senderName)
        => PostAsync<ParentMessage?>("/api/v4/parent/messages",
            new { classId, studentId, content, senderName, isImage = false });

    /// <summary>班级通知（服务端按孩子维度鉴权，必须带 studentId）。</summary>
    public Task<List<ParentNotice>?> GetNoticesAsync(string studentId)
        => GetAsync<List<ParentNotice>?>($"/api/v4/parent/notices?studentId={Uri.EscapeDataString(studentId)}");

    /// <summary>已下发到孩子班级的学习资源（小程序「学习资源」同源接口）。</summary>
    public Task<List<ParentResource>?> GetChildResourcesAsync(string studentId)
        => GetAsync<List<ParentResource>?>($"/api/v4/parent/resources?studentId={Uri.EscapeDataString(studentId)}");

    /// <summary>孩子的值日记录与完成率（小程序「值日安排」同源接口）。</summary>
    public Task<ParentDuty?> GetChildDutyAsync(string studentId)
        => GetAsync<ParentDuty?>($"/api/v4/parent/child/{studentId}/duty");

    // ── 学生端接口 ──

    /// <summary>打卡任务列表（含签到进度）。</summary>
    public Task<List<CheckInTaskItem>?> GetTasksAsync()
        => GetAsync<List<CheckInTaskItem>>("/api/v4/checkin/tasks");

    /// <summary>学生签到（扫码/输码）。</summary>
    public Task<ScanResult?> SubmitScanAsync(string code, string name, string password)
        => PostAsync<ScanResult>("/api/v4/checkin/scan", new { code, name, password });

    /// <summary>邀请码 → 所属区域与机构自定义隐私协议（注册页展示，匿名接口）。</summary>
    public Task<InviteRegionResult?> GetInviteRegionAsync(string inviteCode)
        => GetAsync<InviteRegionResult?>($"/api/v4/parent/invite/{Uri.EscapeDataString(inviteCode)}/region");

    /// <summary>发送注册邮箱验证码。</summary>
    public Task<SendCodeResult?> SendRegisterCodeAsync(string email)
        => PostAsync<SendCodeResult>("/api/v4/account/send-code", new { email, purpose = "register" });

    /// <summary>
    /// 自助注册。mode=join 家长加入已有区域（regionId 必填）；
    /// mode=region 机构注册创建新区域（regionName 必填，注册后需主区域激活码激活）。
    /// </summary>
    public Task<RegisterResult?> RegisterAsync(
        string email, string code, string username, string password,
        string mode, string? regionId, string? regionName, string? inviteCode = null,
        bool agreeTerms = true, bool agreeRegionTerms = false)
        => PostAsync<RegisterResult>("/api/v4/account/register", new
        {
            email, code, username, password, mode, regionId, regionName, inviteCode,
            displayName = username, agreeTerms, agreeRegionTerms,
        });

    /// <summary>个人历史记录。</summary>
    public Task<List<CheckInRecordItem>?> GetHistoryAsync(string studentId)
        => GetAsync<List<CheckInRecordItem>>($"/api/v4/checkin/records?studentId={Uri.EscapeDataString(studentId)}");

    // ── 教师阅卷 / 出分 ──

    /// <summary>试卷列表。</summary>
    public Task<List<ExamPaperItem>?> GetPapersAsync()
        => GetAsync<List<ExamPaperItem>?>("/api/v4/exams/papers");

    /// <summary>某试卷的扫卡提交列表。</summary>
    public Task<List<SubmissionItem>?> GetSubmissionsAsync(string paperId)
        => GetAsync<List<SubmissionItem>?>($"/api/v4/exams/submissions?paperId={Uri.EscapeDataString(paperId)}");

    /// <summary>逐题结果（含题干/满分/识别答案/AI 建议分）。</summary>
    public Task<List<QuestionResultItem>?> GetSubmissionResultsAsync(string submissionId)
        => GetAsync<List<QuestionResultItem>?>($"/api/v4/exams/submissions/{submissionId}/results");

    /// <summary>答题卡扫描原图（人工复盘对照学生原卷）。失败返回 null（如未存图）。</summary>
    public async Task<ImageSource?> GetSubmissionImageAsync(string submissionId)
    {
        try
        {
            using var req = new HttpRequestMessage(HttpMethod.Get,
                $"{BaseUrl}/api/v4/exams/submissions/{submissionId}/image");
            AddAuth(req);
            using var res = await Http.SendAsync(req, HttpCompletionOption.ResponseContentRead);
            if (!res.IsSuccessStatusCode) return null;
            var bytes = await res.Content.ReadAsByteArrayAsync();
            return bytes.Length == 0 ? null : ImageSource.FromStream(() => new MemoryStream(bytes));
        }
        catch
        {
            return null;
        }
    }

    /// <summary>教师人工改分（留痕，状态推进到待人工）。</summary>
    public Task<object?> OverrideResultAsync(string submissionId, string questionId, double score, string? comment)
        => PutAsync<object>($"/api/v4/exams/submissions/{submissionId}/results/{questionId}",
            new { score, comment });

    /// <summary>确认成绩（状态 → 已确认，计入统计并出分）。</summary>
    public Task<ConfirmResult?> ConfirmSubmissionAsync(string submissionId)
        => PostAsync<ConfirmResult>($"/api/v4/exams/submissions/{submissionId}/confirm", new { });

    /// <summary>管理员仪表盘数据。</summary>
    public Task<DashboardData?> GetDashboardAsync()
        => GetAsync<DashboardData>("/api/v4/devices");

    // ── 手写训练数据采集（**平台级**：仅主区域系统管理员可用，与桌面端扫卡工作站同一套接口）──

    /// <summary>上传训练卡照片：卡号/页号留空由卡面二维码自动识别，服务端按几何切行/切字入库。</summary>
    public Task<TrainingScanResult?> UploadTrainingCardAsync(Stream content, string fileName,
        long? cardNo = null, int? page = null)
    {
        var q = new List<string>();
        if (cardNo is > 0) q.Add($"cardNo={cardNo}");
        if (page is > 0) q.Add($"page={page}");
        var url = "/api/v4/training/scan" + (q.Count > 0 ? "?" + string.Join("&", q) : "");
        return PostFileAsync<TrainingScanResult>(url, content, fileName, "image/jpeg");
    }

    /// <summary>
    /// 上传通用方格纸（作文纸 / 作业本）：行列留空由服务端按印刷格线自动量。
    /// <paramref name="rowOffset"/> 是多页作文的接力行号（这一页第一行是全篇第几行）。
    /// </summary>
    public Task<PaperScanResult?> UploadGridPaperAsync(Stream content, string fileName,
        int? rows = null, int? cols = null, int? rowOffset = null, bool includeRows = true)
    {
        var q = new List<string>();
        if (rows is > 0) q.Add($"rows={rows}");
        if (cols is > 0) q.Add($"cols={cols}");
        if (rowOffset is > 0) q.Add($"rowOffset={rowOffset}");
        if (!includeRows) q.Add("includeRows=false");
        var url = "/api/v4/training/scan-paper" + (q.Count > 0 ? "?" + string.Join("&", q) : "");
        return PostFileAsync<PaperScanResult>(url, content, fileName, "image/jpeg");
    }

    /// <summary>训练集统计（已训练字数 / 覆盖率 / 正确率），用于在采集页给出"还差多少"的反馈。</summary>
    public Task<TrainingStats?> GetTrainingStatsAsync()
        => GetAsync<TrainingStats>("/api/v4/training/stats");

    /// <summary>multipart/form-data 上传（文件流），失败转成可直接展示的中文消息。</summary>
    private async Task<T?> PostFileAsync<T>(string url, Stream content, string fileName, string contentType)
    {
        using var form = new MultipartFormDataContent();
        var file = new StreamContent(content);
        file.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue(contentType);
        form.Add(file, "file", fileName);

        using var req = new HttpRequestMessage(HttpMethod.Post, BaseUrl + url) { Content = form };
        AddAuth(req);
        // 扫描件可能几十 MB，且服务端还要切行/切字并加密上传远端 —— 给足时间
        using var cts = new CancellationTokenSource(TimeSpan.FromMinutes(10));
        using var res = await Http.SendAsync(req, cts.Token);
        if (!res.IsSuccessStatusCode) throw await FailAsync(res);
        return await res.Content.ReadFromJsonAsync<T>(JsonOpts);
    }

    /// <summary>(重新)登录，用指定账号 —— 采集页内联登录用。</summary>
    public Task<UserInfo> SignInAsync(string username, string password) => LoginAsync(username, password);

    /// <summary>班级列表。</summary>
    public Task<List<ClassItem>?> GetClassesAsync()
        => GetAsync<List<ClassItem>>("/api/v4/classes");

    // ── HTTP 基元 ──

    public async Task<T?> GetAsync<T>(string url)
    {
        using var req = new HttpRequestMessage(HttpMethod.Get, BaseUrl + url);
        AddAuth(req);
        using var res = await Http.SendAsync(req);
        if (!res.IsSuccessStatusCode) return default;
        return await res.Content.ReadFromJsonAsync<T>(JsonOpts);
    }

    private async Task<T?> PutAsync<T>(string url, object body)
    {
        using var req = new HttpRequestMessage(HttpMethod.Put, BaseUrl + url)
        {
            Content = JsonContent.Create(body),
        };
        AddAuth(req);
        using var res = await Http.SendAsync(req);
        if (!res.IsSuccessStatusCode) throw await FailAsync(res);
        return await res.Content.ReadFromJsonAsync<T>(JsonOpts);
    }

    private async Task<T?> PostAsync<T>(string url, object body)
    {
        using var req = new HttpRequestMessage(HttpMethod.Post, BaseUrl + url)
        {
            Content = JsonContent.Create(body),
        };
        AddAuth(req);
        using var res = await Http.SendAsync(req);
        if (!res.IsSuccessStatusCode) throw await FailAsync(res);
        return await res.Content.ReadFromJsonAsync<T>(JsonOpts);
    }

    /// <summary>POST multipart/form-data（文件上传用）。</summary>
    public async Task<T?> PostAsync<T>(string url, HttpContent content)
    {
        using var req = new HttpRequestMessage(HttpMethod.Post, BaseUrl + url) { Content = content };
        AddAuth(req);
        using var res = await Http.SendAsync(req);
        if (!res.IsSuccessStatusCode) throw await FailAsync(res);
        return await res.Content.ReadFromJsonAsync<T>(JsonOpts);
    }

    /// <summary>
    /// 把失败响应转成带 code 的 <see cref="ApiException"/>：调用方据此分支
    /// （如扫卡被退回时区分"没认出答题卡"还是"考号没涂"），并把服务端的中文
    /// 提示原样显示给老师，而不是抛一串 "400: {"error":"…"}"。
    /// </summary>
    private static async Task<ApiException> FailAsync(HttpResponseMessage res)
    {
        var status = (int)res.StatusCode;
        var text = await res.Content.ReadAsStringAsync();
        try
        {
            using var doc = JsonDocument.Parse(text);
            var error = doc.RootElement.TryGetProperty("error", out var e) ? e.GetString() : null;
            var code = doc.RootElement.TryGetProperty("code", out var c) ? c.GetString() : null;
            if (!string.IsNullOrWhiteSpace(error)) return new ApiException(status, code, error!);
        }
        catch (JsonException) { /* 非 JSON 错误体：退回原文 */ }
        return new ApiException(status, null, string.IsNullOrWhiteSpace(text) ? $"HTTP {status}" : text);
    }

    private void AddAuth(HttpRequestMessage req)
    {
        if (!string.IsNullOrEmpty(Token))
            req.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", Token);
    }

    /// <summary>
    /// 打开内嵌网页前把登录态弄扎实：/auth/me 探一次，401 就用保存的凭据静默重登，再 401 才清空登录态。
    /// 返回 true 表示可以带着令牌打开网页；false 表示必须让用户重新登录。
    /// </summary>
    public async Task<bool> ValidateSessionAsync()
    {
        if (string.IsNullOrEmpty(Token)) return false;

        if (await MeOkAsync()) return true;

        // 令牌过期：有凭据就静默换新，成功即继续（这就是"扫卡自动登录"）
        await EnsureFreshTokenAsync(force: true);
        if (await MeOkAsync()) return true;

        // 凭据也没有或已失效（改密/被清）：清掉本地登录态，别让用户在网页登录页干瞪眼
        Logout();
        return false;
    }

    private async Task<bool> MeOkAsync()
    {
        try
        {
            using var req = new HttpRequestMessage(HttpMethod.Get, BaseUrl + "/api/v4/auth/me");
            AddAuth(req);
            using var res = await Http.SendAsync(req);
            return res.IsSuccessStatusCode;
        }
        catch
        {
            return false;   // 网络不通也算探不通，交由调用方提示
        }
    }
}

/// <summary>服务端返回的业务错误（含稳定 code，便于调用方分支处理）。</summary>
public sealed class ApiException(int status, string? code, string message) : Exception(message)
{
    public int Status { get; } = status;

    /// <summary>服务端错误码，如 sheet_not_recognized / student_ref_missing；旧接口可能为 null。</summary>
    public string? Code { get; } = code;
}

// ── DTO ──

public sealed class UserInfo
{
    public string Username { get; set; } = "";
    public string Role { get; set; } = "";
    /// <summary>所属区域（manager = 主区域/运营方）。</summary>
    public string Region { get; set; } = "";
    /// <summary>是否主区域账号（平台级功能据此显隐）。</summary>
    public bool IsManager { get; set; }
    /// <summary>角色并集得到的权限点（/auth/me 刷新后填充；旧登录快照可能为空）。</summary>
    public List<string> Permissions { get; set; } = [];

    /// <summary>
    /// 手写训练数据采集的准入：与网页端/客户端**同一口径**
    /// （仅主区域管理员的平台级入口：<c>isManager &amp;&amp; exams.manage</c>）。
    /// </summary>
    public bool CanUseTrainingCapture =>
        IsManager && (Permissions.Count == 0 || Permissions.Contains("exams.manage"));
}

internal sealed class LoginResponse
{
    public string Token { get; set; } = "";
    public string Username { get; set; } = "";
    public string Role { get; set; } = "";
    public string Region { get; set; } = "";
    public bool IsManager { get; set; }
}

/// <summary>扫码登录确认结果。</summary>
public sealed class QrScanAck
{
    public bool Ok { get; set; }
    public List<string> Identities { get; set; } = new();
    public bool NeedIdentity { get; set; }
}

public sealed class CheckInTaskItem
{
    public string TaskId { get; set; } = "";
    public string Name { get; set; } = "";
    public int CheckedCount { get; set; }
    public int TotalCount { get; set; }
}

public sealed class ScanResult
{
    public bool Success { get; set; }
    public string? Message { get; set; }
    public int? Rank { get; set; }
}

public sealed class ExamPaperItem
{
    public string Id { get; set; } = "";
    public string Title { get; set; } = "";
    public string? Subject { get; set; }
    public double TotalScore { get; set; }
    public int QuestionCount { get; set; }
    public int SubmissionCount { get; set; }
}

public sealed class SubmissionItem
{
    public string Id { get; set; } = "";
    public string? StudentId { get; set; }
    public string? StudentName { get; set; }
    public string? StudentRef { get; set; }
    public int Status { get; set; }
    public double? TotalScore { get; set; }
    public string? SubmittedAt { get; set; }
}

public sealed class QuestionResultItem
{
    public string QuestionId { get; set; } = "";
    public int Index { get; set; }
    public int Type { get; set; }
    public string? Content { get; set; }
    public string? StandardAnswer { get; set; }
    public double FullScore { get; set; }
    public string? RecognizedAnswer { get; set; }
    public double? Score { get; set; }
    public string? Comment { get; set; }
    public double? Confidence { get; set; }
    public string? Source { get; set; }
}

public sealed class ConfirmResult
{
    public double TotalScore { get; set; }
    public string? Status { get; set; }
}

public sealed class InviteRegionResult
{
    public string RegionId { get; set; } = "";
    public string RegionName { get; set; } = "";
    public bool HasCustom { get; set; }
    public string? CustomPrivacy { get; set; }
    public string? CustomPrivacyUpdatedAt { get; set; }
}

public sealed class SendCodeResult
{
    public string? Message { get; set; }
}

public sealed class RegisterResult
{
    public string? Message { get; set; }
    public string? Username { get; set; }
    public string? RegionId { get; set; }
    public string? LoginName { get; set; }
    public string? Role { get; set; }
    public string? Error { get; set; }
}

public sealed class CheckInRecordItem
{
    public string TaskId { get; set; } = "";
    public DateTime CheckedAt { get; set; }
    public string Source { get; set; } = "";
}

public sealed class DashboardData
{
    public int TotalDevices { get; set; }
    public int OnlineDevices { get; set; }
}

public sealed class ClassItem
{
    public string Id { get; set; } = "";
    public string Name { get; set; } = "";
    public string Grade { get; set; } = "";
}

// ── 手写训练数据采集（与 /api/v4/training/* 响应同构）──

/// <summary>训练卡扫回结果（服务端按卡片几何切出的行/字样本摘要）。</summary>
public sealed class TrainingScanResult
{
    public bool Located { get; set; }
    public string? Error { get; set; }
    public long CardNo { get; set; }
    public int Page { get; set; }
    public string? Paper { get; set; }
    public int Rotation { get; set; }
    public bool QrDecoded { get; set; }
    public int Saved { get; set; }
    public int AutoOk { get; set; }
    public int AutoBad { get; set; }
}

/// <summary>方格纸切格结果。</summary>
public sealed class PaperScanResult
{
    public bool Ok { get; set; }
    public string? Error { get; set; }
    public string? BatchKey { get; set; }
    public int Rows { get; set; }
    public int Cols { get; set; }
    public bool Detected { get; set; }
    public string? Geometry { get; set; }
    public int Saved { get; set; }
    public int Blank { get; set; }
    public int Pending { get; set; }
}

/// <summary>训练集统计（采集页给出"已经攒了多少"的正反馈）。</summary>
public sealed class TrainingStats
{
    public TrainingStatsSamples? Samples { get; set; }
    public int TrainedChars { get; set; }
    public int CharsetTotal { get; set; }
    public int CharsetTrained { get; set; }
    public double Coverage { get; set; }
    public double AvgTimes { get; set; }
    public double? Accuracy { get; set; }
}

public sealed class TrainingStatsSamples
{
    public int Total { get; set; }
    public int Pending { get; set; }
    public int Usable { get; set; }
    public int Bad { get; set; }
    public int Predicted { get; set; }
    public int Unrecognized { get; set; }
    public int Card { get; set; }
    public int Paper { get; set; }
}

// ── 家长端 DTO（与 /api/v4/parent/* 响应同构）──

public sealed class ParentChild
{
    public string BindingId { get; set; } = "";
    public string StudentId { get; set; } = "";
    /// <summary>服务端字段名是 name（不是 studentName）。</summary>
    public string Name { get; set; } = "";
    public string StudentNo { get; set; } = "";
    public string ClassName { get; set; } = "";
    public string? Alias { get; set; }

    /// <summary>家长给孩子起的别名优先，否则用学籍姓名。</summary>
    public string DisplayName => string.IsNullOrEmpty(Alias) ? Name : $"{Alias}（{Name}）";
}

public sealed class ParentMessage
{
    public string Id { get; set; } = "";
    public string? ClassId { get; set; }
    public string? StudentId { get; set; }
    public string ParentUserId { get; set; } = "";
    /// <summary>MessageSenderRole 枚举的数值：0=Teacher，1=Parent，2=System（服务端按数字序列化）。</summary>
    public int SenderRole { get; set; }
    public string SenderName { get; set; } = "";
    public string Content { get; set; } = "";
    public bool IsImage { get; set; }
    public DateTime CreatedAt { get; set; }

    /// <summary>是否家长本人发的（决定气泡靠右/靠左）。</summary>
    public bool IsMine => SenderRole == 1;
}

public sealed class ParentNotice
{
    public string Id { get; set; } = "";
    public string Title { get; set; } = "";
    public string Content { get; set; } = "";
    /// <summary>服务端字段名是 publishAt（发布时间），不是 createdAt。</summary>
    public DateTime PublishAt { get; set; }
    public bool IsRead { get; set; }
}

public sealed class ParentResource
{
    public string Id { get; set; } = "";
    public string Title { get; set; } = "";
    /// <summary>ResourceKind 枚举的数值：0=File，1=Image，2=Video，3=Link。</summary>
    public int Kind { get; set; }
    public string? Subject { get; set; }
    public DateTime CreatedAt { get; set; }
    /// <summary>相对下载地址，需拼 <see cref="ApiClient.ServerBaseUrl"/> 并带令牌。</summary>
    public string? DownloadUrl { get; set; }
}

public sealed class ParentDuty
{
    public int CompletedCount { get; set; }
    public int TotalCount { get; set; }
    public double CompletionRate { get; set; }
    public List<ParentDutyRecord> Records { get; set; } = [];
}

public sealed class ParentDutyRecord
{
    public DateTime Date { get; set; }
    public bool Completed { get; set; }
    public string? Note { get; set; }
    public string PostName { get; set; } = "值日";
}
