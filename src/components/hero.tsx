import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-befit-cream via-green-50 to-befit-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <span className="inline-block rounded-full bg-befit-green/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-befit-green uppercase">
              by WAT A TASTE!
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-befit-dark sm:text-5xl lg:text-6xl">
              Ranchi&apos;s First{" "}
              <span className="text-befit-green">Healthy Cafe</span>
            </h1>
            <p className="mt-4 text-lg text-befit-gray sm:text-xl">
              Clean food. Real nutrition. No compromises.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="bg-befit-green hover:bg-befit-green/90 text-white gap-2"
                >
                  Explore Menu
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-befit-gray">
                <Clock className="h-4 w-4 text-befit-green-light" />
                Open Daily &middot; 8:30 AM - 10:30 PM
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative hidden sm:block">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/2b47574bda2d630a313fe662de01b6f8.jpg"
                    alt="BeFit Cafe Interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/cc31b61035399a2df1f6cda90712e6d2.jpg"
                    alt="Healthy Oats Bowl"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/a328b16bf9ee2c3266bb46142702f24c.jpg"
                    alt="Chicken Salad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/f2585eeadbed68c75eeb90620fd8825e.jpg"
                    alt="Grilled Protein Meal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-befit-green-light/10 blur-3xl" />
      <div className="absolute -bottom-20 right-40 h-60 w-60 rounded-full bg-befit-cream/60 blur-3xl" />
    </section>
  )
}
