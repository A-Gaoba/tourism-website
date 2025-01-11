import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accommodation } from '../data/types'

interface AccommodationCardProps extends Accommodation {
  type: 'hotel' | 'cottage'
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ id, name, type, description, price, image, rating, reviews }) => {
  return (
    <Card className="neumorphic-shadow hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{type === 'hotel' ? 'فندق' : 'شاليه'}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md overflow-hidden neumorphic-inset">
          <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
        </div>
        <p className="mt-4">{description}</p>
        <p className="mt-2 font-bold">{price} روبل / الليلة</p>
        <p className="mt-2">التقييم: {rating} ({reviews} تقييم)</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full neumorphic-shadow hover:neumorphic-inset transition-all duration-300">
          <Link href={`/accommodation/${id}`}>
            {type === 'hotel' ? 'عرض الغرف' : 'عرض تفاصيل الشاليه'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AccommodationCard

