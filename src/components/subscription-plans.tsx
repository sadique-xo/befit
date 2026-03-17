import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for trying out",
    price: "4,999",
    period: "/month",
    meals: "1 meal/day",
    features: [
      "1 macro-tracked meal daily",
      "Choose from full menu",
      "Free delivery within 5 km",
      "Weekly menu customization",
      "WhatsApp order support",
    ],
    popular: false,
  },
  {
    name: "Fitness",
    tagline: "Most popular for fitness goals",
    price: "8,999",
    period: "/month",
    meals: "2 meals/day",
    features: [
      "2 macro-tracked meals daily",
      "Personalized meal plan",
      "Free delivery within 5 km",
      "Protein goal optimization",
      "Weekly check-in & plan adjustment",
      "Priority WhatsApp support",
    ],
    popular: true,
  },
  {
    name: "Transform",
    tagline: "Full-day nutrition covered",
    price: "12,999",
    period: "/month",
    meals: "3 meals/day",
    features: [
      "3 macro-tracked meals daily",
      "Fully customized meal plan",
      "Free unlimited delivery",
      "Calorie & macro targets aligned",
      "Dedicated nutrition guidance",
      "Priority support + plan swaps",
      "Weekend cheat meal included",
    ],
    popular: false,
  },
]

export function SubscriptionPlans() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="glass-green text-befit-green border-0 text-xs font-semibold uppercase tracking-wide">
            Subscription Plans
          </Badge>
          <h2 className="mt-3 font-heading text-2xl tracking-tight text-befit-dark sm:text-3xl">
            Meal Plans That Fit Your Goals
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-befit-green-dark/50">
            Skip the daily hassle. Subscribe to a plan and get fresh, macro-tracked meals delivered to your door — every single day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="relative pt-3">
              {plan.popular && (
                <Badge className="absolute top-0 left-1/2 z-10 -translate-x-1/2 bg-gradient-to-r from-befit-green to-befit-leaf text-white border-0 px-4 py-1 text-xs shadow-glass-green">
                  Most Popular
                </Badge>
              )}
              <Card
                className={`relative flex flex-col p-6 h-full glass shadow-glass hover:shadow-glass-lg transition-all duration-300 ${
                  plan.popular
                    ? "ring-1 ring-befit-green/30 shadow-glass-green"
                    : ""
                }`}
              >

              <div>
                <h3 className="font-heading text-lg text-befit-dark">{plan.name}</h3>
                <p className="text-xs text-befit-green-dark/50">{plan.tagline}</p>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-befit-dark">
                  &#8377;{plan.price}
                </span>
                <span className="text-sm text-befit-green-dark/50">{plan.period}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-befit-green">
                {plan.meals}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-befit-green-dark/60">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-befit-green-light" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/917004828431?text=Hi, I'm interested in the ${plan.name} meal plan (${plan.price}/month)`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button
                  className={`w-full gap-2 transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-befit-green to-befit-leaf hover:from-befit-green/90 hover:to-befit-leaf/90 text-white shadow-glass-green"
                      : "bg-befit-green-dark hover:bg-befit-green-dark/90 text-white"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Get Started
                </Button>
              </a>
              </Card>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-befit-green-dark/40">
          All plans are flexible — pause, switch, or cancel anytime. No lock-in.
        </p>
      </div>
    </section>
  )
}
