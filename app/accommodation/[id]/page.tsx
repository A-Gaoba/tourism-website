"use client"

import { useParams } from 'next/navigation'
import { moscowAccommodations } from '../../data/hotels/moscow'
import { saintPetersburgAccommodations } from '../../data/hotels/saint-petersburg'
import { sochiAccommodations } from '../../data/hotels/sochi'
import { kazanAccommodations } from '../../data/hotels/kazan'
import { rooms } from '../../data/rooms'
import RoomCard from '../../components/RoomCard'
import { Toaster } from "@/components/ui/toaster"

const allAccommodations = {
  ...moscowAccommodations.hotels,
  ...moscowAccommodations.cottages,
  ...saintPetersburgAccommodations.hotels,
  ...saintPetersburgAccommodations.cottages,
  ...sochiAccommodations.hotels,
  ...sochiAccommodations.cottages,
  ...kazanAccommodations.hotels,
  ...kazanAccommodations.cottages,
}

export default function AccommodationRoomsPage() {
  const params = useParams()
  const accommodationId = parseInt(params.id as string)

  const accommodation = allAccommodations[accommodationId]
  const accommodationRooms = rooms[accommodationId] || []

  if (!accommodation) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16 flex justify-center items-center h-[80vh]">
        <h1 className="text-3xl font-bold mb-8">عذراً، لم يتم العثور على مكان الإقامة</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">
        {accommodation.type === 'hotel' ? 'الغرف المتاحة في' : 'تفاصيل شاليه'} {accommodation.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accommodationRooms.map(room => (
          <RoomCard
            key={room.id}
            {...room}
            accommodationId={accommodationId}
            accommodationType={accommodation.type as 'hotel' | 'cottage'}
            accommodationName={accommodation.name}
          />
        ))}
      </div>
      <Toaster />
    </div>
  )
}

