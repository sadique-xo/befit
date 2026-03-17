"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/context/cart-context"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar({ onCartOpen }: { onCartOpen: () => void }) {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
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
        scrolled ? "bg-transparent py-2 px-4" : "bg-white border-b border-border"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-3xl h-12 rounded-full bg-white/95 px-5 shadow-lg ring-1 ring-black/5 backdrop-blur-md"
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
                  ? "bg-befit-green text-white"
                  : "text-befit-gray hover:bg-gray-100 hover:text-befit-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-5 w-5 text-befit-dark" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-befit-orange text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden rounded-full" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="px-5 pt-6">
                <Image
                  src="/images/BeFit_logo.png"
                  alt="BeFit Cafe"
                  width={100}
                  height={32}
                  className="h-7 w-auto"
                />
              </div>
              <div className="flex flex-col gap-1 px-4 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-befit-green text-white"
                        : "text-befit-dark hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
