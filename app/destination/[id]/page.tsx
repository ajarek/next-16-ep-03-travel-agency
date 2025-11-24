"use client"
import ButtonAddTrip from "@/components/button-add-trip"
import { Minus, Plus } from "lucide-react"
import destinations from "@/data/destinations.json"
import Image from "next/image"
import { use, useState } from "react"
import { useUser } from "@clerk/nextjs"

const Destination = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const destinationId = destinations.trips.find(
    (destination) => destination.id === parseInt(id)
  )
  const { user } = useUser()
  const [count, setCount] = useState(1)

  if (!destinationId) {
    return (
      <div className='min-h-screen w-full text-center text-3xl text-primary pt-28 px-8'>
        Destination not found !
      </div>
    )
  }
  return (
    <div className='min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-28 px-8 bg-transparent '>
      <div className=''>
        <Image
          src={destinationId?.image || ""}
          alt={destinationId?.cityName || ""}
          width={700}
          height={700}
          className='rounded-2xl'
        />
      </div>
      <div className='text-xl flex flex-col items-start gap-4'>
        <h1 className='text-3xl font-semibold'>{destinationId?.cityName}</h1>
        <p>
          <span className='text-gray-500 mr-2'>country:</span>
          {destinationId?.country}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>highlights:</span>
          {destinationId?.highlights.join(", ")}
        </p>
        <p className=''>
          <span className='text-gray-500 mr-2'>description:</span>
          {destinationId?.description}
        </p>
        <p className=''>
          <span className='text-gray-500 mr-2'>hotel:</span>
          ⭐⭐⭐⭐⭐
        </p>
        <p>
          <span className='text-gray-500 mr-2'>destination Id:</span> 000{id}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>duration days:</span>
          {destinationId?.durationDays}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>price:</span>$
          {destinationId?.priceUSD.toFixed(2)}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>start date:</span>
          {destinationId?.startDate}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>end date:</span>
          {destinationId?.endDate}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>transport type</span>
          {destinationId?.transportType}
        </p>
        <p>
          <span className='text-gray-500 mr-2'>rating:</span>
          {destinationId?.rating}
        </p>
        <div className='flex items-center gap-4'>
          <span className='text-gray-500 mr-2'>number of people</span>
          <div className='flex items-center gap-1 bg-gray-200 text-black py-1 px-4 rounded-full'>
            <button
              onClick={() => setCount(Math.max(count - 1, 1))}
              aria-label='decrement'
            >
              <Minus />
            </button>
            <div className='flex items-center justify-center  w-[30px] h-[30px] '>
              {count}
            </div>
            <button onClick={() => setCount(count + 1)} aria-label='increment'>
              <Plus />
            </button>
          </div>
        </div>
        <ButtonAddTrip
          id={destinationId?.id || 0}
          cityName={destinationId?.cityName || ""}
          country={destinationId?.country || ""}
          image={destinationId?.image || ""}
          description={destinationId?.description || ""}
          durationDays={destinationId?.durationDays || 0}
          priceUSD={destinationId?.priceUSD || 0}
          startDate={destinationId?.startDate || ""}
          endDate={destinationId?.endDate || ""}
          transportType={destinationId?.transportType || ""}
          rating={destinationId?.rating || 0}
          highlights={destinationId?.highlights || []}
          quantity={count}
          userName={user?.fullName || ""}
          payment={false}
        />
      </div>
    </div>
  )
}

export default Destination
