"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Send } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="flex flex-col items-center justify-center p-8 text-center glass shadow-glass">
        <CheckCircle2 className="h-12 w-12 text-befit-green-light" />
        <h3 className="mt-4 font-heading text-lg text-befit-dark">
          Message Sent!
        </h3>
        <p className="mt-1 text-sm text-befit-green-dark/50">
          We&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-4"
          onClick={() => {
            setSubmitted(false)
            setName("")
            setPhone("")
            setMessage("")
          }}
        >
          Send Another Message
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-5 sm:p-6 glass shadow-glass">
      <h2 className="font-heading text-lg text-befit-dark">Send a Message</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-befit-green-dark">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg glass-green px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-befit-green transition-all duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-befit-green-dark">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-lg glass-green px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-befit-green transition-all duration-200"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-befit-green-dark">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full rounded-lg glass-green px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-befit-green resize-none transition-all duration-200"
            placeholder="What would you like to tell us?"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-befit-green to-befit-leaf hover:from-befit-green/90 hover:to-befit-leaf/90 text-white gap-2 shadow-glass-green transition-all duration-300"
        >
          <Send className="h-4 w-4" />
          Send Message
        </Button>
      </form>
    </Card>
  )
}
