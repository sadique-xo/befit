import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rahul K.",
    role: "Gym Member, AnyTime Fitness",
    quote:
      "BeFit has made meal prep so easy. I just pick my plan and the food shows up — perfectly portioned and actually tasty. My protein intake has never been this consistent.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Working Professional",
    quote:
      "I was eating junk every day for lunch. Switched to BeFit's 1-meal plan and I feel the difference. The macro breakdown helps me stay on track without overthinking.",
    rating: 5,
  },
  {
    name: "Amit D.",
    role: "Fitness Coach",
    quote:
      "I recommend BeFit to all my clients. Having a reliable, macro-tracked meal source in Ranchi is a game changer. The corporate plan works great for our gym too.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl tracking-tight text-befit-dark sm:text-3xl">
            What People Say
          </h2>
          <p className="mt-2 text-befit-green-dark/50">
            Real feedback from our customers
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6 glass shadow-glass hover:shadow-glass-lg transition-all duration-300">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-befit-green-light text-befit-green-light"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-befit-green-dark/60 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-befit-green/10 pt-3">
                <p className="text-sm font-semibold text-befit-green-dark">{t.name}</p>
                <p className="text-xs text-befit-green-dark/50">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
