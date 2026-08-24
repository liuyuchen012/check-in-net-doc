[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = 'Stop'

$files = Get-ChildItem 'C:\Users\liuyu\Desktop\*\check-in-net\*.svg'
$i = 0
foreach ($f in $files) {
    $i++
    $content = [System.IO.File]::ReadAllText($f.FullName)
    $utf8 = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText("$PSScriptRoot\svg-dump-$i.txt", $content, $utf8)
    Write-Output "Dumped $($f.Name) -> svg-dump-$i.txt ($($content.Length) chars)"
}

foreach ($name in @('favicon.svg','logo.svg')) {
    $p = "$PSScriptRoot\public\$name"
    if (Test-Path $p) {
        $content = [System.IO.File]::ReadAllText($p)
        $utf8 = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText("$PSScriptRoot\svg-dump-public-$name.txt", $content, $utf8)
        Write-Output "Dumped public/$name -> svg-dump-public-$name.txt"
    }
}
