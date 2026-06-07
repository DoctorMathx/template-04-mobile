import { Truck, ShieldCheck, BadgeCheck, RotateCcw, CreditCard, Store } from "lucide-react";
import { promoValues } from "@/mock/navigation";

const icons = [Truck, CreditCard, BadgeCheck, ShieldCheck, RotateCcw, Store];

export function PromoStrip() {
  return (
    <section className="bg-white pb-4">
      <div className="shell-wide">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-3xl bg-surface p-7 md:grid-cols-3 lg:grid-cols-6">
          {promoValues.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">{item.label}</p>
                  <p className="text-[11px] leading-snug text-ink-soft">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
