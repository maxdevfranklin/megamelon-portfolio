"use client";

import Image from "next/image";
import { useState } from "react";

export function ScreenshotCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="space-y-3">
      <div className="relative aspect-video overflow-hidden rune-border">
        <Image
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 896px"
        />
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-between gap-4">
          <button type="button" onClick={prev} className="btn-fantasy-outline text-xs">
            ← Prev
          </button>
          <span className="text-xs text-mist">
            {index + 1} / {images.length}
          </span>
          <button type="button" onClick={next} className="btn-fantasy-outline text-xs">
            Next →
          </button>
        </div>
      )}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative h-16 w-28 shrink-0 overflow-hidden border-2 ${
              i === index ? "border-gold" : "border-transparent opacity-60"
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="112px" />
          </button>
        ))}
      </div>
    </div>
  );
}
