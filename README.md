# MegaMelon — Fantasy Game Portfolio

A Next.js portfolio showcasing MegaMelon's game development work across mobile and PC titles.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS 4** + Framer Motion
- Static content in `data/`

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

| Path | Purpose |
|------|---------|
| `app/` | Pages: home, `/projects`, `/projects/[slug]` |
| `components/` | UI: cards, video player, fantasy frames |
| `data/games.ts` | All 8 game entries (copy, links, media paths) |
| `public/games/` | Cover images and screenshots |
| `public/videos/` | Web-ready gameplay clips |
| `assets/` | Your original full-size videos (gitignored) |

## Videos (required before deploy)

Raw files in `assets/` are **~1 GB** and are not committed. Compress them into `public/videos/`:

1. Install [FFmpeg](https://ffmpeg.org/download.html) (or `winget install Gyan.FFmpeg`).
2. Run:

```bash
npm run compress-videos
```

This creates 720p H.264 clips (~60–90s) suitable for Vercel. Without FFmpeg, only files under 30 MB are copied (Three Kingdoms Kill, Top War PC).

Games with local video also show a **YouTube trailer** fallback when clips are missing.

## Images

Refresh store art:

```powershell
powershell -ExecutionPolicy Bypass -File ./scripts/download-images.ps1
```

## Deploy to Vercel

1. Push the repo to GitHub (exclude `assets/` — already in `.gitignore`).
2. Import the project at [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (default).
4. Deploy.

Or use the CLI:

```bash
npx vercel
```

Ensure `public/videos/` contains compressed clips before deploying if you want on-site playback for all four asset games.

## Editing content

- **Games:** `data/games.ts` — titles, descriptions, store links, `teamContribution`.
- **Team:** `data/team.ts` — bios and process steps.
- **Skills:** `data/skills.ts` — capability cards.

Replace `contributionPlaceholder: true` entries with confirmed credits before going live.

## License note

Game imagery and trademarks belong to their respective publishers. This site is a portfolio showcase with attribution on each project page.
