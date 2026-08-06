import Image from "next/image"
import Link from "next/link"

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src="/products/blend-a.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative flex flex-col items-start gap-6 px-8 py-16 text-background sm:px-14 sm:py-20 lg:max-w-2xl">
          <h2 className="text-balance font-serif text-4xl leading-tight sm:text-5xl">
            Buying for a studio, brand, or production run?
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-background/85">
            Open a Fibric trade account for volume pricing, reserved inventory, and a dedicated sourcing
            specialist who knows your collection.
          </p>
          <Link
            href="/shop"
            className="inline-flex h-12 items-center rounded-full bg-background px-7 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
          >
            Apply for trade access
          </Link>
        </div>
      </div>
    </section>
  )
}
