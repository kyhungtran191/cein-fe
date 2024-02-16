/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import { Product } from 'src/@types/product'
import Button from 'src/components/Button/Button'
import Dropdown from 'src/components/Dropdown/Dropdown'
import FilterProduct from 'src/components/Filter/FilterProduct'
import ProductCard from 'src/components/Product/ProductCard'
import useQueryParams from 'src/hooks/useQueryParams'
import { CheckIcon } from 'src/icons'
import Filter from 'src/icons/Filter'
import { colors, productList } from 'src/utils/constant'

export default function Products() {
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const params = useQueryParams()
  useEffect(() => {
    document.title = 'Product List'
    return () => {
      document.title = ''
    }
  }, [])
  return (
    <div className='section'>
      <div className='py-4 product-container'>
        <div className='grid grid-cols-1 md:grid-cols-[280px_minmax(500px,_1fr)] gap-[12px]  medium:gap-[20px]'>
          <div className='flex-col hidden max-h-[85vh] col-span-1 p-4 overflow-y-scroll md:flex'>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Categories</h2>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <label className={`custom-checkbox w-5 h-5 block cursor-pointer`}>
                  <input
                    type='checkbox'
                    className='hidden'
                    checked={params.category === 'tee' ? true : false}
                    value={'tee'}
                  />
                  <div className='relative w-full h-full rounded-md bg-thinGrey'>
                    <div className='absolute items-center justify-center hidden w-full h-full rounded-md bg-darkGrey'>
                      <CheckIcon className='w-3 h-3 text-white'></CheckIcon>
                    </div>
                  </div>
                </label>
                Tee
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                {/* <Checkbox></Checkbox> */}
                Women
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                {/* <Checkbox></Checkbox> */}
                Kids
              </div>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Size</h2>
              <div className='grid grid-cols-4 gap-4 my-4 medium:gap-3'>
                {['S', 'M', 'L', 'XL'].map((item, index) => (
                  <div
                    className='flex items-center justify-center px-4 py-2 font-medium rounded-lg cursor-pointer bg-footer'
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Colors</h2>
              <div className='grid grid-cols-4 gap-4 my-4 medium:grid-cols-3 medium:gap-6'>
                {colors.map((item, index) => (
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
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Sales</h2>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                {/* <Checkbox></Checkbox> */}
                70%
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                {/* <Checkbox></Checkbox> */}
                50%
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                {/* <Checkbox></Checkbox> */}
                30%
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                {/* <Checkbox></Checkbox> */}
                20%
              </div>
            </div>
            <Button className='mt-5 font-medium text-white transition-all duration-300 hover:bg-black24/100 bg-black24/90'>
              Clear filter
            </Button>
          </div>
          <div>
            <h2 className='text-3xl font-medium section-heading'>Men’s Clothing & Apparel - New Arrivals</h2>
            <div className='flex flex-wrap items-center justify-between gap-3 mb-3'>
              <p className='text-base font-medium text-darkGrey'>Found 16 results</p>
              <FilterProduct></FilterProduct>
              <Button className='block text-white bg-black rounded-lg w-max md:hidden'>
                <Filter></Filter>
              </Button>
              {/* Dropdown */}
            </div>
            {/* Filter table */}
            <div
              className={`transition-height duration-500 ease-in-out rounded-lg shadow-xl shadow-slate-300 max-h-[400px] overflow-auto block md:none  ${
                isFilter ? 'h-[400px]' : 'h-0'
              }`}
            >
              <div
                className={`transition-all duration-300 ease-linear  ${
                  isFilter ? 'visible opacity-100' : 'invisible opacity-0 duration-100'
                } p-6 grid grid-cols-2 gap-3`}
              >
                <div className='w-full my-2'>
                  <h2 className='text-xl font-semibold'>Gender</h2>
                  <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                    {/* <Checkbox></Checkbox> */}
                    Men
                  </div>
                  <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                    {/* <Checkbox></Checkbox> */}
                    Women
                  </div>
                  <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                    {/* <Checkbox></Checkbox> */}
                    Kids
                  </div>
                </div>
                <div className='w-full col-span-2 my-2'>
                  <h2 className='text-xl font-semibold'>Colors</h2>
                  <div className='grid grid-cols-4 gap-4 my-4 medium:grid-cols-3 medium:gap-6'>
                    {Array(4)
                      .fill(0)
                      .map((item, index) => (
                        <div className='flex flex-col items-center justify-center' key={index}>
                          <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
                          <div className='my-2 text-center'>Black</div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className='w-full col-span-2 my-2'>
                  <h2 className='text-xl font-semibold'>Size</h2>
                  <div className='grid grid-cols-4 gap-4 my-4 medium:grid-cols-5 medium:gap-6'>
                    {['S', 'M', 'L', 'XL'].map((item, index) => (
                      <div className='font-medium text-center cursor-pointer' key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Button className='col-span-2 mt-2 font-medium text-white transition-all duration-300 hover:bg-black24/100 bg-black24/90'>
                  Apply
                </Button>
                <Button className='w-full col-span-2 mt-2 font-medium text-white bg-green-500 text-md'>
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            </div>
            {/* Product list */}
            <div className='grid justify-center grid-cols-2 gap-5 mt-6 medium:grid-cols-4'>
              {productList.map((item: Product, index) => {
                return <ProductCard product={item} key={index}></ProductCard>
              })}
            </div>
            {/* <Pagination pageSize={15}></Pagination> */}
          </div>
        </div>
      </div>
    </div>
  )
}
