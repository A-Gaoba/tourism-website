import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
  title: string
  description: string
  link: string
  image: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, link, image }) => {
  return (
    <Card className="transition-transform hover:scale-105">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md"
        />
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>استكشف {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CategoryCard

