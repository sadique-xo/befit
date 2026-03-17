import type { Metadata } from "next"
import { MapPin, Phone, Clock } from "lucide-react"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact - BeFit Cafe",
  description:
    "Get in touch with BeFit Cafe. Visit us at AnyTime Fitness, Kanke Rd, Ranchi or call +91 7004828431.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-befit-dark sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-2 text-befit-gray">
          We&apos;d love to hear from you
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Map & Info */}
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.1!2d85.31!3d23.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIyJzQ4LjAiTiA4NcKwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BeFit Cafe Location"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <MapPin className="h-5 w-5 text-befit-green" />
              </div>
              <div>
                <h3 className="font-semibold text-befit-dark">Address</h3>
                <p className="mt-0.5 text-sm text-befit-gray">
                  4th Floor, AnyTime Fitness, Sky Villa Pantaloons Building,
                  Kanke Rd, Ranchi 834008
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <Phone className="h-5 w-5 text-befit-green" />
              </div>
              <div>
                <h3 className="font-semibold text-befit-dark">Phone</h3>
                <a
                  href="tel:+917004828431"
                  className="mt-0.5 text-sm text-befit-gray hover:text-befit-green transition-colors duration-200"
                >
                  +91 7004828431
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <Clock className="h-5 w-5 text-befit-green" />
              </div>
              <div>
                <h3 className="font-semibold text-befit-dark">Hours</h3>
                <p className="mt-0.5 text-sm text-befit-gray">
                  8:30 AM - 10:30 PM (Daily)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}
