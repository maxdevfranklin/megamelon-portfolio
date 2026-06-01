import fs from "fs";
import path from "path";

export function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

export function filterExistingVideos(
  videos?: { label: string; src: string }[],
): { label: string; src: string }[] {
  if (!videos) return [];
  return videos.filter((v) => publicFileExists(v.src));
}
