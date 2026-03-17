"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VegBadge } from "./veg-badge"
import { MacroPills } from "./macro-pills"
import { Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { MenuItem } from "@/types"

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem, getItemQuantity, updateQuantity } = useCart()
  const qty = getItemQuantity(item.id)

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md">
      {/* Image */}
      {item.image && (
        <div className="relative aspect-[4/3] w-full bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2">
          <VegBadge type={item.type} />
          {item.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] capitalize">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-2 flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-befit-dark leading-tight">
            {item.name}
          </h3>
          <span className="shrink-0 text-sm font-bold text-befit-green">
            &#8377;{item.price}
          </span>
        </div>

        <p className="mt-1 text-xs text-befit-gray line-clamp-1">
          {item.description}
        </p>

        <div className="mt-2">
          <MacroPills calories={item.calories} protein={item.protein} />
        </div>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-befit-gray">
          <span>Fat: {item.fat}</span>
          <span>Carbs: {item.carbs}</span>
          <span>Fibre: {item.fibre}</span>
        </div>

        <div className="mt-auto pt-3">
          {qty === 0 ? (
            <Button
              size="default"
              className="w-full bg-befit-orange hover:bg-befit-orange/90 text-white text-xs h-10"
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
              <Plus className="mr-1 h-4 w-4" />
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center justify-center rounded-lg border border-befit-orange">
              <button
                className="flex h-10 w-10 items-center justify-center text-befit-orange hover:bg-befit-orange/10 rounded-l-lg transition-colors"
                onClick={() => updateQuantity(item.id, qty - 1)}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-bold text-befit-orange">
                {qty}
              </span>
              <button
                className="flex h-10 w-10 items-center justify-center text-befit-orange hover:bg-befit-orange/10 rounded-r-lg transition-colors"
                onClick={() => updateQuantity(item.id, qty + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
