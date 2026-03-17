const steps = [
  {
    step: "01",
    title: "Pick Your Plan",
    description: "Choose a subscription that matches your goals — 1, 2, or 3 meals a day.",
  },
  {
    step: "02",
    title: "Customize Your Meals",
    description: "Tell us your preferences, dietary needs, and calorie targets. We handle the rest.",
  },
  {
    step: "03",
    title: "Fresh Delivery Daily",
    description: "Get freshly prepared, macro-tracked meals delivered to your door every day.",
  },
  {
    step: "04",
    title: "Track & Adjust",
    description: "Monitor your nutrition. Swap meals or adjust your plan anytime via WhatsApp.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl tracking-tight text-befit-dark sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 text-befit-green-dark/50">
            Getting started with BeFit is simple
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-befit-green-light/30 to-befit-mint/30 lg:block" />
              )}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-befit-green to-befit-leaf text-sm font-bold text-white shadow-glass-green transition-all duration-300 group-hover:scale-105">
                {item.step}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-befit-green-dark">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-befit-green-dark/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
