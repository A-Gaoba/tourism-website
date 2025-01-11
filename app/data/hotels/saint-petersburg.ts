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
      reviews: 1100
    },
    { 
      id: 9, 
      name: 'فندق كمبينسكي موكا', 
      description: 'فندق عصري يقع على شارع نيفسكي الشهير', 
      price: 19000, 
      image: '/placeholder.svg?height=200&width=300&text=Kempinski%20Moika%2022',
      amenities: ['تراس على السطح', 'مركز للياقة البدنية', 'مطعم فرنسي'],
      rating: 4.7,
      reviews: 850
    },
    {
      id: 10,
      name: 'فندق بلموند جراند هوتيل يوروبا',
      description: 'فندق فاخر يجمع بين الأناقة الكلاسيكية والراحة العصرية',
      price: 24000,
      image: '/placeholder.svg?height=200&width=300&text=Belmond%20Grand%20Hotel%20Europe',
      amenities: ['مطعم حائز على جوائز', 'بار الكافيار', 'خدمة الليموزين'],
      rating: 4.8,
      reviews: 950
    },
    {
      id: 11,
      name: 'فندق سو سوفيتيل سانت بطرسبرغ',
      description: 'فندق عصري يقع بالقرب من متحف الإرميتاج وقصر الشتاء',
      price: 17000,
      image: '/placeholder.svg?height=200&width=300&text=SO%20Sofitel%20St%20Petersburg',
      amenities: ['سبا فاخر', 'مطعم آسيوي', 'بار على السطح'],
      rating: 4.6,
      reviews: 780
    }
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
      reviews: 290
    },
    {
      id: 13,
      name: 'فيلا بوشكين',
      description: 'فيلا أنيقة تقع في مدينة بوشكين التاريخية، بالقرب من قصر كاترين',
      price: 20000,
      image: '/placeholder.svg?height=200&width=300&text=Pushkin%20Villa',
      amenities: ['حديقة خاصة', 'غرفة بلياردو', 'مكتبة'],
      rating: 4.9,
      reviews: 150
    },
    {
      id: 14,
      name: 'كوخ ريبينسك',
      description: 'كوخ تقليدي يقع على ضفاف نهر فولغا، مثالي لعشاق الصيد والطبيعة',
      price: 13000,
      image: '/placeholder.svg?height=200&width=300&text=Rybinsk%20Cottage',
      amenities: ['معدات صيد', 'قارب صغير', 'شواية خارجية'],
      rating: 4.7,
      reviews: 200
    }
  ]
}

