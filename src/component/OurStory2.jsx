import React from 'react'

function OurStory2({width , height}) {
  return (
      <div className={`relative ${width} ${height} text-white`}>
        <img className='absolute h-full w-full object-cover brightness-50 ' src="src/assets/frame20.png" alt="" />
        <h1 className='absolute font-serif text-2xl text-center left-4 bottom-48'>Our Story</h1>
        <p className='absolute left-4 bottom-24 md:bottom-24'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <button className='absolute left-4 bottom-8 font-serif p-2 border-[1px] border-white rounded-md hover:bg-white hover:text-black'>Read More</button>
      </div>
  )
}

export default OurStory2
