import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import CategoryCard from '@/components/CategoryCard'

export default function Home() {
  const categories = [
    { title: 'الفنادق والشاليهات', description: 'اختر من بين أفضل أماكن الإقامة', link: '/hotels', image: 'https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=' },
    { title: 'الأنشطة', description: 'استكشف الأنشطة الممتعة', link: '/activities', image: 'https://toursofmoscow.com/wp-content/uploads/2017/02/LaBEmsa00Mc.jpg' },
    { title: 'خدمات النقل', description: 'تنقل بسهولة وراحة', link: '/transportation', image: 'https://www.mundilimos.com/wp-content/uploads/2021/06/airport-car-service.jpg' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/bg.jpg"
          alt="صورة لمعالم روسيا الجميلة"
          fill
          style={{ objectFit: 'cover' }}
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

