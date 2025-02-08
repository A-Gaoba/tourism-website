import { CityAccommodations } from "../types";

export const sochiAccommodations: CityAccommodations = {
  hotels: [
    {
      id: 15,
      name: "فندق راديسون روزا خوتور",
      description: "منتجع فاخر في قلب منطجع روزا خوتور للتزلج",
      price: 20000,
      image:
        "/placeholder.svg?height=200&width=300&text=Radisson%20Rosa%20Khutor",
      amenities: ["وصول مباشر لمنحدرات التزلج", "سبا", "مسبح داخلي"],
      rating: 4.6,
      reviews: 720,
      type: "hotel",
    },
    {
      id: 16,
      name: "فندق سوتشي مريديان",
      description: "فندق حديث على شاطئ البحر الأسود مع إطلالات رائعة",
      price: 17000,
      image:
        "/placeholder.svg?height=200&width=300&text=Sochi%20Marriott%20Krasnaya%20Polyana",
      amenities: ["شاطئ خاص", "مركز للغوص", "ملعب تنس"],
      rating: 4.5,
      reviews: 650,
      type: "hotel",
    },
  ],
  cottages: [
    {
      id: 19,
      name: "شاليه جبال القوقاز",
      description: "شاليه فاخر في جبال القوقاز مع مناظر خلابة",
      price: 18000,
      image:
        "/placeholder.svg?height=200&width=300&text=Caucasus%20Mountain%20Chalet",
      amenities: ["جاكوزي خارجي", "غرفة سينما", "تراس بانورامي"],
      rating: 4.9,
      reviews: 180,
      type: "cottage",
    },
  ],
};
