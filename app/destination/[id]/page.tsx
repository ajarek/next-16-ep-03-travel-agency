import destinations from '@/data/destinations.json'
import Image from 'next/image'

const Destination = async({ params }: { params: Promise<{ id: string }> }) => {
  const {id} =await params 
  const destinationId=destinations.trips.find((destination)=>destination.id===parseInt(id))

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2  pt-28 px-8 bg-transparent '>
      <div className=''>
        <Image src={destinationId?.image||''} alt={destinationId?.cityName||''} width={700} height={700} className='rounded-2xl' />
      </div>
      <div className='text-xl flex flex-col items-start gap-4'>
        <h1 className='text-3xl font-semibold'>{destinationId?.cityName}</h1>
        <p><span className='text-gray-500 mr-2'>country:</span>{destinationId?.country}</p>
        <p><span className='text-gray-500 mr-2'>highlights:</span>{destinationId?.highlights}</p>
        <p className=''><span className='text-gray-500 mr-2'>description:</span>{destinationId?.description}</p>
        <p><span className='text-gray-500 mr-2'>destination Id:</span> 000{id}</p>
        <p><span className='text-gray-500 mr-2'>duration days:</span>{destinationId?.durationDays}</p>
        <p><span className='text-gray-500 mr-2'>price:</span>${destinationId?.priceUSD.toFixed(2)}</p>  
        <p><span className='text-gray-500 mr-2'>start date:</span>{destinationId?.startDate}</p>
        <p><span className='text-gray-500 mr-2'>end date:</span>{destinationId?.endDate}</p>
        <p><span className='text-gray-500 mr-2'>transport type</span>{destinationId?.transportType}</p>
        <p><span className='text-gray-500 mr-2'>rating:</span>{destinationId?.rating}</p>
      </div>

    </div>
  )
}

export default Destination