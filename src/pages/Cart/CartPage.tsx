import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import QuantityController from 'src/components/QuantityController/QuantityController'
import CartBanner from 'src/icons/CartBanner'
import Close from 'src/icons/Close'

export default function CartPage() {
  return (
    <div>
      <section>
        <CartBanner className='w-full'></CartBanner>
        <div className='container'>
          <h2 className='text-[28px] font-bold md:text-[38px]'>YOUR BAG</h2>
          <p className='text-xs text-darkGray'>*FREE DELIVERY Applies to orders of 5.000.000₫ or more</p>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='my-4 text-base font-medium'>
            Total (2 items): <span>8,218,000 đ</span>
          </div>
          <div className='grid grid-cols-1 gap-10 medium:grid-cols-10'>
            <div className='col-span-1 p-3 medium:col-span-6 sm:max-h-auto max-h'>
              {Array(3)
                .fill(0)
                .map((item, index) => (
                  <div className='flex items-start gap-4 py-5 border-b sm:gap-7 border-darkGrey' key={index}>
                    <Link to='/products/1' className='h-[150px] w-[150p] sm:h-[204px] sm:w-[204px] flex-shrink-0'>
                      <img src='../images/bag1.png' alt='cart-item' className='object-cover w-full h-full' />
                    </Link>
                    <div className='flex-1'>
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
            <div className='col-span-1 medium:col-span-4'>
              <h2 className='text-lg font-medium'>YOUR BAG</h2>
              <div className='relative my-6'>
                <input
                  type='text'
                  placeholder='Discount Code'
                  className='p-3 bg-[#D9D9D9CC] outline-none border-none w-full rounded-md '
                />
                <div className='absolute right-[8px] cursor-pointer top-[50%] -translate-y-1/2 text-[40px] font-medium'>
                  +
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl'>Total Product Value:</h3>
                <span className='text-lg'>8,218,000₫</span>
              </div>
              <div className='flex items-center justify-between pb-5 border-b border-darkGrey'>
                <h3 className='text-xl'>Total Delivery Fee:</h3>
                <span className='text-lg'>8,218,000₫</span>
              </div>
              <div className='flex items-center justify-between my-2'>
                <h3 className='text-xl'>Total:</h3>
                <span className='text-xl font-semibold text-red-600 sm:text-2xl'>8,218,000₫</span>
              </div>
              <Button className='mt-3 text-lg border-2 border-black24 sm:text-xl text-black24 hover:bg-black24 hover:text-white'>
                Checkout
              </Button>
              <div className='mt-4 font-medium text-center text-darkGrey'>
                <p>ACCEPTANCE PAYMENT METHOD:</p>
              </div>
              <img src='../images/payment.png' alt='' className='mx-auto' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
