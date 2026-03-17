"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CartProvider } from "@/context/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { BottomNav } from "@/components/bottom-nav"

function LayoutInner({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false)
  const router = useRouter()

  const handleCartOpen = () => {
    // On mobile, navigate to cart page. On desktop, open drawer.
    if (window.innerWidth < 768) {
      router.push("/cart")
    } else {
      setCartOpen(true)
    }
  }

  return (
    <>
      <Navbar onCartOpen={handleCartOpen} />
      <main className="min-h-[calc(100vh-4rem)] pb-24 md:pb-0">{children}</main>
      <Footer />
      <CartSidebar open={cartOpen} onOpenChange={setCartOpen} />
      <BottomNav />
    </>
  )
}

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutInner>{children}</LayoutInner>
    </CartProvider>
  )
}
