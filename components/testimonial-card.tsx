import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, name, role, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-red-400 text-red-400" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="flex-grow">
          <p className="text-gray-700 italic mb-6">"{quote}"</p>
        </blockquote>
        <div className="mt-auto">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
