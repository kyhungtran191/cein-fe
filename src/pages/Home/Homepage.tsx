import Button from 'src/components/Button/Button'
import Slider from './Slider'
import Categories from './Categories'
import TooltipWrapper from 'src/components/Tooltip/TooltipWrapper'
import Add from 'src/icons/Add'
import { SearchIcon } from 'src/icons'
import Heart from 'src/icons/Heart'

/* eslint-disable jsx-a11y/alt-text */

export default function Homepage() {
  return (
    <>
      <Slider></Slider>
      <Categories></Categories>
      {/* Featured */}
      <div className='section'>
        <div className='container'>
          <div className='text-center section-heading'>CEIN. Featured</div>
          <div className='section-desc'>Beautifully Functional. Purposefully Designed. Consciously Crafted.</div>
          <div className='product-list'>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 medium:grid-cols-3 medium:gap-3 xl:gap-4 xl:grid-cols-6'>
              {Array(6)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    {/* top */}
                    <div className='w-full h-[260px] sm:h-[300px] relative group'>
                      <img
                        src='./images/bag1.png'
                        alt='product'
                        className='object-cover w-full h-full transition-all duration-300 ease-in-out cursor-pointer'
                      />
                      <img
                        src='./images/bag2.png'
                        alt='product'
                        className='absolute inset-0 object-cover w-full h-full transition-all duration-300 ease-in-out opacity-0 cursor-pointer group-hover:opacity-100'
                      />
                      <div className='absolute transition-opacity ease-in-out opacity-0 top-5 right-5 group-hover:opacity-100 transition-300 '>
                        <Heart className='cursor-pointer text-slate-500' fill='none'></Heart>
                      </div>
                      <div className='absolute bottom-3 right-3'>
                        <div className='flex flex-col gap-3'>
                          <TooltipWrapper
                            title='Add To Cart'
                            position='left'
                            parent={
                              <Add className='inline-block transition-all duration-300 scale-100 opacity-50 cursor-pointer hover:opacity-100 hover:scale-150 '></Add>
                            }
                          ></TooltipWrapper>
                          <div>
                            <TooltipWrapper
                              title='Quick View'
                              position='left'
                              parent={
                                <SearchIcon className='inline-block transition-all duration-300 scale-100 opacity-50 cursor-pointer hover:opacity-100 hover:scale-125'></SearchIcon>
                              }
                            ></TooltipWrapper>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* bottom */}
                    <div className='py-3'>
                      <h2 className='font-medium h-[28px] line-clamp-1 overflow-hidden'>
                        Classic Easy Zipper Tote Classic Easy Zipper Tote Classic Easy Zipper Tote Classic Easy Zipper
                        Tote
                      </h2>
                      <p className='text-sm font-semibold'>$298</p>
                    </div>
                  </div>
                ))}
            </div>
            <Button className='mx-auto text-white bg-black rounded-sm w-max hover:text-opacity-85 hover:bg-opacity-85'>
              Explore More
            </Button>
          </div>
        </div>
      </div>
      {/* Quotes */}
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
                <button className='px-4 py-1 border w-max transition-all duration-300 hover:bg-black hover:text-white border-black rounded-[100px]'>
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <div className='section'>
        <div className='container'>
          <h2 className='text-center section-heading'>Our Services</h2>
          <p className='section-desc'>We provided the best services to customer</p>
          <div className='grid grid-cols-3 mt-5 gap-x-2'>
            <div className='flex flex-col items-center justify-center px-7'>
              <img src='./images/service-1.png' alt='' className='w-[60px] h-[60px] object-cover' />
              <div className='mt-5 text-center'>
                <h3 className='text-sm font-bold medium:text-base'>Complimentary Shipping</h3>
                <p className='hidden text-xs sm:block section-desc medium:text-sm'>
                  Enjoy free shipping on U.S. orders over $100.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center px-7'>
              <img src='./images/service-2.png' alt='' className='w-[60px] h-[60px] object-cover' />
              <div className='mt-5 text-center'>
                <h3 className='text-sm font-bold medium:text-base'>Consciously Crafted</h3>
                <p className='hidden text-xs sm:block section-desc medium:text-sm'>
                  Designed with you and the planet in mind.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center px-7'>
              <img src='./images/service-3.png' alt='' className='w-[60px] h-[60px] object-cover' />
              <div className='mt-5 text-center'>
                <h3 className='text-sm font-bold medium:text-base'>Come Say Hi</h3>
                <p className='hidden text-xs sm:block section-desc medium:text-sm'>We have 11 stores across the U.S.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
