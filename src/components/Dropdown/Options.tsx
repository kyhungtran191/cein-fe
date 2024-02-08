/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { UseDropdown } from './DropdownContext'

export default function Options({ children }: { children: React.ReactNode }) {
  const { setShow } = UseDropdown()
  return (
    <span
      className='block p-5 bg-white cursor-pointer  [&:not(:last-child)]:border-b-slate-200  rounded-lg transition-all duration-300 hover:bg-black hover:text-white'
      onClick={() => setShow(false)}
    >
      {children}
    </span>
  )
}
