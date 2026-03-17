import type { Metadata } from "next"
import { MenuPageClient } from "./menu-page-client"

export const metadata: Metadata = {
  title: "Menu - BeFit Cafe",
  description:
    "Explore our macro-tracked healthy menu. High protein meals, salads, wraps, sandwiches and more.",
}

export default function MenuPage() {
  return <MenuPageClient />
}
