import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { UtilityBar } from "@/components/layout/utility-bar";
import { MainHeader } from "@/components/layout/main-header";
import { CategoryNav } from "@/components/layout/category-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { storeInfo } from "@/mock/navigation";

export const metadata: Metadata = {
  title: {
    default: `${storeInfo.name} — Phones & Gadgets`,
    template: `%s | ${storeInfo.name}`,
  },
  description:
    "Premium mobile phones, accessories, and gadgets with genuine products, warranty support, and fast delivery across Africa.",
  openGraph: {
    title: `${storeInfo.name} — Phones & Gadgets`,
    description: "Genuine smartphones and accessories for African markets.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <UtilityBar />
          <MainHeader />
          <CategoryNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
