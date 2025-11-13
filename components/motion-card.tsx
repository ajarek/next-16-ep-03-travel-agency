import * as motion from 'motion/react-client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ReactNode } from 'react'
const MotionCard = ({icon, title, description}: {icon: React.ReactNode, title: string, description: string}) => {
 

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        scale: { type: 'spring', visualDuration: 2, bounce: 0.5 },
      }}
    >
      <Card className='group shadow-zinc-950/5 bg-primary text-primary-foreground'>
            <CardHeader className='pb-3'>
              <CardDecorator>
                <span className='text-3xl'>{icon}</span>
              </CardDecorator>

              <h3 className='mt-6 text-2xl font-semibold'>{title}</h3>
            </CardHeader>

            <CardContent>
              <p className='text-lg'>
                {description}
              </p>
            </CardContent>
          </Card>
    </motion.div>
  )
}
export default MotionCard

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className='mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
    <div
      aria-hidden
      className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50'
    />

    <div className='bg-secondary absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t'>
      {children}
    </div>
  </div>
)