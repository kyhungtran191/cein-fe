/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useMutation } from '@tanstack/react-query'
import { debounce } from 'lodash'
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { User } from 'src/@types/auth'
import { logOutApi } from 'src/apis/auth.api'
import PopoverWrapper from 'src/components/Popover/PopoverWrapper'
import Tooltip from 'src/components/Tooltip/Tooltip'
import TooltipWrapper from 'src/components/Tooltip/TooltipWrapper'
import UserIcon from 'src/components/icons/UserIcon'
import { routePath } from 'src/config/path'
import { AppContext } from 'src/contexts/app.context'
import { useAuthModal } from 'src/global/useAuthModal'
import { useCartList } from 'src/global/useCartList'
import { useMobileMenu } from 'src/global/useMobileMenu'
import useClickOutSide from 'src/hooks/useClickOutSide'
import { CartIcon, SearchIcon } from 'src/icons'
import Logout from 'src/icons/Logout'
import MobileMenu from 'src/icons/MobileMenu'
import Setting from 'src/icons/Setting'
import { getUserFromLS } from 'src/utils/auth'

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
  const { openMenu } = useMobileMenu((state) => state)
  const { openCart } = useCartList((state) => state)
  const { openAuth } = useAuthModal((state) => state)
  const { isAuthenticated, profile, setIsAuthenticated } = useContext(AppContext)
  const handleClickSearch = () => {
    setShow((s) => !s)
  }
  function handleInputSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setValueSearch(e.target.value)
  }
  const userData: User = getUserFromLS() || {}
  const logOutMutation = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      setIsAuthenticated(false)
      toast.success('Logout successfully')
    }
  })
  return (
    <header className='h-[72px] w-full fixed top-0 left-0 right-0 shadow-md z-30 bg-white text-black' ref={nodeRef}>
      <nav className='container h-full flex justify-between items-center leading-[72px] relative'>
        <div className='block lg:hidden' onClick={() => openMenu()}>
          <MobileMenu></MobileMenu>
        </div>
        <div className='flex items-center'>
          <Link to={routePath.home} className='items-center hidden lg:flex gap-x-3 '>
            <img src='../images/logo.png' alt='logo' className='w-[86px] h-[20px] object-contain' />
          </Link>
          <Link
            to={routePath.home}
            className='flex items-center gap-x-3 -translate-x-[50%] absolute left-[50%] lg:hidden'
          >
            <img src='../images/logo.png' alt='logo' className='w-[86px] h-[20px] object-contain' />
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
          {!isAuthenticated && (
            <UserIcon className='cursor-pointer' width={24} height={24} onClick={() => openAuth()}></UserIcon>
          )}
          <CartIcon className='cursor-pointer' width={22} height={22} onClick={() => openCart()}></CartIcon>
          {isAuthenticated && profile && (
            <PopoverWrapper
              parentElement={
                <div className='flex-wrap items-center hidden md:flex gap-x-2'>
                  <img
                    src='https://source.unsplash.com/random'
                    alt=''
                    className='flex-shrink-0 w-6 h-6 rounded-full select-none'
                  />
                  <div className='font-semibold select-none'>{userData?.fullName}</div>
                </div>
              }
              className='rounded-none w-max'
              position='right'
            >
              <div>
                <Link
                  to='/'
                  className='flex items-center gap-2 py-4 transition duration-300 border-b cursor-pointer justify-stat hover:text-blue-500'
                >
                  <UserIcon></UserIcon>My Profile
                </Link>
                <div className='flex items-center justify-start gap-2 py-4 transition duration-300 border-b cursor-pointer hover:text-blue-500'>
                  <Setting></Setting>Settings
                </div>
                <div
                  className='flex items-center justify-start gap-2 py-4 transition duration-300 cursor-pointer hover:text-blue-500'
                  onClick={() => {
                    logOutMutation.mutate()
                  }}
                >
                  {' '}
                  <Logout></Logout>Logout
                </div>
              </div>
            </PopoverWrapper>
          )}
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
