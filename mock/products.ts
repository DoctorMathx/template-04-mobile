import type { Product } from "@/lib/types";

const BB = "/images/bb-hires";

// High-resolution (1500px) Best Buy product photography, matched accurately to
// each device. Sourced from Best Buy's CDN — same product shots, 3x sharper.
const IMG = {
  // Apple iPhones
  ip16proDesert: `${BB}/18594741.jpeg`,
  ip16proBlue: `${BB}/19417092.jpg`,
  ip16proBlue2: `${BB}/19417083.jpg`,
  ip16black: `${BB}/19417109.jpg`,
  ip15pro: `${BB}/17462349.jpeg`,
  ip14: `${BB}/16472783.jpg`,
  ip14b: `${BB}/16553704.jpeg`,
  // Samsung Galaxy
  s25ultra: `${BB}/19720235.jpg`,
  s25: `${BB}/19720225.jpg`,
  s25b: `${BB}/19411402.jpg`,
  s24ultra: `${BB}/17741341.jpeg`,
  s23ultra: `${BB}/16708998.jpeg`,
  s23: `${BB}/16666252.jpg`,
  s21fe: `${BB}/17733144.jpeg`,
  s21: `${BB}/15453494.jpg`,
  zfold: `${BB}/19367925.jpg`,
  a56: `${BB}/19816276.jpg`,
  // Other Android
  oneplus: `${BB}/18911502.jpg`,
  motoEdge: `${BB}/18588670.jpeg`,
  nothing: `${BB}/19796659.jpg`,
  // Audio
  budsBlack: `${BB}/16550127.jpg`,
  budsOpen: `${BB}/19872764.jpg`,
  budsBlue: `${BB}/16161838.jpg`,
  headphones: `${BB}/19869815.jpg`,
  jbl: `${BB}/19182847.png`,
  klipsch: `${BB}/18166922.jpeg`,
  // Power & accessories
  pbCables: `${BB}/19448968.jpeg`,
  pbLdas: `${BB}/19839304.png`,
  pbAnker: `${BB}/19327354.jpg`,
  airtag: `${BB}/16534433.jpeg`,
  ipad: `${BB}/16366627.jpeg`,
  ouraRing: `${BB}/19805254.jpg`,
};

