import { Scissors, Truck, Leaf, BadgeCheck } from "lucide-react"

const PROPS = [
  { icon: Scissors, title: "Order swatches first", body: "Feel the hand and check true color before you commit to yardage." },
  { icon: Truck, title: "Fast global dispatch", body: "In-stock bolts ship within 24 hours from our climate-controlled store." },
  { icon: Leaf, title: "Responsibly sourced", body: "Organic, recycled, and traceable fibers across every material family." },
  { icon: BadgeCheck, title: "Mill-direct pricing", body: "Trade accounts unlock volume pricing and dedicated procurement support." },
]

export function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {PROPS.map((p) => (
          <div key={p.title} className="flex flex-col gap-3">
            <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
