import Link from "next/link"
import { CATEGORIES } from "@/lib/products"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-serif text-2xl">Fibric</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A curated textile house sourcing premium fabrics by the yard for designers, makers, and
              procurement teams worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Shop by Material</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link href={`/shop?category=${c.id}`} className="text-sm text-foreground/80 hover:text-primary">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Company</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {["About Fibric", "Trade Program", "Sustainability", "Sample Service", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-sm text-foreground/80 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">The Swatchbook</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              New arrivals and mill stories, delivered monthly.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Fibric Textiles. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/shop" className="hover:text-primary">Privacy</Link>
            <Link href="/shop" className="hover:text-primary">Terms</Link>
            <Link href="/shop" className="hover:text-primary">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
