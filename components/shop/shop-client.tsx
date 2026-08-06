"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CATEGORIES, PRODUCTS, type CategoryId } from "@/lib/products"

type SortKey = "featured" | "price-low" | "price-high" | "rating" | "popular"

const SORTS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" },
]

const MAX_PRICE = 60

export function ShopClient({ initialCategory }: { initialCategory?: CategoryId }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<CategoryId | "all">(initialCategory ?? "all")
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE)
  const [sort, setSort] = useState<SortKey>("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const result = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false
      if (p.price > maxPrice) return false
      if (q && !`${p.title} ${p.description} ${p.color}`.toLowerCase().includes(q)) return false
      return true
    })

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "popular":
        result.sort((a, b) => b.sold - a.sold)
        break
      default:
        result.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false))
    }
    return result
  }, [search, category, maxPrice, sort])

  const activeCount = (category !== "all" ? 1 : 0) + (maxPrice < MAX_PRICE ? 1 : 0)

  function reset() {
    setCategory("all")
    setMaxPrice(MAX_PRICE)
    setSearch("")
  }

  const filterPanel = (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">Material</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <button
              onClick={() => setCategory("all")}
              className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                category === "all" ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-muted"
              }`}
            >
              All materials
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setCategory(c.id)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  category === c.id ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {c.name}
                <span className={category === c.id ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {PRODUCTS.filter((p) => p.category === c.id).length}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Max price / yd</h3>
          <span className="text-sm font-medium">${maxPrice}</span>
        </div>
        <input
          type="range"
          min={8}
          max={MAX_PRICE}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Maximum price"
        />
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>$8</span>
          <span>${MAX_PRICE}</span>
        </div>
      </div>

      {activeCount > 0 && (
        <button onClick={reset} className="self-start text-sm font-medium text-primary hover:underline">
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="border-b border-border pb-8">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">The collection</span>
        <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">
          {category === "all" ? "All Fabrics" : CATEGORIES.find((c) => c.id === category)?.name}
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Every bolt photographed in true color. Order a swatch, then buy by the yard.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-24">{filterPanel}</div>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search fabrics, colors, weaves…"
                className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={() => setFiltersOpen(true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-4 text-sm font-medium lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters{activeCount > 0 ? ` (${activeCount})` : ""}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort products"
              className="h-11 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-primary"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "fabric" : "fabrics"}
          </p>

          {filtered.length === 0 ? (
            <div className="mt-16 flex flex-col items-center gap-3 text-center">
              <p className="font-serif text-2xl">No fabrics match your filters</p>
              <button onClick={reset} className="text-sm font-medium text-primary hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X className="h-5 w-5" />
              </button>
            </div>
            {filterPanel}
          </div>
        </div>
      )}
    </div>
  )
}
