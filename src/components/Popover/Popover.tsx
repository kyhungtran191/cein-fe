import { createPortal } from 'react-dom'
import { Coords, Position } from 'src/@types/general'

interface PopoverProps {
  coords: Coords
  position: Position
  children?: React.ReactNode
  className?: string
}
function Popover({ coords, position = 'left', children, className = 'z-10' }: PopoverProps) {
  if (typeof document === 'undefined') return null
  const stylePosition = position === 'right' ? '-translate-x-full' : position === 'center' ? '-translate-x-1/2' : ''
  return createPortal(
    <div
      style={{
        left: position === 'right' ? coords.x + coords.width : coords.x,
        top: coords.y + coords.height * 1.5
      }}
      className={`absolute top-full ${stylePosition} ${className}`}
    >
      {children}
    </div>,
    document.getElementById('root') as HTMLElement
  )
}

export default Popover
