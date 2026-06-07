"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const gallery = images.length > 0 ? images : ["/images/placeholder.png"];

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3">
      {gallery.length > 1 && (
        <div className="flex sm:flex-col gap-2 sm:w-16">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
            className={cn(
              "relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 bg-white shrink-0 shadow-sm",
              active === i ? "border-brand" : "border-transparent hover:border-slate-200"
            )}
            >
              <Image src={src} alt={`${title} ${i + 1}`} fill className="object-contain p-1" sizes="64px" />
            </button>
          ))}
        </div>
      )}
      <div className="relative flex-1 aspect-square rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-brand-light/60 border border-white overflow-hidden shadow-[0_34px_100px_rgba(15,23,42,0.08)]">
        <Image
          src={gallery[active]}
          alt={title}
          fill
          priority
          className="object-contain p-8 sm:p-14 drop-shadow-[0_28px_34px_rgba(15,23,42,0.16)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
