"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar({ onCartOpen }: { onCartOpen: () => void }) {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent py-2 px-4" : "glass-strong shadow-glass"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-3xl h-12 rounded-full glass-strong px-5 shadow-glass-lg"
            : "max-w-7xl h-14 px-4 sm:px-6 lg:px-8"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/BeFit_logo.png"
            alt="BeFit Cafe"
            width={140}
            height={45}
            className={`transition-all duration-300 ${
              scrolled ? "h-6 w-auto" : "h-9 w-auto"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-befit-green text-white shadow-glass-green"
                  : "text-befit-green-dark/70 hover:bg-befit-green/8 hover:text-befit-green-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop cart */}
        <div className="hidden md:flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full hover:bg-befit-green/8"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-5 w-5 text-befit-green-dark" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-befit-green text-[10px] font-bold text-white shadow-glass-green">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </nav>
    </header>
  )
}
