# Compresses assets/*.mp4 into public/videos/{slug}/ for web deploy
$ErrorActionPreference = "Continue"
$root = Split-Path -Parent $PSScriptRoot
$assets = Join-Path $root "assets"
$outRoot = Join-Path $root "public\videos"

$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpeg) {
    Write-Host "ffmpeg not found. Copying files under 30 MB as-is."
}

$jobs = @(
    @{
        inputPath  = Join-Path $assets "Arena of Dungeon challenges\Arena of Dungeon Challengers.mp4"
        outputPath = Join-Path $outRoot "arena-of-dungeon-challengers\main.mp4"
        sec = 60
    },
    @{
        inputPath  = Join-Path $assets "Three kindoms kill\three kindoms kill.mp4"
        outputPath = Join-Path $outRoot "three-kingdoms-kill\main.mp4"
        sec = 120
    },
    @{
        inputPath  = Join-Path $assets "Top War battle game\Top War battle game.mp4"
        outputPath = Join-Path $outRoot "top-war-battle-game\main.mp4"
        sec = 120
    },
    @{
        inputPath  = Join-Path $assets "Top War battle game\Top War battle game mobile.mp4"
        outputPath = Join-Path $outRoot "top-war-battle-game\mobile.mp4"
        sec = 60
    },
    @{
        inputPath  = Join-Path $assets "Zgirls3\zgirls3.mp4"
        outputPath = Join-Path $outRoot "zgirls3\main.mp4"
        sec = 60
    },
    @{
        inputPath  = Join-Path $assets "Zgirls3\zgirls3 mobile.mp4"
        outputPath = Join-Path $outRoot "zgirls3\mobile.mp4"
        sec = 60
    }
)

foreach ($job in $jobs) {
    if (-not (Test-Path $job.inputPath)) {
        Write-Warning "Missing: $($job.inputPath)"
        continue
    }

    $outDir = Split-Path $job.outputPath -Parent
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    }

    $sizeMb = [math]::Round((Get-Item $job.inputPath).Length / 1MB, 1)
    Write-Host "$sizeMb MB -> $($job.outputPath)"

    if ($ffmpeg) {
        & ffmpeg -y -i $job.inputPath -t $job.sec -vf "scale=-2:720" -c:v libx264 -crf 28 -preset fast -an -movflags +faststart $job.outputPath
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "ffmpeg failed for $($job.inputPath)"
        }
    }
    elseif ($sizeMb -le 30) {
        Copy-Item $job.inputPath $job.outputPath -Force
        Write-Host "  Copied (no ffmpeg)."
    }
    else {
        Write-Warning "  Skipped $sizeMb MB file. Install ffmpeg and re-run: npm run compress-videos"
    }
}

Write-Host "Done."
