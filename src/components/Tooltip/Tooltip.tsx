/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react'
import UserIcon from '../icons/UserIcon'
import useGetElementCoords from 'src/hooks/useGetElementCoords'
import { createPortal } from 'react-dom'
import { debounce } from 'lodash'

interface IProps {
  parentElement: React.ReactNode
  title: React.ReactNode
  position?: string
}

export default function Tooltip({ parentElement, title, position = 'left' }: IProps) {
  const { coords, elmRef, handleGetElementCoords } = useGetElementCoords()
  const [hovered, setHovered] = useState<boolean>(false)
  if (!parentElement || !title) return null
  console.log(coords)
  const handleHoverParentElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleGetElementCoords(e)
    setHovered(true)
  }
  const stylePosition = position === 'right' ? '-translate-x-full' : ''
  return createPortal(
    <>
      <div
        ref={elmRef}
        className='relative flex items-center mx-auto bg-red-500 bg-opacity-35 w-max'
        onMouseOver={handleHoverParentElement}
        onMouseOut={() => {
          setHovered(false)
        }}
      >
        {parentElement}
      </div>
      <div
        style={{
          left: position === 'right' ? coords.x + coords.width : coords.x + 20,
          top: coords.y + coords.height
        }}
        className={`absolute ${hovered && coords ? 'opacity-50' : 'opacity-0'} p-3 bg-black text-white w-max transition-opacity duration-300 ease-in-out rounded-lg top-full ${stylePosition}`}
      >
        {title}
      </div>
    </>,
    document.body as HTMLElement
  )
}
