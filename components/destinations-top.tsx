import destinations from "@/data/destinations.json"
import MotionCard from "./motion-card"

const DestinationsTop = async () => {
  const destinationsFilter = destinations.trips.filter(
    (destination) => destination.id <= 3
  )
  return (
    <section
      id='best-destinations'
      className='w-full  py-8 md:py-16 px-8 bg-transparent '
    >
      <div className='@container mx-auto max-w-7xl px-6'>
        <div className='text-center'>
          <h2 className='text-balance text-4xl font-semibold lg:text-5x mb-8'>
            Top Destinations
          </h2>
        </div>

        <MotionCard destinations={destinationsFilter} />
      </div>
    </section>
  )
}

export default DestinationsTop
