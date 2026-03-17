export function MacroPills({
  calories,
  protein,
}: {
  calories: number
  protein: string
}) {
  return (
    <div className="flex gap-2">
      <span className="inline-flex items-center rounded-full glass px-2 py-0.5 text-xs font-medium text-befit-green-dark/60">
        {calories} kcal
      </span>
      <span className="inline-flex items-center rounded-full glass-green px-2 py-0.5 text-xs font-medium text-befit-green">
        {protein} protein
      </span>
    </div>
  )
}
