"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { isGamePublished, type GameProject } from "@/data/games";
import { FantasyFrame } from "./FantasyFrame";

const platformLabels: Record<string, string> = {
  mobile: "Mobile",
  pc: "PC",
  cross: "Cross",
};

export function GameCard({ game }: { game: GameProject }) {
  const published = isGamePublished(game.slug);

  return (
    <motion.article
      whileHover={published ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <FantasyFrame className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={game.coverImage}
            alt={game.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              published ? "hover:scale-105" : "opacity-75 saturate-[0.85]"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          {!published && (
            <div className="absolute inset-0 flex items-center justify-center bg-void/40 backdrop-blur-[1px]">
              <span className="rounded-sm border border-gold-dim/50 bg-void/90 px-3 py-1 font-display text-[10px] tracking-[0.2em] text-gold uppercase">
                Coming Soon
              </span>
            </div>
          )}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {game.platforms.map((p) => (
              <span
                key={p}
                className="rounded-sm border border-gold-dim/50 bg-void/80 px-2 py-0.5 text-[10px] tracking-wider text-gold uppercase"
              >
                {platformLabels[p]}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex flex-wrap gap-2">
            {game.genres.slice(0, 2).map((genre) => (
              <span key={genre} className="text-[10px] tracking-wide text-mist uppercase">
                {genre}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg text-parchment">{game.title}</h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm text-parchment-dim">{game.tagline}</p>
          {published ? (
            <Link
              href={`/projects/${game.slug}`}
              className="btn-fantasy-outline mt-4 w-full text-center text-xs"
            >
              View Project
            </Link>
          ) : (
            <div
              className="mt-4 rounded-sm border border-gold-dim/25 bg-void-light/50 px-4 py-4 text-center"
              aria-label={`${game.title} — coming soon`}
            >
              <p className="font-display text-xs tracking-[0.2em] text-gold uppercase">
                Coming Soon
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-mist">
                It is not completed yet.
              </p>
            </div>
          )}
        </div>
      </FantasyFrame>
    </motion.article>
  );
}
