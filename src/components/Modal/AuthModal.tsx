/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Modal from './Modal'
import { useAuthModal } from 'src/global/useAuthModal'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginData, SignUpData } from 'src/@types/auth'
import { loginSchema, signUpSchema } from 'src/validators/auth.validator'
import { useMutation } from '@tanstack/react-query'
import { loginApi } from 'src/apis/auth.api'
import { toast } from 'react-toastify'
import { AppContext } from 'src/contexts/app.context'
export default function AuthModal() {
  const { isAuthenticated } = useContext(AppContext)
  const { open, closeAuth } = useAuthModal((state) => state)
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const {
    control: loginControl,
    handleSubmit: handleSubmitLogin,
    reset,
    formState: { errors: loginErrors }
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema)
  })

  const {
    control: signUpControl,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: signUpErrors }
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema)
  })

  // Mutation
  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data.data.data)
      toast.success('Login Successfully!')
      reset()
      closeAuth()
    }
  })

  const onSubmitLogin: SubmitHandler<LoginData> = (data) => {
    loginMutation.mutate(data)
  }
  const onSubmitSignUp: SubmitHandler<SignUpData> = (data) => console.log(data)

  if (isAuthenticated) return null
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
      {isLogin && (
        <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
          <div className='relative z-0 w-full mb-6 group'>
            <Controller
              control={loginControl}
              name='email'
              render={({ field }) => <Input type='text' id='email' {...field}></Input>}
            ></Controller>
            <Label htmlFor='email'>
              Email <span className='text-red-600'>*</span>
            </Label>
            <div className='py-3 text-sm font-semibold text-red-500'>{loginErrors.email?.message}</div>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <Controller
              control={loginControl}
              name='password'
              render={({ field }) => <Input type='password' id='password' {...field}></Input>}
            ></Controller>
            <Label htmlFor='password'>
              Password <span className='text-red-600'>*</span>
            </Label>
            <div className='py-3 text-sm font-semibold text-red-500'>{loginErrors.password?.message}</div>
          </div>
          <div className='flex items-center justify-end w-full gap-1 my-4 text-sm font-semibold text-slate-500'>
            Forgot password?
            <Link to='/' className='text-blue-600 hover:underline'>
              Click here
            </Link>
          </div>
          <Button className='bg-[#222222] text-white my-4'>Enter Our World</Button>
          <Button
            className='bg-[transparent] hover:text-opacity-70 text-black border border-[#222222]'
            type='button'
            onClick={() => {
              setIsLogin(false)
            }}
          >
            Sign Up An Account
          </Button>
        </form>
      )}
      {!isLogin && (
        <form onSubmit={handleSubmitSignUp(onSubmitSignUp)}>
          <div className='relative z-0 w-full mb-6 group'>
            <Controller
              control={signUpControl}
              name='email'
              render={({ field }) => <Input type='text' id='email' {...field}></Input>}
            ></Controller>
            <Label htmlFor='email'>
              Email <span className='text-red-600'>*</span>
            </Label>
            <div className='text-sm font-semibold text-red-500'>{signUpErrors.email?.message}</div>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <Controller
              control={signUpControl}
              name='name'
              render={({ field }) => <Input type='text' id='name' {...field}></Input>}
            ></Controller>
            <Label htmlFor='name'>
              Full Name <span className='text-red-600'>*</span>
            </Label>
            <div className='text-sm font-semibold text-red-500'>{signUpErrors.name?.message}</div>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <Controller
              control={signUpControl}
              name='password'
              render={({ field }) => <Input type='password' id='password' {...field}></Input>}
            ></Controller>
            <Label htmlFor='password'>
              Password <span className='text-red-600'>*</span>
            </Label>
            <div className='text-sm font-semibold text-red-500'>{signUpErrors.password?.message}</div>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <Controller
              control={signUpControl}
              name='confirm_password'
              render={({ field }) => <Input type='password' id='confirm_password' {...field}></Input>}
            ></Controller>
            <Label htmlFor='confirm_password'>
              Confirm Password <span className='text-red-600'>*</span>
            </Label>
            <div className='text-sm font-semibold text-red-500'>{signUpErrors.confirm_password?.message}</div>
          </div>
          <div className='flex items-center justify-end w-full gap-1 my-4 text-sm font-semibold text-slate-500'>
            Already have account?
            <div className='text-blue-600 cursor-pointer hover:underline' onClick={() => setIsLogin(true)}>
              Sign In
            </div>
          </div>
          <Button className='bg-[#222222] text-white my-4'>{isLogin ? 'Enter our world' : 'Sign Up'}</Button>
        </form>
      )}
    </Modal>
  )
}
