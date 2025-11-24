'use client'
import React, { useState } from 'react'
import { useTripStore } from '@/store/tripStore'
import { useRouter } from 'next/navigation'

import Toast from "./ui/toast"
import { Button } from './ui/button'

const ButtonAddTrip = ({cityName, country, image, description, durationDays, priceUSD, startDate, endDate, transportType, rating, highlights, userName, quantity, payment, id
  
}: {
  id: number
  cityName: string
  country: string
  image: string
  description: string
  durationDays: number
  priceUSD: number
  startDate: string
  endDate: string
  transportType: string
  rating: number
  highlights: string[]
  userName: string
  quantity?: number
  payment?: boolean
}) => {

  const router = useRouter()
  const { addTripToCart, items } = useTripStore()
   const [toast, setToast] = useState<{ message: string; variant?: "success" | "error" } | null>(null)
   function showToast(message: string, variant: "success" | "error" = "success") {
    setToast({ message, variant })
    window.setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className='w-full flex justify-end'>
    <Button
      onClick={() => {
         if (items.some((i) => i.id === id)) {
          showToast("This trip is already in your booking", "error")
          return
        }
        addTripToCart({
          id:id,
          cityName,
          country,
          image,
          description,
          durationDays,
          priceUSD,
          startDate,
          endDate,
          transportType,
          rating,
          highlights,
          userName,
          quantity,
          payment
        })
          showToast("Add a trip successfully", "success")
        router.push(`/payments?id=${id}`)
      }}
      aria-label='Add to cart'
      size={'lg'}
      className={'text-xl rounded-xl'}>
      I add a trip and pay
     
    </Button>
     {toast && (
                <div className="fixed right-6 bottom-6 z-50 cursor-pointer">
                  <Toast
                    key={toast.message}
                    message={toast.message}
                    variant={toast.variant}
                    onClose={() => setToast(null)}
                  />
                </div>
              )}
    </div>
  )
}

export default ButtonAddTrip