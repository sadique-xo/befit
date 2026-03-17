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
        <h1 className="font-heading text-3xl tracking-tight text-befit-dark sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-2 text-befit-green-dark/50">
          We&apos;d love to hear from you
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Map & Info */}
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-xl glass shadow-glass ring-1 ring-white/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.4547065723305!2d85.3158455!3d23.4079361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e7406f6a4393%3A0xe8b1cbcd7c6654de!2sBeFit%20caf%C3%A9!5e0!3m2!1sen!2sin!4v1773742473069!5m2!1sen!2sin"
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg glass-green shadow-glass">
                <MapPin className="h-5 w-5 text-befit-green" />
              </div>
              <div>
                <h3 className="font-semibold text-befit-green-dark">Address</h3>
                <p className="mt-0.5 text-sm text-befit-green-dark/50">
                  4th Floor, AnyTime Fitness, Sky Villa Pantaloons Building,
                  Kanke Rd, Ranchi 834008
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg glass-green shadow-glass">
                <Phone className="h-5 w-5 text-befit-green" />
              </div>
              <div>
                <h3 className="font-semibold text-befit-green-dark">Phone</h3>
                <a
                  href="tel:+917004828431"
                  className="mt-0.5 text-sm text-befit-green-dark/50 hover:text-befit-green transition-colors duration-200"
                >
                  +91 7004828431
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg glass-green shadow-glass">
                <Clock className="h-5 w-5 text-befit-green" />
              </div>
              <div>
                <h3 className="font-semibold text-befit-green-dark">Hours</h3>
                <p className="mt-0.5 text-sm text-befit-green-dark/50">
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
