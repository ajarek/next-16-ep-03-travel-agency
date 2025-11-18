import * as motion from "motion/react-client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

type Destination = {
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
}

const MotionCard = ({ destinations = [] }: { destinations: Destination[] }) => {
  return (
    <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 '>
      {destinations.map((destination) => {
        const { id, cityName, image, description, priceUSD, durationDays } =
          destination
        return (
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              scale: { type: "spring", visualDuration: 1, bounce: 0.25 },
            }}
            key={id}
          >
            <Card className='group shadow-zinc-950/5 bg-primary text-primary-foreground'>
              <CardHeader className='pb-3'>
                <Image src={image} alt={cityName} width={500} height={500} />

                <h3 className='mt-6 text-2xl font-semibold'>{cityName}</h3>
              </CardHeader>

              <CardContent>
                <p className='text-lg'>{description.slice(0, 80) + '...'}</p>
                <div className='flex items-center justify-between'>
                  <p className='mt-2 text-xl font-semibold'>{priceUSD} USD </p>
                  <p className='text-md text-muted-foreground'>
                    Duration: {durationDays} days
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size='lg' className='w-full bg-secondary text-secondary-foreground text-2xl hover:bg-secondary/50 dark:hover:border-t-border  group mx-auto rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950'>
                  <Link href={`/destination/${id}`}>I choose this trip</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
export default MotionCard
