import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import CategoryCard from '@/components/CategoryCard'

export default function Home() {
  const categories = [
    { title: 'الفنادق والشاليهات', description: 'اختر من بين أفضل أماكن الإقامة', link: '/hotels', image: '/placeholder.svg?height=200&width=300&text=Hotels' },
    { title: 'الأنشطة', description: 'استكشف الأنشطة الممتعة', link: '/activities', image: '/placeholder.svg?height=200&width=300&text=Activities' },
    { title: 'خدمات النقل', description: 'تنقل بسهولة وراحة', link: '/transportation', image: '/placeholder.svg?height=200&width=300&text=Transportation' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Beautiful%20Russia"
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
    </div>
  )
}

