import React from 'react'
import Button from 'src/components/Button/Button'
import ProductList from 'src/components/Product/ProductList'
const productList = [
  {
    _id: '1',
    images: ['./images/bag1.png', './images/bag2.png'],
    featured_image: './images/bag2.png',
    original_price: 29.99,
    sale_price: 19.99,
    name: 'Product 1',
    category: 'Electronics'
  },
  {
    _id: '2',
    images: ['./images/bag2.png', './images/bag1.png'],
    featured_image: './images/bag1.png',
    original_price: 39.99,
    sale_price: 29.99,
    name: 'Product 2',
    category: 'Clothing'
  },
  {
    _id: '3',
    images: ['./images/bag1.png', 'image6.jpg'],
    featured_image: './images/bag2.png',
    original_price: 49.99,
    sale_price: 39.99,
    name: 'Product 3',
    category: 'Home & Kitchen'
  }
  // Add more products as needed
]
export default function Featured() {
  return (
    <div className='section'>
      <div className='container'>
        <div className='text-center section-heading'>CEIN. Featured</div>
        <div className='section-desc'>Beautifully Functional. Purposefully Designed. Consciously Crafted.</div>
        <div className='product-list'>
          <ProductList products={productList.slice(0, 6)}></ProductList>
          <Button className='mx-auto mt-4 text-white bg-black rounded-sm w-max hover:text-opacity-85 hover:bg-opacity-85'>
            Explore More
          </Button>
        </div>
      </div>
    </div>
  )
}
