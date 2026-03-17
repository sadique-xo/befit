"use client"

import { VegBadge } from "@/components/veg-badge"
import { Clock, CheckCircle2, Package, ChefHat } from "lucide-react"

const demoOrders = [
  {
    id: "ORD-1042",
    date: "Today, 1:30 PM",
    status: "preparing" as const,
    items: [
      { name: "Grilled Chicken with Rice and Salad", qty: 1, price: 370, type: "non-veg" as const },
      { name: "High Protein Oats with Fruits and Nuts", qty: 1, price: 279, type: "veg" as const },
    ],
    total: 649,
  },
  {
    id: "ORD-1038",
    date: "Yesterday, 8:45 PM",
    status: "delivered" as const,
    items: [
      { name: "Chicken Salad", qty: 2, price: 640, type: "non-veg" as const },
      { name: "Whole Wheat Chicken Wrap", qty: 1, price: 199, type: "non-veg" as const },
    ],
    total: 839,
  },
  {
    id: "ORD-1031",
    date: "Mar 15, 12:15 PM",
    status: "delivered" as const,
    items: [
      { name: "Boiled Eggs with Salad (4 Eggs)", qty: 2, price: 238, type: "non-veg" as const },
      { name: "Peanut Butter Sandwich", qty: 1, price: 125, type: "veg" as const },
    ],
    total: 363,
  },
]

const statusConfig = {
  preparing: {
    label: "Preparing",
    icon: ChefHat,
    color: "text-amber-600 bg-amber-50/80",
  },
  ready: {
    label: "Ready",
    icon: Package,
    color: "text-blue-600 bg-blue-50/80",
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle2,
    color: "text-befit-green bg-befit-snow/80",
  },
}

export function OrdersPageClient() {
  return (
    <div className="mx-auto max-w-lg px-4 pb-32 pt-6">
      <h1 className="font-heading text-lg text-befit-dark">Order History</h1>
      <p className="mt-0.5 text-xs text-befit-green-dark/50">Your recent orders</p>

      <div className="mt-6 space-y-4">
        {demoOrders.map((order) => {
          const status = statusConfig[order.status]
          const StatusIcon = status.icon

          return (
            <div
              key={order.id}
              className="rounded-xl glass shadow-glass p-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-befit-green-dark">
                    {order.id}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5 text-[11px] text-befit-green-dark/50">
                    <Clock className="h-3 w-3" />
                    {order.date}
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${status.color}`}
                >
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                </span>
              </div>

              {/* Items */}
              <div className="mt-3 space-y-1.5">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <VegBadge type={item.type} />
                      <span className="text-xs text-befit-green-dark truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-befit-green-dark/40 shrink-0">
                        &times;{item.qty}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-befit-green-dark shrink-0 ml-2">
                      &#8377;{item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-3 flex items-center justify-between border-t border-befit-green/10 pt-2.5">
                <span className="text-xs font-semibold text-befit-green-dark">
                  Total
                </span>
                <span className="text-sm font-bold text-befit-green">
                  &#8377;{order.total}
                </span>
              </div>

              {/* Reorder */}
              {order.status === "delivered" && (
                <button className="mt-2.5 w-full rounded-lg glass-green py-2 text-xs font-semibold text-befit-green hover:bg-befit-green/10 transition-colors active:scale-[0.98]">
                  Reorder
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
