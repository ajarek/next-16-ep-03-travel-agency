import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Flights = () => {
  return (
    <div className='min-h-screen w-full text-center text-3xl font-semibold pt-28 px-8 space-y-6'>
      <h1>Flights</h1>
      <p className='text-xl'>Search for flights to your desired destination</p>

      <div className='relative flex justify-center items-center'>
        <Image src='/airport.png' alt='flight' width={896} height={512} className="rounded-2xl" />

        <Button
          asChild
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold rounded-xl '
        >
          <Link
            href='https://cse.google.com/cse?cx=d68788a43142949aa'
            target='_blank'
          >
            Search Flights
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Flights
