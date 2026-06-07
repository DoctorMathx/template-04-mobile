"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, FormEvent } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { searchProducts } from "@/mock/products";
import { ProductGrid } from "@/components/product/product-grid";

function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get("q") ?? "";
  const results = query.trim() ? searchProducts(query) : [];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = (fd.get("q") as string)?.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-[24px] font-bold text-slate-900 mb-1">
        {query ? `Results for "${query}"` : "Search"}
      </h1>
      {query && (
        <p className="text-[14px] text-slate-500 mb-8">
          {results.length} product{results.length !== 1 ? "s" : ""} found
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-xl mb-10 h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus-within:border-brand focus-within:bg-white focus-within:ring-2 focus-within:ring-brand/20">
        <Search size={18} className="text-slate-400 shrink-0" />
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search phones, brands, accessories..."
          className="flex-1 bg-transparent text-[14px] outline-none"
          autoFocus
        />
        <button type="submit" className="text-[13px] font-semibold text-brand hover:text-brand-dark">
          Search
        </button>
      </form>

      {!query && (
        <p className="text-[14px] text-slate-500 py-12 text-center">
          Search by phone model, brand, or accessory type.
        </p>
      )}

      {query && results.length === 0 && (
        <p className="text-[14px] text-slate-500 py-16 text-center">
          No results for &ldquo;{query}&rdquo;. Try another search term.
        </p>
      )}

      {results.length > 0 && <ProductGrid products={results} columns={4} />}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-slate-400">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
