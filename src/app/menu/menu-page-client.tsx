"use client"

import { useState, useEffect, useCallback } from "react"
import { categories } from "@/data/menu"
import { MenuCategorySidebar, MenuCategoryTabs } from "@/components/menu-category-nav"
import { MenuGrid } from "@/components/menu-grid"

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-")
}

export function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently most visible
      let current: string = categories[0]

      for (const category of categories) {
        const el = document.getElementById(slugify(category))
        if (!el) continue

        const rect = el.getBoundingClientRect()
        // If the top of section is above the middle of screen, it's the current one
        if (rect.top <= 150) {
          current = category
        }
      }

      setActiveCategory(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // run once on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-5 sm:mb-8">
        <h1 className="font-heading text-xl tracking-tight text-befit-dark sm:text-3xl">
          Our Menu
        </h1>
        <p className="mt-0.5 text-sm text-befit-green-dark/50 sm:text-base">
          Every meal is macro-tracked for your fitness goals
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <div className="w-44 shrink-0 hidden md:block">
          <MenuCategorySidebar active={activeCategory} />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <MenuCategoryTabs active={activeCategory} />
          <MenuGrid />
        </div>
      </div>
    </div>
  )
}
