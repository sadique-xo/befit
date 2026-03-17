"use client"

import { useState } from "react"
import { CartProvider } from "@/context/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { MobileCartBar } from "@/components/mobile-cart-bar"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main className="min-h-[calc(100vh-4rem)] pb-16 md:pb-0">{children}</main>
      <Footer />
      <CartSidebar open={cartOpen} onOpenChange={setCartOpen} />
      <MobileCartBar onCartOpen={() => setCartOpen(true)} />
    </CartProvider>
  )
}
