import React from 'react'

import Small from './Small'

function Whychoose() {
  return (
    <div className='max-w-7xl mx-auto flex justify-between '>
      <div className=''>
        <h1 className='text-2xl md:text-3xl mb-4 md:w-auto'>Nature’s Secret For Your Truly Health</h1>
        <p className='text-base md:w-auto w-[20rem] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <Small/>
        <Small/>
        <Small/>
      </div>
      <div className='hidden md:block ml-14'>
        <img className=' w-[35rem] h-[23rem]' src="src/assets/Frame 35.png" alt="" />
      </div>
    </div>
  )
}

export default Whychoose
