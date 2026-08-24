[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = 'Stop'

$files = Get-ChildItem 'C:\Users\liuyu\Desktop\*\check-in-net\*.svg'
foreach ($f in $files) {
    Write-Output "===== $($f.Name) ====="
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    if ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xFE) { Write-Output "Encoding: UTF-16 LE (BOM)" }
    elseif ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFE -and $bytes[1] -eq 0xFF) { Write-Output "Encoding: UTF-16 BE (BOM)" }
    elseif ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) { Write-Output "Encoding: UTF-8 (BOM)" }
    else { Write-Output "Encoding: unknown / no BOM" }
    $content = [System.IO.File]::ReadAllText($f.FullName)
    Write-Output ("Size: {0} bytes, Chars: {1}" -f $f.Length, $content.Length)
    $lines = $content -split "`n"
    Write-Output ("Lines: {0}" -f $lines.Count)
    Write-Output "--- First 15 lines (truncated to 220 chars) ---"
    for ($i = 0; $i -lt [Math]::Min(15, $lines.Count); $i++) {
        $line = $lines[$i].TrimEnd("`r")
        if ($line.Length -gt 220) { $line = $line.Substring(0, 220) + '...[truncated]' }
        Write-Output ("{0,4}: {1}" -f ($i + 1), $line)
    }
    Write-Output "--- Tag counts ---"
    $tags = [regex]::Matches($content, '<([a-zA-Z0-9]+)([ >])') | ForEach-Object { $_.Groups[1].Value } | Group-Object | Sort-Object Count -Descending
    $tags | ForEach-Object { Write-Output ("  {0}: {1}" -f $_.Name, $_.Count) }
    $gMatches = [regex]::Matches($content, '<g[^>]*>')
    Write-Output ("--- <g> elements: {0} (first 25) ---" -f $gMatches.Count)
    $shown = 0
    foreach ($m in $gMatches) {
        $s = $m.Value
        if ($s.Length -gt 220) { $s = $s.Substring(0, 220) + '...' }
        Write-Output $s
        $shown++
        if ($shown -ge 25) { break }
    }
    $idMatches = [regex]::Matches($content, 'id="([^"]+)"')
    Write-Output ("--- id attributes: {0} (first 25) ---" -f $idMatches.Count)
    $shown = 0
    foreach ($m in $idMatches) {
        Write-Output ("  id={0}" -f $m.Groups[1].Value)
        $shown++
        if ($shown -ge 25) { break }
    }
    Write-Output ""
}
