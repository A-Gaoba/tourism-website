import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useSelections } from './SelectionsProvider'
import { useToast } from "@/components/ui/use-toast"
import BookingForm from './BookingForm'

interface RoomCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  accommodationId: number
  accommodationType: 'hotel' | 'cottage'
  accommodationName: string
}

const RoomCard: React.FC<RoomCardProps> = ({ 
  id, name, description, price, image, accommodationId, accommodationType, accommodationName 
}) => {
  const { addSelection } = useSelections()
  const { toast } = useToast()
  const [showBookingForm, setShowBookingForm] = useState(false)

  const handleBooking = (startDate: string, endDate: string, guests: number) => {
    addSelection(accommodationType === 'hotel' ? 'hotels' : 'cottages', { 
      id: accommodationId, 
      name: accommodationName, 
      type: accommodationType,
      room: { id, name, description, price, image },
      booking: { startDate, endDate, guests }
    })
    toast({
      title: "تم الحجز بنجاح",
      description: `لقد حجزت ${name} في ${accommodationName} من ${startDate} إلى ${endDate} لـ ${guests} ضيوف`,
    })
    setShowBookingForm(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{accommodationName}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover rounded-md" />
        <p className="mt-2">{description}</p>
        <p className="mt-2 font-bold">{price} روبل / الليلة</p>
      </CardContent>
      <CardFooter>
        {showBookingForm ? (
          <BookingForm onSubmit={handleBooking} />
        ) : (
          <button 
            onClick={() => setShowBookingForm(true)} 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded"
          >
            حجز
          </button>
        )}
      </CardFooter>
    </Card>
  )
}

export default RoomCard

