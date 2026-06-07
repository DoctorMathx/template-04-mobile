import { ShieldCheck, Truck, Headphones, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Genuine products",
    description: "Verified stock from authorized channels with serial checks where applicable.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment",
    description: "Card, bank transfer, and trusted local payment options at checkout.",
  },
  {
    icon: Truck,
    title: "Regional delivery",
    description: "Dispatch to major cities across Nigeria, Ghana, Kenya, and more.",
  },
  {
    icon: Headphones,
    title: "Customer support",
    description: "Phone, email, and WhatsApp assistance from order to after-sales care.",
  },
];

export function TrustBlock() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="shell-wide">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="headline-lg text-[clamp(28px,3.4vw,44px)] text-ink">Built on trust.</h2>
          <p className="mt-3 text-[18px] sm:text-[21px] font-medium text-ink-soft">Every order, backed end to end.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl bg-surface p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                <item.icon size={20} />
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="text-[14px] leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
