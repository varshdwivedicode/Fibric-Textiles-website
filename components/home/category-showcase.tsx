import Image from "next/image"
import Link from "next/link"
import { CATEGORIES, PRODUCTS } from "@/lib/products"

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">By material</span>
          <h2 className="mt-2 text-balance font-serif text-4xl text-foreground">Explore the mill floor</h2>
        </div>
        <Link href="/shop" className="text-sm font-medium text-primary hover:underline">
          View all fabrics
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {CATEGORIES.map((c, i) => {
          const count = PRODUCTS.filter((p) => p.category === c.id).length
          return (
            <Link
              key={c.id}
              href={`/shop?category=${c.id}`}
              className={`group relative overflow-hidden rounded-xl bg-muted ${
                i === 0 ? "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={c.image || "/placeholder.svg"}
                alt={c.name}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                <p className="text-xs uppercase tracking-[0.16em] text-background/80">{count} fabrics</p>
                <h3 className="mt-1 font-serif text-2xl">{c.name}</h3>
                <p className="text-sm text-background/85">{c.tagline}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
