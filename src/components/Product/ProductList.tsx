import React from 'react'
import { Product } from 'src/@types/product'
import ProductCard from './ProductCard'

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 medium:grid-cols-3 medium:gap-3 xl:gap-4 xl:grid-cols-6'>
      {products &&
        products.length > 0 &&
        products.map((item: Product, index) => <ProductCard key={index} product={item}></ProductCard>)}
    </div>
  )
}
