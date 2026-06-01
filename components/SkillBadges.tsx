import { skills } from "@/data/skills";
import { FantasyFrame } from "./FantasyFrame";

const iconMap: Record<string, string> = {
  brush: "✦",
  cube: "◆",
  sword: "⚔",
  gear: "⚙",
  crown: "♛",
  scroll: "☙",
};

export function SkillBadges() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <FantasyFrame key={skill.id}>
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold-dim bg-void text-xl text-gold">
              {iconMap[skill.icon] ?? "•"}
            </span>
            <div>
              <h3 className="font-display text-sm tracking-wide text-gold uppercase">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-parchment-dim">
                {skill.description}
              </p>
            </div>
          </div>
        </FantasyFrame>
      ))}
    </div>
  );
}
