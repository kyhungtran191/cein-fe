/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-key */
import useClickOutSide from 'src/hooks/useClickOutSide'
import { DropdownContext, UseDropdown } from './DropdownContext'
import List from './List'
import Options from './Options'
import Select from './Select'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Dropdown({
  children,
  title = 'Please Select Options'
}: {
  children: React.ReactNode
  title?: string
}) {
  const { show, setShow, nodeRef } = useClickOutSide()
  const [label, setLabel] = useState(title)
  const handleToggle = () => {
    setShow((show) => !show)
  }
  const onClickItem = (item: string) => {
    setLabel(item)
    setShow(false)
  }
  const value = { show, handleToggle, setShow, selectTitle: label, onClickItem }
  return createPortal(
    <DropdownContext.Provider value={value}>
      <div className='w-full max-w-[300px] relative m-5 ' ref={nodeRef}>
        {children}
      </div>
    </DropdownContext.Provider>,
    document.querySelector('#root') as HTMLElement
  )
}
Dropdown.Select = Select
Dropdown.List = List
Dropdown.Option = Options
