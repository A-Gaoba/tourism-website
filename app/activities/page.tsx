"use client"

import { useState } from 'react'
import ActivityCard from '../components/ActivityCard'
import { moscowActivities } from '../data/activities/moscow'
import { saintPetersburgActivities } from '../data/activities/saint-petersburg'
import { sochiActivities } from '../data/activities/sochi'
import { kazanActivities } from '../data/activities/kazan'

const allActivities = [
  ...moscowActivities,
  ...saintPetersburgActivities,
  ...sochiActivities,
  ...kazanActivities
]

export default function ActivitiesPage() {
  const [cityFilter, setCityFilter] = useState<string>('all')

  const filteredActivities = cityFilter === 'all'
    ? allActivities
    : allActivities.filter(activity => activity.city === cityFilter)

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">الأنشطة</h1>
      <div className="mb-4">
        <label htmlFor="cityFilter" className="block mb-2">تصفية حسب المدينة:</label>
        <select
          id="cityFilter"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="w-64 p-2 rounded-md neumorphic-shadow focus:neumorphic-inset transition-all duration-300 bg-background" >
          <option value="all">كل المدن</option>
          <option value="موسكو">موسكو</option>
          <option value="سانت بطرسبرغ">سانت بطرسبرغ</option>
          <option value="سوتشي">سوتشي</option>
          <option value="قازان">قازان</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredActivities.map(activity => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  )
}

