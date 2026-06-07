import type { Collection } from "@/lib/types";
import { products } from "@/mock/products";

const BB = "/images/bb-hires";

const ids = (filter: (p: (typeof products)[number]) => boolean) =>
  products.filter(filter).map((p) => p.id);

const isPhone = (p: (typeof products)[number]) => p.tags.includes("smartphone");

export const collections: Collection[] = [
  {
    id: "c-smartphones",
    slug: "smartphones",
    title: "Smartphones",
    description: "Latest phones from Apple, Samsung, OnePlus and more — ready for delivery across Africa.",
    heroImage: `${BB}/19720235.jpg`,
    productIds: ids(isPhone),
    promoBanner: "Free delivery on orders over ₦150,000",
  },
  {
    id: "c-iphones",
    slug: "iphones",
    title: "iPhones",
    description: "Genuine Apple iPhones with warranty-backed purchases and expert setup support.",
    heroImage: `${BB}/19417092.jpg`,
    productIds: ids((p) => isPhone(p) && p.brand === "Apple"),
  },
  {
    id: "c-samsung",
    slug: "samsung-phones",
    title: "Samsung Phones",
    description: "Galaxy devices from value A-series to flagship Ultra and foldable Z models.",
    heroImage: `${BB}/19720235.jpg`,
    productIds: ids((p) => isPhone(p) && p.brand === "Samsung"),
  },
  {
    id: "c-android",
    slug: "android-phones",
    title: "Android Phones",
    description: "Reliable Android smartphones from Samsung, OnePlus, Motorola, Nothing and more.",
    heroImage: `${BB}/18911502.jpg`,
    productIds: ids((p) => isPhone(p) && p.brand !== "Apple"),
  },
  {
    id: "c-accessories",
    slug: "accessories",
    title: "Accessories",
    description: "Trackers, tablets, and essentials to protect and extend your devices.",
    heroImage: `${BB}/16366627.jpeg`,
    productIds: ids((p) => p.categoryId === "accessories"),
  },
  {
    id: "c-smartwatches",
    slug: "smartwatches",
    title: "Smartwatches & Wearables",
    description: "Track fitness, sleep, and health metrics with the latest wearables.",
    heroImage: `${BB}/19805254.jpg`,
    productIds: ids((p) => p.categoryId === "smartwatches"),
  },
  {
    id: "c-earbuds",
    slug: "earbuds",
    title: "Earbuds & Audio",
    description: "Wireless earbuds, headphones, and speakers for calls, music, and focus.",
    heroImage: `${BB}/19869815.jpg`,
    productIds: ids((p) => p.categoryId === "earbuds"),
  },
  {
    id: "c-chargers",
    slug: "chargers",
    title: "Chargers & Power Banks",
    description: "Fast chargers and high-capacity power banks for life on the move.",
    heroImage: `${BB}/19327354.jpg`,
    productIds: ids((p) => p.categoryId === "chargers"),
  },
  {
    id: "c-refurbished",
    slug: "refurbished",
    title: "Refurbished Devices",
    description: "Certified pre-owned phones inspected, tested, and backed by warranty.",
    heroImage: `${BB}/16553704.jpeg`,
    productIds: ids((p) => p.condition === "refurbished"),
  },
  {
    id: "c-budget",
    slug: "budget-phones",
    title: "Budget Phones",
    description: "Smart value devices without compromising on everyday reliability.",
    heroImage: `${BB}/19816276.jpg`,
    productIds: ids((p) => p.tags.includes("budget")),
  },
  {
    id: "c-flagship",
    slug: "flagship-phones",
    title: "Flagship Phones",
    description: "Premium performance, pro cameras, and the latest features.",
    heroImage: `${BB}/18594741.jpeg`,
    productIds: ids((p) => isPhone(p) && p.tags.includes("flagship")),
  },
  {
    id: "c-deals",
    slug: "deals",
    title: "Deals",
    description: "Limited-time offers on phones, accessories, and gadgets.",
    heroImage: `${BB}/17741341.jpeg`,
    productIds: ids((p) => Boolean(p.isDeal || p.compareAtPrice)),
    promoBanner: "Hot offers — prices updated daily",
  },
  {
    id: "c-new",
    slug: "new-arrivals",
    title: "New Arrivals",
    description: "Fresh stock just landed — be first to get the latest devices.",
    heroImage: `${BB}/19367925.jpg`,
    productIds: ids((p) => Boolean(p.isNew)),
  },
  {
    id: "c-bestsellers",
    slug: "best-sellers",
    title: "Best Sellers",
    description: "Top-rated devices chosen by thousands of customers.",
    heroImage: `${BB}/19417092.jpg`,
    productIds: products
      .filter((p) => p.rank !== undefined)
      .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99))
      .map((p) => p.id),
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}
