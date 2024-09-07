import React, { useState } from 'react'

function Questions({head, para}) {

  const [control , setControl] = useState();
  
  return (
    <div className="grid gap-3 p-6 border-[0.5px]">
    <h1 onClick={()=>setControl(!control)} className=" text-lg font-bold font-serif w-full flex justify-between">
      {head}
    <span className="">--</span>
    </h1>
    {
      control && <p className="opacity-80 text-base">
      {para}
    </p>
    }
    
  </div>
  )
}

export default Questions
