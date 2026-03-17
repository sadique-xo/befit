export function VegBadge({ type }: { type: "veg" | "non-veg" }) {
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center rounded-sm border ${
        type === "veg" ? "border-green-600" : "border-red-600"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          type === "veg" ? "bg-green-600" : "bg-red-600"
        }`}
      />
    </span>
  )
}
