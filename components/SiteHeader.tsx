"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#team", label: "Team" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold-dim/30 bg-void/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold-dim bg-void-light text-lg font-bold text-gold shadow-[0_0_12px_var(--glow)]">
            M
          </span>
          <span className="font-display text-lg font-semibold tracking-widest text-parchment group-hover:text-gold">
            Mega<span className="gold-text">Melon</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace("/#", "/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-xs tracking-widest uppercase transition-colors ${
                  active ? "text-gold" : "text-parchment-dim hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/projects" className="btn-fantasy text-xs md:hidden">
          Projects
        </Link>
        <Link href="/projects" className="btn-fantasy hidden text-xs md:inline-flex">
          Enter the Archives
        </Link>
      </div>
    </header>
  );
}
