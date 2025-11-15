import MotionCard from "./motion-card"

export default function Features() {
  return (
    <section className={`  w-full  py-8 md:py-16 bg-transparent`}>
      <div className='@container mx-auto max-w-7xl px-6'>
        <div className='text-center'>
          <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>
            We Offer Best Services
          </h2>
        </div>
        <div className='@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-8 *:text-center md:mt-16'>
          <MotionCard
            icon='🌡️'
            title='Calculate Weather'
            description='Check what the weather will be like where you are spending your holiday with us.'
          />
          <MotionCard
            icon='✈️'
            title='Best Flights'
            description='Check what are the best flight connections to your place of stay.'
          />
          <MotionCard
            icon='🎉'
            title='Local Events'
            description='Check what interesting events you can count on in your place of stay.'
          />
        </div>
      </div>
    </section>
  )
}
