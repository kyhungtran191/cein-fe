import { createPortal } from 'react-dom'
import { Coords, Position } from 'src/@types/general'

interface PopoverProps {
  coords: Coords
  position: Position
  children?: React.ReactNode
  className?: string
}
function Popover({ coords, position = 'left', children, className = '' }: PopoverProps) {
  if (typeof document === 'undefined') return null
  const stylePosition = position === 'right' ? '-translate-x-full' : position === 'center' ? '-translate-x-1/2' : ''
  return createPortal(
    <div
      style={{
        left: position === 'right' ? coords.x + coords.width : coords.x,
        top: coords.y + coords.height - 10
      }}
      className={`absolute top-full z-40 ${stylePosition} ${className}  after:absolute after:w-[16px] after:h-[16px] after:bg-white after:-top-[8px] after:right-[50%] after:translate-x-1/2  after:shadow-xl after:rotate-45 after:z-30 after:border-t after:border-l`}
    >
      {children}
    </div>,
    document.getElementById('root') as HTMLElement
  )
}

export default Popover
