"use client"

import { useState } from 'react'
import TransportationCard from '../components/TransportationCard'
import { transportationServices } from '../data/transportation'

export default function TransportationPage() {
  const [cityFilter, setCityFilter] = useState<string>('all')

  const filteredServices = cityFilter === 'all'
    ? transportationServices
    : transportationServices.filter(service => service.cities.includes(cityFilter))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">خدمات النقل</h1>
      <div className="mb-4">
        <label htmlFor="cityFilter" className="block mb-2">تصفية حسب المدينة:</label>
        <select
          id="cityFilter"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">كل المدن</option>
          <option value="موسكو">موسكو</option>
          <option value="سانت بطرسبرغ">سانت بطرسبرغ</option>
          <option value="سوتشي">سوتشي</option>
          <option value="قازان">قازان</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <TransportationCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}

