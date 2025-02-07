import { CityAccommodations } from '../types'

export const moscowAccommodations: CityAccommodations = {
  hotels: [
    { 
      id: 1, 
      name: 'فندق ريتز كارلتون موسكو', 
      description: 'فندق فاخر 5 نجوم يقع في قلب موسكو، على بعد خطوات من الساحة الحمراء والكرملين', 
      price: 25000, 
      image: '/placeholder.svg?height=200&width=300&text=Ritz-Carlton%20Moscow',
      amenities: ['مطعم ميشلان', 'سبا فاخر', 'مسبح داخلي', 'إطلالات بانورامية'],
      rating: 4.8,
      reviews: 1250,
      type: 'hotel'
    },
    { 
      id: 2, 
      name: 'فندق ماريوت رويال أورورا', 
      description: 'فندق أنيق في وسط المدينة يوفر وصولاً سهلاً إلى المعالم السياحية الرئيسية', 
      price: 18000, 
      image: '/placeholder.svg?height=200&width=300&text=Marriott%20Royal%20Aurora',
      amenities: ['مركز أعمال', 'صالة رياضية', 'مطاعم متعددة'],
      rating: 4.6,
      reviews: 980,
      type: 'hotel'

    },
    {
      id: 3,
      name: 'فندق لوتي موسكو',
      description: 'فندق عصري يقدم إطلالات خلابة على نهر موسكفا والكرملين',
      price: 20000,
      image: '/placeholder.svg?height=200&width=300&text=Lotte%20Hotel%20Moscow',
      amenities: ['سبا فاخر', 'مطاعم حائزة على جوائز', 'خدمة الكونسيرج'],
      rating: 4.7,
      reviews: 1100,
      type: 'hotel'
    },
  
  ],
  cottages: [
    { 
      id: 5, 
      name: 'شاليه موسكو الريفي', 
      description: 'شاليه خشبي دافئ يقع على أطراف موسكو، محاط بالغابات الجميلة', 
      price: 12000, 
      image: '/placeholder.svg?height=200&width=300&text=Moscow%20Country%20Cottage',
      amenities: ['موقد خشب', 'جاكوزي خارجي', 'شواية'],
      rating: 4.7,
      reviews: 320,
      type: 'cottage'    },
    {
      id: 6,
      name: 'فيلا سيريبرياني بور',
      description: 'فيلا فاخرة تقع على ضفاف بحيرة هادئة، على بعد ساعة من وسط موسكو',
      price: 18000,
      image: '/placeholder.svg?height=200&width=300&text=Serebryany%20Bor%20Villa',
      amenities: ['ساونا خاصة', 'قارب صغير', 'حديقة واسعة'],
      rating: 4.9,
      reviews: 180,
       type: 'cottage'
    },
  ]
}

