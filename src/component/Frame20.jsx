import React from 'react'
import frame20 from '../assets/frame20.png'

function Frame20() {
    const Data= [
        {
            name: "Haircare",
            img: frame20
        },   
        {
            name: "Haircare",
            img: frame20
        },   
        {
            name: "Haircare",
            img: frame20
        },   
        {
            name: "Haircare",
            img: frame20
        }  
    ]
  return (
    <>
        {
            Data.map((item , index)=>(        
                <div key={index} className='w-full h-56 relative'>
                    <h1 className='absolute z-[1] bottom-1 left-2 text text-3xl text-white font-semibold font-sans'>{item.name}</h1>
                    <img className='absolute brightness-[70%] w-full h-full object-cover -z-10' src={item.img} alt="" />
                </div>
            ))
        }
        </>
  )
}

export default Frame20
