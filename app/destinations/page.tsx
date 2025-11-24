import destinations from "@/data/destinations.json"
import FormSearchTitle from "@/components/search-by-city"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Destination } from "@/types/destination"

const Destinations = async ({
  searchParams,
}: {
  searchParams: Promise<{ city: string }>
}) => {
  const { city } = (await searchParams) as { city: string }
  return (
    <section className='w-full  pt-28 px-8 bg-transparent '>
      <div className='@container mx-auto max-w-7xl px-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center mb-8'>
          <h2 className='w-full lg:w-2/3 text-left text-balance text-xl lg:text-4xl font-semibold lg:text-5x '>
            Choose a trip destination
          </h2>
          <FormSearchTitle query='city' />
        </div>

        <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {destinations.trips
            .filter((destination: Destination) =>
              destination.cityName
                .toLowerCase()
                .includes(city?.toLowerCase() || "")
            )
            .map((destination: Destination) => {
              const {
                id,
                cityName,
                image,
                description,
                priceUSD,
                durationDays,
              } = destination
              return (
                <div key={id}>
                  <Card className='group shadow-zinc-950/5 bg-primary text-primary-foreground'>
                    <CardHeader className='pb-3'>
                      <Image
                        src={image}
                        alt={cityName}
                        width={500}
                        height={500}
                      />

                      <h3 className='mt-6 text-2xl font-semibold'>
                        {cityName}
                      </h3>
                    </CardHeader>

                    <CardContent>
                      <p className='text-lg'>
                        {description.slice(0, 80) + "..."}
                      </p>
                      <div className='flex items-center justify-between'>
                        <p className='mt-2 text-xl font-semibold'>
                          {priceUSD} USD{" "}
                        </p>
                        <p className='text-md text-muted-foreground'>
                          Duration: {durationDays} days
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        size='lg'
                        className='w-full bg-secondary text-secondary-foreground text-2xl hover:bg-secondary/50 dark:hover:border-t-border  group mx-auto rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950'
                      >
                        <Link href={`/destination/${id}`}>
                          I choose this trip
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
export default Destinations
