import { CityAccommodations } from '../types'

export const kazanAccommodations: CityAccommodations = {
  hotels: [
    { 
      id: 22, 
      name: 'فندق كازان بالاس', 
      description: 'فندق فاخر في قلب كازان التاريخية', 
      price: 16000, 
      image: '/placeholder.svg?height=200&width=300&text=Kazan%20Palace%20Hotel',
      amenities: ['سبا تقليدي', 'مطعم تتاري', 'إطلالة على الكرملين'],
      rating: 4.7,
      reviews: 550,
      type: 'hotel'

    },
    {
      id: 23,
      name: 'فندق جراند أوتيل كازان',
      description: 'فندق أنيق يقع بالقرب من شارع باومان الشهير',
      price: 14000,
      image: '/placeholder.svg?height=200&width=300&text=Grand%20Hotel%20Kazan',
      amenities: ['مركز أعمال', 'صالة رياضية', 'مطعم بانورامي'],
      rating: 4.5,
      reviews: 680,
      type: 'hotel'

    },
  ],
  cottages: [
    { 
      id: 26, 
      name: 'فندق شاليه ريفربينك', 
      description: 'شاليه عصري على ضفاف نهر الفولغا', 
      price: 14000, 
      image: '/placeholder.svg?height=200&width=300&text=Riverbank%20Chalet',
      amenities: ['شرفة مطلة على النهر', 'قارب خاص', 'حديقة خاصة'],
      rating: 4.6,
      reviews: 320,
       type: 'cottage'
    },
  ]
}

