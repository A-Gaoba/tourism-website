import { Room } from './types'

export const rooms: { [key: number]: Room[] } = {
  // Hotel rooms (existing data)
  1: [
    { 
      id: 101, 
      name: 'جناح موسكو', 
      description: 'جناح فاخر مع إطلالة بانورامية على وسط مدينة موسكو والكرملين', 
      price: 35000, 
      image: '/placeholder.svg?height=200&width=300&text=Moscow%20Suite',
      maxOccupancy: 3,
      size: 80,
      bedType: 'سرير ملكي',
      amenities: ['حوض استحمام فاخر', 'تلفزيون بشاشة مسطحة', 'ميني بار', 'خدمة الغرف على مدار 24 ساعة']
    },
    { 
      id: 102, 
      name: 'غرفة كلاسيكية', 
      description: 'غرفة أنيقة ومريحة مع ديكور كلاسيكي', 
      price: 25000, 
      image: '/placeholder.svg?height=200&width=300&text=Classic%20Room',
      maxOccupancy: 2,
      size: 40,
      bedType: 'سرير كبير',
      amenities: ['حمام رخامي', 'مكتب عمل', 'خزنة آمنة', 'مجفف شعر']
    },
  ],
  // ... other hotel rooms ...

  // Cottage rooms (new data)
  3: [
    {
      id: 301,
      name: 'غرفة نوم رئيسية',
      description: 'غرفة نوم فسيحة مع إطلالة على الغابة',
      price: 0, // Price is included in the cottage price
      image: '/placeholder.svg?height=200&width=300&text=Master%20Bedroom',
      maxOccupancy: 2,
      size: 30,
      bedType: 'سرير ملكي',
      amenities: ['حمام خاص', 'شرفة خاصة', 'تلفزيون بشاشة مسطحة']
    },
    {
      id: 302,
      name: 'غرفة نوم ثانوية',
      description: 'غرفة نوم مريحة مثالية للأطفال أو الضيوف',
      price: 0, // Price is included in the cottage price
      image: '/placeholder.svg?height=200&width=300&text=Secondary%20Bedroom',
      maxOccupancy: 2,
      size: 20,
      bedType: 'سريران منفصلان',
      amenities: ['خزانة ملابس', 'مكتب عمل', 'إطلالة على الحديقة']
    }
  ],
  6: [
    {
      id: 601,
      name: 'غرفة نوم رئيسية مع إطلالة على البحيرة',
      description: 'غرفة نوم فاخرة مع إطلالة خلابة على بحيرة لادوجا',
      price: 0, // Price is included in the cottage price
      image: '/placeholder.svg?height=200&width=300&text=Lake%20View%20Master%20Bedroom',
      maxOccupancy: 2,
      size: 35,
      bedType: 'سرير ملكي',
      amenities: ['حمام خاص مع جاكوزي', 'شرفة خاصة', 'تلفزيون بشاشة مسطحة', 'ميني بار']
    },
    {
      id: 602,
      name: 'غرفة نوم مزدوجة',
      description: 'غرفة نوم مريحة مع سريرين منفصلين',
      price: 0, // Price is included in the cottage price
      image: '/placeholder.svg?height=200&width=300&text=Twin%20Bedroom',
      maxOccupancy: 2,
      size: 25,
      bedType: 'سريران منفصلان',
      amenities: ['خزانة ملابس', 'مكتب عمل', 'إطلالة على الغابة']
    }
  ],
  // ... add rooms for other cottages ...
}

