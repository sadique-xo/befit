import type { Metadata } from "next"
import { Inter, Questrial } from "next/font/google"
import "./globals.css"
import { LayoutClient } from "@/components/layout-client"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
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
      <body className={`${inter.variable} ${questrial.variable} font-sans antialiased overflow-x-hidden min-h-screen bg-gradient-to-br from-befit-snow via-befit-bg to-befit-pale`}>
        {/* Decorative gradient orbs for depth */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-befit-mint/20 blur-[100px]" />
          <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-befit-green-warm/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-befit-pale/40 blur-[100px]" />
        </div>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
