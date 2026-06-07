import type { Product } from "@/lib/types";
import { ProductGrid } from "./product-grid";

export function RelatedProducts({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-10 border-t border-slate-100">
      <h2 className="text-[18px] font-bold text-slate-900 mb-6">{title}</h2>
      <ProductGrid products={products} columns={4} />
    </section>
  );
}
