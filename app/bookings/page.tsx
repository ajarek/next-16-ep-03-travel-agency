"use client"
import { useTripStore } from "@/store/tripStore"
const Bookings = () => {
  const { items } = useTripStore()
  if (!items || items.length === 0) {
    return (
      <div className='min-h-screen w-full text-center text-3xl text-primary pt-28 px-8'>
        No bookings found !
      </div>
    )
  }

  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto flex flex-col  pt-28 px-8 '>
      <h1 className='text-left text-balance text-4xl font-semibold lg:text-5x mb-8'>
        Bookings {items[0].userName}
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <div key={item.id} className=' border-2 rounded-xl shadow-lg p-4'>
            <h2 className='text-xl font-semibold'><span className='text-base   font-normal text-gray-400'>city: </span>{item.cityName}</h2>
            <p ><span className='text-gray-400'>id: </span>{item.id}</p>
            <p ><span className='text-gray-400'>startDate: </span>{item.startDate}</p>
            <p ><span className='text-gray-400'>endDate: </span>{item.endDate}</p>
            <p ><span className='text-gray-400'>quantity: </span>{item.quantity}</p>
            <p ><span className='text-gray-400'>price: </span>{item.priceUSD.toFixed(2)} USD</p>
            <p ><span className='text-gray-400'>total cost: </span   >{((item.quantity ?? 1) * item.priceUSD).toFixed(2)} USD</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookings
