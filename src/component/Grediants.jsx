import React from 'react'

function Grediants({img , para}) {
  return (
    <div className='bg-[#F7F7F7] md:max-w-max md:h-24 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex justify-center items-center w-full h-full'><img className='w-28 h-16' src={`src/assets/${img}`} alt="can't find" /></div>
      <div className='text-xs font-semibold text-center pr-2'> <p>{para}</p></div>
    </div>
  )
}

export default Grediants
