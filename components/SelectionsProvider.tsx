"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Booking {
  startDate: string
  endDate: string
  guests: number
}

interface Room {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface Accommodation {
  id: number
  name: string
  type: 'hotel' | 'cottage'
  room: Room
  booking: Booking
}

interface Activity {
  id: number
  name: string
  description: string
  price: number
  image: string
  city: string
  tickets: number
  date: string
}

interface Selection {
  hotels: Accommodation[]
  cottages: Accommodation[]
  activities: Activity[]
  transportation: any[] // Keep this as is for now
}

interface SelectionsContextType {
  selections: Selection
  addSelection: (category: keyof Selection, item: any) => void
  removeSelection: (category: keyof Selection, itemId: number) => void
  clearSelections: () => void
}

const SelectionsContext = createContext<SelectionsContextType | undefined>(undefined)

export const useSelections = () => {
  const context = useContext(SelectionsContext)
  if (!context) {
    throw new Error('useSelections must be used within a SelectionsProvider')
  }
  return context
}

export const SelectionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selections, setSelections] = useState<Selection>({
    hotels: [],
    cottages: [],
    activities: [],
    transportation: [],
  })

  const addSelection = (category: keyof Selection, item: any) => {
    setSelections(prev => {
      const existingIndex = prev[category].findIndex(i => i.id === item.id)
      if (existingIndex !== -1) {
        const updatedCategory = [...prev[category]]
        updatedCategory[existingIndex] = item
        return { ...prev, [category]: updatedCategory }
      } else {
        return { ...prev, [category]: [...prev[category], item] }
      }
    })
  }

  const removeSelection = (category: keyof Selection, itemId: number) => {
    setSelections(prev => ({
      ...prev,
      [category]: prev[category].filter((item: any) => item.id !== itemId),
    }))
  }

  const clearSelections = () => {
    setSelections({
      hotels: [],
      cottages: [],
      activities: [],
      transportation: [],
    })
  }

  return (
    <SelectionsContext.Provider value={{ selections, addSelection, removeSelection, clearSelections }}>
      {children}
    </SelectionsContext.Provider>
  )
}

