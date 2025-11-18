import destinations from '@/data/destinations.json'
import MotionCard from '@/components/motion-card'


 const Destinations=async ()=> {
'use cache'

   return (
    <section className='w-full  pt-28 px-8 bg-transparent '>
      <div className='@container mx-auto max-w-7xl px-6'>
        <div className='text-center'>
          <h2 className='text-left text-balance text-4xl font-semibold lg:text-5x mb-8'>
           Choose a trip destination
          </h2>
        </div>
       

        <MotionCard destinations={ destinations.trips} />
        </div>
        
        </section>
  )
}
export default Destinations