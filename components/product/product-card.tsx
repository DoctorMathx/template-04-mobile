"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatMoney, discountPercent, productVariantSnippet, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  const badge = !product.inStock
    ? { label: "Out of stock", variant: "soldout" as const }
    : product.condition === "refurbished"
    ? { label: "Refurbished", variant: "refurbished" as const }
    : product.isDeal && product.compareAtPrice
    ? { label: "Deal", variant: "deal" as const }
    : product.compareAtPrice
    ? { label: "Sale", variant: "sale" as const }
    : product.isNew
    ? { label: "New", variant: "new" as const }
    : product.isBestSeller
    ? { label: "Best seller", variant: "bestseller" as const }
    : null;

  const quickVariant = product.variants.find((v) => v.stock > 0) ?? product.variants[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
      <div className="relative aspect-square bg-white p-5">
        <Link href={`/products/${product.slug}`} className="block relative w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge label={badge.label} variant={badge.variant} />
          </div>
        )}
        <button
          onClick={() => setWishlisted((v) => !v)}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity backdrop-blur"
          aria-label="Add to wishlist"
        >
          <Heart size={14} className={wishlisted ? "fill-brand text-brand" : "text-ink-soft"} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">{product.brand}</p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink leading-snug hover:text-brand transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        {product.specs.storage !== "N/A" && (
          <p className="text-[12px] text-ink-soft">{productVariantSnippet(product)}</p>
        )}
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-baseline gap-2 mt-auto pt-1 flex-wrap">
          <span className={cn("text-[17px] font-semibold tracking-[-0.02em] text-ink", product.compareAtPrice && "text-red-600")}>
            {formatMoney(product.price)}
          </span>
          {product.compareAtPrice && (
            <>
              <span className="text-[13px] text-muted line-through">{formatMoney(product.compareAtPrice)}</span>
              <span className="text-[11px] font-semibold text-red-600">
                -{discountPercent(product.price, product.compareAtPrice)}%
              </span>
            </>
          )}
        </div>
        <div className="flex gap-2 pt-3">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 h-10 flex items-center justify-center text-[13px] font-medium rounded-full border border-black/10 text-ink hover:border-brand hover:text-brand transition-colors"
          >
            View
          </Link>
          {product.inStock && (
            <button
              onClick={() => addItem(product.id, quickVariant.id)}
              className="flex-1 h-10 flex items-center justify-center gap-1.5 text-[13px] font-medium bg-brand text-white rounded-full hover:bg-brand-dark transition-colors"
            >
              <ShoppingBag size={14} />
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
