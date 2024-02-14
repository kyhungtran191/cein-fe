import { debounce } from 'lodash'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Tooltip from 'src/components/Tooltip/Tooltip'
import TooltipWrapper from 'src/components/Tooltip/TooltipWrapper'
import UserIcon from 'src/components/icons/UserIcon'
import { routePath } from 'src/config/path'
import useClickOutSide from 'src/hooks/useClickOutSide'
import { CartIcon, SearchIcon } from 'src/icons'

export const menuOptions = [
  {
    title: 'Men',
    path: '/'
  },
  {
    title: 'Women',
    path: '/about'
  },
  {
    title: 'New arrival',
    path: '/news'
  },
  {
    title: 'Sales',
    path: '/sales'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Journal',
    path: '/journal'
  }
]

export default function Header() {
  const [valueSearch, setValueSearch] = useState<string>('')
  const { nodeRef, show, setShow } = useClickOutSide()
  const handleClickSearch = () => {
    setShow((s) => !s)
  }
  function handleInputSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setValueSearch(e.target.value)
  }
  return (
    <header className='h-[72px] w-full fixed top-0 left-0 right-0 shadow-md z-30 bg-white text-black' ref={nodeRef}>
      <nav className='container h-full flex justify-between items-center leading-[72px] relative'>
        <div className='flex items-center'>
          <Link to={routePath.home} className='flex items-center gap-x-3'>
            <img src='./images/logo.png' alt='logo' className='w-[86px] h-[20px] object-contain' />
          </Link>
          <div className='items-center hidden ml-8 lg:flex '>
            {menuOptions.map((option, index) => (
              <NavLink
                to={option.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `${isActive ? 'font-bold ' : 'font-semibold'} text-base  px-3 py-2 transition-all hover:underline duration-200`
                }
                key={index}
              >
                {option.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-x-5'>
          <TooltipWrapper
            parent={
              <SearchIcon
                className='font-semibold cursor-pointer'
                width={24}
                height={24}
                onClick={handleClickSearch}
              ></SearchIcon>
            }
            title='Search Products Now'
            position='right'
          ></TooltipWrapper>
          <UserIcon className='cursor-pointer' width={24} height={24}></UserIcon>
          <CartIcon className='cursor-pointer' width={22} height={22}></CartIcon>
        </div>
      </nav>
      <div
        className={`absolute ${show ? 'h-[82px]' : 'h-0'} transition-height duration-300 flex items-center bg-white top-[72px] left-0 right-0 shadow-md border border-t`}
      >
        <div className={`container ${show ? 'flex' : 'hidden'} justify-between items-center h-full text-gray-400`}>
          <div className='flex items-center flex-1 gap-x-4'>
            <SearchIcon></SearchIcon>
            <input
              type='text'
              className='w-full h-full p-0 text-xl bg-transparent border-none outline-none'
              placeholder='Search...'
              value={valueSearch}
              defaultValue={''}
              onChange={handleInputSearch}
            />
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 cursor-pointer'
            onClick={() => setValueSearch('')}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </div>
      </div>
    </header>
  )
}
