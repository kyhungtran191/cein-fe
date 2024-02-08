/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-key */
import useClickOutSide from 'src/hooks/useClickOutSide'
import { DropdownContext, UseDropdown } from './DropdownContext'
import List from './List'
import Options from './Options'
import Select from './Select'
import { useEffect, useState } from 'react'

export default function Dropdown({ children }: { children: React.ReactNode }) {
  const { show, setShow, nodeRef } = useClickOutSide()
  const handleToggle = () => {
    setShow((show) => !show)
  }
  const value = { show, handleToggle, setShow }
  return (
    <DropdownContext.Provider value={value}>
      <div className='w-full max-w-[300px] relative m-5' ref={nodeRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}
Dropdown.Select = Select
Dropdown.List = List
Dropdown.Option = Options
