"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Users, CheckCircle, Trophy, Target, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"

// Animation hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export default function Home() {
  const heroRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()
  const aboutRef = useScrollAnimation()
  const testimonialsRef = useScrollAnimation()
  const pricingRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  return (
    <main className="min-h-screen bg-[#fefcfc] leading-3 leading-7">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-4 py-20 md:py-32 max-w-6xl mx-auto opacity-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 font-medium text-sm animate-pulse">
              University of Auckland Pre-Med Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Achieve Your{" "}
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Medical School
              </span>{" "}
              Dreams
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Personalised tutoring for University of Auckland pre-medicine courses, UCAT preparation, and MMI interview
              coaching from a top-performing graduate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#top">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
                >
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 transform hover:scale-105 transition-all duration-200"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/med-students.jpg?height=800&width=600&text=Tutor+Teaching+Medical+Student"
              alt="Auckland Med Tutor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Tutor's Achievements */}
      <section ref={statsRef} className="bg-white py-16 opacity-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Excellence</h2>
            <p className="text-gray-600">My personal achievements demonstrate the success you can achieve</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-red-600 mr-2" />
              </div>
              <p className="text-4xl font-bold text-red-600">192</p>
              <p className="text-gray-600 font-medium">MMI Score</p>
              <p className="text-sm text-gray-500">Multiple Mini Interview</p>
            </div>
            <div className="space-y-2 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-red-600 mr-2" />
              </div>
              <p className="text-4xl font-bold text-red-600">9.0</p>
              <p className="text-gray-600 font-medium">GPA</p>
              <p className="text-sm text-gray-500">Grade Point Average</p>
            </div>
            <div className="space-y-2 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-red-600 mr-2" />
              </div>
              <p className="text-4xl font-bold text-red-600">3190</p>
              <p className="text-gray-600 font-medium">UCAT Score</p>
              <p className="text-sm text-gray-500">95th Percentile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 max-w-6xl mx-auto opacity-0" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tutoring Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tutoring services tailored to help you excel in your pre-medicine journey at the University of
            Auckland.
          </p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="courses">Course Tutoring</TabsTrigger>
            <TabsTrigger value="ucat">UCAT Preparation</TabsTrigger>
            <TabsTrigger value="mmi">MMI Interviews</TabsTrigger>
          </TabsList>
          <TabsContent value="courses" className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Title at the top */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">First Year Course Tutoring</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Personalised tutoring for all core pre-medicine courses at the University of Auckland, designed to
                    help you excel in your first year studies.
                  </p>
                </div>

                {/* Content grid - Text left, Image right */}
                <div className="grid md:grid-cols-2 gap-12 mb-8 items-start">
                  {/* Left side - Course list and features */}
                  <div className="space-y-6 pr-4">
                    <div className="px-5">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">Courses Covered:</h4>
                      <ul className="space-y-3">
                        {[
                          "BIOSCI 107 - Biology for Biomedical Science",
                          "CHEM 110 - Chemistry of the Living World",
                          "MEDSCI 142 - Biology for Biomedical Science",
                          "POPLHLTH 111 - Population Health",
                          "PHYSICS 160 - Physics for the Life Sciences",
                        ].map((course, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {[
                          "Weekly 1-hour tutoring sessions",
                          "Comprehensive study materials",
                          "Practice questions and past papers",
                          "Exam preparation strategies",
                          "Email support between sessions",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Image */}
                  <div className="flex justify-center pl-4">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md my-20">
                      <Image
                        src="tutor.png?height=800&width=600&text=Course+Tutoring+Session"
                        alt="Course Tutoring Session"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Button at the bottom */}
                <div className="text-center">
                  <Link href="/contact#top">
                    <Button className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200 px-8 py-3">
                      Book Course Tutoring
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ucat" className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Title at the top */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">UCAT Preparation</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Comprehensive UCAT preparation to help you achieve a top percentile score in all subtests with
                    proven strategies and techniques.
                  </p>
                </div>

                {/* Content grid - Text left, Image right */}
                <div className="grid md:grid-cols-2 gap-12 mb-8 items-start">
                  {/* Left side - UCAT sections and features */}
                  <div className="space-y-6 pr-4">
                    <div className="mx-5">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">UCAT Sections:</h4>
                      <ul className="space-y-3">
                        {[
                          "Verbal Reasoning strategies and practice",
                          "Decision Making techniques and shortcuts",
                          "Quantitative Reasoning speed methods",
                          "Abstract Reasoning pattern recognition",
                          "Situational Judgement ethical frameworks",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {[
                          "Personalised UCAT study plan",
                          "Weekly practice sessions with feedback",
                          "1000+ practice questions",
                          "5 full mock exams with analysis",
                          "Time management techniques",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Image */}
                  <div className="flex justify-center pl-4">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md py-0 my-20">
                      <Image
                        src="/study.png?height=800&width=600&text=UCAT+Preparation+Study"
                        alt="UCAT Preparation Study"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Button at the bottom */}
                <div className="text-center">
                  <Link href="/contact#top">
                    <Button className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200 px-8 py-3">
                      Book UCAT Tutoring
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mmi" className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Title at the top */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">MMI Interview Coaching</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Comprehensive preparation for the Multiple Mini Interview format used by the University of Auckland
                    with personalised coaching and feedback.
                  </p>
                </div>

                {/* Content grid - Text left, Image right */}
                <div className="grid md:grid-cols-2 gap-12 mb-8 items-start">
                  {/* Left side - MMI components and features */}
                  <div className="space-y-6 pr-4">
                    <div className="mx-5">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">MMI Components:</h4>
                      <ul className="space-y-3">
                        {[
                          "Ethical scenario practice and feedback",
                          "Communication skills development",
                          "Role-play station strategies",
                          "Personal statement discussion preparation",
                          "Current healthcare issues analysis",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg leading-7">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {[
                          "Mock MMI circuits with feedback",
                          "Video recording and analysis",
                          "Personalised improvement plan",
                          "Body language and communication coaching",
                          "Last-minute interview preparation",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Image */}
                  <div className="flex justify-center pl-4">
                    <div className="relative rounded-lg overflow-hidden shadow-md tracking-[0e] tracking-[0] tracking-[] h-[400px] w-full my-20">
                      <Image
                        src="/interview-2.png?height=800&width=600&text=MMI+Interview+Practice"
                        alt="MMI Interview Practice"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Button at the bottom */}
                <div className="text-center">
                  <Link href="/contact#top">
                    <Button className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200 px-8 py-3">
                      Book MMI Coaching
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* About/Portfolio Section */}
      <section ref={aboutRef} className="py-20 bg-white opacity-0" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Your Tutor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about my background, qualifications, and why I'm passionate about helping pre-med students succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image src="./mitch.jpg?height=1000&width=800" alt="Tutor Portrait" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Mitchell Liang</h3>
              <p className="text-gray-600">
                I'm 3rd year med student from the University of Auckland with a passion for teaching and mentoring
                pre-med students. Having achieved top scores myself, I understand exactly what it takes to succeed in
                the competitive medical school admissions process.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Academic Achievements:</h4>
                <ul className="space-y-3">
                  {[
                    "Bachelor of Medicine - University of Auckland",
                    "9.0 GPA - Top 1% of graduating class",
                    "UCAT Score: 3190 (95th percentile)",
                    "MMI Score: 192 - Exceptional interview performance",
                    "Dean's List for Academic Excellence (2023)",
                  ].map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start transform hover:translate-x-2 transition-transform duration-200"
                    >
                      <Award className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Teaching Experience:</h4>
                <ul className="space-y-3">
                  {[
                    "3+ years of tutoring pre-med students",
                    "Teaching Assistant for BIOSCI 107 (2021-2022)",
                    "UCAT Workshop Facilitator",
                    "MMI Interview Coach for 20+ successful applicants",
                  ].map((experience, i) => (
                    <li
                      key={i}
                      className="flex items-start transform hover:translate-x-2 transition-transform duration-200"
                    >
                      <Users className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{experience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 transform hover:scale-105 transition-all duration-200"
              >
                View Full CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 px-4 max-w-6xl mx-auto opacity-0" id="testimonials">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students who have achieved their medical school dreams with my tutoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Sarah's UCAT tutoring was instrumental in helping me achieve a score in the 95th percentile. Her strategies and personalised feedback made all the difference."
            name="Michael L."
            role="First Year Medical Student"
            rating={5}
          />
          <TestimonialCard
            quote="The MMI coaching sessions were incredibly helpful. Sarah provided detailed feedback on my responses and helped me develop the confidence I needed to succeed in my interview."
            name="Emma W."
            role="Medical Student, Class of 2023"
            rating={5}
          />
          <TestimonialCard
            quote="I was struggling with BIOSCI 107 until I started tutoring with Sarah. Her clear explanations and study resources helped me improve from a C to an A-."
            name="David T."
            role="Pre-Med Student"
            rating={5}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 bg-white opacity-0" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tutoring Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialised tutoring programs designed to maximise your success in medical school admissions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MMI Tutoring Package */}
            <Card className="border-red-200 relative flex flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">MMI Tutoring</h3>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-red-600">$399</span>
                  <span className="text-gray-600"> / package</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "8 hours of one-on-one MMI coaching",
                    "2 full mock MMI circuits",
                    "Video recording and analysis",
                    "Personalised improvement plan",
                    "Communication skills coaching",
                    "Ethical scenario practice",
                    "Current healthcare issues briefing",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact#top">
                  <Button className="w-full bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200">
                    Book Now
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Semester 2 Tutoring Package */}
            <Card className="border-red-600 relative flex flex-col shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-6 pt-8 flex-grow">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Semester 2 Tutoring</h3>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-red-600">$899</span>
                  <span className="text-gray-600"> / semester</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Weekly 1-hour tutoring sessions (12 weeks)",
                    "All core pre-med courses covered",
                    "Comprehensive study materials",
                    "Practice questions and past papers",
                    "Mid-semester and final exam prep",
                    "Email support throughout semester",
                    "Progress tracking and feedback",
                    "Study schedule optimisation",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact#top">
                  <Button className="w-full bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200">
                    Book Now
                  </Button>
                </Link>
              </div>
            </Card>

            {/* UCAT Masterclass Package */}
            <Card className="border-red-200 relative flex flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">UCAT Masterclass</h3>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-red-600">$599</span>
                  <span className="text-gray-600"> / package</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "12 hours of intensive UCAT coaching",
                    "Personalised study plan",
                    "2000+ practice questions",
                    "8 full mock exams with analysis",
                    "Advanced time management techniques",
                    "Section-specific strategies",
                    "Performance tracking dashboard",
                    "Last-minute exam preparation",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact#top">
                  <Button className="w-full bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200">
                    Book Now
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-red-50 opacity-0">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Medical School Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your goals and how I can help you achieve them.
          </p>
          <Link href="/contact#top">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
            >
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
