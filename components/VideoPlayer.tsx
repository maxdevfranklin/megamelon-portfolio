"use client";

import { useState } from "react";
import Image from "next/image";

type VideoSource = { label: string; src: string };

type VideoPlayerProps = {
  videos: VideoSource[];
  poster: string;
  title: string;
  trailerEmbedUrl?: string;
};

export function VideoPlayer({ videos, poster, title, trailerEmbedUrl }: VideoPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = videos[activeIndex];

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
    <div className="space-y-3">
      <div className="rune-border overflow-hidden bg-void">
        <video
          key={active.src}
          className="aspect-video w-full bg-black"
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={active.src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
      {videos.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {videos.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`rounded-sm border px-4 py-2 font-display text-xs tracking-widest uppercase ${
                i === activeIndex
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-gold-dim/40 text-parchment-dim hover:text-gold"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}
      {trailerEmbedUrl && (
        <details className="text-sm text-parchment-dim">
          <summary className="cursor-pointer text-gold hover:underline">
            Watch official trailer
          </summary>
          <div className="relative mt-3 aspect-video overflow-hidden rune-border">
            <iframe
              src={trailerEmbedUrl}
              title={`${title} official trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </details>
      )}
    </div>
  );
}
