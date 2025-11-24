import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import * as motion from "motion/react-client"

const Flights = () => {
  return (
    <div className='min-h-screen w-full text-center text-3xl font-semibold pt-28 px-8 space-y-6'>
      <div className='relative flex justify-center items-center'>
        <Image
          src='/airport.png'
          alt='flight'
          width={896}
          height={512}
          className='rounded-2xl'
        />
        <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 3,
                      scale: { type: "spring", visualDuration: 1, bounce: 0.25 },
                    }}
                   className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4'>
          <h1>Flights</h1>
          <p className='text-xl'>
            Search for flights to your desired destination
          </p>

          <Button asChild className='text-3xl font-semibold rounded-xl '>
            <Link
              href='https://cse.google.com/cse?cx=d68788a43142949aa'
              target='_blank'
            >
              Search Flights
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default Flights
