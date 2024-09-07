import React from 'react'

function Frame24() {
    const Data = [
        {
            percent : "100%",
            product: "Product purity"
        },
        {
            percent : "458+",
            product: "Happy Customer"
        },
        {
            percent : "25+",
            product: "Years Experience"
        }
    ]

  return (
    <>
    {
        Data.map((item,idx)=>(
            <div key={idx} className='gap-5 flex justify-between items-center border-[1px] border-[#00AB55] rounded-md max-w-max h-20 p-5'>
                    <h1 className='text-4xl lg:text-2xl text-[#00AB55] '>{item.percent}</h1>
                    <h1 className='text-3xl lg:text-xl text-start'>{item.product}</h1>
            </div>
        ))
    }
      
    </>
  )
}

export default Frame24
