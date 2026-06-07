import Link from "next/link";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TradeInBanner() {
  return (
    <section className="py-6 lg:py-10 bg-surface">
      <div className="shell-wide">
        <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2rem] bg-black px-7 py-12 sm:px-12 md:flex-row md:items-center">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/10">
              <ArrowRightLeft size={22} />
            </div>
            <div>
              <h2 className="headline-lg mb-2 text-[clamp(22px,2.6vw,32px)] text-white">Trade in. Trade up.</h2>
              <p className="max-w-lg text-[16px] leading-relaxed text-white/65">
                Get an instant estimate, send in your device, and apply store credit toward your next upgrade.
              </p>
            </div>
          </div>
          <Button href="/account" variant="primary" className="relative w-full shrink-0 md:w-auto">
            Get trade-in value
          </Button>
        </div>
      </div>
    </section>
  );
}
