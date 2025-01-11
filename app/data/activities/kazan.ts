import { Activity } from '../types'

export const kazanActivities: Activity[] = [
  { 
    id: 16, 
    name: 'زيارة قلعة قازان كريمل', 
    description: 'اكتشف التاريخ الغني لقازان من خلال زيارة قلعتها الشهيرة', 
    price: 1500, 
    image: '/placeholder.svg?height=200&width=300&text=Kazan%20Kremlin', 
    city: 'قازان',
    duration: '3 ساعات',
    includes: ['تذكرة دخول', 'جولة مع مرشد باللغة العربية', 'وقت حر للاستكشاف'],
    rating: 4.7,
    reviews: 280
  },
  { 
    id: 17, 
    name: 'رحلة إلى جزيرة سفياجسك', 
    description: 'اكتشف هذه الجزيرة التاريخية الفريدة بالقرب من قازان', 
    price: 2800, 
    image: '/placeholder.svg?height=200&width=300&text=Sviyazhsk%20Island', 
    city: 'قازان',
    duration: 'يوم كامل',
    includes: ['النقل من وإلى قازان', 'جولة مع مرشد', 'وجبة غداء تقليدية'],
    rating: 4.6,
    reviews: 210
  },
  {
    id: 18,
    name: 'جولة الطعام التتري',
    description: 'تذوق ألذ الأطباق التترية التقليدية في أفضل مطاعم قازان',
    price: 2000,
    image: '/placeholder.svg?height=200&width=300&text=Tatar%20Food%20Tour',
    city: 'قازان',
    duration: '4 ساعات',
    includes: ['زيارة 4 مطاعم', 'تذوق الأطباق التقليدية', 'شرح عن الثقافة الغذائية التترية'],
    rating: 4.8,
    reviews: 150
  },
  {
    id: 19,
    name: 'زيارة مسجد قول شريف',
    description: 'اكتشف أحد أكبر المساجد في أوروبا وتعرف على تاريخه وعمارته',
    price: 1000,
    image: '/placeholder.svg?height=200&width=300&text=Qolşärif%20Mosque',
    city: 'قازان',
    duration: '2 ساعات',
    includes: ['تذكرة دخول', 'جولة مع مرشد', 'كتيب عن تاريخ المسجد'],
    rating: 4.9,
    reviews: 300
  },
  {
    id: 20,
    name: 'رحلة نهرية على نهر الفولغا',
    description: 'استمتع برحلة هادئة على نهر الفولغا واستكشف ضفافه الجميلة',
    price: 1800,
    image: '/placeholder.svg?height=200&width=300&text=Volga%20River%20Cruise',
    city: 'قازان',
    duration: '3 ساعات',
    includes: ['رحلة نهرية', 'وجبة خفيفة', 'شرح عن تاريخ النهر وأهميته'],
    rating: 4.5,
    reviews: 180
  }
]

