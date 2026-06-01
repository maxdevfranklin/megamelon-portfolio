import Link from "next/link";
import { GameGrid } from "@/components/GameGrid";
import { FantasyFrame } from "@/components/FantasyFrame";
import { teamTagline, teamStory, teamMembers, processSteps, workSection } from "@/data/team";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <FantasyFrame variant="hero" className="text-center">
            <p className="font-display text-xs tracking-[0.3em] text-mist uppercase">
              Fantasy Game Development Team
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-wide sm:text-6xl">
              <span className="gold-text">MegaMelon</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-parchment-dim">{teamTagline}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/projects" className="btn-fantasy">
                Enter the Archives
              </Link>
              <Link href="#team" className="btn-fantasy-outline">
                Meet the Guild
              </Link>
            </div>
          </FantasyFrame>
        </div>
      </section>

      <section id="work" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title gold-text text-center">{workSection.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-parchment-dim">
            {workSection.lead}
          </p>
          <FantasyFrame className="mx-auto mt-10 max-w-3xl space-y-4">
            {workSection.paragraphs.map((paragraph, i) => (
              <p key={i} className="prose-fantasy text-parchment-dim">
                {paragraph}
              </p>
            ))}
          </FantasyFrame>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {workSection.highlights.map((item) => (
              <div
                key={item.label}
                className="border border-gold-dim/30 bg-void-light/40 px-4 py-5 text-center"
              >
                <p className="font-display text-lg text-gold">{item.value}</p>
                <p className="mt-2 text-xs tracking-wide text-parchment-dim uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="section-title gold-text">Featured Chronicles</h2>
              <p className="mt-2 text-parchment-dim">
                Eight realms we helped shape — roguelite, card, merge strategy, and anime SLG.
              </p>
            </div>
            <Link href="/projects" className="btn-fantasy-outline shrink-0">
              View All Projects
            </Link>
          </div>
          <GameGrid showFilters={false} />
        </div>
      </section>

      <section id="team" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title gold-text text-center">The Guild</h2>
          <FantasyFrame className="mx-auto mt-8 max-w-3xl">
            <p className="prose-fantasy text-center text-parchment-dim">{teamStory}</p>
          </FantasyFrame>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <FantasyFrame key={member.id}>
                <h3 className="font-display text-sm text-gold uppercase">{member.name}</h3>
                <p className="mt-1 text-xs tracking-wide text-ember">{member.role}</p>
                <p className="mt-3 text-sm text-parchment-dim">{member.bio}</p>
              </FantasyFrame>
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="border border-gold-dim/30 bg-void-light/40 p-4 text-center"
              >
                <span className="font-display text-2xl text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-display text-sm text-gold uppercase">{step.title}</h4>
                <p className="mt-2 text-xs text-parchment-dim">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
