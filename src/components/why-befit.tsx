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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-befit-dark sm:text-3xl">
          Why BeFit?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
                <feature.icon className="h-7 w-7 text-befit-green" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-befit-dark">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-befit-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
