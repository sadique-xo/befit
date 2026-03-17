"use client"

import { menuItems, categories } from "@/data/menu"
import { MenuItemCard } from "./menu-item-card"

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-")
}

export function MenuGrid() {
  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = menuItems.filter((item) => item.category === category)
        return (
          <section
            key={category}
            id={slugify(category)}
            className="scroll-mt-28"
          >
            <h2 className="mb-4 text-lg font-bold text-befit-dark">
              {category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
