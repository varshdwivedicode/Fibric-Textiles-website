"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Minus, Plus, Truck, Scissors, RotateCcw, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/components/cart-provider"
import { CATEGORY_MAP, type Product } from "@/lib/products"

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { addItem, openCart } = useCart()
  const [qty, setQty] = useState(1)
  const cat = CATEGORY_MAP[product.category]
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const specs = [
    { label: "Material", value: cat.name },
    { label: "Color", value: product.color },
    { label: "Sold by", value: "The yard" },
    { label: "In stock", value: `${product.inventory} yds` },
    { label: "Units sold", value: `${product.sold}` },
    { label: "SKU", value: product.id.toUpperCase().slice(0, 10) },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/shop" className="hover:text-primary">Shop</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/shop?category=${product.category}`} className="hover:text-primary">{cat.name}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground">{product.title}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {discount > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Save {discount}%
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <Link
            href={`/shop?category=${product.category}`}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
          >
            {cat.name}
          </Link>
          <h1 className="mt-2 text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {product.title}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating) ? "fill-accent text-accent" : "text-border"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">· {product.reviews} reviews</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif text-3xl text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-sm text-muted-foreground">per yard</span>
          </div>

          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease yards"
                className="flex h-12 w-12 items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center tabular-nums">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase yards"
                className="flex h-12 w-12 items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <span className="text-sm text-muted-foreground">yards</span>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 flex-1 rounded-full text-sm"
              onClick={() => addItem(product, qty)}
            >
              Add {qty} {qty === 1 ? "yard" : "yards"} · ${(product.price * qty).toFixed(2)}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full text-sm"
              onClick={() => {
                addItem(product, qty)
                openCart()
              }}
            >
              Order a swatch
            </Button>
          </div>

          <ul className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { icon: Scissors, text: "Cut to order, no minimums" },
              { icon: Truck, text: "Ships within 24 hours" },
              { icon: RotateCcw, text: "Free swatch on request" },
            ].map((f) => (
              <li key={f.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                <f.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" strokeWidth={1.5} />
                {f.text}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-border bg-card p-6">
            {specs.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</dt>
                <dd className="mt-0.5 text-sm font-medium text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-3xl text-foreground">More in {cat.name}</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
