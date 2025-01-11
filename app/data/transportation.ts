import { TransportationService } from './types'

export const transportationServices: TransportationService[] = [
  { 
    id: 1, 
    name: 'خدمة VIP من وإلى المطار', 
    description: 'استقبال وتوصيل فاخر من وإلى المطار بسيارة مرسيدس الفئة S', 
    price: 5000, 
    image: '/placeholder.svg?height=200&width=300&text=VIP%20Airport%20Transfer',
    vehicle: 'مرسيدس الفئة S',
    maxPassengers: 3,
    includes: ['سائق محترف', 'مشروبات مجانية', 'واي فاي في السيارة'],
    cities: ['موسكو', 'سانت بطرسبرغ', 'سوتشي', 'قازان']
  },
  { 
    id: 2, 
    name: 'سيارة فاخرة مع سائق', 
    description: 'سيارة BMW الفئة 7 مع سائق لمدة يوم كامل', 
    price: 8000, 
    image: '/placeholder.svg?height=200&width=300&text=Luxury%20Car%20with%20Driver',
    vehicle: 'BMW الفئة 7',
    maxPassengers: 4,
    includes: ['سائق يتحدث العربية', 'وقود وركن مجاني', 'خدمة على مدار 24 ساعة'],
    cities: ['موسكو', 'سانت بطرسبرغ', 'سوتشي', 'قازان']
  },
  { 
    id: 3, 
    name: 'ميني فان عائلي', 
    description: 'ميني فان مريح للعائلات الكبيرة أو المجموعات', 
    price: 6000, 
    image: '/placeholder.svg?height=200&width=300&text=Family%20Minivan',
    vehicle: 'مرسيدس فيتو',
    maxPassengers: 7,
    includes: ['مقاعد أطفال عند الطلب', 'مساحة كبيرة للأمتعة', 'نظام ترفيهي للركاب الخلفيين'],
    cities: ['موسكو', 'سانت بطرسبرغ', 'سوتشي', 'قازان']
  },
  {
    id: 4,
    name: 'جولة بالقارب في موسكو',
    description: 'استمتع بجولة خاصة على نهر موسكفا',
    price: 7000,
    image: '/placeholder.svg?height=200&width=300&text=Moscow%20River%20Cruise',
    vehicle: 'قارب خاص',
    maxPassengers: 10,
    includes: ['كابتن خاص', 'مشروبات وأطعمة خفيفة', 'جولة مع شرح للمعالم'],
    cities: ['موسكو']
  },
  {
    id: 5,
    name: 'رحلة بالقطار السريع إلى سانت بطرسبرغ',
    description: 'رحلة مريحة بالقطار السريع من موسكو إلى سانت بطرسبرغ',
    price: 4000,
    image: '/placeholder.svg?height=200&width=300&text=High%20Speed%20Train',
    vehicle: 'قطار سابسان السريع',
    maxPassengers: 1,
    includes: ['تذكرة درجة أولى', 'وجبة على متن القطار', 'خدمة نقل الأمتعة'],
    cities: ['موسكو', 'سانت بطرسبرغ']
  },
  {
    id: 6,
    name: 'تأجير دراجات في سوتشي',
    description: 'استكشف سوتشي على دراجة',
    price: 1000,
    image: '/placeholder.svg?height=200&width=300&text=Sochi%20Bike%20Rental',
    vehicle: 'دراجة',
    maxPassengers: 1,
    includes: ['دراجة لمدة يوم كامل', 'خوذة وقفل', 'خريطة لمسارات الدراجات'],
    cities: ['سوتشي']
  },
  {
    id: 7,
    name: 'جولة بالترام التاريخي في قازان',
    description: 'اكتشف معالم قازان في ترام تاريخي',
    price: 2000,
    image: '/placeholder.svg?height=200&width=300&text=Kazan%20Historic%20Tram',
    vehicle: 'ترام تاريخي',
    maxPassengers: 20,
    includes: ['تذكرة الترام', 'جولة مع مرشد', 'مشروب ترحيبي'],
    cities: ['قازان']
  }
]

