"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CategoryCard from "@/components/CategoryCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { testimonials } from "./data/testimoials"
import FeaturedPackages from "@/components/FeaturedPackages"
import OfferNotification from "@/components/OfferNotificationProps"

const categories = [
  {
    title: "الفنادق والشاليهات",
    description: "اختر من بين أفضل أماكن الإقامة",
    link: "/hotels",
    image: "/images/hotels.jpg",
  },
  { title: "الأنشطة", description: "استكشف الأنشطة الممتعة", link: "/activities", image: "/images/activities.jpg" },
  {
    title: "خدمات النقل",
    description: "تنقل بسهولة وراحة",
    link: "/transportation",
    image: "/images/transportation.jpg",
  },
]

const popularDestinations = [
  { name: "موسكو", image: "/images/moscow.jpg" },
  { name: "سانت بطرسبرغ", image: "/images/saint-petersburg.jpg" },
  { name: "سوتشي", image: "/images/sochi.jpg" },
  { name: "قازان", image: "/images/kazan.jpg" },
]

export default function Home() {
  const [showNotification, setShowNotification] = useState(true)
  const featuredPackagesRef = useRef<HTMLDivElement>(null)

  const scrollToFeaturedPackages = () => {
    featuredPackagesRef.current?.scrollIntoView({ behavior: "smooth" })
    setShowNotification(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {showNotification && (
        <OfferNotification onClose={() => setShowNotification(false)} onViewOffer={scrollToFeaturedPackages} />
      )}

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/russia-hero.jpg"
          alt="صورة لمعالم روسيا الجميلة"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">اكتشف جمال روسيا</h1>
          <p className="text-xl md:text-2xl mb-8">رحلة لا تُنسى في أحضان الطبيعة والثقافة الروسية</p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/hotels">ابدأ رحلتك الآن</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">استكشف خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">الوجهات الشهيرة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden neumorphic-shadow">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-4">
                  <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" ref={featuredPackagesRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">باقات سفر مميزة</h2>
          <FeaturedPackages />
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ماذا يقول عملاؤنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
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
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/testimonials">عرض جميع الشهادات</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

