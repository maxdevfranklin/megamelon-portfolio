import type { Metadata } from "next";
import { GameGrid } from "@/components/GameGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "MegaMelon portfolio — fantasy mobile and PC game projects.",
};

export default function ProjectsPage() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="section-title gold-text">Project Archives</h1>
        <p className="mt-4 max-w-2xl text-parchment-dim">
          Explore our work across roguelite action, strategy cards, merge 4X, and anime
          commanders. Select a chronicle for gameplay footage and craft notes.
        </p>
        <div className="mt-12">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}
