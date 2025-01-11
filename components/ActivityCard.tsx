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
}

const ActivityCard: React.FC<ActivityCardProps> = ({ id, name, description, price, image, city }) => {
  const { addSelection } = useSelections()
  const { toast } = useToast()
  const [tickets, setTickets] = useState(1)
  const [date, setDate] = useState('')

  const handleSelect = () => {
    addSelection('activities', { id, name, description, price, image, city, tickets, date })
    toast({
      title: "تم الاختيار بنجاح",
      description: `لقد اخترت ${tickets} تذاكر لـ ${name} في ${city} بتاريخ ${date}`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{city}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover rounded-md" />
        <p className="mt-2">{description}</p>
        <p className="mt-2 font-bold">{price} روبل / للشخص</p>
        <div className="mt-4 space-y-2">
          <Label htmlFor={`tickets-${id}`}>عدد التذاكر</Label>
          <Input
            id={`tickets-${id}`}
            type="number"
            min={1}
            value={tickets}
            onChange={(e) => setTickets(parseInt(e.target.value))}
          />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor={`date-${id}`}>تاريخ النشاط</Label>
          <Input
            id={`date-${id}`}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSelect} className="w-full">اختيار</Button>
      </CardFooter>
    </Card>
  )
}

export default ActivityCard

