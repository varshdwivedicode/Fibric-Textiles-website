import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProductDetail } from "@/components/product/product-detail"
import { getProduct, getRelated, PRODUCTS } from "@/lib/products"

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: "Fabric not found — Fibric" }
  return {
    title: `${product.title} — Fibric`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()
  const related = getRelated(product)
  return <ProductDetail product={product} related={related} />
}
