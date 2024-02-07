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
  position = 'left'
}: {
  parentElement: React.ReactNode | React.ReactElement
  children: React.ReactNode
  position?: Position
}) {
  const { nodeRef, show, setShow } = useClickOutSide()
  const { coords, elmRef, handleGetElementCoords } = useGetElementCoords()
  if (!parentElement || !children) return null
  const handleToggleSettings = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShow((s) => !s)
    handleGetElementCoords(e)
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative' ref={nodeRef}>
        <div className='cursor-pointer' onClick={handleToggleSettings} ref={elmRef}>
          {parentElement}
        </div>
        {show && (
          <Popover coords={coords} position={position} className='bg-white rounded-2xl shadow w-[230px] py-6 px-5'>
            {children}
          </Popover>
        )}
      </div>
    </div>
  )
}
