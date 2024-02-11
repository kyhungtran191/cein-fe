import { createPortal } from 'react-dom'
import { Coords } from 'src/@types/general'

interface IProps {
  coords: Coords
  position: 'left' | 'right'
  hovered: boolean
  title: string
}

export default function Tooltip({ coords, position, hovered, title }: IProps) {
  const stylePosition = position === 'right' ? '-translate-x-full' : ''

  return createPortal(
    <div
      style={{
        left: position === 'right' ? coords.x + coords.width : coords.x + 20,
        top: coords.y + coords.height * 1.5
      }}
      className={`absolute ${hovered ? 'opacity-70' : 'opacity-0'} z-50 text-xs p-3 bg-black text-white w-max transition-opacity duration-300 ease-in-out rounded-lg top-full ${stylePosition}`}
    >
      {title}
    </div>,
    document.querySelector('#root') as HTMLElement
  )
}
