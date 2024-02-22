import React from 'react'
import Button from 'src/components/Button/Button'
import ProductList from 'src/components/Product/ProductList'
import { productList } from 'src/utils/constant'

export default function Featured() {
  return (
    <div className='section'>
      <div className='container'>
        <div className='text-center section-heading'>CEIN. Featured</div>
        <div className='section-desc'>Beautifully Functional. Purposefully Designed. Consciously Crafted.</div>
        <div className='product-list'>
          <ProductList products={productList.slice(0, 5)}></ProductList>
          <Button className='mx-auto mt-4 text-white bg-black rounded-sm w-max hover:text-opacity-85 hover:bg-opacity-85'>
            Explore More
          </Button>
        </div>
      </div>
    </div>
  )
}
