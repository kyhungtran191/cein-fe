/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef, useState } from 'react'
import IconPlus from './icons/IconPlus'
import IconMinus from './icons/IconMinus'

interface AccordionProps {
  children?: React.ReactNode
  className?: string
  contentClassName?: string
  title: string
  open?: boolean
}
const Accordion = ({ children, title, className = '', contentClassName = '', open = false }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen)
    if (contentRef.current) {
      const elm = contentRef.current as HTMLElement
      const elHeight = elm.offsetHeight
      setContentHeight(elHeight)
    }
  }

  return (
    <div className={className}>
      <div
        className='flex items-center justify-between gap-5 text-xl font-medium text-black capitalize rounded-lg cursor-pointer'
        onClick={handleToggle}
      >
        <span>{title}</span>
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 '
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
          </svg>
        )}
      </div>
      <div
        className='relative overflow-hidden duration-300 transition-height'
        style={{
          height: isOpen ? `${contentHeight}px` : 0
        }}
      >
        <div className={`absolute ${contentClassName}`} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
