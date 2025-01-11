import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSelections } from './SelectionsProvider'
import { useToast } from "@/components/ui/use-toast"

interface TransportationCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  vehicle: string
  maxPassengers: number
  includes: string[]
}

const TransportationCard: React.FC<TransportationCardProps> = ({ id, name, description, price, image, vehicle, maxPassengers, includes }) => {
  const { addSelection } = useSelections()
  const { toast } = useToast()

  const handleSelect = () => {
    addSelection('transportation', { id, name, description, price, image, vehicle, maxPassengers, includes })
    toast({
      title: "تمت إضافة خدمة النقل إلى الباقة",
      description: `تم اختيار ${name} بسعر ${price} روبل`,
    })
  }

  return (
    <Card className="neumorphic-shadow hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{vehicle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md overflow-hidden neumorphic-inset">
          <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
        </div>
        <p className="mt-4">{description}</p>
        <p className="mt-2 font-bold">{price} روبل</p>
        <p className="mt-2">عدد الركاب الأقصى: {maxPassengers}</p>
        <ul className="mt-2 list-disc list-inside">
          {includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSelect} className="w-full neumorphic-shadow hover:neumorphic-inset transition-all duration-300">اختيار</Button>
      </CardFooter>
    </Card>
  )
}

export default TransportationCard

