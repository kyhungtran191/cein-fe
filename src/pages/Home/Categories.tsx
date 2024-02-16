/* eslint-disable import/no-unresolved */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { CategoriesArray } from 'src/utils/constant'

export default function Categories() {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='text-center section-heading'>Categories</h2>
        <p className='section-desc'>Explore our categories</p>
        <div className='w-full h-[180px] md:h-[250px] medium:h-[280px]'>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              740: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10
              }
            }}
            className='relative w-full h-full'
          >
            {CategoriesArray.map((item, index) => (
              <SwiperSlide className='overflow-hidden' key={index}>
                <Link to='/products?category=tee' className='relative w-full h-full rounded-sm'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='object-cover w-full h-full transition-all duration-300 rounded-lg hover:scale-125'
                  />
                  <div className='absolute inset-0 flex items-center justify-center text-base text-white bg-black rounded-sm medium:text-xl bg-opacity-40'>
                    {item.title}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
