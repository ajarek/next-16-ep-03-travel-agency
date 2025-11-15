import * as motion from 'motion/react-client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from 'next/image'
type Destination = {
  id: number
  cityName: string
  country: string
  image: string
  description: string
  durationDays: number
  priceUSD: number
}

const MotionCard = ({destinations }: {destinations:Destination[]}) => {

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        scale: { type: 'spring', visualDuration: 2, bounce: 0.5 },
      }}
    >
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {destinations.map((destination) => {
        const { id, cityName, country, image, description, durationDays, priceUSD } = destination
        return (
          
          <Card key={id} className='group shadow-zinc-950/5 bg-primary text-primary-foreground'>
            <CardHeader className='pb-3'>
              <Image
                src={image}
                alt={cityName}
                width={400}
                height={400}
                className='rounded-md mb-4 group-hover:opacity-80 transition-opacity duration-300'
              />
              
            </CardHeader>

            <CardContent>
              <h3 className='text-2xl font-bold mb-2'>
                {cityName}, {country}
              </h3>
              <p className='text-lg'>
                {description}
              </p>
              <p className='mt-2 text-xl font-semibold'>
                Price: {priceUSD} USD
              </p>
              <p className='text-md text-muted-foreground'>
                Duration: {durationDays} days
              </p>
            </CardContent>
          </Card>
        )
      })}
      </div>
    </motion.div>
  )
}
export default MotionCard