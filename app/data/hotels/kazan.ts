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
      reviews: 550
    },
    {
      id: 23,
      name: 'فندق جراند أوتيل كازان',
      description: 'فندق أنيق يقع بالقرب من شارع باومان الشهير',
      price: 14000,
      image: '/placeholder.svg?height=200&width=300&text=Grand%20Hotel%20Kazan',
      amenities: ['مركز أعمال', 'صالة رياضية', 'مطعم بانورامي'],
      rating: 4.5,
      reviews: 680
    },
    {
      id: 24,
      name: 'فندق كورتيارد ماريوت كازان كرملين',
      description: 'فندق عصري يقع على بعد خطوات من كرملين قازان',
      price: 15000,
      image: '/placeholder.svg?height=200&width=300&text=Courtyard%20Marriott%20Kazan%20Kremlin',
      amenities: ['مركز لياقة بدنية', 'مطعم عالمي', 'غرف اجتماعات'],
      rating: 4.6,
      reviews: 420
    },
    {
      id: 25,
      name: 'فندق رامادا كازان سيتي سنتر',
      description: 'فندق حديث في وسط المدينة، قريب من المعالم السياحية الرئيسية',
      price: 13000,
      image: '/placeholder.svg?height=200&width=300&text=Ramada%20Kazan%20City%20Center',
      amenities: ['مسبح داخلي', 'مطعم روسي', 'خدمة النقل المكوكي'],
      rating: 4.4,
      reviews: 590
    }
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
      reviews: 320
    },
    {
      id: 27,
      name: 'فيلا سفياجسك',
      description: 'فيلا تاريخية تقع بالقرب من جزيرة سفياجسك التاريخية',
      price: 17000,
      image: '/placeholder.svg?height=200&width=300&text=Sviyazhsk%20Villa',
      amenities: ['ساونا روسية', 'مكتبة خاصة', 'جولات تاريخية'],
      rating: 4.8,
      reviews: 180
    },
    {
      id: 28,
      name: 'كوخ راييفكا',
      description: 'كوخ ريفي دافئ محاط بالغابات في قرية راييفكا',
      price: 12000,
      image: '/placeholder.svg?height=200&width=300&text=Raifka%20Cottage',
      amenities: ['موقد حطب', 'بحيرة قريبة للسباحة', 'دراجات للإيجار'],
      rating: 4.7,
      reviews: 240
    }
  ]
}

