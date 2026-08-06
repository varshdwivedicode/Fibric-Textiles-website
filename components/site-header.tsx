"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { CATEGORIES } from "@/lib/products"

const NAV = [
  { label: "Shop All", href: "/shop" },
  { label: "Cotton", href: "/shop?category=cotton" },
  { label: "Silk", href: "/shop?category=silk" },
  { label: "Wool", href: "/shop?category=wool" },
  { label: "Linen", href: "/shop?category=linen" },
]

export function SiteHeader() {
  const { count, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="font-serif text-2xl tracking-tight text-foreground">Fibric</span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
              Textiles
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/shop"
            aria-label="Search fabrics"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-primary px-1 text-[0.65rem] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <Link
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm text-foreground/80 hover:text-primary"
          >
            Shop All
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/shop?category=${c.id}`}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-foreground/80 hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
