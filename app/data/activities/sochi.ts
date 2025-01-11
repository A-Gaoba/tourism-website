import { Activity } from '../types'

export const sochiActivities: Activity[] = [
  { 
    id: 11, 
    name: 'يوم كامل في حديقة سوتشي للألعاب المائية', 
    description: 'استمتع بيوم مليء بالمرح والإثارة في أكبر حديقة مائية في روسيا', 
    price: 3500, 
    image: '/placeholder.svg?height=200&width=300&text=Sochi%20Water%20Park', 
    city: 'سوتشي',
    duration: 'يوم كامل',
    includes: ['تذكرة دخول ليوم كامل', 'وجبة غداء', 'خزانة خاصة'],
    rating: 4.5,
    reviews: 600
  },
  { 
    id: 12, 
    name: 'رحلة إلى جبل أهون', 
    description: 'استمتع بمناظر خلابة من أعلى قمة في سوتشي', 
    price: 4000, 
    image: '/placeholder.svg?height=200&width=300&text=Mount%20Akhun', 
    city: 'سوتشي',
    duration: '6 ساعات',
    includes: ['رحلة بالتلفريك', 'وجبة غداء تقليدية', 'جولة في الغابات المحيطة'],
    rating: 4.7,
    reviews: 320
  },
  {
    id: 13,
    name: 'زيارة منتجع روزا خوتور للتزلج',
    description: 'استكشف أحد أشهر منتجعات التزلج في روسيا',
    price: 5000,
    image: '/placeholder.svg?height=200&width=300&text=Rosa%20Khutor%20Ski%20Resort',
    city: 'سوتشي',
    duration: 'يوم كامل',
    includes: ['تذكرة التلفريك', 'درس تزلج للمبتدئين', 'معدات التزلج'],
    rating: 4.8,
    reviews: 450
  },
  {
    id: 14,
    name: 'جولة في حديقة سوتشي الوطنية',
    description: 'استكشف الطبيعة الخلابة في حديقة سوتشي الوطنية',
    price: 2500,
    image: '/placeholder.svg?height=200&width=300&text=Sochi%20National%20Park',
    city: 'سوتشي',
    duration: '5 ساعات',
    includes: ['جولة مع مرشد', 'نزهة في الغابة', 'زيارة الشلالات'],
    rating: 4.6,
    reviews: 280
  },
  {
    id: 15,
    name: 'رحلة بحرية على طول ساحل البحر الأسود',
    description: 'استمتع برحلة بحرية ممتعة على طول الساحل الجميل لسوتشي',
    price: 3000,
    image: '/placeholder.svg?height=200&width=300&text=Black%20Sea%20Coast%20Cruise',
    city: 'سوتشي',
    duration: '4 ساعات',
    includes: ['رحلة بحرية', 'وجبة خفيفة وشراب', 'فرصة للسباحة'],
    rating: 4.5,
    reviews: 350
  }
]

