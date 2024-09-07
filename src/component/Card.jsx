import React from 'react'

function Card() {
    const data = [
        {
            name: "Mila McSabbu",
            para: "Freelance Designer",
            last:  "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish."
        },
        {
            name: "Mila McSabbu",
            para: "Freelance Designer",
            last:  "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish."
        },
        {
            name: "Mila McSabbu",
            para: "Freelance Designer",
            last:  "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish."
        }
    ]
  return (
    <div className='max-w-7xl mx-auto md:flex md:justify-between items-center grid sm:grid-cols-2 grid-cols-1 xl:p-0 p-6'>
        {data.map((item)=>(
            <div className='md:w-[374px] h-[273px] flex flex-col justify-center items-center p-11 shadow-lg'>
                <div className='flex justify-center items-center gap-6'>
                    <img className='rounded-full' src="src/assets/cheerful.png" alt="" />
                    <div>
                        <h2 className='text-lg'>Mila McSabbu</h2>
                        <p className='text-sm'>Freelance Designer</p>
                    </div>
                </div>
                <div>
                    <p className='text-base'>OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card
