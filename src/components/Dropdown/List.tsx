import React from 'react'
import { UseDropdown } from './DropdownContext'

export default function List({ children }: { children: React.ReactNode }) {
  const { show } = UseDropdown()
  if (!show) return null
  return (
    <div className='absolute left-0 right-0 bg-white border rounded-lg dropdown-list top-full border-slate-200'>
      {children}
    </div>
  )
}
