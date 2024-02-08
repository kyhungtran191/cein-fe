// DropdownProvider.tsx

import React, { createContext, useContext, useState } from 'react'

interface DropdownState {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  handleToggle: () => void
}
export const DropdownContext = createContext<DropdownState | null>(null)

export function UseDropdown() {
  const context = useContext(DropdownContext)
  if (typeof context === 'undefined') {
    throw new Error('UseDropdown.* component must be rendered as child of Dropdown component')
  }
  return context
}
