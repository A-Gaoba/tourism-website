import { Activity } from '../types'

export const saintPetersburgActivities: Activity[] = [
  { 
    id: 6, 
    name: 'رحلة بالقارب في نهر نيفا', 
    description: 'استمتع بمناظر سانت بطرسبرغ الخلابة من على متن قارب فاخر', 
    price: 1800, 
    image: '/placeholder.svg?height=200&width=300&text=Neva%20River%20Cruise', 
    city: 'سانت بطرسبرغ',
    duration: '3 ساعات',
    includes: ['رحلة بحرية', 'وجبة خفيفة وشراب', 'دليل صوتي باللغة العربية'],
    rating: 4.6,
    reviews: 320
  },
  { 
    id: 7, 
    name: 'جولة في متحف الإرميتاج', 
    description: 'استكشف واحدًا من أكبر وأقدم المتاحف في العالم', 
    price: 2200, 
    image: '/placeholder.svg?height=200&width=300&text=Hermitage%20Museum', 
    city: 'سانت بطرسبرغ',
    duration: '4 ساعات',
    includes: ['تذكرة دخول بدون انتظار', 'جولة خاصة مع خبير فني', 'سماعات الترجمة الفورية'],
    rating: 4.9,
    reviews: 750
  },
  {
    id: 8,
    name: 'زيارة قصر بيتروف',
    description: 'اكتشف روعة القصر الصيفي لبطرس الأكبر وحدائقه الخلابة',
    price: 2500,
    image: '/placeholder.svg?height=200&width=300&text=Peterhof%20Palace',
    city: 'سانت بطرسبرغ',
    duration: '6 ساعات',
    includes: ['تذاكر الدخول', 'النقل من وإلى الفندق', 'مرشد سياحي'],
    rating: 4.8,
    reviews: 600
  },
  {
    id: 9,
    name: 'جولة في كاتدرائية القيامة',
    description: 'زيارة إلى كاتدرائية القيامة (كنيسة الدم المراق) الشهيرة',
    price: 1500,
    image: '/placeholder.svg?height=200&width=300&text=Church%20of%20the%20Savior%20on%20Blood',
    city: 'سانت بطرسبرغ',
    duration: '2 ساعات',
    includes: ['تذكرة دخول', 'جولة مع مرشد', 'كتيب عن تاريخ الكنيسة'],
    rating: 4.7,
    reviews: 450
  },
  {
    id: 10,
    name: 'حفل باليه في مسرح مارينسكي',
    description: 'استمتع بعرض باليه كلاسيكي في أحد أشهر مسارح روسيا',
    price: 3500,
    image: '/placeholder.svg?height=200&width=300&text=Mariinsky%20Theatre%20Ballet',
    city: 'سانت بطرسبرغ',
    duration: '3 ساعات',
    includes: ['تذكرة للمسرح', 'نقل من وإلى الفندق', 'كأس شمبانيا'],
    rating: 4.9,
    reviews: 300
  }
]

