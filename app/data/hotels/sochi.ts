import { CityAccommodations } from '../types'

export const sochiAccommodations: CityAccommodations = {
  hotels: [
    { 
      id: 15, 
      name: 'فندق راديسون روزا خوتور', 
      description: 'منتجع فاخر في قلب منطجع روزا خوتور للتزلج', 
      price: 20000, 
      image: '/placeholder.svg?height=200&width=300&text=Radisson%20Rosa%20Khutor',
      amenities: ['وصول مباشر لمنحدرات التزلج', 'سبا', 'مسبح داخلي'],
      rating: 4.6,
      reviews: 720
    },
    { 
      id: 16, 
      name: 'فندق سوتشي مريديان', 
      description: 'فندق حديث على شاطئ البحر الأسود مع إطلالات رائعة', 
      price: 17000, 
      image: '/placeholder.svg?height=200&width=300&text=Sochi%20Marriott%20Krasnaya%20Polyana',
      amenities: ['شاطئ خاص', 'مركز للغوص', 'ملعب تنس'],
      rating: 4.5,
      reviews: 650
    },
    {
      id: 17,
      name: 'فندق سوتشي بارك',
      description: 'منتجع فاخر يقع وسط حديقة دندرولوجية جميلة',
      price: 22000,
      image: '/placeholder.svg?height=200&width=300&text=Sochi%20Park%20Hotel',
      amenities: ['حديقة مائية', 'ملاعب جولف', 'مطاعم متعددة'],
      rating: 4.7,
      reviews: 890
    },
    {
      id: 18,
      name: 'فندق بولياناسكايا',
      description: 'فندق جبلي أنيق يوفر إطلالات بانورامية على جبال القوقاز',
      price: 18000,
      image: '/placeholder.svg?height=200&width=300&text=Polyana%201389%20Hotel',
      amenities: ['تلفريك خاص', 'سبا ألبي', 'مطعم بانورامي'],
      rating: 4.8,
      reviews: 560
    }
  ],
  cottages: [
    { 
      id: 19, 
      name: 'شاليه جبال القوقاز', 
      description: 'شاليه فاخر في جبال القوقاز مع مناظر خلابة', 
      price: 18000, 
      image: '/placeholder.svg?height=200&width=300&text=Caucasus%20Mountain%20Chalet',
      amenities: ['جاكوزي خارجي', 'غرفة سينما', 'تراس بانورامي'],
      rating: 4.9,
      reviews: 180
    },
    {
      id: 20,
      name: 'فيلا البحر الأسود',
      description: 'فيلا فاخرة تطل على البحر الأسود مع شاطئ خاص',
      price: 25000,
      image: '/placeholder.svg?height=200&width=300&text=Black%20Sea%20Villa',
      amenities: ['مسبح لانهائي', 'مرسى خاص', 'غرفة ساونا'],
      rating: 4.8,
      reviews: 120
    },
    {
      id: 21,
      name: 'كوخ أدلر الريفي',
      description: 'كوخ ريفي دافئ يقع بين الجبال والبحر في منطقة أدلر',
      price: 14000,
      image: '/placeholder.svg?height=200&width=300&text=Adler%20Country%20Cottage',
      amenities: ['حديقة عضوية', 'فرن للخبز', 'دراجات جبلية'],
      rating: 4.7,
      reviews: 230
    }
  ]
}

