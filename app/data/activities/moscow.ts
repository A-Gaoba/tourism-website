import { Activity } from '../types'

export const moscowActivities: Activity[] = [
  { 
    id: 1, 
    name: 'جولة في الساحة الحمراء والكرملين', 
    description: 'استكشف قلب موسكو التاريخي مع مرشد سياحي خبير', 
    price: 2500, 
    image: '/placeholder.svg?height=200&width=300&text=Red%20Square%20Tour', 
    city: 'موسكو',
    duration: '4 ساعات',
    includes: ['تذاكر دخول الكرملين', 'مرشد سياحي باللغة العربية', 'نقل من وإلى الفندق'],
    rating: 4.8,
    reviews: 450
  },
  { 
    id: 2, 
    name: 'جولة طعام في موسكو', 
    description: 'تذوق أشهى الأطباق الروسية في أفضل مطاعم موسكو', 
    price: 3000, 
    image: '/placeholder.svg?height=200&width=300&text=Moscow%20Food%20Tour', 
    city: 'موسكو',
    duration: '4 ساعات',
    includes: ['زيارة 5 مطاعم', 'تذوق الأطباق التقليدية', 'شرح تاريخ المطبخ الروسي'],
    rating: 4.8,
    reviews: 180
  },
  {
    id: 3,
    name: 'رحلة إلى سيرجييف بوساد',
    description: 'زيارة إلى مدينة سيرجييف بوساد التاريخية ودير الثالوث المقدس',
    price: 3500,
    image: '/placeholder.svg?height=200&width=300&text=Sergiev%20Posad%20Trip',
    city: 'موسكو',
    duration: '8 ساعات',
    includes: ['النقل من وإلى موسكو', 'تذاكر دخول الدير', 'وجبة غداء تقليدية'],
    rating: 4.7,
    reviews: 320
  },
  {
    id: 4,
    name: 'جولة في مترو موسكو',
    description: 'استكشف أجمل محطات مترو موسكو المزينة بالفن والعمارة الرائعة',
    price: 1500,
    image: '/placeholder.svg?height=200&width=300&text=Moscow%20Metro%20Tour',
    city: 'موسكو',
    duration: '3 ساعات',
    includes: ['تذاكر المترو', 'مرشد سياحي', 'كتيب عن تاريخ مترو موسكو'],
    rating: 4.6,
    reviews: 280
  },
  {
    id: 5,
    name: 'رحلة بالقارب في نهر موسكفا',
    description: 'استمتع بمناظر موسكو الخلابة من على متن قارب فاخر',
    price: 2000,
    image: '/placeholder.svg?height=200&width=300&text=Moscow%20River%20Cruise',
    city: 'موسكو',
    duration: '2.5 ساعات',
    includes: ['رحلة بحرية', 'عشاء فاخر', 'موسيقى حية'],
    rating: 4.5,
    reviews: 400
  }
]

