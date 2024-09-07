import React from 'react'
import Capa_1 from "../assets/Capa_1.svg";
import Capa_2 from "../assets/Frame.svg";
import Capa_3 from "../assets/Capa_2.svg";
import Capa_4 from "../assets/Layer_1.svg";

function Auth() {
    const Data = [
        {
            img: Capa_1,
            name:"Top Rank Frames"
        },
        {
            img: Capa_2,
            name:"Trusted Products"
        },
        {
            img: Capa_3,
            name:"Organic Certification"
        },
        {
            img: Capa_4,
            name:"Fast Delivery"
        }
    ]

  return (
    <>
    {
        Data.map((item , index)=>(
            <div key={index} className='flex items-center justify-center flex-col '>
                <img className='w-8 md:w-14 ' src={item.img} alt=""/>
                <p className='text-xs text-center md:text-base '>{item.name}</p>
            </div>
        ))
    }
    </>
  )
}

export default Auth;
