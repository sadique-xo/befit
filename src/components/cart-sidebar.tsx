"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { CartItemRow } from "./cart-item"
import { OrderDialog } from "./order-dialog"
import { useState } from "react"

export function CartSidebar({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { cart, totalItems } = useCart()
  const [orderOpen, setOrderOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="flex w-full flex-col p-0 sm:max-w-md">
          <SheetHeader className="px-5 pt-5 pb-3 border-b border-border">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-befit-green" />
              Your Cart ({totalItems})
            </SheetTitle>
          </SheetHeader>

          {cart.items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
              <ShoppingBag className="h-16 w-16 text-gray-200" />
              <p className="mt-4 text-sm font-medium text-befit-gray">
                Your cart is empty
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Add items from the menu to get started
              </p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col overflow-hidden">
              <ScrollArea className="flex-1">
                <div className="divide-y divide-border px-5">
                  {cart.items.map((item) => (
                    <CartItemRow key={item.id} item={item} />
                  ))}
                </div>
              </ScrollArea>

              <div className="border-t border-border px-5 py-4 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-semibold text-befit-dark">
                    Total
                  </span>
                  <span className="text-lg font-bold text-befit-green">
                    &#8377;{cart.total}
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-befit-orange hover:bg-befit-orange/90 text-white"
                  onClick={() => {
                    onOpenChange(false)
                    setOrderOpen(true)
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <OrderDialog open={orderOpen} onOpenChange={setOrderOpen} />
    </>
  )
}
