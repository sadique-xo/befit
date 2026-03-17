"use client"

import { useState, useEffect } from "react"
import { categories } from "@/data/menu"
import { MenuCategorySidebar, MenuCategoryTabs } from "@/components/menu-category-nav"
import { MenuGrid } from "@/components/menu-grid"

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-")
}

export function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    categories.forEach((category) => {
      const el = document.getElementById(slugify(category))
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(category)
            }
          })
        },
        { rootMargin: "-20% 0px -60% 0px" }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-befit-dark sm:text-3xl">
          Our Menu
        </h1>
        <p className="mt-1 text-befit-gray">
          Every meal is macro-tracked for your fitness goals
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <div className="w-48 shrink-0 hidden md:block">
          <MenuCategorySidebar active={activeCategory} />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Mobile tabs only */}
          <MenuCategoryTabs active={activeCategory} />
          <MenuGrid />
        </div>
      </div>
    </div>
  )
}
