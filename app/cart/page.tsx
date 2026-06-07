"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/mock/products";
import { formatMoney } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const lineItems = items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      const variant = product.variants.find((v) => v.id === item.variantId);
      if (!variant) return null;
      return { item, product, variant };
    })
    .filter(Boolean);

  const subtotal = lineItems.reduce((sum, line) => sum + line!.product.price.amount * line!.item.quantity, 0);

  if (lineItems.length === 0) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-[28px] font-bold text-slate-900 mb-3">Your cart</h1>
        <p className="text-[14px] text-slate-500 mb-8">Your cart is empty.</p>
        <Button href="/collections/smartphones">Shop smartphones</Button>
      </div>
    );
  }

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
      <div className="flex items-end justify-between mb-8">
        <h1 className="text-[28px] font-bold text-slate-900">Your cart</h1>
        <button onClick={clearCart} className="text-[13px] text-slate-500 hover:text-brand underline">
          Clear cart
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="divide-y divide-slate-100">
          {lineItems.map((line) => (
            <div key={`${line!.item.productId}-${line!.item.variantId}`} className="flex gap-4 py-6 first:pt-0">
              <Link href={`/products/${line!.product.slug}`} className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-slate-50 border border-slate-100 shrink-0 overflow-hidden">
                <Image src={line!.product.images[0]} alt={line!.product.title} fill className="object-contain p-2" sizes="112px" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${line!.product.slug}`}>
                  <h2 className="text-[14px] font-semibold text-slate-900 hover:text-brand">{line!.product.title}</h2>
                </Link>
                <p className="text-[12px] text-slate-500 mt-1">{line!.variant.value}</p>
                <p className="text-[15px] font-bold mt-2">{formatMoney(line!.product.price)}</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-slate-200 rounded-md">
                    <button
                      onClick={() => updateQuantity(line!.item.productId, line!.item.variantId, line!.item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-[13px] font-medium">{line!.item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(line!.item.productId, line!.item.variantId, line!.item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(line!.item.productId, line!.item.variantId)}
                    className="text-slate-400 hover:text-red-600 transition-colors"
                    aria-label="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:sticky lg:top-28 h-fit rounded-xl border border-slate-100 p-6 bg-surface">
          <h2 className="text-[14px] font-semibold text-slate-900 mb-4">Order summary</h2>
          <div className="flex justify-between text-[14px] mb-2">
            <span className="text-slate-500">Subtotal</span>
            <span className="font-bold">₦{subtotal.toLocaleString()}</span>
          </div>
          <p className="text-[12px] text-slate-400 mb-6">Shipping and taxes calculated at checkout.</p>
          <Button className="w-full h-12">Proceed to checkout</Button>
          <Link href="/collections/deals" className="block text-center text-[13px] text-brand mt-4 hover:underline">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
