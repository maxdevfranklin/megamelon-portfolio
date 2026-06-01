import type { Metadata } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://megamelon.vercel.app",
  ),
  title: {
    default: "MegaMelon | Fantasy Game Development Studio",
    template: "%s | MegaMelon",
  },
  description:
    "MegaMelon crafts mobile and PC fantasy experiences — 2D/3D art, gameplay systems, and live-ops for strategy, roguelite, and card titles.",
  openGraph: {
    title: "MegaMelon | Fantasy Game Development Studio",
    description:
      "Professional game development portfolio — strategy, roguelite, and anime SLG projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${sourceSans.variable}`}>
      <body className="fantasy-bg antialiased">
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
