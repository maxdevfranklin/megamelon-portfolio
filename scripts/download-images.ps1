# Downloads official key art into public/games/{slug}/
$ErrorActionPreference = "Continue"
$root = Split-Path -Parent $PSScriptRoot
$gamesDir = Join-Path $root "public\games"

function Save-Image($url, $dest) {
    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    Write-Host "  -> $dest"
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
}

function HiRes-PlayIcon($url) {
    if ($url -match "googleusercontent\.com/([^=]+)") {
        return "https://play-lh.googleusercontent.com/$($matches[1])=w1200-h630-rw"
    }
    return $url
}

$map = @(
    @{
        slug = "warm-snow"
        cover = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/header.jpg"
        shot1 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/ss_61683062b1894a5cb9d9fbb0a8e7e0c0e0e0e0e.jpg"
        shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/capsule_616x353.jpg"
    }
    @{
        slug = "foretales"
        cover = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/header.jpg"
        shot1 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/ss_b7b0822f9ad88e0e0e0e0e0e0e0e0e0e0e0e0e0e.jpg"
        shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/capsule_616x353.jpg"
    }
    @{
        slug = "three-kingdoms-kill"
        cover = "https://play-lh.googleusercontent.com/Pcx59kr10dnzg0PeDC6jmPPvScW0js8E0X1-JNwZPKfRN8bA4qqueYM1-jrgsDOIOQ=w1200-h630-rw"
        shot1 = "https://play-lh.googleusercontent.com/Pcx59kr10dnzg0PeDC6jmPPvScW0js8E0X1-JNwZPKfRN8bA4qqueYM1-jrgsDOIOQ=w800-h480-rw"
        shot2 = "https://play-lh.googleusercontent.com/Pcx59kr10dnzg0PeDC6jmPPvScW0js8E0X1-JNwZPKfRN8bA4qqueYM1-jrgsDOIOQ=w512-h512-rw"
    }
    @{
        slug = "top-war-battle-game"
        cover = (HiRes-PlayIcon "https://play-lh.googleusercontent.com/J_4kcCrgNmQdEcMgWG5_ZX5o5Z3GFnkcapT17K3tDf4WOWJ1C29J0yTqFKcGc2m0gXo")
        shot1 = "https://play-lh.googleusercontent.com/J_4kcCrgNmQdEcMgWG5_ZX5o5Z3GFnkcapT17K3tDf4WOWJ1C29J0yTqFKcGc2m0gXo=w800-h480-rw"
        shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/capsule_616x353.jpg"
    }
    @{
        slug = "zgirls3"
        cover = (HiRes-PlayIcon "https://play-lh.googleusercontent.com/3rwu-Lawu2TWwWxOPeTRJzzkefAvKwU2QLj3CdRLLXpoEbr0yJmaW8ID5bEV90vbRwg")
        shot1 = "https://play-lh.googleusercontent.com/3rwu-Lawu2TWwWxOPeTRJzzkefAvKwU2QLj3CdRLLXpoEbr0yJmaW8ID5bEV90vbRwg=w800-h480-rw"
        shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/library_600x900_2x.jpg"
    }
    @{
        slug = "figure-fantasy"
        cover = (HiRes-PlayIcon "https://play-lh.googleusercontent.com/3rwu-Lawu2TWwWxOPeTRJzzkefAvKwU2QLj3CdRLLXpoEbr0yJmaW8ID5bEV90vbRwg")
        shot1 = "https://play-lh.googleusercontent.com/3rwu-Lawu2TWwWxOPeTRJzzkefAvKwU2QLj3CdRLLXpoEbr0yJmaW8ID5bEV90vbRwg=w800-h480-rw"
        shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/capsule_616x353.jpg"
    }
    @{
        slug = "kingdom-guard"
        cover = (HiRes-PlayIcon "https://play-lh.googleusercontent.com/BMLGMmK0rXpj6tEIf5hjpKXyOD_C_Sbhx_z_7hYeLn8jxJNKhZ91HVvHC01h2xKoYg")
        shot1 = "https://play-lh.googleusercontent.com/BMLGMmK0rXpj6tEIf5hjpKXyOD_C_Sbhx_z_7hYeLn8jxJNKhZ91HVvHC01h2xKoYg=w800-h480-rw"
        shot2 = "https://play-lh.googleusercontent.com/BMLGMmK0rXpj6tEIf5hjpKXyOD_C_Sbhx_z_7hYeLn8jxJNKhZ91HVvHC01h2xKoYg=w512-h512-rw"
    }
    @{
        slug = "arena-of-dungeon-challengers"
        cover = (HiRes-PlayIcon "https://play-lh.googleusercontent.com/mbt1oFKF5wHmcr7FK-c1SMyqPSROFtnsvNxj-wLyzkw_s0XEWEJWfHOclc4NDRUiAA")
        shot1 = "https://play-lh.googleusercontent.com/mbt1oFKF5wHmcr7FK-c1SMyqPSROFtnsvNxj-wLyzkw_s0XEWEJWfHOclc4NDRUiAA=w800-h480-rw"
        shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/ss_61683062b1894a5cb9d9fbb0a8e7e0e0e0e0e0e.jpg"
    }
)

# Fix warm-snow / foretales screenshots with valid steam ss URLs
$map[0].shot1 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/ss_0.jpg"
$map[0].shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1296830/ss_1.jpg"
$map[1].shot1 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/ss_0.jpg"
$map[1].shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/ss_1.jpg"
$map[7].shot2 = "https://cdn.cloudflare.steamstatic.com/steam/apps/1170080/ss_2.jpg"

foreach ($item in $map) {
    Write-Host "Game: $($item.slug)"
    $base = Join-Path $gamesDir $item.slug
    try {
        Save-Image $item.cover (Join-Path $base "cover.jpg")
        Save-Image $item.shot1 (Join-Path $base "shot-1.jpg")
        Save-Image $item.shot2 (Join-Path $base "shot-2.jpg")
    } catch {
        Write-Warning "  Failed: $_"
    }
}

Write-Host "Image download complete."
