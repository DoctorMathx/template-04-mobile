import Link from "next/link";
import { brands } from "@/mock/navigation";

export function BrandStrip() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="shell-wide">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="headline-lg text-[clamp(28px,3.4vw,44px)] text-ink">Shop by brand.</h2>
          <p className="mt-3 text-[18px] sm:text-[21px] font-medium text-ink-soft">Every name you trust, in one place.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/search?q=${encodeURIComponent(brand.name)}`}
              className="group rounded-2xl bg-white px-5 py-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <span className="text-[16px] font-semibold text-ink group-hover:text-brand transition-colors">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
