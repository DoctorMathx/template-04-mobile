import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Money, Product } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(money: Money): string {
  const symbols: Record<string, string> = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
  };
  const symbol = symbols[money.currency] ?? money.currency;
  if (money.currency === "NGN") {
    return `${symbol}${money.amount.toLocaleString("en-NG")}`;
  }
  return `${symbol}${money.amount.toFixed(2)}`;
}

export function discountPercent(price: Money, compareAt: Money): number {
  return Math.round(((compareAt.amount - price.amount) / compareAt.amount) * 100);
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function productVariantSnippet(product: Product): string {
  const storage = product.specs.storage;
  const ram = product.specs.ram;
  return `${storage} · ${ram} RAM`;
}

export function formatDealCountdown(endsAt: string): string {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (diff <= 0) return "Ended";
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${mins}m left`;
}
