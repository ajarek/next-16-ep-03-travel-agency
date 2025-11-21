import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import type { Destination } from "@/types/destination"


type ItemState = {
  items: Destination[]
  addTripToCart: (item: Destination) => void
  removeTripFromCart: (id: number) => void
  total: () => number
  removeAll: () => void
  increment: (id: number) => void
  decrement: (id: number) => void
  removeAllFromCart: () => void
}

export const useTripStore = create<ItemState>()(
  persist(
    (set, get) => ({
      items: [],

      addTripToCart: (item: Destination) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      updatePayment: (id: number, payment: boolean) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, payment } : item
          ),
        })),

      removeTripFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      removeAllFromCart: () => set({ items: [] }),

      total: () =>
        get().items.reduce((acc, item) => acc + item.priceUSD * (item.quantity ?? 0), 0),
      removeAll: () => set({ items: [] }),

      increment: (id: number) =>
        get()
          .items.filter((item) => item.id === id)
          .map(() =>
            set((state) => ({
              items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
              ),
            }))
          ),
      decrement: (id: number) =>
        get()
          .items.filter((item) => item.id === id)
          .map(() =>
            set((state) => ({
              items: state.items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: Math.max((item.quantity ?? 1) - 1, 1),
                    }
                  : item
              ),
            }))
          ),
    }),

    { name: 'tripStore', storage: createJSONStorage(() => localStorage) }
  )
)