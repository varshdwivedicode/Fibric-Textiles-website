import { Hero } from "@/components/home/hero"
import { CategoryShowcase } from "@/components/home/category-showcase"
import { FeaturedGrid } from "@/components/home/featured-grid"
import { ValueProps } from "@/components/home/value-props"
import { CtaBand } from "@/components/home/cta-band"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedGrid />
      <ValueProps />
      <CtaBand />
    </>
  )
}
