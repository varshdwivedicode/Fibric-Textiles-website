export type CategoryId =
  | "cotton"
  | "silk"
  | "wool"
  | "linen"
  | "synthetic"
  | "blend"

export interface Category {
  id: CategoryId
  name: string
  tagline: string
  image: string
}

export interface Product {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  category: CategoryId
  image: string
  rating: number
  reviews: number
  sold: number
  inventory: number
  color: string
  featured?: boolean
}

export const CATEGORIES: Category[] = [
  { id: "cotton", name: "Cotton", tagline: "Breathable & everyday", image: "/products/cotton-a.png" },
  { id: "silk", name: "Silk", tagline: "Lustrous & luxurious", image: "/products/silk-b.png" },
  { id: "wool", name: "Wool", tagline: "Warm & structured", image: "/products/wool-b.png" },
  { id: "linen", name: "Linen", tagline: "Natural & relaxed", image: "/products/linen-a.png" },
  { id: "synthetic", name: "Synthetic", tagline: "Durable & versatile", image: "/products/synthetic-b.png" },
  { id: "blend", name: "Blends", tagline: "The best of both", image: "/products/blend-a.png" },
]

export const CATEGORY_MAP: Record<CategoryId, Category> = CATEGORIES.reduce(
  (acc, c) => {
    acc[c.id] = c
    return acc
  },
  {} as Record<CategoryId, Category>,
)

const IMAGES: Record<CategoryId, string[]> = {
  cotton: ["/products/cotton-a.png", "/products/cotton-b.png"],
  silk: ["/products/silk-a.png", "/products/silk-b.png"],
  wool: ["/products/wool-a.png", "/products/wool-b.png"],
  linen: ["/products/linen-a.png", "/products/linen-b.png"],
  synthetic: ["/products/synthetic-a.png", "/products/synthetic-b.png"],
  blend: ["/products/blend-a.png", "/products/blend-b.png"],
}

const COLORS: Record<CategoryId, string[]> = {
  cotton: ["Natural Cream", "Pale Clay", "Soft White", "Oatmeal"],
  silk: ["Champagne", "Rust", "Blush", "Ivory"],
  wool: ["Camel", "Charcoal", "Heather Grey", "Oatmeal"],
  linen: ["Flax", "Sage", "Sand", "Natural"],
  synthetic: ["Dusty Rose", "Deep Teal", "Slate", "Onyx"],
  blend: ["Terracotta", "Mauve", "Stone", "Warm Grey"],
}

interface Seed {
  title: string
  description: string
  price: number
  inventory: number
  category: CategoryId
}

