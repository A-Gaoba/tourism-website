import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredPackages = [
  {
    title: "جولة موسكو الكلاسيكية",
    description: "استكشف أشهر معالم موسكو في 5 أيام",
    image: "/images/packages/moscow-classic.jpg",
    price: 15000,
  },
  {
    title: "سحر سانت بطرسبرغ",
    description: "تجربة ثقافية غنية في مدينة القياصرة لمدة 7 أيام",
    image: "/images/packages/saint-petersburg-charm.jpg",
    price: 18000,
  },
  {
    title: "مغامرة القوقاز",
    description: "استكشف جبال القوقاز وثقافتها الفريدة في 10 أيام",
    image: "/images/packages/caucasus-adventure.jpg",
    price: 22000,
  },
]

const sendToWhatsApp = (packageInfo: (typeof featuredPackages)[0]) => {
  const message = `أود حجز الباقة التالية:
اسم الباقة: ${packageInfo.title}
الوصف: ${packageInfo.description}
السعر: ${packageInfo.price} روبل

الرجاء تزويدي بمزيد من المعلومات حول هذه الباقة.`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/?text=${encodedMessage}`, "_blank")
}

export default function FeaturedPackages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredPackages.map((pkg, index) => (
        <Card key={index} className="neumorphic-shadow">
          <CardHeader>
            <CardTitle>{pkg.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 mb-4">
              <Image
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mb-4">{pkg.description}</p>
            <p className="font-bold mb-4">السعر: {pkg.price} روبل</p>
            <Button className="w-full" onClick={() => sendToWhatsApp(pkg)}>
              احجز الآن
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

