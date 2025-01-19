"use client"

import { useEffect, useState } from 'react'
import { useSelections } from '../components/SelectionsProvider'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PackagePage() {
  const { selections, removeSelection, clearSelections } = useSelections()
  const [name, setName] = useState('')

  useEffect(() => {
    const savedPackage = localStorage.getItem('tourPackage')
    if (savedPackage) {
      const { name: savedName } = JSON.parse(savedPackage)
      if (savedName) {
        setName(savedName)
      }
    }
  }, [])

  useEffect(() => {
    const savedPackage = localStorage.getItem('tourPackage')
    if (savedPackage) {
      const parsedPackage = JSON.parse(savedPackage)
      localStorage.setItem('tourPackage', JSON.stringify({ ...parsedPackage, name }))
    }
  }, [name])

  const calculateTotal = () => {
    let total = 0
    selections.hotels.concat(selections.cottages).forEach(accommodation => {
      if (accommodation?.booking?.startDate && accommodation?.booking?.endDate && accommodation?.room?.price) {
        const nights = (new Date(accommodation.booking.endDate).getTime() - new Date(accommodation.booking.startDate).getTime()) / (1000 * 3600 * 24)
        total += accommodation.room.price * nights
      }
    })
    selections.activities.forEach(activity => {
      if (activity?.price && activity?.tickets) {
        total += activity.price * activity.tickets
      }
    })
    selections.transportation.forEach(transport => {
      if (transport?.price) {
        total += transport.price
      }
    })
    return total
  }

  const sendToWhatsApp = () => {
    if (!name) {
      alert('الرجاء إدخال الاسم قبل إرسال الباقة')
      return
    }

    const message = `🌟 عرض باقة السفر الفاخرة لـ ${name} 🌟
✨ الإقامة الفاخرة:
${selections.hotels.concat(selections.cottages).map(accommodation => `
${accommodation.name} - ${accommodation.room.name}
الفترة: من ${accommodation.booking?.startDate} إلى ${accommodation.booking?.endDate}
عدد الضيوف: ${accommodation.booking?.adults} بالغين, ${accommodation.booking?.children.count} أطفال`).join('\n')}

🎉 الفعاليات الترفيهية:
${selections.activities.map(activity => `${activity.name} - ${activity.tickets} تذاكر`).join('\n')}

🚗 خدمات النقل والاتصال:
${selections.transportation.map(transport => transport.name).join('\n')}

💼 إجمالي التكلفة:
${calculateTotal()} روبل (ما يعادل ${(calculateTotal() / 25.4).toFixed(2)} ريال سعودي)

✨ احجز الآن واستمتع برحلتك المثالية!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank')
    
    // Clear local storage after sending
    localStorage.removeItem('tourPackage')
    clearSelections()
    setName('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">الباقة النهائية</h1>
      <div className="mb-4">
        <Label htmlFor="name">الاسم</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="أدخل اسمك"
          required
        />
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>الإقامة الفاخرة</CardTitle>
        </CardHeader>
        <CardContent>
          {selections.hotels.concat(selections.cottages).length === 0 ? (
            <p>لم يتم اختيار أي إقامة.</p>
          ) : (
            selections.hotels.concat(selections.cottages).map((accommodation: any, index: number) => (
              <div key={`${accommodation.type}-${accommodation.id}-${index}`} className="mb-4 p-4 border rounded">
                <h3 className="font-bold">{accommodation.name}</h3>
                <p>{accommodation.room?.name}</p>
                {accommodation.booking && (
                  <>
                    <p>من {accommodation.booking.startDate} إلى {accommodation.booking.endDate}</p>
                    <p>عدد الضيوف: {accommodation.booking.adults} بالغين, {accommodation.booking.children.count} أطفال</p>
                  </>
                )}
                <Button variant="destructive" onClick={() => removeSelection(accommodation.type === 'hotel' ? 'hotels' : 'cottages', accommodation.id)} className="mt-2">
                  إزالة
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>الفعاليات الترفيهية</CardTitle>
        </CardHeader>
        <CardContent>
          {selections.activities.length === 0 ? (
            <p>لم يتم اختيار أي أنشطة.</p>
          ) : (
            selections.activities.map((activity, index) => (
              <div key={`activity-${activity.id}-${index}`} className="mb-4 p-4 border rounded">
                <h3 className="font-bold">{activity.name}</h3>
                <p>{activity.description}</p>
                <p>التاريخ: {activity.date}</p>
                <p>عدد التذاكر: {activity.tickets}</p>
                <Button variant="destructive" onClick={() => removeSelection('activities', activity.id)} className="mt-2">
                  إزالة
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>خدمات النقل والاتصال</CardTitle>
        </CardHeader>
        <CardContent>
          {selections.transportation.length === 0 ? (
            <p>لم يتم اختيار أي خدمات نقل.</p>
          ) : (
            selections.transportation.map((transport, index) => (
              <div key={`transport-${transport.id}-${index}`} className="mb-4 p-4 border rounded">
                <h3 className="font-bold">{transport.name}</h3>
                <p>{transport.description}</p>
                <Button variant="destructive" onClick={() => removeSelection('transportation', transport.id)} className="mt-2">
                  إزالة
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">الإجمالي: {calculateTotal()} روبل (ما يعادل {(calculateTotal() / 25.4).toFixed(2)} ريال سعودي)</h2>
        <Button onClick={sendToWhatsApp} className="ml-4">إرسال عبر واتساب</Button>
        <Button variant="outline" onClick={clearSelections}>مسح الكل</Button>
      </div>
      <Toaster />
    </div>
  )
}

