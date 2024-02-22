/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from 'react'
import useClickOutSide from 'src/hooks/useClickOutSide'
import useGetElementCoords from 'src/hooks/useGetElementCoords'
import Popover from './Popover'
import { Position } from 'src/@types/general'

export default function PopoverWrapper({
  parentElement,
  children,
  position = 'left',
  className
}: {
  parentElement: React.ReactNode | React.ReactElement
  children: React.ReactNode
  position?: Position
  className?: string
}) {
  const { nodeRef, show, setShow } = useClickOutSide()
  const { coords, elmRef, handleGetElementCoords } = useGetElementCoords()
  if (!parentElement || !children) return null
  const handleToggleSettings = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShow((s) => !s)
    handleGetElementCoords(e)
  }
  return (
    <div className='relative' ref={nodeRef}>
      <div className='cursor-pointer' onClick={handleToggleSettings} ref={elmRef}>
        {parentElement}
      </div>
      {show && (
        <Popover
          coords={coords}
          position={position}
          className={`bg-white rounded-2xl min-w-[150px] py-2 px-3 shadow-xl border ${className}`}
        >
          {children}
        </Popover>
      )}
    </div>
  )
}
