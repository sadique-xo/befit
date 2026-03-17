import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaBanner() {
  return (
    <section className="bg-befit-green py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to Eat Clean?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 leading-relaxed">
          Whether it&apos;s a single meal, a monthly subscription, or a corporate plan for 50 — we&apos;ve got you covered. Start your health journey today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-white text-befit-green hover:bg-white/90 gap-2"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a
            href="https://wa.me/917004828431?text=Hi, I'd like to know more about BeFit Cafe meal plans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
