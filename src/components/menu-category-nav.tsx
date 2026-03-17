"use client"

import { categories } from "@/data/menu"
import { cn } from "@/lib/utils"

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-")
}

function handleClick(category: string) {
  const el = document.getElementById(slugify(category))
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function MenuCategorySidebar({ active }: { active: string }) {
  return (
    <nav className="sticky top-20 h-fit">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-befit-gray">
        Categories
      </h3>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleClick(category)}
              className={cn(
                "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200",
                active === category
                  ? "bg-befit-green text-white"
                  : "text-befit-gray hover:bg-green-50 hover:text-befit-green"
              )}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MenuCategoryTabs({ active }: { active: string }) {
  return (
    <div className="sticky top-18 z-30 -mx-4 bg-white/95 backdrop-blur border-b border-border px-4 py-2 md:hidden">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200",
              active === category
                ? "bg-befit-green text-white"
                : "bg-gray-100 text-befit-gray hover:bg-green-50"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
