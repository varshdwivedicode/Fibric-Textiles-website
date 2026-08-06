"use client"

import Image from "next/image"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, setQuantity, removeItem, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-foreground/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Panel */}
      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-xl">Your Cart{count > 0 ? ` (${count})` : ""}</h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty.</p>
            <Button onClick={closeCart} variant="outline">
              Continue browsing
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col divide-y divide-border">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-4 py-4">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <h3 className="text-pretty font-serif text-base leading-tight">{product.title}</h3>
                        <button
                          onClick={() => removeItem(product.id)}
                          aria-label={`Remove ${product.title}`}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">{product.color}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-border">
                          <button
                            onClick={() => setQuantity(product.id, quantity - 1)}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">{quantity}</span>
                          <button
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-medium">${(product.price * quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-border px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout. Prices shown per yard.
              </p>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
