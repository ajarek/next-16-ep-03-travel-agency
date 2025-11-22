"use client"
import { Button } from "@/components/ui/button"
import { useTripStore } from "@/store/tripStore"
import { SignInButton, useUser } from "@clerk/nextjs"



const Bookings = () => {
  const { items, removeTripFromCart } = useTripStore()
  const { user, isSignedIn } = useUser()
  
  

  if (!isSignedIn)
    return (
      <div className='min-h-screen w-full text-center text-3xl text-primary pt-28 px-8 space-y-4'>
        <h1>Sign in to view this page</h1>
        <SignInButton><Button className="rounded-xl font-medium text-sm sm:text-base  cursor-pointer">Sign In</Button></SignInButton>
      </div>
    )

  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto flex flex-col  pt-28 px-8 '>
      <h1 className='text-left text-balance text-4xl font-semibold lg:text-5x mb-8'>
        Bookings {items.length > 0 ? items[0].userName : ""}
      </h1>
      {!items || items.length === 0? 
    (
      <div className='min-h-screen w-full text-center text-3xl text-primary pt-28 px-8'>
        No bookings found !
      </div>)
      :(
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items
          .filter((item) => item.userName === user?.fullName)
          .filter((item) => item.payment === true)
          .map((item) => (
            <div key={item.id} className='relative border-2 rounded-xl shadow-lg p-4'>
              <h2 className='text-xl font-semibold'>
                <span className='text-base   font-normal text-gray-400'>
                  city:{" "}
                </span>
                {item.cityName}
              </h2>
              <p>
                <span className='text-gray-400'>id: </span>
                {item.id}
              </p>
              <p>
                <span className='text-gray-400'>startDate: </span>
                {item.startDate}
              </p>
              <p>
                <span className='text-gray-400'>endDate: </span>
                {item.endDate}
              </p>
              <p>
                <span className='text-gray-400'>quantity: </span>
                {item.quantity}
              </p>
              <p>
                <span className='text-gray-400'>price: </span>
                {item.priceUSD.toFixed(2)} USD
              </p>
              <p>
                <span className='text-gray-400'>total cost: </span>
                {((item.quantity ?? 1) * item.priceUSD).toFixed(2)} USD
              </p>
              <Button  size={'icon'} onClick={() => removeTripFromCart(item.id)}  className='absolute top-2 right-2   bg-transparent rounded-xl text-red-500  hover:bg-white cursor-pointer'>❌</Button> 
            </div>
          ))}
          
      </div>
    )}
    </div>
  )
}

export default Bookings
