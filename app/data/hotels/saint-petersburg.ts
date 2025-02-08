import { CityAccommodations } from '../types'

export const saintPetersburgAccommodations: CityAccommodations = {
  hotels: [
    { 
      id: 8, 
      name: 'فندق أستوريا روكو فورتي', 
      description: 'فندق تاريخي فاخر يطل على كاتدرائية القديس إسحاق', 
      price: 22000, 
      image: '/placeholder.svg?height=200&width=300&text=Astoria%20Rocco%20Forte',
      amenities: ['سبا فاخر', 'مطعم راقٍ', 'خدمة الكونسيرج'],
      rating: 4.9,
      reviews: 1100,
      type: 'hotel'
    },
  ],
  cottages: [
    { 
      id: 12, 
      name: 'شاليه بحيرة لادوجا', 
      description: 'شاليه هادئ يقع على ضفاف بحيرة لادوجا، على بعد ساعة من سانت بطرسبرغ', 
      price: 15000, 
      image: '/placeholder.svg?height=200&width=300&text=Ladoga%20Lake%20Cottage',
      amenities: ['قارب خاص', 'ساونا', 'شرفة مطلة على البحيرة'],
      rating: 4.8,
      reviews: 290,
       type: 'cottage'
    },
  ]
}

