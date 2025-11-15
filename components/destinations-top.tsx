import destinations from '@/data/destinations.json'
import MotionCard from './card-destination'

const DestinationsTop = () => {
  return (
    <section className='w-full  py-8 md:py-16 bg-transparent'>
      <div className='@container mx-auto max-w-5xl px-6'>
        <div className='text-center'>
          <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>
            Top Destinations
          </h2>
        </div>
       

        <MotionCard destinations={Array.isArray(destinations) ? destinations : (destinations as any).trips} />
        </div>
        
        </section>
  )
}

export default DestinationsTop