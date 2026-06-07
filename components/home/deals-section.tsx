import Link from "next/link";
import Image from "next/image";
import { featuredDeals } from "@/mock/navigation";
import { formatDealCountdown } from "@/lib/utils";

export function DealsSection() {
  return (
    <section className="py-16 lg:py-24 bg-black text-white">
      <div className="shell-wide">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="headline-lg text-[clamp(28px,3.4vw,44px)]">Limited-time deals.</h2>
            <p className="mt-3 text-[18px] sm:text-[21px] font-medium text-white/65">When they&rsquo;re gone, they&rsquo;re gone.</p>
          </div>
          <Link href="/deals" className="hidden shrink-0 sm:inline-flex story-link text-[17px] text-white">
            All deals
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredDeals.map((deal) => (
            <Link
              key={deal.id}
              href={deal.href}
              className="group relative flex flex-col sm:flex-row md:flex-col rounded-[1.5rem] overflow-hidden border border-white/10 bg-white/[0.06] hover:bg-white/[0.09] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] sm:w-1/3 md:w-full bg-white">
                <Image src={deal.image} alt={deal.title} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" sizes="400px" />
                <span className="absolute top-3 left-3 bg-brand text-white text-[11px] font-bold px-2 py-1 rounded-full">
                  {deal.discountLabel}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand mb-1">
                  {formatDealCountdown(deal.endsAt)}
                </p>
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] group-hover:text-brand transition-colors">{deal.title}</h3>
                <p className="text-[13px] text-slate-400 mt-1">{deal.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
