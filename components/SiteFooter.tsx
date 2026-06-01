import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gold-dim/20 bg-void-light/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-sm tracking-widest text-gold uppercase">
              MegaMelon Studio
            </p>
            <p className="mt-2 max-w-md text-sm text-parchment-dim">
              Fantasy game development — mobile & PC. Portfolio imagery credited to respective
              publishers.
            </p>
            <p className="mt-2 text-xs text-mist/70 italic">
              Credits represent MegaMelon portfolio samples — confirm titles before public launch.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/projects" className="text-mist hover:text-gold">
              All Projects
            </Link>
            <a href="mailto:hello@megamelon.studio" className="text-mist hover:text-gold">
              Contact
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-mist/50">
          © {new Date().getFullYear()} MegaMelon. All game trademarks belong to their owners.
        </p>
      </div>
    </footer>
  );
}
