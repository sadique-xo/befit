"use client"

import { menuItems, categories } from "@/data/menu"
import { MenuItemCard } from "./menu-item-card"

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-")
}

export function MenuGrid() {
  return (
    <div className="space-y-10">
      {categories.map((category) => {
        const items = menuItems.filter((item) => item.category === category)
        return (
          <section
            key={category}
            id={slugify(category)}
            className="scroll-mt-28"
          >
            <h2 className="mb-3 text-base font-bold text-befit-green-dark">
              {category}
              <span className="ml-2 text-xs font-normal text-befit-green-dark/40">
                {items.length} items
              </span>
            </h2>
            <div className="grid gap-3 lg:grid-cols-2">
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
