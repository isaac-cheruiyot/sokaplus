import React from 'react'

const Gallery = () => {
  return (
    <div className='p-8'>
      <div className='flex items-center gap-4 my-4'>
          <div className='h-12 w-[4px] bg-yellow-500'></div>
          <div>
            <h2 className='text-xl uppercase font-bold text-gray-400'>Sokaplus Sporting Academy</h2>
            <h1 className='text-2xl uppercase font-bold font-sans textblack'>A Glimpse of our Gallery</h1>
          </div>
          </div>
      {/* images */}
      <div className='grid md:grid-cols-3 gap-4 relative'>
        <div className='h-64 overflow-hidden'>
          <img src="/Images/SPA_0071.webp" alt="" className='h-full object-cover w-full' />
        </div>
        {/* 2 */}
        <div className='h-64 hover:absolute hover:top-0 hover:w-full hover:h-full left-0 transition-all duration-100 overflow-hidden'>
          <img src="/Images/DSC_0107.webp" alt="" className='h-full object-cover w-full' />
        </div>
        {/* 3 */}
        <div className='h-64 overflow-hidden'>
          <img src="/Images/SPA_0204.webp" alt="" className='h-full object-cover w-full' />
        </div>
        {/* 4 */}
        <div className='h-64 overflow-hidden'>
          <img src="/Images/SPA_6743.webp" alt="" className='h-full object-cover w-full'/>
        </div>
        {/* 5 */}
        <div className='h-64 overflow-hidden'>
          <img src="/Images/SPA_9909-2.webp" alt="" className='h-full object-cover w-full' />
        </div>
        {/* /6 */}
        <div className='h-64 overflow-hidden'>
          <img src="/Images/SPA_0071.webp" alt="" className='h-full object-cover w-full'/>
        </div>

      </div>
    </div>
  )
}

export default Gallery