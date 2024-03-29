import React from 'react'
import { Link } from 'react-router-dom'

export default function Quotes() {
  return (
    <section className='hidden md:block section'>
      <div className='container'>
        <h2 className='text-center section-heading'>Quotes</h2>
        <div className='w-full h-[400px] md:h-[577px] grid grid-cols-1 md:grid-cols-10'>
          <div className='w-full h-[400px] md:h-[577px] col-span-1 md:col-span-7'>
            <img src='./images/banner-section.jpg' alt='' className='object-cover w-full h-full' />
          </div>
          <div className='flex flex-col flex-wrap items-center justify-center col-span-1 md:flex-col md:px-5 md:col-span-3 md:items-start md:order-none'>
            <h2 className='md:text-[32px] medium:text-[38px] font-bold max-w-full md:max-w-[400px] md:text-left text-center'>
              WEAR CONFIDENTLY IN YOUR Clothes
            </h2>
            <p className='mb-4 text-black w-full md:max-w-[400px] md:text-left text-center'>
              Everywhere you want to go Explore every road
            </p>
            <div className='text-center md:text-left'>
              <Link
                to='/products'
                className='px-4 py-1 border w-max transition-all duration-300 hover:bg-black hover:text-white border-black rounded-[100px]'
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
