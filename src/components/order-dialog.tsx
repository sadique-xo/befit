"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { CheckCircle2, MessageCircle } from "lucide-react"

type OrderMode = "delivery" | "pickup"

export function OrderDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { cart, clearCart } = useCart()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [mode, setMode] = useState<OrderMode>("pickup")
  const [address, setAddress] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    clearCart()
  }

  const handleClose = () => {
    onOpenChange(false)
    if (submitted) {
      setSubmitted(false)
      setName("")
      setPhone("")
      setAddress("")
      setMode("pickup")
    }
  }

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 className="h-16 w-16 text-befit-green-light" />
            <h3 className="mt-4 text-xl font-bold text-befit-dark">
              Order Received!
            </h3>
            <p className="mt-2 text-sm text-befit-gray">
              We&apos;ll confirm on WhatsApp shortly.
            </p>
            <a
              href="https://wa.me/917004828431?text=Hi, I'd like to place an order"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="mt-3"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Place Order</DialogTitle>
        </DialogHeader>

        {/* Order summary */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-befit-dark">
            Order Summary
          </h4>
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-befit-gray">
                {item.name} x{item.quantity}
              </span>
              <span className="font-medium text-befit-dark">
                &#8377;{item.price * item.quantity}
              </span>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span className="text-befit-green">&#8377;{cart.total}</span>
          </div>
        </div>

        <Separator />

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-befit-dark">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-befit-green"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-befit-dark">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-befit-green"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {/* Delivery / Pickup toggle */}
          <div>
            <label className="mb-2 block text-sm font-medium text-befit-dark">
              Order Type
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setMode("pickup")}
                className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  mode === "pickup"
                    ? "border-befit-green bg-befit-green text-white"
                    : "border-border text-befit-gray hover:border-befit-green"
                }`}
              >
                Pickup
              </button>
              <button
                onClick={() => setMode("delivery")}
                className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  mode === "delivery"
                    ? "border-befit-green bg-befit-green text-white"
                    : "border-border text-befit-gray hover:border-befit-green"
                }`}
              >
                Delivery
              </button>
            </div>
          </div>

          {mode === "delivery" && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-befit-dark">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-befit-green resize-none"
                placeholder="Enter your delivery address"
              />
            </div>
          )}

          <Button
            size="lg"
            className="w-full bg-befit-orange hover:bg-befit-orange/90 text-white"
            disabled={!name || !phone || (mode === "delivery" && !address)}
            onClick={handleSubmit}
          >
            Confirm Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
