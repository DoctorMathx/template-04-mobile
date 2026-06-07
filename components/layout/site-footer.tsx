import Link from "next/link";
import { navItems, storeInfo } from "@/mock/navigation";

const footerLinks = {
  Shop: navItems.slice(0, 6),
  Support: [
    { label: "Track order", href: "/account" },
    { label: "Warranty info", href: "/account" },
    { label: "Returns", href: "/account" },
    { label: "Contact support", href: "/account" },
  ],
  Company: [
    { label: "About us", href: "/account" },
    { label: "Store locations", href: "/account" },
    { label: "Trade-in program", href: "/account" },
    { label: "Business sales", href: "/account" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white text-[13px] font-bold">
                C
              </span>
              <span className="text-[16px] font-bold">{storeInfo.name}</span>
            </div>
            <p className="text-[13px] text-slate-400 leading-relaxed max-w-xs mb-4">
              {storeInfo.tagline} Premium phones, accessories, and gadgets for customers across Africa.
            </p>
            <a href={`mailto:${storeInfo.email}`} className="text-[13px] text-slate-400 hover:text-white transition-colors">
              {storeInfo.email}
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-slate-300 mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-slate-500">
            © {new Date().getFullYear()} {storeInfo.name}. Powered by FinStore.
          </p>
          <div className="flex flex-wrap gap-4 text-[12px] text-slate-500">
            <span>Genuine products</span>
            <span>Secure payments</span>
            <span>Warranty-backed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
