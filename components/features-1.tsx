import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const itemCard = [
  {
    icon: "🌡️",
    title: "Calculate Weather",
    description:
      "Check what the weather will be like where you are spending your holiday with us.",
  },
  {
    icon: "✈️",
    title: "Best Flights",
    description:
      "Check what are the best flight connections to your place of stay.",
  },
  {
    icon: "🎉",
    title: "Local Events",
    description:
      "Check what interesting events you can count on in your place of stay.",
  },
]

export default function Features() {
  return (
    <section className={`  w-full  py-8 md:py-16 bg-transparent`}>
      <div className='@container mx-auto max-w-7xl px-6'>
        <div className='text-center'>
          <h2 className='text-balance text-2xl font-semibold lg:text-5xl'>
            We Offer Best Services
          </h2>
        </div>
        <div className='@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-8 *:text-center md:mt-16'>
          {itemCard.map((item, index) => (
            <Card key={index} className='border-0 bg-transparent shadow-none'>
              <CardHeader className='flex flex-col items-center gap-4 pb-0 text-center'>
                <div className='text-5xl'>{item.icon}</div>
                <h3 className='text-xl font-semibold'>{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className='text-center text-lg text-muted-foreground'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
