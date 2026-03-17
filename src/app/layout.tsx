import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LayoutClient } from "@/components/layout-client"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "BeFit Cafe - Ranchi's First Healthy Cafe",
  description:
    "Clean food. Real nutrition. No compromises. Macro-tracked healthy meals in Ranchi by WAT A TASTE!",
  openGraph: {
    title: "BeFit Cafe - Ranchi's First Healthy Cafe",
    description:
      "Clean food. Real nutrition. No compromises. Macro-tracked healthy meals in Ranchi.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
