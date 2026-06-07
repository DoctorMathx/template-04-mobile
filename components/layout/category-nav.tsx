"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/mock/navigation";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-black/[0.06] bg-white/70 backdrop-blur-xl hidden lg:block">
      <div className="shell-wide">
        <ul className="flex items-center justify-center gap-1 py-2.5">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            const isDeals = item.label === "Deals";
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                    isDeals
                      ? "text-brand hover:bg-brand-light"
                      : active
                      ? "bg-black/[0.06] text-ink"
                      : "text-ink-soft hover:bg-black/[0.04] hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
