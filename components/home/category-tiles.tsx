import Link from "next/link";
import Image from "next/image";
import { categoryTiles } from "@/mock/navigation";

export function CategoryTiles() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="shell-wide">
        <div className="mb-9 text-center">
          <h2 className="headline-lg text-[clamp(28px,3.4vw,44px)] text-ink">Find your category.</h2>
          <p className="mt-3 text-[18px] sm:text-[21px] font-medium text-ink-soft">
            Six focused ways to shop the lineup.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {categoryTiles.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[1.75rem] bg-white p-7 transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] sm:min-h-[300px]"
            >
              <div className="relative z-10">
                <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-ink">
                  {cat.label}
                </h3>
                <span className="story-link mt-1 text-[15px] text-brand">Shop now</span>
              </div>
              <div className="pointer-events-none absolute inset-x-4 bottom-0 top-20">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  priority={i < 2}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
