import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useClickOutSide from 'src/hooks/useClickOutSide'

export default function FilterProduct() {
  const { nodeRef, setShow, show } = useClickOutSide()
  const [value, setValue] = useState<string>('')
  const navigate = useNavigate()
  function handleClickOption(value: string, key: string) {
    setValue(value)
    setShow(false)
    navigate(`/products?sortBy=${key.toLowerCase()}`)
  }
  return (
    <div className='relative z-[25]' ref={nodeRef}>
      <div
        className='p-3 md:p-5 rounded-lg border border-gray100 bg-white hidden md:flex items-center justify-between cursor-pointer min-w-[250px]'
        onClick={() => {
          setShow(!show)
        }}
        aria-hidden
      >
        <span className='font-semibold'>{value ? value : 'Filter your Product'}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full z-10 shadow-md rounded-lg bg-white ${
          show ? '' : 'opacity-0 invisible'
        }`}
      >
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Latest products', 'new')}
          aria-hidden
        >
          Latest products
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Oldest products', 'old')}
          aria-hidden
        >
          Oldest products
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Most popular product', 'popular')}
          aria-hidden
        >
          Most popular product
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption(' Sort by Price Higher', 'lower')}
          aria-hidden
        >
          Sort by Price Higher
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Sort by Price Lower', 'higher')}
          aria-hidden
        >
          Sort by Price Lower
        </div>
      </div>
    </div>
  )
}
