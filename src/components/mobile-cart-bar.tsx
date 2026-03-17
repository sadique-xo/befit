"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function MobileCartBar({ onCartOpen }: { onCartOpen: () => void }) {
  const { totalItems, cart } = useCart()

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-3 md:hidden">
      <button
        onClick={onCartOpen}
        className="flex w-full items-center justify-between rounded-lg bg-befit-green px-4 py-3 text-white transition-colors duration-200 hover:bg-befit-green/90"
      >
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          <span className="text-sm font-semibold">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
        <span className="text-sm font-bold">
          &#8377;{cart.total} &middot; View Cart
        </span>
      </button>
    </div>
  )
}
