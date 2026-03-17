import type { Metadata } from "next"
import { OrdersPageClient } from "./orders-page-client"

export const metadata: Metadata = {
  title: "Orders - BeFit Cafe",
  description: "View your order history.",
}

export default function OrdersPage() {
  return <OrdersPageClient />
}
