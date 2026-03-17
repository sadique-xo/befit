import type { Metadata } from "next"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Leaf, Target, Users, Utensils } from "lucide-react"

export const metadata: Metadata = {
  title: "About - BeFit Cafe",
  description:
    "BeFit Cafe by WAT A TASTE! is Ranchi's first dedicated healthy food cafe. Macro-tracked meals for everyone.",
}

const values = [
  {
    icon: Target,
    title: "Macro Tracked",
    description:
      "Every meal comes with full calorie and macro breakdown. You know exactly what goes into your body.",
  },
  {
    icon: Utensils,
    title: "Clean & Delicious",
    description:
      "Eating clean shouldn't mean eating boring. We make healthy food that actually tastes great.",
  },
  {
    icon: Users,
    title: "For Everyone",
    description:
      "Open for everyone, not just gym members. Whether you're bulking, cutting, or just want a guilt-free meal.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We use fresh, high-quality ingredients in every dish. No shortcuts, no compromises.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="text-center">
        <span className="inline-block rounded-full bg-befit-green/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-befit-green uppercase">
          Our Story
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-befit-dark sm:text-4xl">
          About BeFit Cafe
        </h1>
      </div>

      {/* Cafe interior images */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/2b47574bda2d630a313fe662de01b6f8.jpg"
            alt="BeFit Cafe Interior"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/4e5916834565c57b0c5c50d21d49a672.jpg"
            alt="BeFit Cafe Seating"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-10 space-y-6 text-center max-w-3xl mx-auto">
        <p className="text-lg text-befit-gray leading-relaxed">
          <strong className="text-befit-dark">BeFit Cafe by WAT A TASTE!</strong> is Ranchi&apos;s
          first dedicated healthy food cafe, located on the 4th floor of the
          AnyTime Fitness building on Kanke Road.
        </p>
        <p className="text-lg text-befit-gray leading-relaxed">
          We believe eating clean shouldn&apos;t mean eating boring.
        </p>
        <p className="text-lg text-befit-gray leading-relaxed">
          Every meal is macro-tracked &mdash; you know exactly what goes into
          your body. Whether you&apos;re bulking, cutting, or just want a
          guilt-free meal &mdash; we&apos;ve got you.
        </p>
      </div>

      <Separator className="my-12" />

      <div className="grid gap-8 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value.title} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
              <value.icon className="h-6 w-6 text-befit-green" />
            </div>
            <div>
              <h3 className="font-semibold text-befit-dark">{value.title}</h3>
              <p className="mt-1 text-sm text-befit-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
