export type Destination = {
  id: number
  cityName: string
  country: string
  image: string
  description: string
  durationDays: number
  priceUSD: number
  startDate: string
  endDate: string
  transportType: string
  rating: number
  highlights: string[]
  quantity?: number
  userName?: string
  payment?: boolean
}
export type Transaction = {
  id: number
  cityName: string
  startDate: string
  endDate: string
  userName: string
  priceUSD: number
  quantity?: number
}
