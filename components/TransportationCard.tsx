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
}

const TransportationCard: React.FC<TransportationCardProps> = ({ id, name, description, price, image }) => {
  const { addSelection } = useSelections()
  const { toast } = useToast()

  const handleSelect = () => {
    addSelection('transportation', { id, name, description, price, image })
    toast({
      title: "تم الاختيار بنجاح",
      description: `لقد اخترت ${name} بسعر ${price} روبل`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover rounded-md" />
        <p className="mt-2">{description}</p>
        <p className="mt-2 font-bold">{price} روبل</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSelect} className="w-full">اختيار</Button>
      </CardFooter>
    </Card>
  )
}

export default TransportationCard

