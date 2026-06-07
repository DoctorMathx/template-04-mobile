"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Truck, ShieldCheck, Check, Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatMoney, discountPercent, cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { storeInfo } from "@/mock/navigation";
import { getRelatedAccessories, getRelatedProducts } from "@/mock/products";
import { ProductGallery } from "./product-gallery";
import { SpecificationTable } from "./specification-table";
import { RelatedProducts } from "./related-products";
import { StarRating } from "@/components/ui/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductPageClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAdd = () => {
    addItem(product.id, selectedVariant.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const badge = !product.inStock
    ? { label: "Out of stock", variant: "soldout" as const }
    : product.condition === "refurbished"
    ? { label: "Refurbished", variant: "refurbished" as const }
    : product.compareAtPrice
    ? { label: "On sale", variant: "sale" as const }
    : product.isNew
    ? { label: "New", variant: "new" as const }
    : null;

  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.title} (${selectedVariant.value}).`
  )}`;

  return (
    <>
      <div className="premium-container py-8 lg:py-12 pb-28 lg:pb-12">
        <nav className="flex items-center gap-2 text-[12px] text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link href={`/collections/${product.categoryId}`} className="hover:text-brand capitalize">
            {product.categoryId.replace(/-/g, " ")}
          </Link>
          <span>/</span>
          <span className="text-slate-700">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} title={product.title} />

          <div className="lg:pt-4">
            {badge && (
              <div className="mb-3">
                <Badge label={badge.label} variant={badge.variant} />
              </div>
            )}
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand mb-2">{product.brand}</p>
            <h1 className="text-[clamp(32px,4.5vw,56px)] font-semibold tracking-[-0.055em] text-slate-950 leading-[0.98] mb-4">{product.title}</h1>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />

            <div className="flex items-baseline gap-3 mt-5 mb-2">
              <span className={cn("text-[30px] font-semibold tracking-[-0.04em]", product.compareAtPrice && "text-red-600")}>
                {formatMoney(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-[18px] text-slate-400 line-through">{formatMoney(product.compareAtPrice)}</span>
                  <span className="text-[13px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    Save {discountPercent(product.price, product.compareAtPrice)}%
                  </span>
                </>
              )}
            </div>
            <p className="text-[13px] text-slate-500 mb-6">
              Pay securely with card, transfer, or installment options where available.
            </p>

            {/* Variants */}
            <div className="space-y-5 mb-6">
              {product.variants.some((v) => v.storage) && (
                <div>
                  <p className="text-[13px] font-semibold text-slate-900 mb-2">Storage & color</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        disabled={v.stock === 0}
                        className={cn(
                          "px-4 py-2.5 text-[13px] font-medium rounded-lg border transition-colors",
                          selectedVariant.id === v.id
                            ? "border-brand bg-brand-light text-brand"
                            : v.stock === 0
                            ? "border-slate-100 text-slate-300 line-through cursor-not-allowed"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        {v.colorHex && (
                          <span
                            className="inline-block w-3 h-3 rounded-full mr-2 border border-slate-200 align-middle"
                            style={{ backgroundColor: v.colorHex }}
                          />
                        )}
                        {v.value}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="text-[13px] font-semibold text-slate-900 mb-1">Condition</p>
                <p className="text-[13px] text-slate-600 capitalize">{product.condition.replace("-", " ")}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[13px] mb-6">
              {product.inStock && selectedVariant.stock > 0 ? (
                <>
                  <Check size={16} className="text-brand" />
                  <span className="text-brand font-medium">In stock</span>
                  <span className="text-slate-400">· {selectedVariant.stock} units available</span>
                </>
              ) : (
                <span className="text-red-600 font-medium">Currently unavailable</span>
              )}
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-slate-100 mb-6 text-[13px] text-slate-600">
              <Truck size={18} className="text-brand shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Delivery estimate</p>
                <p>Lagos & Abuja: 1–3 business days · Other regions: 3–7 business days</p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col sm:flex-row gap-3 mb-4">
              <Button
                onClick={handleAdd}
                disabled={!product.inStock || selectedVariant.stock === 0}
                className="flex-1 h-12 rounded-full shadow-[0_18px_36px_rgba(10,132,255,0.24)]"
              >
                {added ? "Added to cart" : "Add to cart"}
              </Button>
              <Button href="/cart" variant="secondary" className="flex-1 h-12 rounded-full">
                Buy now
              </Button>
              <button
                onClick={() => setWishlisted((v) => !v)}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 hover:border-brand hover:bg-brand-light transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={18} className={wishlisted ? "fill-brand text-brand" : "text-slate-600"} />
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-brand hover:text-brand-dark mb-8"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>

            <ul className="space-y-2 mb-8">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-[13px] text-slate-700">
                  <Check size={14} className="text-brand shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Details tabs content */}
        <div className="mt-14 space-y-10 rounded-[2rem] bg-white/80 p-5 sm:p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)]">
          <div>
            <h2 className="text-[18px] font-bold text-slate-900 mb-4">Specifications</h2>
            <SpecificationTable specs={product.fullSpecs} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-[1.5rem] border border-slate-100 bg-white">
              <h3 className="text-[15px] font-semibold mb-3">What&apos;s in the box</h3>
              <ul className="space-y-1.5 text-[13px] text-slate-600">
                {product.inBox.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-[1.5rem] border border-slate-100 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={18} className="text-brand" />
                <h3 className="text-[15px] font-semibold">Warranty</h3>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed">{product.warranty}</p>
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-slate-900 mb-4">Customer reviews</h2>
            <div className="p-6 rounded-[1.5rem] bg-surface border border-slate-100">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              <p className="text-[14px] text-slate-600 mt-4 leading-relaxed">
                Buyers praise the {product.brand} {product.title} for reliable performance and value.
                Verified purchase reviews appear at checkout for this demo template.
              </p>
            </div>
          </div>

          <RelatedProducts title="Related accessories" products={getRelatedAccessories(product)} />
          <RelatedProducts title="Similar devices" products={getRelatedProducts(product)} />
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-slate-200 p-4 flex gap-2 safe-area-pb">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 shrink-0"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} className="text-brand" />
        </a>
        <Button
          onClick={handleAdd}
          disabled={!product.inStock || selectedVariant.stock === 0}
          className="flex-1 h-12 rounded-full"
        >
          {added ? "Added" : "Add to cart"}
        </Button>
        <Button href="/cart" variant="secondary" className="flex-1 h-12 rounded-full">
          Buy now
        </Button>
      </div>
    </>
  );
}
