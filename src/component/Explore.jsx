import React from 'react'

function Explore({data ,style}) {
  return (
    <div className=' xl:p-0 p-6 max-w-7xl mx-auto'>
    <h1 className={`w-max mt-20 mb-9 text-2xl font-serif border-b-2 border-[#00AB55] ${style}`}>{data}</h1>
    </div>
  )
}

export default Explore
