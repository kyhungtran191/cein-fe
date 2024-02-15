import React from 'react'
import { Product } from 'src/@types/product'
import Heart from 'src/icons/Heart'
import TooltipWrapper from '../Tooltip/TooltipWrapper'
import Add from 'src/icons/Add'
import { SearchIcon } from 'src/icons'

export default function ProductCard({ product }: { product: Product }) {
  const { _id, category, featured_image, images, name, original_price, sale_price } = product
  return (
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
                  <SearchIcon className='inline-block transition-all duration-300 scale-100 opacity-50 cursor-pointer hover:opacity-100 hover:scale-125'></SearchIcon>
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
  )
}
