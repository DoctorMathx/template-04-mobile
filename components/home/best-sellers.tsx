import Link from "next/link";
import { getBestsellers } from "@/mock/products";
import { ProductGrid } from "@/components/product/product-grid";

export function BestSellers() {
  const products = getBestsellers(8);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="shell-wide">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="headline-lg text-[clamp(28px,3.4vw,44px)] text-ink">Most-loved phones.</h2>
            <p className="mt-3 text-[18px] sm:text-[21px] font-medium text-ink-soft">Top picks, ranked by real customer orders.</p>
          </div>
          <Link href="/collections/best-sellers" className="hidden shrink-0 sm:inline-flex story-link text-[17px] text-brand">
            View all
          </Link>
        </div>
        <ProductGrid products={products} columns={4} />
      </div>
    </section>
  );
}
