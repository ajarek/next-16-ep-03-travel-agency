"use client"
import { useTripStore } from "../store/tripStore"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const ButtonPayBalance = ({ id }: { id: number }) => {
  const router = useRouter()
  const { updatePayment } = useTripStore()
  const handlePayBalance = () => {
    updatePayment(id, true)
    router.push("/bookings")
  }
  return (
    <Button onClick={handlePayBalance} className='cursor-pointer'>
      PayBalance
    </Button>
  )
}

export default ButtonPayBalance
