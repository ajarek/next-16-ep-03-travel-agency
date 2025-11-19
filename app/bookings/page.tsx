'use client'
import {useTripStore} from '@/store/tripStore'
const Bookings = () => {
  const {items} = useTripStore()
  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto flex flex-col  pt-28 px-8 '>
        <h1 className='text-left text-balance text-4xl font-semibold lg:text-5x mb-8'>Bookings {items.length}: {items[0].cityName} ,{items[1].cityName}, {items[2].cityName} ,</h1>
    </div>
  )
}

export default Bookings