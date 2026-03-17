import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="glass-strong border-t border-white/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/BeFit_logo.png"
              alt="BeFit Cafe"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-1 text-sm text-befit-green-dark/50">
              Ranchi&apos;s First Healthy Cafe
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-befit-green-dark/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-befit-green" />
              <span>4th Floor, AnyTime Fitness, Sky Villa Pantaloons Building, Kanke Rd, Ranchi 834008</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-befit-green-dark/50">
              <Phone className="h-4 w-4 shrink-0 text-befit-green" />
              <a href="tel:+917004828431" className="hover:text-befit-green transition-colors duration-200">+91 7004828431</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-befit-green-dark/50">
              <Clock className="h-4 w-4 shrink-0 text-befit-green" />
              <span>8:30 AM - 10:30 PM (Daily)</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-befit-green-dark">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/menu" className="text-sm text-befit-green-dark/50 hover:text-befit-green transition-colors duration-200">Menu</Link>
              <Link href="/about" className="text-sm text-befit-green-dark/50 hover:text-befit-green transition-colors duration-200">About</Link>
              <Link href="/contact" className="text-sm text-befit-green-dark/50 hover:text-befit-green transition-colors duration-200">Contact</Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-befit-green/10" />

        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-sm text-befit-green-dark/40">
            &copy; {new Date().getFullYear()} BeFit Cafe. All rights reserved.
          </p>
          <p className="text-sm text-befit-green-dark/40">
            Created by{" "}
            <a
              href="https://sadique.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-befit-green transition-colors duration-200"
            >
              Sadique
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
