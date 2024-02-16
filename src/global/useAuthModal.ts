import { create } from 'zustand'

interface AuthModal {
  open: boolean
  openAuth: () => void
  closeAuth: () => void
}

export const useAuthModal = create<AuthModal>((set) => ({
  open: true,
  openAuth: () => set(() => ({ open: true })),
  closeAuth: () => set({ open: false })
}))
