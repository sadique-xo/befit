"use client"

import { useRef, useEffect } from "react"
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
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-befit-green-dark/40">
        Categories
      </h3>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleClick(category)}
              className={cn(
                "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200",
                active === category
                  ? "bg-gradient-to-r from-befit-green to-befit-leaf text-white shadow-glass-green"
                  : "text-befit-green-dark/60 hover:bg-befit-green/8 hover:text-befit-green-dark"
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
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll active tab into view
  useEffect(() => {
    if (!scrollRef.current) return
    const activeBtn = scrollRef.current.querySelector(
      `[data-category="${active}"]`
    ) as HTMLElement | null
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [active])

  return (
    <div className="sticky top-14 z-30 -mx-3 sm:-mx-6 glass-strong px-3 sm:px-6 py-2 md:hidden">
      <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            data-category={category}
            onClick={() => handleClick(category)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
              active === category
                ? "bg-gradient-to-r from-befit-green to-befit-leaf text-white shadow-glass-green"
                : "glass-green text-befit-green-dark/60 hover:text-befit-green-dark"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
