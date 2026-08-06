import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Sourced from the world&apos;s finest mills
          </span>
          <h1 className="mt-6 text-balance font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Fabric, by the yard, for people who care about it.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Fibric is a curated textile house for designers, makers, and procurement buyers. Explore cotton,
            silk, wool, linen, and considered blends — each photographed in true color.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse the collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/shop?category=silk"
              className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Shop silk
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: "60+", label: "Fabrics in stock" },
              { value: "6", label: "Material families" },
              { value: "24h", label: "Swatch dispatch" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl text-foreground">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted lg:aspect-[5/6]">
            <Image
              src="/products/hero-fabrics.png"
              alt="An arrangement of premium folded fabric bolts in warm neutral tones"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden max-w-[13rem] rounded-xl border border-border bg-card p-4 shadow-sm sm:block">
            <p className="font-serif text-lg leading-tight">Pure Mulberry Silk</p>
            <p className="mt-1 text-sm text-muted-foreground">Natural lustre, buttery drape</p>
            <p className="mt-2 text-sm font-medium">$54.99 / yd</p>
          </div>
        </div>
      </div>
    </section>
  )
}
