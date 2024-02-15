import React from 'react'
import Button from 'src/components/Button/Button'

export default function Slider() {
  return (
    <section className='section md:p-0 h-[390px] lg:h-[850px] w-full relative overflow-hidden bg-hero-pattern  bg-no-repeat bg-cover bg-top'>
      <div className='absolute inset-0 w-full h-full bg-black bg-opacity-40'></div>
      <div className='container flex flex-col justify-center w-full h-full'>
        <div className='z-10 max-w-[300px] md:max-w-[400px]'>
          <h1 className='text-2xl text-white md:text-2xl lg:text-[44px] font-semibold mb-3 leading-normal lg:leading-[55px]'>
            Elevate Your Style Timeless Fashion
          </h1>
          <p className='mb-4 font-normal text-xs text-white md:text-sm lg:text-base max-w-[467px]'>
            Sustainable Choices time to put on your running shoes and Run For The Hills Every minute counts.
          </p>
          <Button className='bg-white rounded-sm hover:text-yellow-500'>Explore now</Button>
        </div>
      </div>
    </section>
  )
}
