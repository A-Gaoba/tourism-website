"use client"

import { useState } from 'react'
import { cities } from '../data/cities'
import { moscowAccommodations } from '../data/hotels/moscow'
import { saintPetersburgAccommodations } from '../data/hotels/saint-petersburg'
import { sochiAccommodations } from '../data/hotels/sochi'
import { kazanAccommodations } from '../data/hotels/kazan'
import AccommodationCard from '../components/AccommodationCard'
import CityFilter from '../components/CityFilter'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const allAccommodations = {
  moscow: moscowAccommodations,
  'saint-petersburg': saintPetersburgAccommodations,
  sochi: sochiAccommodations,
  kazan: kazanAccommodations,
}

export default function HotelsPage() {
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [accommodationType, setAccommodationType] = useState<'hotels' | 'cottages'>('hotels')

  const filteredAccommodations = selectedCity === 'all'
    ? Object.values(allAccommodations).flatMap(cityAccom => cityAccom[accommodationType] || [])
    : (allAccommodations[selectedCity as keyof typeof allAccommodations]?.[accommodationType] || [])

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">الفنادق والشاليهات</h1>
      <CityFilter cities={cities} selectedCity={selectedCity} onSelectCity={setSelectedCity} />
      <Tabs value={accommodationType} onValueChange={(value) => setAccommodationType(value as 'hotels' | 'cottages')} className="mt-4">
        <TabsList className="w-42 neumorphic-shadow dark:bg-white">
          <TabsTrigger value="hotels" className="w-1/2 neumorphic-shadow data-[state=active]:neumorphic-inset transition-all duration-300">الفنادق</TabsTrigger>
          <TabsTrigger value="cottages" className="w-1/2 neumorphic-shadow data-[state=active]:neumorphic-inset transition-all duration-300">الشاليهات</TabsTrigger>
        </TabsList>
        <TabsContent value="hotels">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredAccommodations.map(hotel => (
              <AccommodationCard key={hotel.id} {...hotel} type="hotel" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cottages">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredAccommodations.map(cottage => (
              <AccommodationCard key={cottage.id} {...cottage} type="cottage" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

