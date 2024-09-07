import React from 'react'
import Frame24 from './Frame24'

function OurRecent() {
  return (
    <div className=' px-5 md:grid md:grid-cols-2 lg:grid-cols-4 flex justify-between items-center max-w-7xl mx-auto flex-wrap gap-5'>
        <div className='text-2xl flex justify-center items-center flex-col w-64 lg:w-44 h-20 p-5'>
            <h1 className='lg:text-xl' >OUR RECENT</h1>  
            <h1 className='lg:text-xl'>ACHIEVEMENTS</h1>
        </div>
        <Frame24 />
    </div>
  )
}

export default OurRecent
