import { ShopClient } from "@/components/shop/shop-client"
import { CATEGORIES, type CategoryId } from "@/lib/products"

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const valid = CATEGORIES.some((c) => c.id === category)
  const initial = valid ? (category as CategoryId) : undefined
  return <ShopClient key={initial ?? "all"} initialCategory={initial} />
}
