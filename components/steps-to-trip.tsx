import { HandCoins, Heart, Plane, SquareCheckBig } from "lucide-react"
import Image from "next/image"
import React from "react"
import * as motion from "motion/react-client"

const StepsToTrip = () => {
  return (
    <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 md:py-16 px-8 bg-transparent place-items-center '>
      <div className='space-y-8'>
        <h1 className='text-4xl font-bold'>
          Book Your Next Trip In 3 Easy Steps Choose Destination
        </h1>
        <ul className='space-y-8'>
          <li>
            <p className='w-8 h-8 flex items-center justify-center dark:bg-secondary bg-primary text-black rounded-xl'>
              <SquareCheckBig />
            </p>
            <h2 className='text-2xl font-semibold'>Choose DEstination</h2>
            <p>
              Select your desired travel destination from our wide range of
              options.
            </p>
          </li>
          <li>
            <p className='w-8 h-8 flex items-center justify-center dark:bg-secondary bg-primary text-black rounded-xl'>
              <HandCoins />
            </p>
            <h2 className='text-2xl font-semibold'>Make Payment</h2>
            <p>
              Securely pay for your trip using our convenient payment methods.
            </p>
          </li>
          <li>
            <p className='w-8 h-8 flex items-center justify-center dark:bg-secondary bg-primary text-black rounded-xl'>
              <Plane />
            </p>
            <h2 className='text-2xl font-semibold'>
              Reach Airport on Selected Date
            </h2>
            <p>
              Arrive at the airport on the designated date for a smooth
              departure.
            </p>
          </li>
        </ul>
      </div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 1,
          repeatDelay: 1,
        }}
        className='w-full max-w-[500px] flex flex-col items-center border border-primary shadow-lg rounded-2xl gap-4 p-4 '
      >
        <Image
          src='/trip-japan.jpg'
          alt='Trip to Japan'
          width={500}
          height={281}
          className='rounded-2xl'
        />
        <div className='w-full flex flex-col items-start gap-4'>
          <h2 className='text-xl font-semibold'> Trip to Greece </h2>
          <p>01-07 April ,</p>
          <div className='w-full flex items-center justify-between'>
            <p>24 people going</p>
            <Heart />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StepsToTrip
