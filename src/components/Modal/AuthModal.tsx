/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import Modal from './Modal'
import { useAuthModal } from 'src/global/useAuthModal'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const isAuth = false
export default function AuthModal() {
  const { open, closeAuth } = useAuthModal((state) => state)
  const [isLogin, setIsLogin] = useState<boolean>(true)
  if (isAuth) return null
  return (
    <Modal
      isOpen={open}
      onModalClose={closeAuth}
      bodyClassName='text-black bg-[#faf9f8] min-w-[30vw] min-h-[50vh] rounded-lg'
    >
      <h2 className='pb-4 text-2xl font-semibold md:text-3xl'>
        {isLogin ? 'Login Customer Account' : 'Sign Up Account'}
      </h2>
      <p className='text-center section-desc  max-w-[400px] mx-auto text-xs md:text-sm pb-15'>
        Become a member so you do not miss out on exclusive offers, discounts and vouchers just for you.
      </p>
      <form action=''>
        <div className='relative z-0 w-full mb-6 group'>
          <Input type='text' name='email' id='email'></Input>
          <Label htmlFor='email'>
            Email <span className='text-red-600'>*</span>
          </Label>
        </div>
        {!isLogin && (
          <div className='relative z-0 w-full mb-6 group'>
            <Input type='text' name='name' id='name'></Input>
            <Label htmlFor='name'>
              Full Name <span className='text-red-600'>*</span>
            </Label>
          </div>
        )}
        <div className='relative z-0 w-full mb-6 group'>
          <Input type='text' name='email' id='email'></Input>
          <Label htmlFor='email'>
            Password <span className='text-red-600'>*</span>
          </Label>
        </div>
        {!isLogin && (
          <div className='relative z-0 w-full mb-6 group'>
            <Input type='password' name='confirm_password' id='confirm_password'></Input>
            <Label htmlFor='confirm_password'>
              Confirm Password <span className='text-red-600'>*</span>
            </Label>
          </div>
        )}
        <div className='flex items-center justify-end w-full gap-1 my-4 text-sm font-semibold text-slate-500'>
          {isLogin ? 'Forgot password?' : 'Already have account?'}
          {isLogin ? (
            <Link to='/' className='text-blue-600 hover:underline'>
              Click here
            </Link>
          ) : (
            <div className='text-blue-600 cursor-pointer hover:underline' onClick={() => setIsLogin(true)}>
              Sign In
            </div>
          )}
        </div>
        <Button className='bg-[#222222] text-white my-4'>{isLogin ? 'Enter our world' : 'Sign Up'}</Button>
        {isLogin && (
          <Button
            className='bg-[transparent] hover:text-opacity-70 text-black border border-[#222222]'
            type='button'
            onClick={() => {
              setIsLogin(false)
            }}
          >
            Sign Up An Account
          </Button>
        )}
      </form>
    </Modal>
  )
}
