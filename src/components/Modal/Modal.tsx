/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createPortal } from 'react-dom'
interface ModalProps {
  children?: React.ReactNode
  isOpen: boolean
  className?: string
  bodyClassName?: string
  title?: string
  onModalClose: () => void
}

const Modal = ({
  children,
  isOpen = false,
  className = '',
  bodyClassName = '',
  title = '',
  onModalClose
}: ModalProps) => {
  if (typeof document === 'undefined') return null
  if (!isOpen) return null
  return createPortal(
    <div className={`fixed px-5 inset-0 z-50 flex items-center justify-center ${isOpen ? '' : ''} ${className}`}>
      <div className='absolute inset-0 bg-black bg-opacity-30' onClick={onModalClose}></div>
      <div className={`relative z-50 px-10 py-5 min-h-[100px] ${bodyClassName}`}>
        <div className='flex w-full h-full'>
          <h2>{title}</h2>
          <div
            aria-label='modal-close'
            className='flex items-center justify-center w-6 h-6 ml-auto bg-gray-200 rounded-full cursor-pointer'
            onClick={onModalClose}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.body as HTMLElement
  )
}

export default Modal
