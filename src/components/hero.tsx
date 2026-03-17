import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <span className="inline-block rounded-full glass-green px-4 py-1.5 text-xs font-semibold tracking-wide text-befit-green uppercase">
              by WAT A TASTE!
            </span>
            <h1 className="mt-4 font-heading text-4xl tracking-tight text-befit-dark sm:text-5xl lg:text-6xl">
              Ranchi&apos;s First{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-befit-green to-befit-green-light">
                Healthy Cafe
              </span>
            </h1>
            <p className="mt-4 text-lg text-befit-dark/50 sm:text-xl">
              Clean food. Real nutrition. No compromises.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-befit-green to-befit-leaf hover:from-befit-green/90 hover:to-befit-leaf/90 text-white gap-2 shadow-glass-green transition-all duration-300"
                >
                  Explore Menu
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-befit-dark/40">
                <Clock className="h-4 w-4 text-befit-green-light" />
                Open Daily &middot; 8:30 AM - 10:30 PM
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:scale-125 lg:origin-center">
            <Image
              src="/images/hero-befit.webp"
              alt="BeFit Cafe - Healthy meals"
              width={800}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative glassmorphism orbs */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-befit-green-light/15 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 right-40 h-60 w-60 rounded-full bg-befit-mint/20 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-befit-green-warm/10 blur-[80px] pointer-events-none" />
    </section>
  )
}
