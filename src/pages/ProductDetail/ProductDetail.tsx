/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'src/components/Accordion/Accordion'
import Button from 'src/components/Button/Button'
import RatingStar from 'src/icons/RatingStar'
import RatingStart from 'src/icons/RatingStar'
import { colors } from 'src/utils/constant'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function ProductDetail() {
  const [isReview, setIsReview] = useState(false)
  useEffect(() => {
    const handleScrollFixedDetailProductInfo = () => {
      if (window.scrollY >= 90) {
        document.querySelector('#product-info')?.classList.add('sticky', 'top-[90px]')
      } else {
        document.querySelector('#product-info')?.classList.remove('sticky', 'top-[90px]')
      }
    }
    window.addEventListener('scroll', handleScrollFixedDetailProductInfo)
    return () => {
      window.removeEventListener('scroll', handleScrollFixedDetailProductInfo)
    }
  }, [])
  return (
    <div className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-3 gap-6'>
          <div className='grid grid-cols-2 col-span-3 gap-2 sm:col-span-2'>
            {Array(6)
              .fill(0)
              .map((item, index) => (
                <img
                  src='../images/detail.jpg'
                  alt=''
                  className='object-cover w-full sm:h-[360px] medium:h-[508px] hidden sm:block'
                  key={index}
                />
              ))}
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination
              autoplay={{
                delay: 3500,
                disableOnInteraction: false
              }}
              spaceBetween={10}
              slidesPerView={1}
              className='relative block w-full h-full col-span-3 sm:hidden'
            >
              {Array(6)
                .fill(0)
                .map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src='../images/detail.jpg' alt='' className='object-cover w-full sm:h-[650px]' key={index} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className='col-span-3 sm:col-span-1'>
            <div className='px-3 py-2 ' id='product-info'>
              <h2 className='section-heading'>The ReWool® Oversized Shirt Jacket</h2>
              <p className='text-2xl font-medium'>$12</p>
              <div className='py-4 text-lg font-semibold'>Product Colors: Beige</div>
              <div className='my-2'>
                <h3 className='mb-3 text-lg font-semibold text-slate-700'>Colors</h3>
                <div className='flex items-center gap-5'>
                  {colors.slice(0, 3).map((item, index) => (
                    <div className='flex flex-col items-center justify-center' key={index}>
                      <div
                        style={{ backgroundColor: item.hex }}
                        className={`w-[40px] h-[40px]  rounded-full p-2  cursor-pointer`}
                      ></div>
                      <div className='my-2 text-center'>{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='my-2'>
                <h2 className='text-xl font-semibold'>Size</h2>
                <div className='grid grid-cols-4 gap-4 my-4 medium:gap-3'>
                  {['S', 'M', 'L', 'XL'].map((item, index) => (
                    <div
                      className='flex items-center justify-center px-4 py-2 font-medium rounded-lg cursor-pointer bg-slate-400/30'
                      key={index}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <Button className='my-6 text-white bg-[#262626]'>Add To Bag</Button>
              <div className='hidden py-6 my-8 border-t-2 border-b-2 medium:block'>
                <div className='flex items-center mb-4 gap-x-4'>
                  <img className='w-[34px] h-[34px]' src='../images/free-ship.png' alt='service' />
                  <div className=''>
                    <h2 className='font-bold'>Free shipping</h2>
                    <p className='text-left section-desc'>On all U.S. orders over $100 Learn more.</p>
                  </div>
                </div>
                <div className='flex items-center mb-4 gap-x-4'>
                  <img className='w-[34px] h-[34px]' src='../images/box.png' alt='service' />
                  <div className=''>
                    <h2 className='font-bold'>Easy Returns</h2>
                    <p className='text-left section-desc'>Extended returns through January 31. Returns Details.</p>
                  </div>
                </div>
                <div className='flex items-center mb-4 gap-x-4'>
                  <img className='w-[34px] h-[34px]' src='../images/gift.png' alt='service' />
                  <div className=''>
                    <h2 className='font-bold'>Send It As A Gift</h2>
                    <p className='text-left section-desc'>Add a free personalized note during checkout.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='text-lg section-heading medium:text-xl '>Short Description</h2>
                <p className='text-sm text-left section-desc medium:text-base'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut minus aliquid voluptates
                  quisquam tempora, suscipit dolorem natus, neque, laborum minima vitae? Fugiat, maiores ipsam iusto
                  atque dignissimos placeat optio. Earum dignissimos atque vitae inventore corrupti sint ea? Harum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 text-xl font-semibold'>
          <div
            className={`col-span-1 py-5 text-center border-b-2 cursor-pointer ${!isReview ? 'text-black border-b-black' : 'text-slate-400 border-b-slate-400'}`}
            onClick={() => setIsReview(false)}
          >
            Product Detail
          </div>
          <div
            onClick={() => setIsReview(true)}
            className={`col-span-1 py-5 text-center border-b-2 cursor-pointer  ${isReview ? 'text-black border-black' : 'text-slate-400 border-b-slate-400'}`}
          >
            Reviews
          </div>
        </div>
        <div className='pt-8'>
          {isReview &&
            Array(5)
              .fill(0)
              .map((item, index) => (
                <div className='flex items-start gap-2 p-4 my-5 border rounded-lg cursor-pointer' key={index}>
                  <div className='w-[40px] h-[40px] flex-shrink-0'>
                    <img
                      src='https://source.unsplash.com/random'
                      alt='avatar-comment'
                      className='w-full h-full rounded-full'
                    />
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <h3 className='mb-1 font-semibold text-md'>ElizabethRBklyn</h3>
                      <div>22/10/2023</div>
                    </div>
                    <div className='flex items-center'>
                      {Array(5)
                        .fill(0)
                        .map((item, index) => (
                          <RatingStar key={index} className='w-4 h-4'></RatingStar>
                        ))}
                    </div>
                    <div className='my-2 overflow-hidden text-xs text-justify sm:text-sm medium:text-base text-ellipsis line-clamp-3'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores facilis quae quaerat,
                      autem consectetur enim nostrum similique beatae illum quasi incidunt. Reprehenderit, fuga? Ducimus
                      asperiores quis veniam nobis officia? Dolorum repellat animi dolore dolorem voluptatum vitae?
                      Quibusdam, consectetur doloribus itaque laboriosam, aliquid quam minus repudiandae culpa
                      voluptatum incidunt rerum quaerat repellat quos. Nesciunt natus ex labore modi. Cupiditate, ipsum.
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}
