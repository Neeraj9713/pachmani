import React from 'react'
import OurStory2 from './OurStory2'

function OurStory() {
  return (
    <div className='max-w-7xl mx-auto grid md:grid-cols-3 md:gap-4 gap-6'>
      <OurStory2 width={"w-full"} height={"h-[260px] md:h-[544px]"}/>
      <div className='grid gap-6'>
      <OurStory2 width={"w-full "} height={"h-[260px]"}/>
      <OurStory2 width={"w-full"} height={"h-[260px]"}/>
      </div>
        
      <div className='grid gap-6'>
      <OurStory2 width={"w-full"} height={"h-[260px]"}/>
      <OurStory2 width={"w-full"} height={"h-[260px]"}/>
      </div>
    </div>
  )
}

export default OurStory
