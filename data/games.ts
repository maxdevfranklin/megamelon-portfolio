export type Platform = "mobile" | "pc" | "cross";

export type GameProject = {
  slug: string;
  title: string;
  tagline: string;
  genres: string[];
  platforms: Platform[];
  coverImage: string;
  screenshots: string[];
  videos?: { label: string; src: string; description: string }[];
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
    videos: [
      {
        label: "Cards & Dungeon Combat",
        src: "/videos/arena-of-dungeon-challengers/main1.mp4",
        description:
          "Choose cards to build your loadout, then push through dungeon floors where card picks and real-time fighting stay linked — every run is pick abilities, enter the next room, and fight your way deeper.",
      },
      {
        label: "Story Mode",
        src: "/videos/arena-of-dungeon-challengers/main2.mp4",
        description:
          "A story mode you can follow from start to finish — scripted chapters, character beats, and set-piece encounters carry the Daoist comic narrative beyond procedural roguelite runs.",
      },
      {
        label: "Multiplayer",
        src: "/videos/arena-of-dungeon-challengers/main3.mp4",
        description:
          "Multiplayer lets you team up or face other players on shared arenas — cooperative runs and competitive modes add a social layer on top of solo dungeon crawling.",
      },
    ],
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
    tagline: "Strategy cards, hidden roles, and social deduction",
    genres: ["Card", "Strategy", "Multiplayer"],
    platforms: ["mobile", "pc"],
    coverImage: "/games/three-kingdoms-kill/cover.jpg",
    screenshots: [
      "/games/three-kingdoms-kill/shot-1.jpg",
      "/games/three-kingdoms-kill/shot-2.jpg",
    ],
    videos: [
      {
        label: "Gameplay Reel",
        src: "/videos/three-kingdoms-kill/main.mp4",
        description:
          "Secret roles, hero skills, and turn-based card play in one match — attack, dodge, heal, and bluff your way through Identity and ranked modes while reading who is really on your side.",
      },
    ],
    description: `Three Kingdoms Kill (Sanguosha / 三国杀) is a different breed of game from action titles — closer to a strategy card game with social deception. You sit at a table with a few players, everyone receives a hidden objective such as assassinate the king or protect the king, and each player picks a hero with unique abilities. Turns revolve around playing cards — attack, dodge, heal, equipment, and signature skills — while a rules engine resolves effects in order.

The real hook is not only the cards but reading people: is this player your ally or pretending? It is half logic, half psychology — bluffing, betrayal, and clutch saves at 1 HP define the experience. Digital versions typically run on Unity or Cocos2d-x, but the core system is a turn-based rules loop: draw, play, resolve, repeat. Hangzhou Yoka's mobile and PC release adds refreshed UI, general collection with skins, replays, tournaments, and cross-play.`,
    features: [
      "Hidden roles and hero-specific skill kits",
      "Turn-based card combat with bluffing and deduction",
      "Identity, 2v2 ranked, and national war modes",
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
      {
        label: "PC Gameplay",
        src: "/videos/top-war-battle-game/main.mp4",
        description:
          "Merge units on the island base, then zoom out to the world map — alliance wars, troop marches, and large-screen HUD clarity for the hybrid merge-and-strategy loop.",
      },
      {
        label: "Mobile Gameplay",
        src: "/videos/top-war-battle-game/mobile.mp4",
        description:
          "The same merge-to-upgrade loop on mobile — quick drags, hero recruitment, and alliance push notifications that pull you from casual merging into live PvP pressure.",
      },
    ],
    trailerEmbedUrl: "https://www.youtube.com/embed/OL9KF5l6uG8",
    description: `Top War: Battle Game from RiverGame / Topwar Studio is a hybrid of merge gameplay, strategy, and base building. On the surface it looks simple — drag two level-1 soldiers together to create a level-2 soldier — and that merge loop is the core mechanic. Behind it sits a world map where you expand bases, join alliances, raid other players, and march armies across land, sea, and air.

Inside your island it feels like casual merge play; outside it becomes MMO war strategy. That split is what makes it sticky — you can relax merging units, then get pulled into alliance wars and nightly pushes for stronger troops. The title is typically Unity on the client with a heavy online backend for persistent worlds and PvP. Progression loops and social pressure — "our alliance attacks tonight" — drive long-term engagement. Available on Android, iOS, and Windows via Google Play Games.`,
    features: [
      "Merge-to-upgrade core with instant progression",
      "World-map bases, alliances, and player-vs-player wars",
      "Tri-service heroes, equipment, and seasonal events",
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
      {
        label: "Base Building & Strategy",
        src: "/videos/zgirls3/main1.mp4",
        description:
          "Post-apocalyptic base building — upgrade structures, train units, and manage the city core that feeds hero progression and world-map PvP.",
      },
      {
        label: "Commanders & Story",
        src: "/videos/zgirls3/main2.mp4",
        description:
          "Collect and level anime-style heroes with skills and stats, backed by Live2D performances, Japanese VO, and story CGs as squads head to zombie fights and guild wars.",
      },
    ],
    description: `Zgirls3 from RiverGame sits in the same broad ecosystem as Top War-style SLGs but leans into post-apocalyptic anime survival and base building. You upgrade city buildings, train units, collect anime-style heroes, and fight zombies or other players on a persistent map. Compared to pure merge-war titles, it emphasizes RPG progression — leveling heroes with skills and stats, not only stacking troops.

Live2D performances, Japanese voice acting, and story CGs still anchor the fantasy layer around Gakuen and the AI Crisis. Guild wars, world-map PvP, and alliance coordination rely on the same kind of Unity client and large server backend as sibling strategy games. The loop blends chill base management with pressure to keep pace for guild events and front-line pushes.`,
    features: [
      "City building with hero collection and RPG stats",
      "Live2D characters, Japanese VO, and story CGs",
      "Zombie PvE and world-map PvP with guild wars",
      "Tri-service research across army, navy, and air",
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
