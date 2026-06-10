import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { UtilityBar } from "@/components/layout/utility-bar";
import { MainHeader } from "@/components/layout/main-header";
import { CategoryNav } from "@/components/layout/category-nav";
import { SiteFooter } from "@/components/layout/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://template-04-mobile.vercel.app";
const title = "Dee Gadgets Hub — Phones, Accessories & Gadgets";
const description = "Premium mobile phones, accessories, and gadgets with genuine products, warranty support, and fast delivery across Nigeria, Ghana & Kenya.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Dee Gadgets Hub",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Dee Gadgets Hub",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dee Gadgets Hub — Phones, Accessories & Gadgets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
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
