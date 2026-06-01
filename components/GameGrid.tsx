"use client";

import { useState } from "react";
import { filterGamesByGenre, genreFilters, type GenreFilter } from "@/data/games";
import { GameCard } from "./GameCard";

export function GameGrid({ showFilters = true }: { showFilters?: boolean }) {
  const [filter, setFilter] = useState<GenreFilter>("All");
  const filtered = filterGamesByGenre(filter);

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2">
          {genreFilters.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setFilter(g)}
              className={`rounded-sm border px-4 py-2 font-display text-xs tracking-widest uppercase transition-colors ${
                filter === g
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-gold-dim/40 text-parchment-dim hover:border-gold hover:text-gold"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-parchment-dim">No projects match this filter.</p>
      )}
    </div>
  );
}
