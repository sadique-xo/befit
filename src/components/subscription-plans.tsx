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
    <section className="bg-gradient-to-b from-befit-bg to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="bg-befit-green/10 text-befit-green hover:bg-befit-green/10 border-0 text-xs font-semibold uppercase tracking-wide">
            Subscription Plans
          </Badge>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-befit-dark sm:text-3xl">
            Meal Plans That Fit Your Goals
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-befit-gray">
            Skip the daily hassle. Subscribe to a plan and get fresh, macro-tracked meals delivered to your door — every single day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col p-6 ${
                plan.popular
                  ? "border-befit-green ring-1 ring-befit-green"
                  : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-befit-green text-white hover:bg-befit-green border-0">
                  Most Popular
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-bold text-befit-dark">{plan.name}</h3>
                <p className="text-xs text-befit-gray">{plan.tagline}</p>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-befit-dark">
                  &#8377;{plan.price}
                </span>
                <span className="text-sm text-befit-gray">{plan.period}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-befit-green">
                {plan.meals}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-befit-gray">
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
                  className={`w-full gap-2 ${
                    plan.popular
                      ? "bg-befit-green hover:bg-befit-green/90 text-white"
                      : "bg-befit-dark hover:bg-befit-dark/90 text-white"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Get Started
                </Button>
              </a>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-befit-gray">
          All plans are flexible — pause, switch, or cancel anytime. No lock-in.
        </p>
      </div>
    </section>
  )
}