const SEED: Seed[] = [
  // Cotton
  { title: "Premium Egyptian Cotton", description: "Luxurious 100% Egyptian cotton with superior softness and a fine, even weave prized by shirtmakers.", price: 24.99, inventory: 150, category: "cotton" },
  { title: "Organic Cotton Fabric", description: "Eco-friendly organic cotton, GOTS-minded and perfect for sustainable fashion collections.", price: 18.99, inventory: 200, category: "cotton" },
  { title: "Cotton Poplin", description: "Crisp cotton poplin with subtle shine, ideal for structured garments and tailored shirting.", price: 16.99, inventory: 180, category: "cotton" },
  { title: "Cotton Flannel", description: "Soft, brushed cotton flannel for cozy comfort through cooler seasons.", price: 14.99, inventory: 220, category: "cotton" },
  { title: "Cotton Voile", description: "Lightweight cotton voile with a delicate, semi-sheer texture and airy drape.", price: 12.99, inventory: 160, category: "cotton" },
  { title: "Cotton Jersey Knit", description: "Stretch cotton jersey with excellent recovery, perfect for tees and loungewear.", price: 15.99, inventory: 200, category: "cotton" },
  { title: "Cotton Sateen", description: "Smooth cotton sateen with a subtle luster and a supple, weighty hand.", price: 19.99, inventory: 140, category: "cotton" },
  { title: "Cotton Twill", description: "Durable cotton twill with a clear diagonal wale for workwear and chinos.", price: 17.99, inventory: 190, category: "cotton" },
  { title: "Cotton Damask", description: "Elegant cotton damask with a tone-on-tone woven pattern for refined tabletop and apparel.", price: 22.99, inventory: 120, category: "cotton" },
  { title: "Cotton Corduroy", description: "Classic cotton corduroy with distinctive ridges and a soft, plush surface.", price: 20.99, inventory: 110, category: "cotton" },
  // Silk
  { title: "Pure Mulberry Silk", description: "The finest quality mulberry silk with a natural lustre and buttery drape.", price: 54.99, inventory: 80, category: "silk" },
  { title: "Silk Charmeuse", description: "Luxurious silk charmeuse with a glossy face, matte back, and elegant liquid drape.", price: 49.99, inventory: 90, category: "silk" },
  { title: "Silk Crepe", description: "Sophisticated silk crepe with a subtle pebbled texture and beautiful body.", price: 45.99, inventory: 85, category: "silk" },
  { title: "Silk Satin", description: "Smooth, radiant silk satin — the definitive choice for eveningwear and bridal.", price: 52.99, inventory: 75, category: "silk" },
  { title: "Silk Chiffon", description: "Feather-light silk chiffon with a flowing, ethereal grace.", price: 44.99, inventory: 100, category: "silk" },
  { title: "Silk Taffeta", description: "Crisp silk taffeta with structured body and a signature rustle.", price: 47.99, inventory: 70, category: "silk" },
  { title: "Silk Dupioni", description: "Textured silk dupioni with an irregular slub weave and rich sheen.", price: 48.99, inventory: 65, category: "silk" },
  { title: "Silk Velvet", description: "Plush silk velvet with extraordinary color depth and a soft, decadent pile.", price: 59.99, inventory: 60, category: "silk" },
  { title: "Silk Habotai", description: "Smooth, lightweight silk habotai — a versatile canvas perfect for dyeing.", price: 42.99, inventory: 110, category: "silk" },
  { title: "Silk Jacquard", description: "Woven silk jacquard with intricate self-patterns for statement pieces.", price: 56.99, inventory: 55, category: "silk" },
  // Wool
  { title: "Merino Wool", description: "Premium merino wool — soft, breathable, and naturally temperature-regulating.", price: 34.99, inventory: 95, category: "wool" },
  { title: "Wool Tweed", description: "Classic wool tweed with a traditional flecked pattern and hearty texture.", price: 28.99, inventory: 120, category: "wool" },
  { title: "Wool Flannel", description: "Warm, brushed wool flannel with a smooth, refined finish for tailoring.", price: 26.99, inventory: 130, category: "wool" },
  { title: "Wool Gabardine", description: "Durable wool gabardine with a sharp crease and tight, water-resistant weave.", price: 32.99, inventory: 105, category: "wool" },
  { title: "Wool Bouclé", description: "Textured wool bouclé with a nubby, looped surface for luxe jackets.", price: 38.99, inventory: 80, category: "wool" },
  { title: "Wool Felt", description: "Dense wool felt for structured millinery, crafts, and design work.", price: 24.99, inventory: 150, category: "wool" },
  { title: "Wool Herringbone", description: "Classic wool herringbone weave with timeless suiting appeal.", price: 29.99, inventory: 115, category: "wool" },
  { title: "Wool Crepe", description: "Sophisticated wool crepe with a matte, crimped texture and fluid drape.", price: 31.99, inventory: 100, category: "wool" },
  { title: "Wool Jersey", description: "Stretch wool jersey for fitted, comfortable garments with great recovery.", price: 27.99, inventory: 125, category: "wool" },
  { title: "Wool Plaid", description: "Traditional wool plaid with rich, layered coloring for outerwear.", price: 30.99, inventory: 110, category: "wool" },
  // Linen
  { title: "Premium Irish Linen", description: "High-quality Irish linen with a fine, even weave and cool, crisp hand.", price: 28.99, inventory: 140, category: "linen" },
  { title: "Linen Canvas", description: "Heavy-weight linen canvas for structure, upholstery, and durable garments.", price: 19.99, inventory: 160, category: "linen" },
  { title: "Linen Voile", description: "Lightweight, semi-sheer linen voile for breezy summer wear.", price: 16.99, inventory: 180, category: "linen" },
  { title: "Linen Damask", description: "Elegant linen damask with a subtle woven motif for table and apparel.", price: 24.99, inventory: 130, category: "linen" },
  { title: "Linen Twill", description: "Durable linen twill with a soft diagonal weave and relaxed texture.", price: 21.99, inventory: 150, category: "linen" },
  { title: "Linen Chambray", description: "Classic linen chambray with a subtle two-tone weave in versatile shades.", price: 18.99, inventory: 170, category: "linen" },
  { title: "Linen Jersey", description: "Stretchy linen jersey blending breathability with everyday comfort.", price: 22.99, inventory: 140, category: "linen" },
  { title: "Linen Satin", description: "Smooth linen satin with a gentle sheen and elegant weight.", price: 26.99, inventory: 120, category: "linen" },
  { title: "Linen Shirtings", description: "Crisp, refined linen for structured shirts and warm-weather tailoring.", price: 19.99, inventory: 155, category: "linen" },
  { title: "Linen Knit", description: "Knitted linen for breathable, drapey comfort with a natural slub.", price: 23.99, inventory: 135, category: "linen" },
  // Synthetic
  { title: "Polyester Crepe", description: "Easy-care polyester crepe with an elegant matte drape and great resilience.", price: 13.99, inventory: 250, category: "synthetic" },
  { title: "Polyester Satin", description: "Glossy polyester satin delivering affordable elegance with a bright sheen.", price: 12.99, inventory: 280, category: "synthetic" },
  { title: "Polyester Jersey", description: "Stretch polyester jersey engineered for active and performance wear.", price: 11.99, inventory: 300, category: "synthetic" },
  { title: "Nylon Spandex Blend", description: "Elastic nylon-spandex with four-way stretch for swim and activewear.", price: 15.99, inventory: 200, category: "synthetic" },
  { title: "Acrylic Knit", description: "Warm, lightweight acrylic knit — a soft, easy-care wool alternative.", price: 10.99, inventory: 320, category: "synthetic" },
  { title: "Polyester Chiffon", description: "Lightweight polyester chiffon with a floaty, sheer finish.", price: 9.99, inventory: 350, category: "synthetic" },
  { title: "Vinyl Faux Leather", description: "Durable vinyl faux leather for trend-forward bags and accessories.", price: 18.99, inventory: 180, category: "synthetic" },
  { title: "Polyester Gabardine", description: "Structured polyester gabardine with a crisp, wrinkle-resistant finish.", price: 14.99, inventory: 220, category: "synthetic" },
  { title: "Fleece Fabric", description: "Cozy, insulating fleece with a brushed, ultra-soft surface.", price: 11.99, inventory: 290, category: "synthetic" },
  { title: "Microfiber Suede", description: "Soft microfiber suede — a supple, cruelty-free alternative to suede.", price: 16.99, inventory: 190, category: "synthetic" },
  // Blend
  { title: "Cotton-Linen Blend", description: "The perfect union of cotton comfort and linen texture with an airy hand.", price: 20.99, inventory: 145, category: "blend" },
  { title: "Cotton-Silk Blend", description: "A luxurious cotton-silk combination with soft sheen and gentle drape.", price: 32.99, inventory: 95, category: "blend" },
  { title: "Wool-Silk Blend", description: "Premium wool-silk blend marrying warmth with refined lustre.", price: 38.99, inventory: 85, category: "blend" },
  { title: "Cotton-Wool Blend", description: "A warm, breathable cotton-wool combination for transitional seasons.", price: 24.99, inventory: 120, category: "blend" },
  { title: "Linen-Silk Blend", description: "Refined linen-silk blend balancing crisp texture with elegant sheen.", price: 31.99, inventory: 105, category: "blend" },
  { title: "Polyester-Cotton Blend", description: "Durable, low-maintenance poly-cotton for easy-care everyday garments.", price: 14.99, inventory: 250, category: "blend" },
  { title: "Tencel-Cotton Blend", description: "Eco-friendly Tencel-cotton with a silky-smooth, breathable finish.", price: 19.99, inventory: 160, category: "blend" },
  { title: "Bamboo-Cotton Blend", description: "Sustainable bamboo-cotton fabric — soft, moisture-wicking, and gentle.", price: 17.99, inventory: 175, category: "blend" },
  { title: "Rayon-Linen Blend", description: "Soft rayon-linen with beautiful drape and a relaxed, natural texture.", price: 18.99, inventory: 165, category: "blend" },
  { title: "Spandex-Cotton Blend", description: "Stretchy spandex-cotton offering comfort and freedom of movement.", price: 16.99, inventory: 185, category: "blend" },
]

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Deterministic pseudo-random from string for stable ratings/sold.
function hash(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

const categoryIndex: Record<string, number> = {}

export const PRODUCTS: Product[] = SEED.map((s) => {
  const h = hash(s.title)
  const idx = (categoryIndex[s.category] = (categoryIndex[s.category] ?? -1) + 1)
  const images = IMAGES[s.category]
  const colors = COLORS[s.category]
  const rating = Math.round((3.9 + (h % 11) / 10) * 10) / 10 // 3.9 - 4.9
  const reviews = 12 + (h % 240)
  const sold = 30 + (h % 900)
  const hasDiscount = h % 3 === 0
  const originalPrice = hasDiscount ? Math.round(s.price * 1.25 * 100) / 100 : undefined

  return {
    id: slugify(s.title),
    title: s.title,
    description: s.description,
    price: s.price,
    originalPrice,
    category: s.category,
    image: images[idx % images.length],
    rating,
    reviews,
    sold,
    inventory: s.inventory,
    color: colors[idx % colors.length],
    featured: idx < 2 && (s.category === "silk" || s.category === "wool" || s.category === "linen" || s.category === "blend"),
  }
})

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelated(product: Product, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count)
}

export const FEATURED = PRODUCTS.filter((p) => p.featured)
