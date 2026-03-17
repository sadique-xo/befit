import { Flame, Dumbbell, Truck } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Macro-Tracked Meals",
    description: "Every item comes with full calorie and macro breakdown",
  },
  {
    icon: Dumbbell,
    title: "High Protein Focus",
    description: "Meals designed for fitness goals",
  },
  {
    icon: Truck,
    title: "Quick Delivery",
    description: "Available on Zomato for delivery",
  },
]

export function WhyBefit() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl tracking-tight sm:text-3xl">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-befit-dark to-befit-green-dark">BeFit?</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl glass-green shadow-glass transition-all duration-300 group-hover:shadow-glass-green">
                <feature.icon className="h-7 w-7 text-befit-green" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-befit-green-dark">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-befit-green-dark/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
