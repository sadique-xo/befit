import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-befit-green-dark via-befit-green to-befit-leaf" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(82,183,136,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(116,198,157,0.2),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl tracking-tight text-white sm:text-3xl">
          Ready to Eat Clean?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 leading-relaxed">
          Whether it&apos;s a single meal, a monthly subscription, or a corporate plan for 50 — we&apos;ve got you covered. Start your health journey today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-white text-befit-green hover:bg-white/90 gap-2 shadow-glass-lg transition-all duration-300"
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
              className="bg-white/15 text-white border border-white/25 hover:bg-white/25 gap-2 backdrop-blur-sm transition-all duration-300"
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
