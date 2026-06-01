"use client";

import Image from "next/image";

export type GameplayVideo = {
  label: string;
  src: string;
  description: string;
};

type VideoPlayerProps = {
  videos: GameplayVideo[];
  poster: string;
  title: string;
  trailerEmbedUrl?: string;
};

export function VideoPlayer({ videos, poster, title, trailerEmbedUrl }: VideoPlayerProps) {
  if (videos.length === 0 && trailerEmbedUrl) {
    return (
      <div className="rune-border overflow-hidden bg-void">
        <div className="relative aspect-video w-full">
          <iframe
            src={trailerEmbedUrl}
            title={`${title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="relative aspect-video overflow-hidden rune-border">
        <Image src={poster} alt={title} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {videos.map((video, index) => (
        <article key={video.src} className="space-y-4">
          <div className="flex items-baseline gap-3 border-b border-gold-dim/20 pb-3">
            <span className="font-display text-xs tracking-widest text-gold-dim">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-lg text-parchment">{video.label}</h3>
          </div>

          <div className="rune-border overflow-hidden bg-void">
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              poster={index === 0 ? poster : undefined}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          <p className="text-sm leading-relaxed text-parchment-dim">{video.description}</p>
        </article>
      ))}
    </div>
  );
}
