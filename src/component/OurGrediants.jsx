import React from 'react'
import Grediants from './Grediants'

function OurGrediants() {
    const Data = [
        {
            image: "cardamom.png",
            para: "Green cardamom"
        },
        {
            image: "nuts.png",
            para: "Green cardamom"
        },
        {
            image: "cardamom.png",
            para: "Green cardamom"
        },
        {
            image: "cardamom.png",
            para: "Green cardamom"
        },
        {
            image: "cardamom.png",
            para: "Green cardamom"
        },
        {
            image: "cardamom.png",
            para: "Green cardamom"
        },
        {
            image: "cardamom.png",
            para: "Green cardamom"
        },
        {
            image: "cardamom.png",
            para: "Green cardamom"
        }
    ]

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center md:gap-6 max-w-7xl mx-auto '>
       { Data.map((item , idx)=>(
           <Grediants key={idx} img={item.image} para={item.para} />
        ))}
    </div>
  )
}

export default OurGrediants
