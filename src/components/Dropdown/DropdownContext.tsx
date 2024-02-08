// DropdownProvider.tsx

import React, { createContext, useContext, useState } from 'react'

interface DropdownState {
  show: boolean
  selectTitle?: string
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  handleToggle: () => void
  onClickItem: (item: string) => void
}
export const DropdownContext = createContext<DropdownState | null>(null)

export function UseDropdown(): DropdownState {
  const context = useContext(DropdownContext)
  if (typeof context === 'undefined') {
    throw new Error('UseDropdown.* component must be rendered as child of Dropdown component')
  }
  return context as DropdownState
}
