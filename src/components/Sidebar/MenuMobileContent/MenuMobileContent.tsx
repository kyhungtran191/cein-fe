import useClickOutSide from 'src/hooks/useClickOutSide'
import Sidebar from '../Sidebar'
import { useMobileMenu } from 'src/global/useMobileMenu'
import { useEffect } from 'react'
import { menuOptions } from 'src/layout/Header/Header'
import { NavLink } from 'react-router-dom'

export default function MenuMobileContent() {
  const { open, closeMenu } = useMobileMenu((state) => state)
  useEffect(() => {
    return () => closeMenu()
  }, [closeMenu])
  return (
    <Sidebar isOpen={open} position='left' onSidebarClose={closeMenu}>
      <div className='flex flex-col p-3'>
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
    </Sidebar>
  )
}
