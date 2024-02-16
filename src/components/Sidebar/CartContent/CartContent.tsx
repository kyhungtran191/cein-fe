import React, { useEffect } from 'react'
import { useCartList } from 'src/global/useCartList'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import Close from 'src/icons/Close'
import QuantityController from 'src/components/QuantityController/QuantityController'
import Button from 'src/components/Button/Button'

export default function CartContent() {
  const { open, closeCart } = useCartList((state) => state)

  return (
    <Sidebar isOpen={open} position='right' onSidebarClose={closeCart} bodyClassName=''>
      <h2 className='text-2xl font-semibold'>Your Cart</h2>
      <div className='mt-2 max-h-[60vh] overflow-y-scroll'>
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <div className='flex items-start gap-4 py-5 border-b sm:gap-4 border-darkGrey' key={index}>
              <Link to='/products/1' className='h-[150px] w-[150p] sm:h-[204px] sm:w-[204px] flex-shrink-0'>
                <img src='../images/bag1.png' alt='cart-item' className='object-cover w-full h-full' />
              </Link>
              <div className='flex-1 px-4'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold text-black sm:text-2xl'>Bag1</h3>
                  <Close className='cursor-pointer'></Close>
                </div>
                <p className='my-2 text-xl font-semibold text-red-600 sm:text-2xl'>4,109,000₫</p>
                <div className='text-base font-medium sm:text-lg'>
                  Color: <span className='font-semibold'>Black</span>
                </div>
                <div className='flex items-center gap-4 my-2 text-base font-medium sm:text-lg'>
                  Size:<span className='font-bold'>32</span>
                </div>
                <QuantityController value={1} classNameWrapper='my-2'></QuantityController>
              </div>
            </div>
          ))}
      </div>
      <div className='absolute left-0 bottom-0 h-[205px] text-black right-0 py-5 px-9'>
        <div className='flex items-center justify-between w-full'>
          <div>
            <span className='text-xl font-semibold'>Subtotal</span> <span>(2 items)</span>
          </div>
          <span className='text-xl font-semibold'>$202</span>
        </div>
        <Button className='my-8 font-thin text-white uppercase bg-mediumGrey hover:bg-mediumGrey/90'>
          Continue To Checkout
        </Button>
        <p className='text-center'>Psst, get it now before it sells out.</p>
      </div>
    </Sidebar>
  )
}
