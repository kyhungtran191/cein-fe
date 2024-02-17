import React from 'react'
import { Link } from 'react-router-dom'
import Cart from 'src/icons/Cart'
import Privacy from 'src/icons/Privacy'
import User from 'src/icons/User'

export default function UserSideNav() {
  return (
    <div>
      <Link to='/' className='flex items-end mb-5 font-medium'>
        <User className='w-[28px] h-[28px] mr-3'></User>
        Account Details
      </Link>
      <Link to='/' className='flex items-end mb-5 font-medium'>
        <Cart className='w-[28px] h-[28px] mr-3 text-md '></Cart>
        Orders
      </Link>
      <Link to='/' className='flex items-end mb-5 font-medium'>
        <Privacy className='w-[28px] h-[28px] mr-3'></Privacy>
        Change Password
      </Link>
    </div>
  )
}
