"use client"

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react"
import { CartItem } from "@/types"

type CartState = {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState }

type CartContextType = {
  cart: CartState
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getItemQuantity: (id: string) => number
  totalItems: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      let newItems: CartItem[]
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }]
      }
      return { items: newItems, total: calculateTotal(newItems) }
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      return { items: newItems, total: calculateTotal(newItems) }
    }
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        const newItems = state.items.filter(
          (item) => item.id !== action.payload.id
        )
        return { items: newItems, total: calculateTotal(newItems) }
      }
      const newItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return { items: newItems, total: calculateTotal(newItems) }
    }
    case "CLEAR_CART":
      return { items: [], total: 0 }
    case "LOAD_CART":
      return action.payload
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  useEffect(() => {
    const saved = localStorage.getItem("befit-cart")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        dispatch({ type: "LOAD_CART", payload: parsed })
      } catch {
        // ignore invalid data
      }
    }
  }, [])

  useEffect(() => {
    if (cart.items.length > 0 || localStorage.getItem("befit-cart")) {
      localStorage.setItem("befit-cart", JSON.stringify(cart))
    }
  }, [cart])

  const addItem = (item: Omit<CartItem, "quantity">) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity: 1 } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const getItemQuantity = (id: string): number => {
    return cart.items.find((item) => item.id === id)?.quantity || 0
  }

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
