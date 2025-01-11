import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BookingFormProps {
  onSubmit: (startDate: string, endDate: string, adults: number, children: { count: number, ages: number[] }) => void
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [adults, setAdults] = useState(1)
  const [childrenCount, setChildrenCount] = useState(0)
  const [childrenAges, setChildrenAges] = useState<number[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(startDate, endDate, adults, { count: childrenCount, ages: childrenAges })
  }

  const handleChildrenCountChange = (count: number) => {
    setChildrenCount(count)
    setChildrenAges(prev => {
      const newAges = [...prev]
      while (newAges.length < count) newAges.push(1)
      return newAges.slice(0, count)
    })
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
        <Label htmlFor="adults">عدد البالغين</Label>
        <Input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(Math.min(3, parseInt(e.target.value)))}
          min={1}
          max={3}
          required
        />
      </div>
      <div>
        <Label htmlFor="children">عدد الأطفال</Label>
        <Input
          type="number"
          id="children"
          value={childrenCount}
          onChange={(e) => handleChildrenCountChange(parseInt(e.target.value))}
          min={0}
          required
        />
      </div>
      {childrenAges.map((age, index) => (
        <div key={index}>
          <Label htmlFor={`childAge-${index}`}>عمر الطفل {index + 1}</Label>
          <Input
            type="number"
            id={`childAge-${index}`}
            value={age}
            onChange={(e) => {
              const newAges = [...childrenAges]
              newAges[index] = Math.min(10, Math.max(1, parseInt(e.target.value)))
              setChildrenAges(newAges)
            }}
            min={1}
            max={10}
            required
          />
        </div>
      ))}
      <Button type="submit" className="w-full">حجز</Button>
    </form>
  )
}

export default BookingForm

