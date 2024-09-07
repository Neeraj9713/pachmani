import React, { useState } from 'react'
import panchmari from "../assets/panchmari1.png";
import image from "../assets/image.svg";
import { RiShoppingBagLine } from "react-icons/ri";

function Order() {

  const [data , setdata] = useState("One");

  return (
    <div className='max-w-7xl mx-auto flex justify-center items-center'>
      <div className='flex h-full py-5 w-[40rem] border-[1px] border-[#00AB55] rounded-md'>
        <img className='w-auto h-80 ' src={panchmari} alt="" />
      </div>
      <div className='px-7 flex flex-col gap-2'>
        <h1 className='font-serif text-4xl'>Bhringraj Oil</h1>
        <div className='text-[#00AB55] '>
            <p className='flex items-center gap-2'>4.6 <img className='h-4' src={image} alt="" /> <span></span>(43)</p>
        </div>
        <p className='text-2xl'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur as quasi nulla expedita!</p>
        <h1 className='text-2xl font-serif'>MRP <span>₹100.00</span></h1>
        <p className='text-sm'>(incl. off all taxes)</p>
        <h1 className='text-2xl'>Available in: (Net Quantity)</h1>
        <div className='flex items-center gap-6'>
            <div className={`${data === "One" && "bg-[#00AB55]"} w-12 h-12 border-[1px] border-[#00AB55] flex justify-center items-center rounded-full`}
            onClick={()=>setdata("One")}>
                <p className=''>8g</p>
            </div>
            <div className={`${data === "Two" && "bg-[#00AB55]"} w-12 h-12 border-[1px] border-[#00AB55] flex justify-center items-center rounded-full`}
            onClick={()=>setdata("Two")}>
                <p className=' '>25g</p>
            </div>
            <div className={`${data === "Three" && "bg-[#00AB55]"} w-12 h-12 border-[1px] border-[#00AB55] flex justify-center items-center rounded-full`}
            onClick={()=>setdata("Three")}>
                <p className=''>50g</p>
            </div>
        </div>
        <div className='flex items-center gap-7'>
            <div className='border-[1px]  border-[#00AB55] px-28 py-2 justify-center text-green-500 bg-white hover:bg-gray-100  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-green-800 dark:bg-green-600 dark:border-green-700 dark:text-white dark:hover:bg-green-700 mr-2 mb-2'>
            <RiShoppingBagLine style={{ width: "24px" }} />
                <p>Buy Now</p>
            </div>
            <div className='text-green-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-500 dark:bg-white dark:border-green-700 dark:text-green-600 dark:hover:bg-green-100 mr-2 mb-2'>
            <RiShoppingBagLine style={{ width: "24px" }} />
                <p>Add to Cart</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Order
