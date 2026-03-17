import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, CalendarCheck, TrendingUp, Salad, Gift } from "lucide-react"

const offerings = [
  {
    icon: Building2,
    title: "Corporate Meal Plans",
    description:
      "Daily healthy meals for your office team. Bulk pricing, customized menus, and on-time delivery.",
  },
  {
    icon: Users,
    title: "Gym & Studio Partnerships",
    description:
      "Exclusive meal deals for fitness centers. Offer your members nutrition alongside training.",
  },
  {
    icon: CalendarCheck,
    title: "Event & Party Catering",
    description:
      "Healthy catering for birthdays, team outings, and events. Full macro info on every dish.",
  },
  {
    icon: TrendingUp,
    title: "Athlete Meal Prep",
    description:
      "Sport-specific nutrition plans for athletes and teams. Periodized meals to match training cycles.",
  },
  {
    icon: Salad,
    title: "Custom Diet Programs",
    description:
      "Keto, high-protein, low-carb, vegetarian — we build meal plans around any dietary requirement.",
  },
  {
    icon: Gift,
    title: "Gift Cards & Vouchers",
    description:
      "Give the gift of healthy eating. Prepaid meal vouchers for friends, family, or employees.",
  },
]

export function CorporateWellness() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="glass-green text-befit-leaf border-0 text-xs font-semibold uppercase tracking-wide">
            B2B & Services
          </Badge>
          <h2 className="mt-3 font-heading text-2xl tracking-tight text-befit-dark sm:text-3xl">
            Beyond the Cafe
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-befit-green-dark/50">
            We&apos;re more than a cafe — we&apos;re a nutrition partner. From corporate offices to gyms, we bring healthy eating to wherever it&apos;s needed.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Card key={item.title} className="p-5 glass shadow-glass hover:shadow-glass-lg transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg glass-green transition-all duration-300 group-hover:shadow-glass-green">
                <item.icon className="h-5 w-5 text-befit-green" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-befit-green-dark">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-befit-green-dark/50 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
