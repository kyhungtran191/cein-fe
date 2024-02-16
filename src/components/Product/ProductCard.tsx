import React, { Dispatch, SetStateAction, useState } from 'react'
import { Product } from 'src/@types/product'
import Heart from 'src/icons/Heart'
import TooltipWrapper from '../Tooltip/TooltipWrapper'
import Add from 'src/icons/Add'
import { SearchIcon } from 'src/icons'
import Modal from '../Modal/Modal'
import { colors } from 'src/utils/constant'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }: { product: Product }) {
  const [isQuickView, setIsQuickView] = useState<boolean>(false)
  const { _id, category, featured_image, images, name, original_price, sale_price } = product
  return (
    <>
      <div key={_id}>
        {/* top */}
        <div className='w-full h-[260px] sm:h-[300px] relative group'>
          <img
            src={featured_image}
            alt='product'
            className='object-cover w-full h-full transition-all duration-300 ease-in-out cursor-pointer'
          />
          {images && images.length > 0 && (
            <img
              src={images[0]}
              alt='product'
              className='absolute inset-0 object-cover w-full h-full transition-all duration-300 ease-in-out opacity-0 cursor-pointer group-hover:opacity-100'
            />
          )}
          <div className='absolute transition-opacity ease-in-out opacity-0 top-1 right-5 group-hover:opacity-100 transition-300 '>
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
                    <SearchIcon
                      className='inline-block transition-all duration-300 scale-100 opacity-50 cursor-pointer hover:opacity-100 hover:scale-125'
                      onClick={() => setIsQuickView(true)}
                    ></SearchIcon>
                  }
                ></TooltipWrapper>
              </div>
            </div>
          </div>
          <div className='absolute top-0 left-0 px-4 py-2 text-xs text-white bg-yellow-600 rounded-br-md rounded-bl-md'>
            40%
          </div>
        </div>
        {/* bottom */}
        <div className='py-3'>
          <h2 className='font-medium h-[28px] line-clamp-1 overflow-hidden'>{name}</h2>
          <div className='flex items-center gap-2'>
            {/* origin price */}
            <p className='text-xs font-semibold text-red-500 line-through'>${original_price}</p>
            {/* sale price */}
            <p className='text-sm font-semibold'>${sale_price}</p>
          </div>
        </div>
      </div>
      <ProductModal isQuickView={isQuickView} setIsQuickView={setIsQuickView} product={product}></ProductModal>
    </>
  )
}

export function ProductModal({
  isQuickView,
  setIsQuickView,
  product
}: {
  isQuickView: boolean
  setIsQuickView: Dispatch<SetStateAction<boolean>>
  product: Product
}) {
  return (
    <Modal
      isOpen={isQuickView}
      onModalClose={() => setIsQuickView(false)}
      bodyClassName='py-3 px-0 medium:px-10 medium:py-5 text-black bg-[#faf9f8]  min-w-full medium:min-w-[55vw] min-h-screen medium:min-h-[65vh] rounded-lg '
    >
      <div className='flex flex-col medium:items-start medium:justify-between medium:flex-row md:gap-x-10'>
        <img
          src='https://images.unsplash.com/photo-1605858408265-44b8161fef36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='flex-shrink-0 object-cover w-full medium:w-[500px] h-[400px] medium:h-[600px] object-top'
        />
        <div className='flex-1 max-h-[50vh] medium:max-h-full overflow-y-scroll medium:overflow-hidden'>
          <div className='p-3'>
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
            <div className='my-2 '>
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
            <Button className='my-6 text-white bg-black'>Add To Cart</Button>
            <Link to='/' className='text-sm font-semibold text-gray-500 underline'>
              View Full Detail
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}
