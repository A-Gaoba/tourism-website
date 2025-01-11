import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BookingFormProps {
  onSubmit: (startDate: string, endDate: string, guests: number) => void
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [guests, setGuests] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(startDate, endDate, guests)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="startDate">تاريخ الوصول</Label>
        <Input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="endDate">تاريخ المغادرة</Label>
        <Input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="guests">عدد الضيوف</Label>
        <Input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          min={1}
          required
        />
      </div>
      <Button type="submit" className="w-full">حجز</Button>
    </form>
  )
}

export default BookingForm

