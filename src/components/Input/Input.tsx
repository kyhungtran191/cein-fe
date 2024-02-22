/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import Eye from 'src/icons/Eye'
import EyeClose from 'src/icons/EyeClose'

type InputProps = {
  className?: string
  type: string
  name?: string
  id?: string
} & React.InputHTMLAttributes<HTMLInputElement>
export default function Input({ className, type, name, id, ...rest }: InputProps) {
  const [togglePassword, setTogglePassword] = useState(false)
  return (
    <>
      <input
        type={type == 'password' ? (togglePassword ? 'text' : 'password') : type}
        name={name}
        id={id}
        placeholder=''
        className={`block py-2.5 px-0 w-full text-base text-gray-900 !bg-transparent border-0 border-b-2 border-gray-300 appearance-none font-medium focus:outline-none focus:ring-0 focus:border-blue-400 peer relative ${className} pr-5`}
        {...rest}
      />
      {type == 'password' && (
        <div
          className='absolute right-0 top-[30%] -translate-y-1/2 cursor-pointer w-[20px] h-[20px]'
          onClick={() => setTogglePassword((s) => !s)}
        >
          {togglePassword ? <Eye></Eye> : <EyeClose></EyeClose>}
        </div>
      )}
    </>
  )
}
