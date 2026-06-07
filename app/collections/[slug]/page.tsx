import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionBySlug, collections } from "@/mock/collections";
import { getProductsByIds } from "@/mock/products";
import { CollectionPageClient } from "@/components/collection/collection-page-client";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const col = getCollectionBySlug(slug);
  if (!col) return { title: "Collection Not Found" };
  return { title: col.title, description: col.description };
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const col = getCollectionBySlug(slug);
  if (!col) notFound();

  const products = getProductsByIds(col.productIds);

  return <CollectionPageClient collection={col} products={products} />;
}
