import type { NavItem, Brand, Testimonial, Deal } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Smartphones", href: "/collections/smartphones" },
  { label: "iPhones", href: "/collections/iphones" },
  { label: "Samsung Phones", href: "/collections/samsung-phones" },
  { label: "Android Phones", href: "/collections/android-phones" },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "Smartwatches", href: "/collections/smartwatches" },
  { label: "Earbuds & Audio", href: "/collections/earbuds" },
  { label: "Chargers & Power Banks", href: "/collections/chargers" },
  { label: "Refurbished", href: "/collections/refurbished" },
  { label: "Deals", href: "/deals" },
];

export const brands: Brand[] = [
  { id: "apple", name: "Apple", slug: "apple" },
  { id: "samsung", name: "Samsung", slug: "samsung" },
  { id: "oneplus", name: "OnePlus", slug: "oneplus" },
  { id: "motorola", name: "Motorola", slug: "motorola" },
  { id: "nothing", name: "Nothing", slug: "nothing" },
  { id: "anker", name: "Anker", slug: "anker" },
  { id: "jbl", name: "JBL", slug: "jbl" },
];

export const categoryTiles = [
  {
    label: "New Arrivals",
    href: "/collections/new-arrivals",
    image: "/images/bb-hires/19367925.jpg",
  },
  {
    label: "Best Sellers",
    href: "/collections/best-sellers",
    image: "/images/bb-hires/19417092.jpg",
  },
  {
    label: "Budget Phones",
    href: "/collections/budget-phones",
    image: "/images/bb-hires/19816276.jpg",
  },
  {
    label: "Flagship Phones",
    href: "/collections/flagship-phones",
    image: "/images/bb-hires/18594741.jpeg",
  },
  {
    label: "Earbuds & Audio",
    href: "/collections/earbuds",
    image: "/images/bb-hires/19869815.jpg",
  },
  {
    label: "Refurbished Devices",
    href: "/collections/refurbished",
    image: "/images/bb-hires/16553704.jpeg",
  },
];

export const promoValues = [
  { label: "Fast delivery", description: "Lagos & Abuja same-week" },
  { label: "Pay securely", description: "Card, transfer & BNPL" },
  { label: "Genuine devices", description: "Verified stock only" },
  { label: "Warranty support", description: "Local service partners" },
  { label: "Easy returns", description: "7-day return window" },
  { label: "Store pickup", description: "Collect at partner stores" },
];

export const accessoryCategories = [
  { label: "Cases", href: "/collections/accessories" },
  { label: "Chargers", href: "/collections/chargers" },
  { label: "Screen protectors", href: "/collections/accessories" },
  { label: "Earbuds", href: "/collections/earbuds" },
  { label: "Power banks", href: "/collections/chargers" },
  { label: "Cables", href: "/collections/chargers" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Adaeze O.",
    location: "Lagos",
    quote: "Ordered a Samsung Galaxy and it arrived sealed with full warranty paperwork. Delivery was faster than I expected.",
    rating: 5,
    product: "Galaxy S24 Ultra",
  },
  {
    id: "t2",
    name: "Kwame A.",
    location: "Accra",
    quote: "The refurbished iPhone was exactly as described. Battery health checked out and the price saved me a lot.",
    rating: 5,
    product: "iPhone 14 Refurbished",
  },
  {
    id: "t3",
    name: "Fatima B.",
    location: "Abuja",
    quote: "Customer support helped me pick the right storage option on WhatsApp. Smooth checkout and genuine product.",
    rating: 4,
    product: "Nothing Phone (2a)",
  },
];

export const featuredDeals: Deal[] = [
  {
    id: "d1",
    title: "Galaxy S24 Ultra",
    subtitle: "Save ₦110,000 on flagship stock",
    image: "/images/bb-hires/17741341.jpeg",
    href: "/products/samsung-galaxy-s24-ultra",
    endsAt: "2026-06-14T23:59:59",
    discountLabel: "-10%",
  },
  {
    id: "d2",
    title: "iPhone 15 Pro",
    subtitle: "Limited-time titanium savings",
    image: "/images/bb-hires/17462349.jpeg",
    href: "/products/iphone-15-pro",
    endsAt: "2026-06-14T23:59:59",
    discountLabel: "-7%",
  },
  {
    id: "d3",
    title: "Wireless ANC Earbuds",
    subtitle: "Audio deal of the week",
    image: "/images/bb-hires/16550127.jpg",
    href: "/products/wireless-anc-earbuds",
    endsAt: "2026-06-12T23:59:59",
    discountLabel: "-19%",
  },
];

export const storeInfo = {
  name: "Dee_gadgets Hub",
  tagline: "Genuine phones. Trusted service.",
  region: "Delivering across Nigeria, Ghana & Kenya",
  phone: "+234 800 000 0000",
  whatsapp: "2348000000000",
  hours: "Mon–Sat 9am–7pm WAT",
  email: "hello@finstore.africa",
};
