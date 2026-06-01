export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const teamTagline =
  "Forging realms where strategy, spectacle, and soul meet — from ink-wash roguelites to alliance-scale wars.";

export const workSection = {
  title: "Live Games, Global Teams",
  lead: "MegaMelon partners with publishers on shipped mobile and PC titles — art, UI, and VFX inside games players can download today.",
  paragraphs: [
    "Recent work runs through studios most players already know: RiverGame on merge strategy and anime SLG, Yoka on Three Kingdoms Kill, SUPER ESPORTS on Arena of Dungeon Challengers, plus production support on Tap4Fun, Bilibili/Komoe, BadMud, and Dear Villagers releases. We are usually brought in for a defined slice — card frames, alliance-war HUD, dungeon VFX, Live2D-ready character layers — and we build to their engine constraints and live-ops schedule."
  ],
  highlights: [
    { label: "Documented titles", value: "8" },
    { label: "Stores", value: "Google Play · App Store · Steam" },
    { label: "What we ship", value: "2D/3D art · UI · VFX" },
  ],
};

export const teamStory = `MegaMelon is a fantasy-focused game development collective with roots in mobile and PC shipping. We partner with publishers and studios on art production, core loops, and live content — bringing Daoist dungeons, Three Kingdoms card tables, and anime command centers to life with craft and clarity.

Our reel spans roguelite action, merge strategy, collectible card systems, and squad-based SLGs. Whether you need a vertical slice or a full season of content, we build for players first and polish for launch day.`;

export const teamMembers: TeamMember[] = [
  {
    id: "lead",
    name: "Studio Lead",
    role: "Creative Director",
    bio: "Sets visual direction and narrative tone across fantasy and anime-forward titles.",
  },
  {
    id: "art",
    name: "Art Director",
    role: "2D / 3D Production",
    bio: "Leads character, environment, and UI pipelines from concept to in-engine assets.",
  },
  {
    id: "design",
    name: "Systems Designer",
    role: "Gameplay & Balance",
    bio: "Designs roguelite metas, merge economies, and card-mode rule sets for retention.",
  },
  {
    id: "eng",
    name: "Technical Lead",
    role: "Engineering",
    bio: "Ships performant clients on Unity with tooling for rapid iteration and live patches.",
  },
];

export const processSteps = [
  { title: "Discover", detail: "Genre research, reference boards, and scope aligned to platform." },
  { title: "Forge", detail: "Prototypes, art passes, and vertical slices with measurable KPIs." },
  { title: "Battle-test", detail: "QA, balance sweeps, and soft-launch telemetry review." },
  { title: "Ascend", detail: "Global launch support, seasonal content, and live-ops cadence." },
];
