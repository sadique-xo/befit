"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { VegBadge } from "@/components/veg-badge"
import { OrderDialog } from "@/components/order-dialog"
import { ShoppingBag, Minus, Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CartPageClient() {
  const { cart, totalItems, updateQuantity, removeItem } = useCart()
  const [orderOpen, setOrderOpen] = useState(false)

  return (
    <div className="mx-auto max-w-lg px-4 pb-32 pt-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/menu"
          className="flex h-9 w-9 items-center justify-center rounded-full glass-green text-befit-green-dark/60 hover:text-befit-green-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="font-heading text-lg text-befit-dark">Your Cart</h1>
          <p className="text-xs text-befit-green-dark/50">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>
      </div>

      {cart.items.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full glass-green">
            <ShoppingBag className="h-10 w-10 text-befit-mint" />
          </div>
          <p className="mt-4 text-sm font-medium text-befit-green-dark">
            Your cart is empty
          </p>
          <p className="mt-1 text-xs text-befit-green-dark/40">
            Add items from the menu to get started
          </p>
          <Link href="/menu" className="mt-6">
            <Button className="bg-gradient-to-r from-befit-green to-befit-leaf hover:from-befit-green/90 hover:to-befit-leaf/90 text-white shadow-glass-green transition-all duration-300">
              Browse Menu
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart items */}
          <div className="space-y-3">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl glass shadow-glass p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <VegBadge type={item.type} />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-befit-green-dark leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] text-befit-green-dark/50">
                        {item.calories} kcal &middot; {item.protein} protein
                      </p>
                    </div>
                  </div>
                  <button
                    className="shrink-0 p-1.5 text-red-400 hover:text-red-600 transition-colors"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center rounded-lg glass-green">
                    <button
                      className="flex h-8 w-8 items-center justify-center text-befit-green hover:bg-befit-green/10 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-befit-green-dark">
                      {item.quantity}
                    </span>
                    <button
                      className="flex h-8 w-8 items-center justify-center text-befit-green hover:bg-befit-green/10 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="text-sm font-bold text-befit-green-dark">
                    &#8377;{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bill summary */}
          <div className="mt-6 rounded-xl glass shadow-glass p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-befit-green-dark/40 mb-3">
              Bill Summary
            </h3>
            <div className="space-y-2">
              {cart.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-befit-green-dark/50">
                    {item.name} &times; {item.quantity}
                  </span>
                  <span className="text-befit-green-dark font-medium">
                    &#8377;{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between border-t border-befit-green/10 pt-3">
              <span className="text-sm font-bold text-befit-green-dark">Total</span>
              <span className="text-base font-bold text-befit-green">
                &#8377;{cart.total}
              </span>
            </div>
          </div>

          {/* Place order - fixed at bottom */}
          <div className="fixed bottom-20 left-0 right-0 z-30 px-4 md:hidden">
            <button
              className="w-full flex items-center justify-between rounded-2xl bg-gradient-to-r from-befit-green to-befit-leaf px-6 py-4 text-white shadow-glass-green active:scale-[0.98] transition-transform"
              onClick={() => setOrderOpen(true)}
            >
              <span className="text-sm font-semibold">
                Place Order &middot; {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
              <span className="text-base font-bold">&#8377;{cart.total}</span>
            </button>
          </div>

          {/* Desktop place order */}
          <div className="mt-4 hidden md:block">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-befit-green to-befit-leaf hover:from-befit-green/90 hover:to-befit-leaf/90 text-white shadow-glass-green transition-all duration-300"
              onClick={() => setOrderOpen(true)}
            >
              Place Order &middot; &#8377;{cart.total}
            </Button>
          </div>
        </>
      )}

      <OrderDialog open={orderOpen} onOpenChange={setOrderOpen} />
    </div>
  )
}
