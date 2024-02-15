export default function Services() {
  return (
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
  )
}
