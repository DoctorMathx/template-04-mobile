"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import type { Product } from "@/lib/types";
import type { Collection } from "@/lib/types";
import { ProductGrid } from "@/components/product/product-grid";
import { FilterSidebar, type PhoneFilters } from "@/components/collection/filter-sidebar";
import { cn } from "@/lib/utils";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to high", value: "price-asc" },
  { label: "Price: High to low", value: "price-desc" },
  { label: "Best rated", value: "rating" },
  { label: "Newest", value: "new" },
];

export function CollectionPageClient({
  collection,
  products,
}: {
  collection: Collection;
  products: Product[];
}) {
  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price.amount), 500000),
    [products]
  );

  const availableBrands = useMemo(
    () => [...new Set(products.map((p) => p.brand))].sort(),
    [products]
  );
  const availableStorage = useMemo(
    () => [...new Set(products.map((p) => p.specs.storage).filter((s) => s !== "N/A"))].sort(),
    [products]
  );
  const availableRam = useMemo(
    () => [...new Set(products.map((p) => p.specs.ram).filter((r) => r !== "N/A"))].sort(),
    [products]
  );

  const [filters, setFilters] = useState<PhoneFilters>({
    brands: [],
    conditions: [],
    storage: [],
    ram: [],
    has5G: null,
    inStockOnly: false,
    priceRange: [0, maxPrice],
  });
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (filters.inStockOnly && !p.inStock) return false;
      if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
      if (filters.conditions.length && !filters.conditions.includes(p.condition)) return false;
      if (filters.storage.length && !filters.storage.includes(p.specs.storage)) return false;
      if (filters.ram.length && !filters.ram.includes(p.specs.ram)) return false;
      if (filters.has5G === true && !p.specs.has5G) return false;
      if (p.price.amount > filters.priceRange[1]) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price.amount - b.price.amount);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price.amount - a.price.amount);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "new":
        list = [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        list = [...list].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
    }
    return list;
  }, [products, filters, sort]);

  return (
    <>
      <div className="relative min-h-[320px] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(10,132,255,0.32),transparent_28rem)]" />
        <Image src={collection.heroImage} alt={collection.title} fill priority className="object-contain object-right opacity-45 p-8" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="premium-container w-full pb-10 pt-28 sm:pt-36">
            <nav className="text-[12px] text-slate-300 mb-3">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{collection.title}</span>
            </nav>
            <h1 className="text-[clamp(38px,6vw,72px)] font-semibold tracking-[-0.055em] text-white">{collection.title}</h1>
            <p className="text-[15px] leading-7 text-slate-300 mt-4 max-w-xl">{collection.description}</p>
          </div>
        </div>
      </div>

      {collection.promoBanner && (
        <div className="bg-brand-light border-b border-brand/20">
          <p className="premium-container py-2.5 text-[13px] font-medium text-brand text-center">
            {collection.promoBanner}
          </p>
        </div>
      )}

      <div className="premium-container py-8 lg:py-12">
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            availableBrands={availableBrands}
            availableStorage={availableStorage}
            availableRam={availableRam}
            maxPrice={maxPrice}
            mobileOpen={mobileFilters}
            onMobileClose={() => setMobileFilters(false)}
          />

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <p className="text-[13px] text-slate-500">{filtered.length} products</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-3 py-2 text-[13px] font-medium border border-slate-200 rounded-full bg-white"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className={cn(
                    "h-10 px-3 text-[13px] border border-slate-200 rounded-full bg-white",
                    "focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                  )}
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <ProductGrid products={filtered} columns={3} />
          </div>
        </div>
      </div>
    </>
  );
}
