import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { FantasyFrame } from "@/components/FantasyFrame";
import { getAllSlugs, getGameBySlug } from "@/data/games";
import { filterExistingVideos } from "@/lib/media";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Project Not Found" };
  return {
    title: game.title,
    description: game.tagline,
    openGraph: {
      title: game.title,
      description: game.tagline,
      images: [{ url: game.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const videos = filterExistingVideos(game.videos);
  const platformLabels = { mobile: "Mobile", pc: "PC", cross: "Cross-platform" };

  return (
    <article className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex text-sm text-mist hover:text-gold"
        >
          ← Back to Archives
        </Link>

        <div className="relative mb-8 aspect-[21/9] overflow-hidden rune-border">
          <Image
            src={game.coverImage}
            alt={game.title}
            fill
            className="object-cover"
            priority
            sizes="896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <div className="mb-2 flex flex-wrap gap-2">
              {game.genres.map((g) => (
                <span
                  key={g}
                  className="text-[10px] tracking-widest text-mist uppercase"
                >
                  {g}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl text-parchment sm:text-4xl">{game.title}</h1>
            <p className="mt-2 text-parchment-dim">{game.tagline}</p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {game.platforms.map((p) => (
            <span
              key={p}
              className="rounded-sm border border-gold-dim px-3 py-1 text-xs text-gold uppercase"
            >
              {platformLabels[p]}
            </span>
          ))}
          <span className="rounded-sm border border-gold-dim/30 px-3 py-1 text-xs text-mist">
            {game.publisher}
          </span>
        </div>

        <section className="mb-12">
          <h2 className="font-display text-sm tracking-widest text-gold uppercase">
            {videos.length > 1 ? "Gameplay Walkthrough" : "Gameplay"}
          </h2>
          {videos.length > 1 && (
            <p className="mt-2 text-sm text-parchment-dim">
              Clips from the live build — each section highlights a different part of the
              experience.
            </p>
          )}
          <div className="mt-4">
            <VideoPlayer
              videos={videos}
              poster={game.coverImage}
              title={game.title}
              trailerEmbedUrl={videos.length > 0 ? undefined : game.trailerEmbedUrl}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-sm tracking-widest text-gold uppercase">
            About the Game
          </h2>
          <FantasyFrame className="mt-4">
            <div className="prose-fantasy">
              {game.description.split("\n\n").map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2 border-t border-gold-dim/20 pt-6">
              {game.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-parchment-dim">
                  <span className="text-gold">◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </FantasyFrame>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-sm tracking-widest text-gold uppercase">
            Screenshots
          </h2>
          <div className="mt-4">
            <ScreenshotCarousel images={game.screenshots} title={game.title} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-sm tracking-widest text-gold uppercase">
            MegaMelon Contribution
          </h2>
          {game.contributionPlaceholder && (
            <p className="mt-2 text-xs italic text-mist/80">
              Placeholder credit — replace with confirmed studio roles before launch.
            </p>
          )}
          <FantasyFrame className="mt-4">
            <p className="text-parchment-dim leading-relaxed">{game.teamContribution}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {game.skillsDemonstrated.map((s) => (
                <span
                  key={s}
                  className="rounded-sm bg-gold/10 px-3 py-1 text-xs text-gold"
                >
                  {s}
                </span>
              ))}
            </div>
          </FantasyFrame>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-sm tracking-widest text-gold uppercase">
            Official Links
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {game.storeLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fantasy-outline text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <p className="text-xs text-mist/60">
          Imagery credit: {game.imageCredit}.{" "}
          <a href={game.sourceUrl} className="underline hover:text-gold" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </p>
      </div>
    </article>
  );
}
