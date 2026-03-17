"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { VegBadge } from "./veg-badge"
import { Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { MenuItem } from "@/types"

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem, getItemQuantity, updateQuantity } = useCart()
  const qty = getItemQuantity(item.id)

  return (
    <div className="rounded-xl glass shadow-glass p-3 transition-all duration-300 hover:shadow-glass-lg">
      <div className="flex gap-3">
        {/* Image */}
        {item.image ? (
          <div className="relative h-[72px] w-[72px] sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/30">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        ) : (
          <div className="flex h-[72px] w-[72px] sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-lg glass-green">
            <VegBadge type={item.type} />
          </div>
        )}

        {/* Details */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Name */}
          <div className="flex items-start gap-1.5">
            <VegBadge type={item.type} />
            <h3 className="text-xs sm:text-sm font-semibold text-befit-green-dark leading-snug line-clamp-2">
              {item.name}
            </h3>
          </div>

          {/* Macros inline */}
          <p className="mt-1 text-[10px] sm:text-[11px] text-befit-green-dark/50">
            {item.calories} kcal &middot; {item.protein} protein
          </p>

          {/* Price + button */}
          <div className="mt-auto flex items-center justify-between pt-1">
            <span className="text-sm font-bold text-befit-green">
              &#8377;{item.price}
            </span>

            {qty === 0 ? (
              <button
                className="flex h-7 items-center gap-0.5 rounded-md bg-gradient-to-r from-befit-green to-befit-leaf px-2.5 text-[11px] font-semibold text-white transition-all duration-200 hover:from-befit-green/90 hover:to-befit-leaf/90 active:scale-95 shadow-glass-green"
                onClick={() =>
                  addItem({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    type: item.type,
                    calories: item.calories,
                    protein: item.protein,
                  })
                }
              >
                <Plus className="h-3 w-3" />
                ADD
              </button>
            ) : (
              <div className="flex items-center rounded-md glass-green">
                <button
                  className="flex h-7 w-7 items-center justify-center text-befit-green hover:bg-befit-green/10 rounded-l-md transition-colors active:scale-95"
                  onClick={() => updateQuantity(item.id, qty - 1)}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-5 text-center text-[11px] font-bold text-befit-green-dark">
                  {qty}
                </span>
                <button
                  className="flex h-7 w-7 items-center justify-center text-befit-green hover:bg-befit-green/10 rounded-r-md transition-colors active:scale-95"
                  onClick={() => updateQuantity(item.id, qty + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tags below if present */}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-2 flex gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[9px] capitalize bg-befit-snow/60 text-befit-leaf">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
