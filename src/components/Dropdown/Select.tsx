/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { UseDropdown } from './DropdownContext'
import IconUp from './icons/IconUp'
import IconDown from './icons/IconDown'

export default function Select({ children }: { children: React.ReactNode }) {
  const { show, handleToggle, selectTitle } = UseDropdown()
  return (
    <div
      className='flex items-center justify-between p-5 border rounded-lg cursor-pointer border-slate-200'
      onClick={handleToggle}
    >
      <span>{selectTitle}</span>
      <span className='transition-all duration-300'>{show ? <IconDown></IconDown> : <IconUp></IconUp>}</span>
    </div>
  )
}
