import { create } from 'zustand'

interface MenuMobileState {
  open: boolean
  openMenu: () => void
  closeMenu: () => void
}

export const useMobileMenu = create<MenuMobileState>((set) => ({
  open: false,
  openMenu: () => set(() => ({ open: true })),
  closeMenu: () => set({ open: false })
}))
