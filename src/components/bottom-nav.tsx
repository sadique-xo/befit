"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, UtensilsCrossed, ShoppingBag, ClipboardList, User } from "lucide-react"
import { useCart } from "@/context/cart-context"

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/cart", label: "Cart", icon: ShoppingBag },
  { href: "/orders", label: "Orders", icon: ClipboardList },
  { href: "/about", label: "About", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()
  const { totalItems } = useCart()

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <nav className="mx-auto flex max-w-md items-center justify-around rounded-2xl glass-strong px-2 py-2 shadow-glass-lg">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          const Icon = tab.icon
          const isCart = tab.href === "/cart"

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 transition-all duration-200 ${
                isActive
                  ? "bg-befit-green text-white shadow-glass-green"
                  : "text-befit-green-dark/60 hover:text-befit-green-dark"
              }`}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {isCart && totalItems > 0 && (
                  <span className={`absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                    isActive
                      ? "bg-white text-befit-green"
                      : "bg-befit-green text-white"
                  }`}>
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium leading-none">
                {tab.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
