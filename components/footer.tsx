import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Auckland Med Tutor</h3>
            <p className="text-sm">
              Personalised tutoring for University of Auckland pre-medicine courses, UCAT preparation, and MMI interview
              coaching.
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="hover:text-red-500 transition-colors">
                  Course Tutoring
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-500 transition-colors">
                  UCAT Preparation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-500 transition-colors">
                  MMI Interview Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="hover:text-red-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-red-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-red-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              {/* <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+64 21 123 4567</span>
              </li> */}
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>aucklandmedtutor@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Auckland Med Tutor. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-red-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
