import type { Metadata } from "next"
import { CartPageClient } from "./cart-page-client"

export const metadata: Metadata = {
  title: "Cart - BeFit Cafe",
  description: "Review your cart and place your order.",
}

export default function CartPage() {
  return <CartPageClient />
}
