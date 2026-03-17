"use client"

import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { CartItem as CartItemType } from "@/types"
import { VegBadge } from "./veg-badge"

export function CartItemRow({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="py-4 space-y-2.5">
      {/* Row 1: name + delete */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <VegBadge type={item.type} />
          <span className="text-sm font-medium text-befit-green-dark leading-tight">
            {item.name}
          </span>
        </div>
        <button
          className="shrink-0 p-2 -m-2 text-red-400 hover:text-red-600 transition-colors"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.name}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Row 2: price + qty controls + total */}
      <div className="flex items-center justify-between pl-6">
        <span className="text-xs text-befit-green-dark/50">
          &#8377;{item.price} each
        </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-lg glass-green">
            <button
              className="flex h-9 w-9 items-center justify-center text-befit-green hover:bg-befit-green/10 transition-colors"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-7 text-center text-sm font-semibold text-befit-green-dark">
              {item.quantity}
            </span>
            <button
              className="flex h-9 w-9 items-center justify-center text-befit-green hover:bg-befit-green/10 transition-colors"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <span className="text-sm font-semibold text-befit-green-dark min-w-14 text-right">
            &#8377;{item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  )
}
