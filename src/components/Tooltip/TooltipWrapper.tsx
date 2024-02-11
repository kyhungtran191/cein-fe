/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import useGetElementCoords from 'src/hooks/useGetElementCoords'
import Tooltip from './Tooltip'

interface IProps {
  parent: React.ReactNode
  title: string
  position: 'left' | 'right'
}

export default function TooltipWrapper({ parent, title = '', position = 'left' }: IProps) {
  const [hovered, setHovered] = useState<boolean>(false)
  const { coords, elmRef, handleGetElementCoords } = useGetElementCoords()
  if (!parent || !title) return null
  const handleHoverParentElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleGetElementCoords(e)
    setHovered(true)
  }
  return (
    <>
      <div
        ref={elmRef}
        className='relative flex items-center mx-auto '
        onMouseOver={handleHoverParentElement}
        onMouseOut={() => {
          setHovered(false)
        }}
      >
        {parent}
      </div>
      <Tooltip coords={coords} hovered={hovered} position={position} title={title}></Tooltip>
    </>
  )
}
