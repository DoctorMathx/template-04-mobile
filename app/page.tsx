import type { Metadata } from "next";
import { HeroBanner } from "@/components/home/hero-banner";
import { PromoStrip } from "@/components/home/promo-strip";
import { StoryTile } from "@/components/home/story-tile";
import { CinematicBand } from "@/components/home/cinematic-band";
import { CategoryTiles } from "@/components/home/category-tiles";
import { BestSellers } from "@/components/home/best-sellers";
import { DealsSection } from "@/components/home/deals-section";
import { BrandStrip } from "@/components/home/brand-strip";
import { AccessoriesSection } from "@/components/home/accessories-section";
import { RefurbishedSection } from "@/components/home/refurbished-section";
import { TradeInBanner } from "@/components/home/trade-in-banner";
import { TrustBlock } from "@/components/home/trust-block";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";
import { storeInfo } from "@/mock/navigation";

export const metadata: Metadata = {
  title: `${storeInfo.name} — Phones, Accessories & Gadgets`,
  description: storeInfo.tagline,
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      {/* Two-up cinematic stage */}
      <div className="grid bg-white lg:grid-cols-2">
        <StoryTile
          theme="dark"
          eyebrow="Pro cameras"
          title="Night mode. Day maker."
          subtitle="Shoot like a pro when the lights go down."
          image="/images/lifestyle/city-capture.jpg"
          imageAlt="Photographing a city skyline at dusk"
          placement="top"
          align="center"
          size="grid"
          links={[
            { label: "Shop flagships", href: "/collections/flagship-phones", variant: "pill" },
            { label: "Learn more", href: "/collections/smartphones", variant: "text" },
          ]}
        />
        <StoryTile
          theme="dark"
          eyebrow="Trade-in"
          title="Trade in. Trade up."
          subtitle="Turn your old device into instant credit toward a new one."
          image="/images/lifestyle/device-stack.jpg"
          imageAlt="A stack of premium smartphones"
          placement="bottom"
          align="center"
          size="grid"
          links={[
            { label: "Get an estimate", href: "/account", variant: "pill" },
            { label: "How it works", href: "/account", variant: "text" },
          ]}
        />
      </div>

      <BestSellers />

      <CinematicBand />

      <CategoryTiles />

      <DealsSection />

      {/* Accessories cinematic lead */}
      <StoryTile
        theme="dark"
        eyebrow="Accessories"
        title="Power that keeps up."
        subtitle="Fast chargers, banks, and audio engineered to match your phone."
        image="/images/lifestyle/portrait-3.jpg"
        imageAlt="Phones charging on a desk"
        placement="bottom"
        align="left"
        size="grid"
        links={[
          { label: "Shop accessories", href: "/collections/accessories", variant: "pill" },
          { label: "Browse chargers", href: "/collections/chargers", variant: "text" },
        ]}
      />
      <AccessoriesSection />

      {/* Refurbished cinematic lead */}
      <StoryTile
        theme="dark"
        eyebrow="Certified renewed"
        title="Better for you. And the planet."
        subtitle="Expert-tested refurbished phones, fully warrantied. Premium for less."
        image="/images/lifestyle/landscape.jpg"
        imageAlt="A natural landscape"
        placement="bottom"
        align="left"
        size="grid"
        links={[
          { label: "Shop renewed", href: "/collections/refurbished", variant: "pill" },
          { label: "Our standards", href: "/collections/refurbished", variant: "text" },
        ]}
      />
      <RefurbishedSection />

      <BrandStrip />
      <TradeInBanner />
      <TrustBlock />
      <Testimonials />
      <PromoStrip />
      <FinalCta />
    </>
  );
}
