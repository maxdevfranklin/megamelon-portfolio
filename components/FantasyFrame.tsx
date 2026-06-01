import { ReactNode } from "react";

type FantasyFrameProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero";
};

export function FantasyFrame({
  children,
  className = "",
  variant = "default",
}: FantasyFrameProps) {
  return (
    <div
      className={`relative rune-border bg-void-light/60 backdrop-blur-sm ${
        variant === "hero" ? "p-8 sm:p-12" : "p-5 sm:p-6"
      } ${className}`}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-gold" />
      <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-gold" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-gold" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-gold" />
      {children}
    </div>
  );
}
