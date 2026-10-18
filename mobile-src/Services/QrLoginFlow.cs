namespace AgoraIn.Mobile.Services;

/// <summary>
/// 网页端「App 扫码登录」的共享流程：二维码载荷解析 + 确认提交。
/// 入口两处：签到页扫码（顺带识别到登录码就转确认）与专用页 <c>WebLoginScanPage</c>。
/// 服务端契约：<c>/api/v4/auth/qr/scan</c>（**需已登录**；家长账号一律 401，与"登录失败"一致不泄露原因）。
/// </summary>
public static class QrLoginFlow
{
    /// <summary>载荷形如 <c>https://…/qr-login?sid=…&amp;nonce=…</c> 或 <c>{"t":"agorain-qr-login","s":"…","n":"…"}</c>。</summary>
    public static bool TryParse(string raw, out string sessionId, out string nonce)
    {
        sessionId = ""; nonce = "";
        if (string.IsNullOrWhiteSpace(raw)) return false;
        if (raw.IndexOf("qr-login", StringComparison.OrdinalIgnoreCase) < 0
            && raw.IndexOf("agorain-qr-login", StringComparison.OrdinalIgnoreCase) < 0)
            return false;
        sessionId = ExtractParam(raw, "sid");
        nonce = ExtractParam(raw, "nonce");
        if (string.IsNullOrEmpty(sessionId) || string.IsNullOrEmpty(nonce))
        {
            // JSON 载荷：{"t":"agorain-qr-login","s":"...","n":"..."}
            sessionId = ExtractJsonField(raw, "\"s\"");
            nonce = ExtractJsonField(raw, "\"n\"");
        }
        return !string.IsNullOrEmpty(sessionId) && !string.IsNullOrEmpty(nonce);
    }

    /// <summary>
    /// 提交确认；返回给用户看的一句话结果。
    /// 复合角色（如 教师-班主任）会先让用户选身份 —— <paramref name="pickIdentity"/> 由页面提供
    /// （一般是 DisplayActionSheet，取消返回 null/"取消"）。
    /// </summary>
    public static async Task<string> ConfirmAsync(string sessionId, string nonce,
        Func<string[], Task<string?>> pickIdentity)
    {
        try
        {
            var ack = await App.Api.ConfirmQrLoginAsync(sessionId, nonce);
            if (ack == null) return "该账号不能用于电脑端扫码登录（仅教师与管理员）";

            if (ack.NeedIdentity && ack.Identities.Count > 1)
            {
                var choice = await pickIdentity(ack.Identities.ToArray());
                if (string.IsNullOrEmpty(choice) || choice == "取消")
                    return "已取消身份选择（电脑端本次未登录）";
                await App.Api.ConfirmQrLoginAsync(sessionId, nonce, choice);
                return $"已确认使用「{choice}」登录电脑端";
            }
            return "已确认，请在电脑上继续";
        }
        catch (Exception ex)
        {
            // 401（家长 / 非教师类角色）与服务端登录失败文案保持一致，不暴露"家长禁止扫码"这类内部原因
            var unauthorized = ex.Message.Contains("401") || ex.Message.Contains("Unauthorized");
            return unauthorized
                ? "该账号不能用于电脑端扫码登录（仅教师与管理员）"
                : $"确认失败：{ex.Message}";
        }
    }

    private static string ExtractParam(string raw, string key)
    {
        var idx = raw.IndexOf(key + "=", StringComparison.OrdinalIgnoreCase);
        if (idx < 0) return "";
        var v = raw[(idx + key.Length + 1)..];
        var amp = v.IndexOf('&');
        return amp >= 0 ? v[..amp] : v.Trim('"', ' ', '}');
    }

    private static string ExtractJsonField(string raw, string quotedKey)
    {
        var idx = raw.IndexOf(quotedKey, StringComparison.OrdinalIgnoreCase);
        if (idx < 0) return "";
        var colon = raw.IndexOf(':', idx);
        if (colon < 0) return "";
        var v = raw[(colon + 1)..].TrimStart();
        if (v.StartsWith("\""))
        {
            var end = v.IndexOf('"', 1);
            return end > 1 ? v[1..end] : "";
        }
        return v.Trim('"', '}', ' ');
    }
}
