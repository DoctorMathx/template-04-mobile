import type { Metadata } from "next";
import { getDeals } from "@/mock/products";
import { ProductGrid } from "@/components/product/product-grid";
import { featuredDeals } from "@/mock/navigation";
import Link from "next/link";
import Image from "next/image";
import { formatDealCountdown } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Deals",
  description: "Limited-time offers on phones, accessories, and gadgets.",
};

export default function DealsPage() {
  const deals = getDeals(12);

  return (
    <>
      <div className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-brand mb-3">Limited time</p>
          <h1 className="text-[clamp(28px,4vw,44px)] font-bold">Top deals</h1>
          <p className="text-[15px] text-slate-300 mt-3 max-w-lg">
            Save on smartphones, audio, and essentials. Prices and stock updated regularly.
          </p>
        </div>
      </div>
      <section className="py-10 border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredDeals.map((deal) => (
              <Link
                key={deal.id}
                href={deal.href}
                className="group flex flex-col rounded-xl overflow-hidden border border-slate-100 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/10] bg-slate-50">
                  <Image src={deal.image} alt={deal.title} fill className="object-contain p-4" sizes="400px" />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-sm">
                    {deal.discountLabel}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand mb-1">
                    {formatDealCountdown(deal.endsAt)}
                  </p>
                  <h3 className="text-[16px] font-bold text-slate-900 group-hover:text-brand transition-colors">{deal.title}</h3>
                  <p className="text-[13px] text-slate-500 mt-1">{deal.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">All deal items</h2>
          <ProductGrid products={deals} columns={4} />
        </div>
      </section>
    </>
  );
}
