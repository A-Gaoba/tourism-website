import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { testimonials } from "../data/testimoials"

export const metadata = {
  title: "شهادات العملاء - شرفت للسياحة في روسيا",
  description: "اقرأ ما يقوله عملاؤنا عن تجاربهم في السفر إلى روسيا مع شرفت",
}

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">شهادات العملاء</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="neumorphic-shadow">
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`شهادة ${testimonial.name}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

