export type MenuItem = {
  id: string
  name: string
  price: number
  calories: number
  protein: string
  fibre: string
  fat: string
  carbs: string
  type: "veg" | "non-veg"
  category: string
  description: string
  tags?: string[]
  image?: string
}

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  type: "veg" | "non-veg"
  calories: number
  protein: string
}

export type Cart = {
  items: CartItem[]
  total: number
}
