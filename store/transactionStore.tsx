import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

import { Transaction } from "../types/destination"

type ItemState = {
  operations: Transaction[]
  addTransaction: (item: Transaction) => void
  removeTransaction: (id: number) => void
}

export const useTransactionStore = create<ItemState>()(
  persist(
    (set, get) => ({
      operations: [],

      addTransaction: (item: Transaction) =>
        set((state) => ({
          operations: [item, ...state.operations],
        })),

      removeTransaction: (id) =>
        set((state) => ({
          operations: state.operations.filter((item) => item.id !== id),
        })),
    }),
    { name: "transactionStore", storage: createJSONStorage(() => localStorage) }
  )
)
