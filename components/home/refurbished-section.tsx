import Link from "next/link";
import { ShieldCheck, Battery, ClipboardCheck, Tag } from "lucide-react";
import { getRefurbished } from "@/mock/products";
import { ProductGrid } from "@/components/product/product-grid";

const checks = [
  { icon: ClipboardCheck, text: "72-point hardware inspection" },
  { icon: Battery, text: "Verified battery health minimums" },
  { icon: ShieldCheck, text: "Warranty-backed purchases" },
  { icon: Tag, text: "Transparent grading & pricing" },
];

export function RefurbishedSection() {
  const products = getRefurbished(4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="shell-wide">
        <div className="grid items-start gap-10 rounded-[2rem] bg-surface p-6 sm:p-9 lg:grid-cols-[0.85fr_2fr]">
          <div className="lg:sticky lg:top-32">
            <h2 className="headline-lg mb-3 text-[clamp(28px,3vw,40px)] text-ink">Certified refurbished.</h2>
            <p className="mb-6 text-[16px] leading-relaxed text-ink-soft">
              Pre-owned devices professionally tested, reset, and quality-checked. A smart way to upgrade for less.
            </p>
            <ul className="mb-6 space-y-3">
              {checks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[14px] text-ink">
                  <Icon size={18} className="shrink-0 text-brand" />
                  {text}
                </li>
              ))}
            </ul>
            <Link href="/collections/refurbished" className="story-link text-[16px] text-brand">
              Browse refurbished
            </Link>
          </div>
          <ProductGrid products={products.length ? products : getRefurbished(1)} columns={2} />
        </div>
      </div>
    </section>
  );
}
