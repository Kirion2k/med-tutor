"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })

    if (res.ok) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-[#fffaf5]" id="top">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* ... headline and hero image ... */}

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>

            {/* show status messages */}
            {status === "success" && (
              <p className="mb-4 text-green-600">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="mb-4 text-red-600">
                Oops, something went wrong. Please try again.
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* required hidden fields */}
              <input
                type="hidden"
                name="access_key"
                value="6e92c17b-5c47-4e75-944f-f5cdedc1acb6"
              />
              <input
                type="hidden"
                name="subject"
                value="New inquiry from Auckland Med Tutor site"
              />
              <input
                type="text"
                name="botcheck"
                style={{ display: "none" }}
              />

              {/* your inputs */}
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Select name="service" defaultValue="">
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course-tutoring">
                      Course Tutoring
                    </SelectItem>
                    <SelectItem value="ucat">UCAT Preparation</SelectItem>
                    <SelectItem value="mmi">MMI Interview Coaching</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+64 21 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@aucklandmedtutor.co.nz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">
                      Tutoring sessions available online or in-person at the University of Auckland City Campus
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Tutoring Hours</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">TBD</span>
                  {/* <span>3:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span> */}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                {/* <p className="text-gray-600 text-sm">
                  * Hours may vary during exam periods and university holidays. Please contact for availability.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
