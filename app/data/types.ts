export interface Accommodation {
  id: number
  name: string
  description: string
  price: number
  image: string
  amenities: string[]
  rating: number
  reviews: number
}

export interface CityAccommodations {
  hotels: Accommodation[]
  cottages: Accommodation[]
}

export interface Room {
  id: number
  name: string
  description: string
  price: number
  image: string
  maxOccupancy: number
  size: number
  bedType: string
  amenities: string[]
}

export interface Activity {
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

export interface TransportationService {
  id: number
  name: string
  description: string
  price: number
  image: string
  vehicle: string
  maxPassengers: number
  includes: string[]
  cities: string[]
}

