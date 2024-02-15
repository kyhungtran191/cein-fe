import { createPortal } from 'react-dom'

/* eslint-disable jsx-a11y/no-static-element-interactions */
interface ISidebarProps {
  isOpen: boolean
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  title?: string
  position?: string
  onSidebarClose: () => void
}

export default function Sidebar({
  children,
  isOpen = false,
  className = '',
  bodyClassName = '',
  title = '',
  position = 'right',
  onSidebarClose
}: ISidebarProps) {
  return createPortal(
    <>
      <div className={`fixed inset-0 z-40 ${!isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <div
          className={`absolute inset-0 bg-black bg-opacity-30 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300`}
          onClick={onSidebarClose}
        ></div>
        <div
          className={`fixed top-0 ${position === 'right' ? 'right-0' : 'left-0'} min-h-screen z-50 p-10 px-4 w-[50vw] lg:w-[35vw] bg-white ${isOpen ? (position === 'right' ? 'translate-x-0' : '-translate-x-0') : position === 'right' ? 'translate-x-full' : '-translate-x-full'} transition-all duration-300 ease-in-out ${bodyClassName}`}
        >
          <div className='flex justify-end px-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 cursor-pointer'
              onClick={onSidebarClose}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </div>
          <div className='p-5'>{children}</div>
        </div>
      </div>
    </>,
    document.body as HTMLElement
  )
}
