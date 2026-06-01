export type Skill = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const skills: Skill[] = [
  {
    id: "2d-art",
    title: "2D Art & UI",
    description:
      "Character sheets, comic-style worlds, HUD design, and marketing creatives for mobile and PC.",
    icon: "brush",
  },
  {
    id: "3d-modeling",
    title: "3D Modeling",
    description:
      "Hero sculpts, environment props, PBR materials, and optimized meshes for real-time engines.",
    icon: "cube",
  },
  {
    id: "gameplay",
    title: "Gameplay Systems",
    description:
      "Roguelite builds, merge loops, card combat rules, and progression tuning across live titles.",
    icon: "sword",
  },
  {
    id: "engineering",
    title: "Client Engineering",
    description:
      "Unity and Unreal pipelines, performance profiling, and cross-platform builds for iOS, Android, and PC.",
    icon: "gear",
  },
  {
    id: "live-ops",
    title: "Live Ops",
    description:
      "Seasonal events, economy balancing, A/B feature rollout, and analytics-driven iteration.",
    icon: "crown",
  },
  {
    id: "narrative",
    title: "Narrative Design",
    description:
      "Fantasy lore bibles, quest arcs, VO direction, and localization-ready story documentation.",
    icon: "scroll",
  },
];
