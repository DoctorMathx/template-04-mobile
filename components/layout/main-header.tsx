"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X, HelpCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { storeInfo } from "@/mock/navigation";
import { cn } from "@/lib/utils";

export function MainHeader() {
  const { count } = useCart();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/[0.07] bg-white/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-white/65 backdrop-blur-xl"
      )}
    >
      <div className="shell-wide">
        <div className="h-14 lg:h-[60px] flex items-center gap-4 lg:gap-7">
          <button
            className="lg:hidden p-2 -ml-2 text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/" className="shrink-0 flex items-center gap-2">
            <span className="text-[19px] font-semibold tracking-[-0.03em] text-ink leading-none">
              {storeInfo.name}
            </span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex ml-2">
            <div className="flex w-full items-center gap-2 h-9 px-4 rounded-full bg-black/[0.05] focus-within:bg-black/[0.07] transition-colors">
              <Search size={16} className="text-muted shrink-0" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search phones, brands, accessories"
                className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted"
              />
            </div>
          </form>

          <div className="flex items-center gap-0.5 sm:gap-1 ml-auto text-ink-soft">
            <Link
              href="/account"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/[0.05] hover:text-ink transition-colors"
              aria-label="Account"
            >
              <User size={18} />
            </Link>
            <Link
              href="/account"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/[0.05] hover:text-ink transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={18} />
            </Link>
            <Link
              href="/account"
              className="hidden xl:flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/[0.05] hover:text-ink transition-colors"
              aria-label="Help"
            >
              <HelpCircle size={18} />
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-9 h-9 rounded-full text-ink hover:bg-black/[0.05] transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 rounded-full bg-brand text-white text-[10px] font-bold flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-black/[0.06] pt-4 space-y-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2 h-11 px-4 rounded-full bg-black/[0.05]">
              <Search size={18} className="text-muted" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                className="flex-1 bg-transparent text-[14px] outline-none"
              />
            </form>
            <div className="grid grid-cols-2 gap-2 text-[14px]">
              <Link href="/account" className="px-3 py-2.5 rounded-xl bg-surface text-ink" onClick={() => setMobileOpen(false)}>
                Account
              </Link>
              <Link href="/cart" className="px-3 py-2.5 rounded-xl bg-surface text-ink" onClick={() => setMobileOpen(false)}>
                Cart ({count})
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
