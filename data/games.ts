export type Platform = "mobile" | "pc" | "cross";

export type GameProject = {
  slug: string;
  title: string;
  tagline: string;
  genres: string[];
  platforms: Platform[];
  coverImage: string;
  screenshots: string[];
  videos?: { label: string; src: string }[];
  trailerEmbedUrl?: string;
  description: string;
  features: string[];
  publisher: string;
  storeLinks: { label: string; url: string }[];
  teamContribution: string;
  skillsDemonstrated: string[];
  hasLocalVideo: boolean;
  contributionPlaceholder?: boolean;
  imageCredit: string;
  sourceUrl: string;
};

export const games: GameProject[] = [
  {
    slug: "arena-of-dungeon-challengers",
    title: "Arena of Dungeon Challengers",
    tagline: "Roguelite ARPG in a Daoist comic world",
    genres: ["Roguelite", "Action", "ARPG"],
    platforms: ["mobile", "cross"],
    coverImage: "/games/arena-of-dungeon-challengers/cover.jpg",
    screenshots: [
      "/games/arena-of-dungeon-challengers/shot-1.jpg",
      "/games/arena-of-dungeon-challengers/shot-2.jpg",
    ],
    videos: [{ label: "Gameplay Reel", src: "/videos/arena-of-dungeon-challengers/main.mp4" }],
    trailerEmbedUrl: "https://www.youtube.com/embed/XvRFJ24jrsE",
    description: `Arena of Dungeon Challengers is an anime-style roguelite action game published by SUPER ESPORTS PTE.LTD. As ancient seals weaken during a lunar eclipse, the desire-devouring Dark Void spreads — and players, guided by Master Nanzi, must repair seals and uncover the truth behind the Demon Lord's return.

Every run combines divine souls, equipment, jades, and runes into unique builds across ever-changing dungeons. The "Eight Trigrams" mode offers battle-royale-style team play, while divination and daily elemental boosts add strategic depth before each encounter. The world is rendered in vibrant Chinese comic aesthetics with dynamic POV combat and Mandarin voice acting.`,
    features: [
      "Procedural roguelite runs with buildcrafting",
      "Eight Trigrams PvP and infinite challenge mode",
      "Chinese comic art direction and VO",
      "Divination buffs and elemental daily meta",
    ],
    publisher: "SUPER ESPORTS PTE.LTD.",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=cn.indieleague.zengeon.aodc",
      },
      {
        label: "Official Site",
        url: "https://aof.gitbook.io/arena-of-faith/faith-games/3.3-arena-of-dungeon-challengers",
      },
    ],
    teamContribution:
      "MegaMelon supported combat VFX, environment prop modeling, and UI flow for dungeon runs and the Eight Trigrams mode — optimizing assets for mobile while preserving comic-style readability.",
    skillsDemonstrated: ["3D Modeling", "VFX", "UI Design", "Mobile Optimization"],
    hasLocalVideo: true,
    imageCredit: "SUPER ESPORTS / Arena of Faith",
    sourceUrl: "https://play.google.com/store/apps/details?id=cn.indieleague.zengeon.aodc",
  },
  {
    slug: "three-kingdoms-kill",
    title: "Three Kingdoms Kill (三国杀)",
    tagline: "Classic strategy card battles of the Three Kingdoms",
    genres: ["Card", "Strategy", "Multiplayer"],
    platforms: ["mobile", "pc"],
    coverImage: "/games/three-kingdoms-kill/cover.jpg",
    screenshots: [
      "/games/three-kingdoms-kill/shot-1.jpg",
      "/games/three-kingdoms-kill/shot-2.jpg",
    ],
    videos: [{ label: "Gameplay Reel", src: "/videos/three-kingdoms-kill/main.mp4" }],
    description: `Three Kingdoms Kill (三国杀) is Hangzhou Yoka's landmark strategy card game blending history, literature, and art. Players assume iconic generals from the Three Kingdoms era, deduce hidden identities, and outwit opponents in modes ranging from 5-player Identity battles to 2v2 ranked duels and national war scenarios.

The mobile and PC experience features refreshed UI, trigger effects, general collection with skins, replay sharing, and modes including Happy Landlord, competitive tournaments, and AI practice — making it one of the most enduring card titles in Chinese gaming.`,
    features: [
      "Identity, 2v2 ranked, and national war modes",
      "Hundreds of generals with skins and schemes",
      "Replay storage and spectator channels",
      "Cross-play on mobile and Google Play Games PC",
    ],
    publisher: "Hangzhou Yoka Network Technology (游卡)",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.yoka.sgs",
      },
      { label: "Official Site", url: "https://www.sanguosha.com/" },
    ],
    teamContribution:
      "MegaMelon contributed card frame UI refresh concepts, general portrait polish passes, and animation timing for signature skill reveals in competitive modes.",
    skillsDemonstrated: ["2D Art", "UI Design", "Animation", "Card UX"],
    hasLocalVideo: true,
    imageCredit: "Yoka / Sanguosha",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.yoka.sgs",
  },
  {
    slug: "top-war-battle-game",
    title: "Top War: Battle Game",
    tagline: "Merge-to-upgrade strategy on land, sea, and air",
    genres: ["Strategy", "Merge", "4X"],
    platforms: ["mobile", "pc"],
    coverImage: "/games/top-war-battle-game/cover.jpg",
    screenshots: [
      "/games/top-war-battle-game/shot-1.jpg",
      "/games/top-war-battle-game/shot-2.jpg",
    ],
    videos: [
      { label: "PC", src: "/videos/top-war-battle-game/main.mp4" },
      { label: "Mobile", src: "/videos/top-war-battle-game/mobile.mp4" },
    ],
    trailerEmbedUrl: "https://www.youtube.com/embed/OL9KF5l6uG8",
    description: `Top War: Battle Game from RiverGame / Topwar Studio revolutionized mobile strategy with merge-to-upgrade mechanics — combine buildings, skills, or units to instantly level up without long timers. Commanders build island bases, recruit legendary heroes, and lead land, navy, and air forces against the Dark Legion.

Alliance play drives server-vs-server wars, Dark Forces raids, War Robots events, and weekly Capital Throne showdowns. The title ships on Android, iOS, and Windows via Google Play Games.`,
    features: [
      "Merge-anything instant upgrade loop",
      "Tri-service heroes and equipment",
      "Alliance wars and seasonal events",
      "Mobile and PC cross-platform play",
    ],
    publisher: "RiverGame / Topwar Studio",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.topwar.gp",
      },
      {
        label: "PC (Google Play Games)",
        url: "https://play.google.com/pc-store/games/details?id=com.topwar.gp",
      },
    ],
    teamContribution:
      "MegaMelon delivered base decoration 3D assets, merge feedback VFX, and HUD layout iterations for alliance war screens — tuned for clarity on both phone and PC resolutions.",
    skillsDemonstrated: ["3D Modeling", "VFX", "UI Design", "Cross-Platform"],
    hasLocalVideo: true,
    imageCredit: "RiverGame",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.topwar.gp",
  },
  {
    slug: "zgirls3",
    title: "Zgirls3",
    tagline: "Anime commanders in an AI apocalypse",
    genres: ["SLG", "Strategy", "Anime"],
    platforms: ["mobile", "pc"],
    coverImage: "/games/zgirls3/cover.jpg",
    screenshots: ["/games/zgirls3/shot-1.jpg", "/games/zgirls3/shot-2.jpg"],
    videos: [
      { label: "PC", src: "/videos/zgirls3/main.mp4" },
      { label: "Mobile", src: "/videos/zgirls3/mobile.mp4" },
    ],
    trailerEmbedUrl: "https://www.youtube.com/embed/5X77t23HbFY",
    description: `Zgirls3 is RiverGame's anime-style strategy title set during the Crisis of Artificial Intelligence. Commanders lead Zgirls defending Gakuen on the front line — combining Live2D performances, Japanese voice acting, strategic squad combat, and bio-combatant research across army, navy, and air branches.

Players unlock story CGs, build global alliances, and experience relationship-driven narrative where human connection becomes the strength to save a desolate world. The game launched on mobile and Microsoft's store ecosystem in late 2023.`,
    features: [
      "Live2D characters with Japanese VO",
      "Base-building and tri-service research",
      "Story CGs and commander relationships",
      "Global alliances and cross-region play",
    ],
    publisher: "RiverGame",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.starring.zgirls5",
      },
    ],
    teamContribution:
      "MegaMelon produced character costume variants, Live2D-ready illustration layers, and gacha screen UI for commander recruitment flows.",
    skillsDemonstrated: ["2D Art", "Live2D Prep", "UI Design", "Character Design"],
    hasLocalVideo: true,
    imageCredit: "RiverGame",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.starring.zgirls5",
  },
  {
    slug: "warm-snow",
    title: "Warm Snow (暖雪)",
    tagline: "Dark fantasy roguelite of sword and snow",
    genres: ["Roguelite", "Action", "Dark Fantasy"],
    platforms: ["mobile", "pc"],
    coverImage: "/games/warm-snow/cover.jpg",
    screenshots: ["/games/warm-snow/shot-1.jpg", "/games/warm-snow/shot-2.jpg"],
    trailerEmbedUrl: "https://www.youtube.com/embed/bTbicbXM2aw",
    description: `Warm Snow is BadMud Studio's roguelike action game published by Microids and Bilibili Games. In the 27th year of the Longwu Era, warm snow that does not melt drives people mad — warrior Bi-an crusades against the Five Great Clans to end the endless darkness.

Six sects, relics, and excaliburs enable countless build combinations. A flying sword system delivers critical strikes between shadow and light, while Memory Fragments reveal lore across runs. Available on Steam, consoles, and mobile.`,
    features: [
      "Chinese dark-fantasy narrative",
      "Flying sword combat system",
      "Six sects and relic build variety",
      "Steam, console, and mobile ports",
    ],
    publisher: "BadMud Studio / Microids / Bilibili",
    storeLinks: [
      {
        label: "Steam",
        url: "https://store.steampowered.com/app/1296830/_Warm_Snow/",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.bilibilihk.warmsnowgp",
      },
    ],
    teamContribution:
      "MegaMelon assisted with promotional key art layout, boss encounter VFX concepts, and UI mockups for the mobile control scheme — aligned with ink-wash visual language.",
    skillsDemonstrated: ["VFX Concepts", "2D Art", "UI Design"],
    hasLocalVideo: false,
    contributionPlaceholder: true,
    imageCredit: "BadMud Studio / Microids",
    sourceUrl: "https://store.steampowered.com/app/1296830/_Warm_Snow/",
  },
  {
    slug: "foretales",
    title: "Foretales",
    tagline: "Hand-painted card fables where choices matter",
    genres: ["Card", "Narrative", "Strategy"],
    platforms: ["mobile"],
    coverImage: "/games/foretales/cover.jpg",
    screenshots: ["/games/foretales/shot-1.jpg", "/games/foretales/shot-2.jpg"],
    trailerEmbedUrl: "https://www.youtube.com/embed/RwbGGwun-PY",
    description: `Foretales is a story-driven card game where you play Volepain, a thief burdened by visions of the world's end. Alongside animal companions, every encounter branches through diplomacy, stealth, or combat — with fully voiced characters and hand-painted art directed by Christophe Héral (Rayman Legends).

Tactical turn-based mechanics avoid grind and randomness; premium offline play with no ads or IAPs makes it a standout narrative card experience on iOS.`,
    features: [
      "Branching storylines and multiple endings",
      "Meaningful deck-building choices",
      "Hand-painted art and full voice acting",
      "Premium offline experience",
    ],
    publisher: "Dear Villagers / Plug In Digital",
    storeLinks: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/foretales/id6743491591",
      },
    ],
    teamContribution:
      "MegaMelon supported card illustration cleanup, UI typography for dialogue trees, and localization-ready layout grids for branching narrative screens.",
    skillsDemonstrated: ["2D Art", "UI Design", "Narrative UX"],
    hasLocalVideo: false,
    contributionPlaceholder: true,
    imageCredit: "Dear Villagers",
    sourceUrl: "https://apps.apple.com/us/app/foretales/id6743491591",
  },
  {
    slug: "kingdom-guard",
    title: "Kingdom Guard",
    tagline: "Merge towers and defend your realm",
    genres: ["Merge", "Tower Defense", "Strategy"],
    platforms: ["mobile"],
    coverImage: "/games/kingdom-guard/cover.jpg",
    screenshots: [
      "/games/kingdom-guard/shot-1.jpg",
      "/games/kingdom-guard/shot-2.jpg",
    ],
    description: `Kingdom Guard from Tap4Fun blends merge mechanics with tower defense and strategy meta — players combine units and defenses on the grid to repel waves while expanding kingdom progression. The merge loop lowers friction compared to classic 4X timers, making it accessible while retaining mid-core depth.

Hero collection, alliance systems, and seasonal events mirror the hybrid-casual strategy wave popularized by merge-forward SLGs, with polished cartoon-fantasy presentation.`,
    features: [
      "Merge-to-upgrade tower defense",
      "Hero collection and grid tactics",
      "Alliance and seasonal events",
      "Accessible hybrid-casual strategy",
    ],
    publisher: "Tap4Fun",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.tap4fun.odin.kingdomguard",
      },
    ],
    teamContribution:
      "MegaMelon created tower merge VFX, enemy wave telegraphing UI, and stylized environment tiles for early kingdom chapters.",
    skillsDemonstrated: ["VFX", "UI Design", "3D Modeling"],
    hasLocalVideo: false,
    contributionPlaceholder: true,
    imageCredit: "Tap4Fun",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.tap4fun.odin.kingdomguard",
  },
  {
    slug: "figure-fantasy",
    title: "Figure Fantasy",
    tagline: "3D figurine collectors in miniature battles",
    genres: ["Idle", "RPG", "Strategy"],
    platforms: ["mobile"],
    coverImage: "/games/figure-fantasy/cover.jpg",
    screenshots: [
      "/games/figure-fantasy/shot-1.jpg",
      "/games/figure-fantasy/shot-2.jpg",
    ],
    description: `Figure Fantasy is a 3D idle RPG where players become masters of anime-style figurines in a miniature world. PBR rendering recreates material textures and light refraction; hundreds of collectibles deploy on a 3×3 grid with positional cover and ultimate animations.

Custom display cabinets, gacha unboxing, and five brand factions (Defenders, Vanguards, Militarists, Helpers, Specialists) deliver strategic depth in an "anime Toy Story" presentation from Komoe / Bilibili.`,
    features: [
      "PBR figurine rendering",
      "3×3 grid tactical battles",
      "Display cabinet customization",
      "Gacha collection and idle progression",
    ],
    publisher: "Komoe Technology / Bilibili",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.komoe.fsgp",
      },
    ],
    teamContribution:
      "MegaMelon modeled figurine base platforms, battle grid materials, and gacha reveal animation timing for premium unboxing moments.",
    skillsDemonstrated: ["3D Modeling", "PBR Materials", "Animation"],
    hasLocalVideo: false,
    contributionPlaceholder: true,
    imageCredit: "Komoe / Bilibili",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.komoe.fsgp",
  },
];

export function getGameBySlug(slug: string): GameProject | undefined {
  return games.find((g) => g.slug === slug);
}

export function getAllSlugs(): string[] {
  return games.map((g) => g.slug);
}

export const genreFilters = [
  "All",
  "Roguelite",
  "Strategy",
  "Card",
  "Action",
  "SLG",
] as const;

export type GenreFilter = (typeof genreFilters)[number];

export function filterGamesByGenre(filter: GenreFilter): GameProject[] {
  if (filter === "All") return games;
  return games.filter((g) =>
    g.genres.some((genre) => genre.toLowerCase().includes(filter.toLowerCase())),
  );
}
