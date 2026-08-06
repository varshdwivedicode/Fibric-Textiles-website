"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Plus } from "lucide-react"
import type { Product } from "@/lib/products"
import { CATEGORY_MAP } from "@/lib/products"
import { useCart } from "@/components/cart-provider"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group flex flex-col">
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-lg bg-muted"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-medium tracking-wide text-primary-foreground">
            -{discount}%
          </span>
        )}
        <button
          type="button"
          aria-label={`Add ${product.title} to cart`}
          onClick={(e) => {
            e.preventDefault()
            addItem(product)
          }}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur transition-all duration-300 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
        >
          <Plus className="h-5 w-5" />
        </button>
      </Link>

      <div className="mt-3 flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {CATEGORY_MAP[product.category].name}
        </span>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-pretty font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-primary">
            {product.title}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="font-medium text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-medium text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="ml-auto text-xs text-muted-foreground">/ yd</span>
        </div>
      </div>
    </div>
  )
}
