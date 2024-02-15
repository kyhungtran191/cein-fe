import { create } from 'zustand'

interface CartList {
  open: boolean
  openCart: () => void
  closeCart: () => void
}

export const useCartList = create<CartList>((set) => ({
  open: true,
  openCart: () => set(() => ({ open: true })),
  closeCart: () => set({ open: false })
}))
