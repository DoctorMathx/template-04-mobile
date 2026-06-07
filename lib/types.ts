export type Currency = "NGN" | "USD" | "GBP";

export type Money = {
  amount: number;
  currency: Currency;
};

export type ProductCondition = "new" | "refurbished" | "open-box";

export type ProductVariant = {
  id: string;
  name: string;
  value: string;
  stock: number;
  colorHex?: string;
  storage?: string;
};

export type PhoneSpecs = {
  storage: string;
  ram: string;
  has5G: boolean;
  batteryMah: number;
  screenInches: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  description: string;
  images: string[];
  price: Money;
  compareAtPrice?: Money;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  categoryId: string;
  condition: ProductCondition;
  specs: PhoneSpecs;
  variants: ProductVariant[];
  highlights: string[];
  inBox: string[];
  warranty: string;
  fullSpecs: { label: string; value: string }[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isDeal?: boolean;
  dealEndsAt?: string;
  rank?: number;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  productIds: string[];
  promoBanner?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  product: string;
};

export type Deal = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  endsAt: string;
  discountLabel: string;
};
