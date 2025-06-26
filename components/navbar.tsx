"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#fffaf5]/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#fffaf5]/90 h-16 group">
      <div className="container flex items-center justify-between transition-all duration-300 h-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-red-600 transition-all duration-300 group-hover:text-red-700">
              Auckland Med Tutor
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 transition-all duration-300">
          <Link
            href="/#services"
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            About
          </Link>
          {/* <Link
            href="/#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            Testimonials
          </Link> */}
          {/* <Link
            href="/#pricing"
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            Pricing
          </Link> */}
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact#top">
            <Button className="bg-red-600 hover:bg-red-700 transition-all duration-200 group-hover:shadow-md">
              Enquire now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-[#fffaf5] absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#services"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <Button className="w-full bg-red-600 hover:bg-red-700">Book Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
