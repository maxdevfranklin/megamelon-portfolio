"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { GameProject } from "@/data/games";
import { FantasyFrame } from "./FantasyFrame";

const platformLabels: Record<string, string> = {
  mobile: "Mobile",
  pc: "PC",
  cross: "Cross",
};

export function GameCard({ game }: { game: GameProject }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <FantasyFrame className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={game.coverImage}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
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
          <Link
            href={`/projects/${game.slug}`}
            className="btn-fantasy-outline mt-4 w-full text-center text-xs"
          >
            View Project
          </Link>
        </div>
      </FantasyFrame>
    </motion.article>
  );
}
