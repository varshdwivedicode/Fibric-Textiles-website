import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { FEATURED } from "@/lib/products"

export function FeaturedGrid() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Curator&apos;s picks</span>
            <h2 className="mt-2 text-balance font-serif text-4xl text-foreground">Featured this season</h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-primary hover:underline">
            Shop everything
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {FEATURED.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
