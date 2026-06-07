import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
}) {
  if (products.length === 0) {
    return (
      <p className="text-center text-slate-400 py-16 text-[14px]">No products match your filters.</p>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-4 sm:gap-6",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