export const products: Product[] = [
  // ───────────────────────── iPhones ─────────────────────────
  {
    id: "ip16promax",
    slug: "iphone-16-pro-max",
    title: "iPhone 16 Pro Max",
    brand: "Apple",
    description:
      "The largest, most capable iPhone yet. Titanium build, A18 Pro chip, and a pro camera system with 5x telephoto for next-level photography.",
    images: [IMG.ip16proDesert, IMG.ip16proBlue],
    price: { amount: 1750000, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 386,
    tags: ["smartphone", "iphone", "apple", "5g", "flagship"],
    categoryId: "iphones",
    condition: "new",
    isFeatured: true,
    isBestSeller: true,
    rank: 2,
    specs: { storage: "256GB", ram: "8GB", has5G: true, batteryMah: 4685, screenInches: 6.9 },
    highlights: ["A18 Pro chip", "5x telephoto camera", "Titanium design", "Camera Control button"],
    inBox: ["iPhone 16 Pro Max", "USB-C cable", "Documentation"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Display", value: '6.9" Super Retina XDR' },
      { label: "Chip", value: "A18 Pro" },
      { label: "Rear camera", value: "48MP Fusion + 48MP UW + 12MP 5x" },
      { label: "Storage", value: "256GB" },
      { label: "Water resistance", value: "IP68" },
    ],
    variants: [
      { id: "ip16promax-desert", name: "Color", value: "256GB Desert Titanium", storage: "256GB", stock: 7, colorHex: "#bda07f" },
      { id: "ip16promax-blue", name: "Color", value: "256GB Blue Titanium", storage: "256GB", stock: 5, colorHex: "#3b4a63" },
    ],
  },
  {
    id: "ip16pro",
    slug: "iphone-16-pro",
    title: "iPhone 16 Pro",
    brand: "Apple",
    description:
      "Pro performance in a refined titanium frame. A18 Pro chip, the new Camera Control, and a 48MP pro camera system built for creators.",
    images: [IMG.ip16proBlue, IMG.ip16proDesert],
    price: { amount: 1520000, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 451,
    tags: ["smartphone", "iphone", "apple", "5g", "flagship"],
    categoryId: "iphones",
    condition: "new",
    isFeatured: true,
    isBestSeller: true,
    rank: 1,
    specs: { storage: "256GB", ram: "8GB", has5G: true, batteryMah: 3582, screenInches: 6.3 },
    highlights: ["A18 Pro chip", "Camera Control", "Titanium design", "ProMotion 120Hz"],
    inBox: ["iPhone 16 Pro", "USB-C cable", "Documentation"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Display", value: '6.3" Super Retina XDR' },
      { label: "Chip", value: "A18 Pro" },
      { label: "Storage", value: "256GB" },
      { label: "Network", value: "5G" },
      { label: "Water resistance", value: "IP68" },
    ],
    variants: [
      { id: "ip16pro-blue", name: "Color", value: "256GB Blue Titanium", storage: "256GB", stock: 9, colorHex: "#3b4a63" },
      { id: "ip16pro-desert", name: "Color", value: "256GB Desert Titanium", storage: "256GB", stock: 6, colorHex: "#bda07f" },
    ],
  },
  {
    id: "ip16",
    slug: "iphone-16",
    title: "iPhone 16",
    brand: "Apple",
    description:
      "The everyday iPhone, upgraded. A18 chip, Camera Control, and a dual-camera system with great low-light performance.",
    images: [IMG.ip16black],
    price: { amount: 1180000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 298,
    tags: ["smartphone", "iphone", "apple", "5g"],
    categoryId: "iphones",
    condition: "new",
    isBestSeller: true,
    rank: 4,
    specs: { storage: "128GB", ram: "8GB", has5G: true, batteryMah: 3561, screenInches: 6.1 },
    highlights: ["A18 chip", "Camera Control", "48MP main camera", "Action button"],
    inBox: ["iPhone 16", "USB-C cable", "Documentation"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Display", value: '6.1" Super Retina XDR' },
      { label: "Chip", value: "A18" },
      { label: "Storage", value: "128GB" },
      { label: "Network", value: "5G" },
    ],
    variants: [
      { id: "ip16-black", name: "Color", value: "128GB Black", storage: "128GB", stock: 14, colorHex: "#1c1917" },
    ],
  },
  {
    id: "ip15pro",
    slug: "iphone-15-pro",
    title: "iPhone 15 Pro",
    brand: "Apple",
    description:
      "Titanium design, A17 Pro chip, and an advanced camera system built for creators and everyday excellence.",
    images: [IMG.ip15pro],
    price: { amount: 1250000, currency: "NGN" },
    compareAtPrice: { amount: 1340000, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 428,
    tags: ["smartphone", "iphone", "apple", "5g", "flagship"],
    categoryId: "iphones",
    condition: "new",
    isDeal: true,
    dealEndsAt: "2026-06-14T23:59:59",
    rank: 6,
    specs: { storage: "256GB", ram: "8GB", has5G: true, batteryMah: 3274, screenInches: 6.1 },
    highlights: ["A17 Pro chip", "Action button", "USB-C", "Ceramic Shield front"],
    inBox: ["iPhone 15 Pro", "USB-C charge cable", "Documentation"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Display", value: '6.1" Super Retina XDR' },
      { label: "Chip", value: "A17 Pro" },
      { label: "Storage", value: "256GB" },
      { label: "Network", value: "5G" },
    ],
    variants: [
      { id: "ip15pro-natural", name: "Color", value: "256GB Natural Titanium", storage: "256GB", stock: 6, colorHex: "#9a8f80" },
    ],
  },
  {
    id: "ip14",
    slug: "iphone-14",
    title: "iPhone 14",
    brand: "Apple",
    description:
      "Reliable performance, a great dual-camera system, and all-day battery in a durable, familiar design.",
    images: [IMG.ip14],
    price: { amount: 720000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 512,
    tags: ["smartphone", "iphone", "apple", "5g"],
    categoryId: "iphones",
    condition: "new",
    specs: { storage: "128GB", ram: "6GB", has5G: true, batteryMah: 3279, screenInches: 6.1 },
    highlights: ["A15 Bionic chip", "Dual 12MP cameras", "Crash Detection", "All-day battery"],
    inBox: ["iPhone 14", "USB-C to Lightning cable", "Documentation"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Display", value: '6.1" Super Retina XDR' },
      { label: "Chip", value: "A15 Bionic" },
      { label: "Storage", value: "128GB" },
      { label: "Network", value: "5G" },
    ],
    variants: [
      { id: "ip14-midnight", name: "Color", value: "128GB Midnight", storage: "128GB", stock: 12, colorHex: "#1e293b" },
    ],
  },

  // ───────────────────────── Samsung ─────────────────────────
  {
    id: "s25ultra",
    slug: "samsung-galaxy-s25-ultra",
    title: "Galaxy S25 Ultra",
    brand: "Samsung",
    description:
      "The ultimate Galaxy. Titanium frame, built-in S Pen, a 200MP camera, and Galaxy AI to supercharge everything you do.",
    images: [IMG.s25ultra, IMG.s24ultra],
    price: { amount: 1480000, currency: "NGN" },
    compareAtPrice: { amount: 1590000, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 274,
    tags: ["smartphone", "samsung", "android", "5g", "flagship"],
    categoryId: "samsung-phones",
    condition: "new",
    isFeatured: true,
    isDeal: true,
    dealEndsAt: "2026-06-14T23:59:59",
    rank: 3,
    specs: { storage: "256GB", ram: "12GB", has5G: true, batteryMah: 5000, screenInches: 6.9 },
    highlights: ["200MP main camera", "Built-in S Pen", "Snapdragon 8 Elite", "Galaxy AI"],
    inBox: ["Galaxy S25 Ultra", "USB-C cable", "SIM tool"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Display", value: '6.9" Dynamic AMOLED 2X' },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      { label: "Storage", value: "256GB" },
      { label: "RAM", value: "12GB" },
      { label: "Battery", value: "5000 mAh" },
    ],
    variants: [
      { id: "s25ultra-256-black", name: "Storage", value: "256GB Titanium Black", storage: "256GB", stock: 8, colorHex: "#3a3a3c" },
      { id: "s25ultra-512-black", name: "Storage", value: "512GB Titanium Black", storage: "512GB", stock: 4, colorHex: "#3a3a3c" },
    ],
  },
  {
    id: "s25",
    slug: "samsung-galaxy-s25",
    title: "Galaxy S25",
    brand: "Samsung",
    description:
      "Compact flagship with Galaxy AI, a brilliant display, and a versatile triple-camera system in a sleek design.",
    images: [IMG.s25, IMG.s25b],
    price: { amount: 1050000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 187,
    tags: ["smartphone", "samsung", "android", "5g", "flagship"],
    categoryId: "samsung-phones",
    condition: "new",
    isNew: true,
    specs: { storage: "256GB", ram: "12GB", has5G: true, batteryMah: 4000, screenInches: 6.2 },
    highlights: ["Snapdragon 8 Elite", "50MP triple camera", "Galaxy AI", "Compact design"],
    inBox: ["Galaxy S25", "USB-C cable", "SIM tool"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Display", value: '6.2" Dynamic AMOLED 2X' },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      { label: "Storage", value: "256GB" },
      { label: "RAM", value: "12GB" },
    ],
    variants: [
      { id: "s25-256-navy", name: "Color", value: "256GB Navy", storage: "256GB", stock: 10, colorHex: "#1e293b" },
    ],
  },
  {
    id: "s24ultra",
    slug: "samsung-galaxy-s24-ultra",
    title: "Galaxy S24 Ultra",
    brand: "Samsung",
    description:
      "Flagship performance with a pro-grade 200MP camera, titanium frame, built-in S Pen, and all-day battery for power users.",
    images: [IMG.s24ultra, IMG.s23ultra],
    price: { amount: 985000, currency: "NGN" },
    compareAtPrice: { amount: 1095000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 612,
    tags: ["smartphone", "samsung", "android", "5g", "flagship"],
    categoryId: "samsung-phones",
    condition: "new",
    isBestSeller: true,
    isDeal: true,
    dealEndsAt: "2026-06-14T23:59:59",
    rank: 5,
    specs: { storage: "256GB", ram: "12GB", has5G: true, batteryMah: 5000, screenInches: 6.8 },
    highlights: ["200MP main camera", "S Pen included", "Titanium frame", "45W fast charging"],
    inBox: ["Galaxy S24 Ultra", "USB-C cable", "SIM ejector tool"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Display", value: '6.8" Dynamic AMOLED 2X' },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      { label: "Storage", value: "256GB" },
      { label: "RAM", value: "12GB" },
      { label: "Battery", value: "5000 mAh" },
    ],
    variants: [
      { id: "s24ultra-256-black", name: "Storage", value: "256GB Titanium Black", storage: "256GB", stock: 7, colorHex: "#3a3a3c" },
      { id: "s24ultra-512-black", name: "Storage", value: "512GB Titanium Black", storage: "512GB", stock: 3, colorHex: "#3a3a3c" },
    ],
  },
  {
    id: "s23ultra",
    slug: "samsung-galaxy-s23-ultra",
    title: "Galaxy S23 Ultra",
    brand: "Samsung",
    description:
      "A proven powerhouse with a 200MP camera, S Pen, and a large 5000mAh battery — flagship features at a smarter price.",
    images: [IMG.s23ultra],
    price: { amount: 820000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 433,
    tags: ["smartphone", "samsung", "android", "5g", "flagship"],
    categoryId: "samsung-phones",
    condition: "new",
    specs: { storage: "256GB", ram: "12GB", has5G: true, batteryMah: 5000, screenInches: 6.8 },
    highlights: ["200MP main camera", "S Pen included", "Snapdragon 8 Gen 2", "5000mAh battery"],
    inBox: ["Galaxy S23 Ultra", "USB-C cable", "SIM tool"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Display", value: '6.8" Dynamic AMOLED 2X' },
      { label: "Processor", value: "Snapdragon 8 Gen 2" },
      { label: "Storage", value: "256GB" },
      { label: "Battery", value: "5000 mAh" },
    ],
    variants: [
      { id: "s23ultra-256-black", name: "Color", value: "256GB Phantom Black", storage: "256GB", stock: 6, colorHex: "#0f172a" },
    ],
  },
  {
    id: "s23",
    slug: "samsung-galaxy-s23",
    title: "Galaxy S23",
    brand: "Samsung",
    description:
      "Compact and powerful, with a triple-camera system, vivid AMOLED display, and dependable all-day battery.",
    images: [IMG.s23],
    price: { amount: 590000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 356,
    tags: ["smartphone", "samsung", "android", "5g"],
    categoryId: "samsung-phones",
    condition: "new",
    isBestSeller: true,
    rank: 7,
    specs: { storage: "128GB", ram: "8GB", has5G: true, batteryMah: 3900, screenInches: 6.1 },
    highlights: ["50MP triple camera", "Snapdragon 8 Gen 2", "Compact design", "Wireless charging"],
    inBox: ["Galaxy S23", "USB-C cable", "SIM tool"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Display", value: '6.1" Dynamic AMOLED 2X' },
      { label: "Processor", value: "Snapdragon 8 Gen 2" },
      { label: "Storage", value: "128GB" },
    ],
    variants: [
      { id: "s23-128-black", name: "Color", value: "128GB Phantom Black", storage: "128GB", stock: 11, colorHex: "#0f172a" },
    ],
  },
  {
    id: "zfold",
    slug: "samsung-galaxy-z-fold",
    title: "Galaxy Z Fold",
    brand: "Samsung",
    description:
      "Unfold a tablet-sized screen in your pocket. Multitask like never before with a stunning foldable display and flagship power.",
    images: [IMG.zfold],
    price: { amount: 1650000, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 142,
    tags: ["smartphone", "samsung", "android", "5g", "flagship", "foldable"],
    categoryId: "samsung-phones",
    condition: "new",
    isNew: true,
    isFeatured: true,
    specs: { storage: "256GB", ram: "12GB", has5G: true, batteryMah: 4400, screenInches: 7.6 },
    highlights: ['7.6" foldable main screen', "Flex Mode multitasking", "Snapdragon 8 Elite", "S Pen compatible"],
    inBox: ["Galaxy Z Fold", "USB-C cable", "SIM tool"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Main display", value: '7.6" Dynamic AMOLED 2X' },
      { label: "Cover display", value: '6.3" AMOLED' },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      { label: "Storage", value: "256GB" },
    ],
    variants: [
      { id: "zfold-256-black", name: "Color", value: "256GB Phantom Black", storage: "256GB", stock: 4, colorHex: "#0f172a" },
    ],
  },
  {
    id: "a56",
    slug: "samsung-galaxy-a56",
    title: "Galaxy A56",
    brand: "Samsung",
    description:
      "Mid-range Samsung with a premium feel, smooth 120Hz display, capable cameras, and long software support.",
    images: [IMG.a56],
    price: { amount: 295000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 209,
    tags: ["smartphone", "samsung", "android", "5g", "budget"],
    categoryId: "samsung-phones",
    condition: "new",
    isNew: true,
    rank: 8,
    specs: { storage: "128GB", ram: "8GB", has5G: true, batteryMah: 5000, screenInches: 6.7 },
    highlights: ["120Hz Super AMOLED", "50MP OIS camera", "5000mAh battery", "IP67 rating"],
    inBox: ["Galaxy A56", "USB-C cable"],
    warranty: "12-month manufacturer warranty with local service support",
    fullSpecs: [
      { label: "Display", value: '6.7" Super AMOLED 120Hz' },
      { label: "Storage", value: "128GB" },
      { label: "RAM", value: "8GB" },
      { label: "Battery", value: "5000 mAh" },
    ],
    variants: [
      { id: "a56-128-navy", name: "Color", value: "128GB Awesome Navy", storage: "128GB", stock: 18, colorHex: "#1e293b" },
    ],
  },

  // ─────────────────────── Other Android ───────────────────────
  {
    id: "oneplus13",
    slug: "oneplus-13",
    title: "OnePlus 13",
    brand: "OnePlus",
    description:
      "Flagship speed with Snapdragon 8 Elite, a Hasselblad camera system, and blistering 100W fast charging.",
    images: [IMG.oneplus],
    price: { amount: 880000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 168,
    tags: ["smartphone", "oneplus", "android", "5g", "flagship"],
    categoryId: "android-phones",
    condition: "new",
    isFeatured: true,
    specs: { storage: "256GB", ram: "12GB", has5G: true, batteryMah: 6000, screenInches: 6.8 },
    highlights: ["Snapdragon 8 Elite", "Hasselblad cameras", "100W SUPERVOOC charging", "6000mAh battery"],
    inBox: ["OnePlus 13", "100W charger", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Display", value: '6.82" LTPO AMOLED 120Hz' },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      { label: "Storage", value: "256GB" },
      { label: "Battery", value: "6000 mAh" },
    ],
    variants: [
      { id: "oneplus13-256-beige", name: "Color", value: "256GB Sand", storage: "256GB", stock: 7, colorHex: "#d6c5a8" },
    ],
  },
  {
    id: "motoedge50",
    slug: "motorola-edge-50",
    title: "Motorola Edge 50",
    brand: "Motorola",
    description:
      "A sleek curved display, a 50MP camera with OIS, and clean near-stock Android with fast charging.",
    images: [IMG.motoEdge],
    price: { amount: 410000, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 121,
    tags: ["smartphone", "motorola", "android", "5g"],
    categoryId: "android-phones",
    condition: "new",
    specs: { storage: "256GB", ram: "8GB", has5G: true, batteryMah: 5000, screenInches: 6.7 },
    highlights: ["Curved pOLED 144Hz", "50MP OIS camera", "68W TurboPower", "Vegan leather finish"],
    inBox: ["Motorola Edge 50", "68W charger", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Display", value: '6.7" pOLED 144Hz' },
      { label: "Storage", value: "256GB" },
      { label: "RAM", value: "8GB" },
      { label: "Battery", value: "5000 mAh" },
    ],
    variants: [
      { id: "motoedge50-256-green", name: "Color", value: "256GB Forest", storage: "256GB", stock: 9, colorHex: "#3f4a37" },
    ],
  },
  {
    id: "nothing2a",
    slug: "nothing-phone-2a",
    title: "Nothing Phone (2a)",
    brand: "Nothing",
    description:
      "A standout transparent design with the signature Glyph interface, smooth 120Hz display, and clean Nothing OS.",
    images: [IMG.nothing],
    price: { amount: 350000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 97,
    tags: ["smartphone", "nothing", "android", "5g"],
    categoryId: "android-phones",
    condition: "new",
    isNew: true,
    specs: { storage: "256GB", ram: "8GB", has5G: true, batteryMah: 5000, screenInches: 6.7 },
    highlights: ["Glyph Interface", "120Hz AMOLED", "Dimensity 7200 Pro", "Nothing OS"],
    inBox: ["Nothing Phone (2a)", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Display", value: '6.7" AMOLED 120Hz' },
      { label: "Storage", value: "256GB" },
      { label: "RAM", value: "8GB" },
      { label: "Battery", value: "5000 mAh" },
    ],
    variants: [
      { id: "nothing2a-256-white", name: "Color", value: "256GB White", storage: "256GB", stock: 13, colorHex: "#e5e7eb" },
    ],
  },

  // ───────────────────────── Audio ─────────────────────────
  {
    id: "buds-anc",
    slug: "wireless-anc-earbuds",
    title: "Wireless ANC Earbuds",
    brand: "Soundcore",
    description:
      "Active noise cancellation, rich sound, and clear calls with a compact charging case for all-day listening.",
    images: [IMG.budsBlack],
    price: { amount: 42000, currency: "NGN" },
    compareAtPrice: { amount: 52000, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 188,
    tags: ["earbuds", "audio", "accessories"],
    categoryId: "earbuds",
    condition: "new",
    isDeal: true,
    dealEndsAt: "2026-06-12T23:59:59",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 400, screenInches: 0 },
    highlights: ["Active noise cancellation", "35hr total battery", "IPX4 water resistance", "Bluetooth 5.3"],
    inBox: ["Earbuds", "Charging case", "Ear tips", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Driver", value: "10mm dynamic" },
      { label: "Bluetooth", value: "5.3" },
      { label: "Battery (case)", value: "400 mAh" },
    ],
    variants: [
      { id: "buds-anc-black", name: "Color", value: "Black", stock: 30, colorHex: "#0f172a" },
    ],
  },
  {
    id: "buds-open",
    slug: "open-ear-sport-earbuds",
    title: "Open-Ear Sport Earbuds",
    brand: "Soundcore",
    description:
      "Secure open-ear fit that keeps you aware of your surroundings — perfect for runs, rides, and the gym.",
    images: [IMG.budsOpen],
    price: { amount: 55000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 76,
    tags: ["earbuds", "audio", "accessories"],
    categoryId: "earbuds",
    condition: "new",
    isNew: true,
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 480, screenInches: 0 },
    highlights: ["Open-ear design", "Secure ear hooks", "IPX5 sweat resistance", "Bluetooth 5.4"],
    inBox: ["Earbuds", "Charging case", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Type", value: "Open-ear true wireless" },
      { label: "Bluetooth", value: "5.4" },
      { label: "Battery (case)", value: "480 mAh" },
    ],
    variants: [
      { id: "buds-open-black", name: "Color", value: "Black", stock: 22, colorHex: "#0f172a" },
    ],
  },
  {
    id: "buds-blue",
    slug: "wireless-earbuds-blue",
    title: "Wireless Earbuds",
    brand: "JLab",
    description:
      "Everyday true-wireless earbuds with punchy sound, touch controls, and a pocketable case in a bold blue finish.",
    images: [IMG.budsBlue],
    price: { amount: 30000, currency: "NGN" },
    inStock: true,
    rating: 4.2,
    reviewCount: 64,
    tags: ["earbuds", "audio", "accessories"],
    categoryId: "earbuds",
    condition: "new",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 350, screenInches: 0 },
    highlights: ["Touch controls", "32hr total battery", "IPX4 rating", "USB-C charging"],
    inBox: ["Earbuds", "Charging case", "Ear tips"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Bluetooth", value: "5.3" },
      { label: "Battery (case)", value: "350 mAh" },
    ],
    variants: [
      { id: "buds-blue-navy", name: "Color", value: "Blue", stock: 19, colorHex: "#1e3a8a" },
    ],
  },
  {
    id: "headphones-spaceone",
    slug: "space-one-wireless-headphones",
    title: "Space One Wireless Headphones",
    brand: "Soundcore",
    description:
      "Over-ear comfort with adaptive noise cancellation and up to 55 hours of playtime for travel and focus.",
    images: [IMG.headphones],
    price: { amount: 120000, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    tags: ["headphones", "audio", "accessories"],
    categoryId: "earbuds",
    condition: "new",
    isBestSeller: true,
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 700, screenInches: 0 },
    highlights: ["Adaptive ANC", "55hr playtime", "Plush over-ear cushions", "Multipoint Bluetooth"],
    inBox: ["Headphones", "Carry pouch", "USB-C cable", "AUX cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Type", value: "Over-ear wireless" },
      { label: "Battery", value: "Up to 55 hours" },
      { label: "Bluetooth", value: "5.3" },
    ],
    variants: [
      { id: "headphones-white", name: "Color", value: "White", stock: 12, colorHex: "#f8fafc" },
    ],
  },
  {
    id: "jbl-partybox",
    slug: "jbl-partybox-on-the-go",
    title: "JBL PartyBox On-The-Go",
    brand: "JBL",
    description:
      "Portable party speaker with a built-in light show, a wireless mic, and deep, room-filling JBL sound.",
    images: [IMG.jbl],
    price: { amount: 180000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 88,
    tags: ["speaker", "audio", "accessories"],
    categoryId: "earbuds",
    condition: "new",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 0, screenInches: 0 },
    highlights: ["Built-in light show", "Wireless mic included", "IPX4 splashproof", "Rechargeable battery"],
    inBox: ["PartyBox speaker", "Wireless mic", "Power cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Type", value: "Portable party speaker" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Rating", value: "IPX4" },
    ],
    variants: [
      { id: "jbl-partybox-black", name: "Color", value: "Black", stock: 8, colorHex: "#0f172a" },
    ],
  },
  {
    id: "klipsch-speaker",
    slug: "klipsch-party-speaker",
    title: "Klipsch Party Speaker",
    brand: "Klipsch",
    description:
      "Big, vibrant sound with reactive RGB lighting — a bold portable speaker for any gathering.",
    images: [IMG.klipsch],
    price: { amount: 95000, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 52,
    tags: ["speaker", "audio", "accessories"],
    categoryId: "earbuds",
    condition: "new",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 0, screenInches: 0 },
    highlights: ["Reactive RGB lighting", "Dual woofers", "Bluetooth streaming", "Rechargeable"],
    inBox: ["Speaker", "Power cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Type", value: "Portable Bluetooth speaker" },
      { label: "Lighting", value: "Reactive RGB" },
    ],
    variants: [
      { id: "klipsch-black", name: "Color", value: "Black", stock: 10, colorHex: "#0f172a" },
    ],
  },

  // ─────────────────── Chargers & Power ───────────────────
  {
    id: "pb-allinone",
    slug: "all-in-one-power-bank-10000",
    title: "All-in-One Power Bank 10,000mAh",
    brand: "Circuit",
    description:
      "Pocket power bank with built-in USB-C and Lightning cables — no extra cords needed. Charge two devices at once.",
    images: [IMG.pbCables],
    price: { amount: 32000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 96,
    tags: ["power-bank", "charger", "accessories"],
    categoryId: "chargers",
    condition: "new",
    isBestSeller: true,
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 10000, screenInches: 0 },
    highlights: ["Built-in cables", "Digital charge display", "22.5W output", "Dual-device charging"],
    inBox: ["Power bank", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Capacity", value: "10,000 mAh" },
      { label: "Output", value: "22.5W" },
      { label: "Cables", value: "Built-in USB-C + Lightning" },
    ],
    variants: [
      { id: "pb-allinone-black", name: "Color", value: "Black", stock: 40, colorHex: "#0f172a" },
    ],
  },
  {
    id: "pb-35000",
    slug: "fast-charge-power-bank-35000",
    title: "35,000mAh Fast-Charge Power Bank",
    brand: "LDAS",
    description:
      "Massive capacity with built-in cables and fast charging — keep phones, tablets, and earbuds topped up for days.",
    images: [IMG.pbLdas],
    price: { amount: 45000, currency: "NGN" },
    compareAtPrice: { amount: 58000, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 71,
    tags: ["power-bank", "charger", "accessories"],
    categoryId: "chargers",
    condition: "new",
    isDeal: true,
    dealEndsAt: "2026-06-11T23:59:59",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 35000, screenInches: 0 },
    highlights: ["35,000mAh capacity", "Built-in cables", "Fast charging", "Multi-device output"],
    inBox: ["Power bank", "USB-C cable"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Capacity", value: "35,000 mAh" },
      { label: "Cables", value: "Built-in multi-connector" },
    ],
    variants: [
      { id: "pb-35000-black", name: "Color", value: "Black", stock: 25, colorHex: "#0f172a" },
    ],
  },
  {
    id: "anker-130w",
    slug: "anker-130w-power-bank",
    title: "Anker 130W Power Bank",
    brand: "Anker",
    description:
      "High-output portable charger that fast-charges laptops, phones, and tablets, with a built-in display and cable.",
    images: [IMG.pbAnker],
    price: { amount: 78000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 119,
    tags: ["power-bank", "charger", "accessories"],
    categoryId: "chargers",
    condition: "new",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 25000, screenInches: 0 },
    highlights: ["130W max output", "Smart digital display", "Built-in USB-C cable", "Laptop-ready"],
    inBox: ["Power bank", "Travel pouch"],
    warranty: "18-month warranty",
    fullSpecs: [
      { label: "Capacity", value: "25,000 mAh" },
      { label: "Output", value: "130W" },
      { label: "Display", value: "Digital readout" },
    ],
    variants: [
      { id: "anker-130w-silver", name: "Color", value: "Silver", stock: 14, colorHex: "#cbd5e1" },
    ],
  },

  // ───────────────────── Accessories ─────────────────────
  {
    id: "airtag-4pack",
    slug: "apple-airtag-4-pack",
    title: "AirTag (4 Pack)",
    brand: "Apple",
    description:
      "Keep track of your keys, bag, and devices. Precision Finding and the Find My network make losing things a thing of the past.",
    images: [IMG.airtag],
    price: { amount: 95000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 203,
    tags: ["tracker", "apple", "accessories"],
    categoryId: "accessories",
    condition: "new",
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 0, screenInches: 0 },
    highlights: ["Precision Finding", "Find My network", "Replaceable battery", "IP67 water resistant"],
    inBox: ["4× AirTag", "Documentation"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Pack", value: "4 trackers" },
      { label: "Battery", value: "User-replaceable CR2032" },
      { label: "Water resistance", value: "IP67" },
    ],
    variants: [
      { id: "airtag-4pack-white", name: "Pack", value: "4 Pack", stock: 30, colorHex: "#f8fafc" },
    ],
  },
  {
    id: "ipad-102",
    slug: "apple-ipad-102",
    title: 'iPad 10.2" (Wi-Fi)',
    brand: "Apple",
    description:
      "A versatile iPad for browsing, streaming, and notes, with the A13 Bionic chip and a gorgeous Retina display.",
    images: [IMG.ipad],
    price: { amount: 420000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 158,
    tags: ["tablet", "apple", "accessories"],
    categoryId: "accessories",
    condition: "new",
    specs: { storage: "64GB", ram: "3GB", has5G: false, batteryMah: 8686, screenInches: 10.2 },
    highlights: ["A13 Bionic chip", "10.2” Retina display", "Apple Pencil support", "All-day battery"],
    inBox: ["iPad", "USB-C cable", "20W adapter"],
    warranty: "12-month Apple warranty via authorized partner",
    fullSpecs: [
      { label: "Display", value: '10.2" Retina' },
      { label: "Chip", value: "A13 Bionic" },
      { label: "Storage", value: "64GB" },
    ],
    variants: [
      { id: "ipad-102-gray", name: "Storage", value: "64GB Space Gray", storage: "64GB", stock: 9, colorHex: "#6b7280" },
    ],
  },

  // ───────────────── Smartwatches / Wearables ─────────────────
  {
    id: "oura-ring",
    slug: "oura-ring-gen3",
    title: "Oura Ring Gen3",
    brand: "Oura",
    description:
      "A discreet smart ring that tracks sleep, activity, heart rate, and readiness — advanced health insights on your finger.",
    images: [IMG.ouraRing],
    price: { amount: 240000, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 84,
    tags: ["wearable", "smartwatch", "health"],
    categoryId: "smartwatches",
    condition: "new",
    isNew: true,
    specs: { storage: "N/A", ram: "N/A", has5G: false, batteryMah: 22, screenInches: 0 },
    highlights: ["Sleep & readiness tracking", "24/7 heart rate", "7-day battery", "Water resistant 100m"],
    inBox: ["Oura Ring", "Charger", "Sizing kit"],
    warranty: "12-month warranty",
    fullSpecs: [
      { label: "Type", value: "Smart ring" },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Water resistance", value: "100m" },
    ],
    variants: [
      { id: "oura-ring-gold", name: "Finish", value: "Gold", stock: 11, colorHex: "#c9a45c" },
    ],
  },

  // ───────────────────── Refurbished ─────────────────────
  {
    id: "ip14-refurb",
    slug: "iphone-14-refurbished",
    title: "iPhone 14 (Certified Refurbished)",
    brand: "Apple",
    description:
      "Professionally tested and restored iPhone 14 with verified battery health and Grade A cosmetic condition.",
    images: [IMG.ip14b],
    price: { amount: 560000, currency: "NGN" },
    compareAtPrice: { amount: 720000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
    tags: ["iphone", "apple", "refurbished"],
    categoryId: "refurbished",
    condition: "refurbished",
    isDeal: true,
    dealEndsAt: "2026-06-12T23:59:59",
    specs: { storage: "128GB", ram: "6GB", has5G: true, batteryMah: 3279, screenInches: 6.1 },
    highlights: ["85%+ battery health", "72-point inspection", "90-day store warranty", "Grade A cosmetic"],
    inBox: ["iPhone 14", "USB-C to Lightning cable", "Certification card"],
    warranty: "90-day Circuit Mobile warranty + optional extended cover",
    fullSpecs: [
      { label: "Condition", value: "Certified refurbished" },
      { label: "Storage", value: "128GB" },
      { label: "Battery health", value: "85% minimum" },
    ],
    variants: [
      { id: "ip14-refurb-midnight", name: "Color", value: "128GB Midnight", storage: "128GB", stock: 4, colorHex: "#1e293b" },
    ],
  },
  {
    id: "s21-refurb",
    slug: "samsung-galaxy-s21-refurbished",
    title: "Galaxy S21 (Certified Refurbished)",
    brand: "Samsung",
    description:
      "Restored Galaxy S21 with verified performance and battery health — flagship features at a smart, sustainable price.",
    images: [IMG.s21],
    price: { amount: 240000, currency: "NGN" },
    compareAtPrice: { amount: 320000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 58,
    tags: ["samsung", "android", "refurbished"],
    categoryId: "refurbished",
    condition: "refurbished",
    isDeal: true,
    dealEndsAt: "2026-06-13T23:59:59",
    specs: { storage: "128GB", ram: "8GB", has5G: true, batteryMah: 4000, screenInches: 6.2 },
    highlights: ["85%+ battery health", "72-point inspection", "90-day store warranty", "Grade A cosmetic"],
    inBox: ["Galaxy S21", "USB-C cable", "Certification card"],
    warranty: "90-day Circuit Mobile warranty + optional extended cover",
    fullSpecs: [
      { label: "Condition", value: "Certified refurbished" },
      { label: "Storage", value: "128GB" },
      { label: "Battery health", value: "85% minimum" },
    ],
    variants: [
      { id: "s21-refurb-gray", name: "Color", value: "128GB Phantom Gray", storage: "128GB", stock: 5, colorHex: "#4b5563" },
    ],
  },
  {
    id: "ip15pro-refurb",
    slug: "iphone-15-pro-refurbished",
    title: "iPhone 15 Pro (Certified Refurbished)",
    brand: "Apple",
    description:
      "Restored iPhone 15 Pro with titanium build and A17 Pro power, fully tested and warranty-backed for peace of mind.",
    images: [IMG.ip15pro],
    price: { amount: 980000, currency: "NGN" },
    compareAtPrice: { amount: 1250000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 49,
    tags: ["iphone", "apple", "refurbished", "flagship"],
    categoryId: "refurbished",
    condition: "refurbished",
    specs: { storage: "256GB", ram: "8GB", has5G: true, batteryMah: 3274, screenInches: 6.1 },
    highlights: ["88%+ battery health", "72-point inspection", "90-day store warranty", "Grade A cosmetic"],
    inBox: ["iPhone 15 Pro", "USB-C cable", "Certification card"],
    warranty: "90-day Circuit Mobile warranty + optional extended cover",
    fullSpecs: [
      { label: "Condition", value: "Certified refurbished" },
      { label: "Storage", value: "256GB" },
      { label: "Battery health", value: "88% minimum" },
    ],
    variants: [
      { id: "ip15pro-refurb-natural", name: "Color", value: "256GB Natural Titanium", storage: "256GB", stock: 3, colorHex: "#9a8f80" },
    ],
  },
];

export const heroImage = IMG.s25ultra;

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductsByIds(ids: string[]) {
  const order = new Map(ids.map((id, i) => [id, i]));
  return products.filter((p) => order.has(p.id)).sort((a, b) => order.get(a.id)! - order.get(b.id)!);
}

export function getBestsellers(limit = 8) {
  return products
    .filter((p) => p.rank !== undefined)
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99))
    .slice(0, limit);
}

export function getDeals(limit = 6) {
  return products.filter((p) => p.isDeal || p.compareAtPrice).slice(0, limit);
}

export function getAccessories(limit = 6) {
  return products
    .filter((p) => ["accessories", "chargers", "earbuds"].includes(p.categoryId))
    .slice(0, limit);
}

export function getRefurbished(limit = 4) {
  return products.filter((p) => p.condition === "refurbished" || p.categoryId === "refurbished").slice(0, limit);
}

export function searchProducts(query: string) {
  const q = query.toLowerCase().trim();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.description.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.categoryId === product.categoryId || p.brand === product.brand))
    .slice(0, limit);
}

export function getRelatedAccessories(product: Product, limit = 4) {
  if (["accessories", "chargers", "earbuds"].includes(product.categoryId)) {
    return products.filter((p) => p.id !== product.id && p.categoryId === product.categoryId).slice(0, limit);
  }
  return products
    .filter((p) => ["accessories", "chargers", "earbuds"].includes(p.categoryId))
    .slice(0, limit);
}
