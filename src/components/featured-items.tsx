"use client"

import { menuItems, featuredItemIds } from "@/data/menu"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VegBadge } from "./veg-badge"
import { MacroPills } from "./macro-pills"
import { Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"

const featured = featuredItemIds
  .map((id) => menuItems.find((item) => item.id === id))
  .filter(Boolean)

export function FeaturedItems() {
  const { addItem, getItemQuantity, updateQuantity } = useCart()

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-befit-dark sm:text-3xl">
            Popular Picks
          </h2>
          <p className="mt-2 text-befit-gray">
            Our most loved healthy meals
          </p>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 xl:grid-cols-5">
          {featured.map((item) => {
            if (!item) return null
            const qty = getItemQuantity(item.id)

            return (
              <Card
                key={item.id}
                className="flex min-w-[260px] shrink-0 flex-col p-4 sm:min-w-0"
              >
                <div className="mb-3 flex items-center gap-2">
                  <VegBadge type={item.type} />
                  <Badge variant="secondary" className="text-[10px]">
                    {item.category}
                  </Badge>
                </div>

                <div className="flex items-start justify-between gap-2">
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
                      Add
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center rounded-lg border border-border">
                      <button
                        className="flex h-10 w-10 items-center justify-center text-befit-gray hover:bg-gray-50 rounded-l-lg transition-colors"
                        onClick={() => updateQuantity(item.id, qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">
                        {qty}
                      </span>
                      <button
                        className="flex h-10 w-10 items-center justify-center text-befit-gray hover:bg-gray-50 rounded-r-lg transition-colors"
                        onClick={() => updateQuantity(item.id, qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
