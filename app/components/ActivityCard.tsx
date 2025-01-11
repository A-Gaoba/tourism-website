import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSelections } from './SelectionsProvider'
import { useToast } from "@/components/ui/use-toast"

interface ActivityCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  city: string
  duration: string
  includes: string[]
  rating: number
  reviews: number
}

const ActivityCard: React.FC<ActivityCardProps> = ({ id, name, description, price, image, city, duration, includes, rating, reviews }) => {
  const { addSelection } = useSelections()
  const { toast } = useToast()
  const [tickets, setTickets] = useState(1)
  const [date, setDate] = useState('')

  const handleSelect = () => {
    addSelection('activities', { id, name, description, price, image, city, tickets, date })
    toast({
      title: "تمت إضافة النشاط إلى الباقة",
      description: `تم اختيار ${tickets} تذاكر لـ ${name} في ${city} بتاريخ ${date}`,
    })
  }

  return (
    <Card className="neumorphic-shadow hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{city}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md overflow-hidden neumorphic-inset">
          <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
        </div>
        <p className="mt-4">{description}</p>
        <p className="mt-2 font-bold">{price} روبل / للشخص</p>
        <p className="mt-2">المدة: {duration}</p>
        <p className="mt-2">التقييم: {rating} ({reviews} تقييم)</p>
        <div className="mt-4 space-y-2">
          <Label htmlFor={`tickets-${id}`}>عدد التذاكر</Label>
          <Input
            id={`tickets-${id}`}
            type="number"
            min={1}
            value={tickets}
            onChange={(e) => setTickets(parseInt(e.target.value))}
            className="neumorphic-inset"
          />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor={`date-${id}`}>تاريخ النشاط</Label>
          <Input
            id={`date-${id}`}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="neumorphic-inset"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSelect} className="w-full neumorphic-shadow hover:neumorphic-inset transition-all duration-300">اختيار</Button>
      </CardFooter>
    </Card>
  )
}

export default ActivityCard

