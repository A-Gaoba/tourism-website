"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OfferNotificationProps {
  onClose: () => void
  onViewOffer: () => void
}

export default function OfferNotification({ onClose, onViewOffer }: OfferNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg z-50 neumorphic-shadow">
      <Button onClick={onClose} className="absolute top-2 right-2 text-primary-foreground">
        <X size={20} />
      </Button>
      <h3 className="text-lg font-bold mb-2">عرض خاص!</h3>
      <p className="mb-4">احصل على خصم 15% على باقات السفر المميزة لفترة محدودة!</p>
      <Button onClick={onViewOffer} variant="secondary" className="w-full">
        عرض الباقات
      </Button>
    </div>
  )
}

