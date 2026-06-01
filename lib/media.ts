import fs from "fs";
import path from "path";

export function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

export type GameplayVideoEntry = {
  label: string;
  src: string;
  description: string;
};

export function filterExistingVideos(
  videos?: GameplayVideoEntry[],
): GameplayVideoEntry[] {
  if (!videos) return [];
  return videos.filter((v) => publicFileExists(v.src));
}
