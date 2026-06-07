import Link from "next/link";
import { getAccessories } from "@/mock/products";
import { accessoryCategories } from "@/mock/navigation";
import { ProductGrid } from "@/components/product/product-grid";

export function AccessoriesSection() {
  const products = getAccessories(4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="shell-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="headline-lg text-[clamp(28px,3.4vw,44px)] text-ink">Complete your setup.</h2>
            <p className="mt-3 text-[18px] sm:text-[21px] font-medium text-ink-soft">Protect, charge, and elevate every device.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {accessoryCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="px-4 py-2 text-[13px] font-medium rounded-full bg-surface text-ink-soft hover:bg-black/[0.07] hover:text-ink transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
        <ProductGrid products={products} columns={4} />
      </div>
    </section>
  );
}
