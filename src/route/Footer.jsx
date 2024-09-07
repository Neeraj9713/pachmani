import React from "react";
import { SiGmail } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="relative mt-20 pb-5 bg-[#EEEDEC] overflow-hidden p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:items-start flex-col md:flex-row ">
        <div className="mt-20  ">
          <img className="h-11 md:h-8 lg:h-14" src="src/assets/Visiting-Card.png" alt="" />
          <p className="w-60 mt-6 md:w-40 lg:w-72 md:text-sm md:mt-2 lg:text-base">
            We manufacture 100 % effective ayurvedic medicine which is ISO, GMB
            and other Government certified license
          </p>
        </div>
        <div className="mt-20 md:w-40 lg:w-72">
          <h1 className="text-3xl md:text-xl lg:text-3xl font-serif">Navigation</h1>
          <div className=" mt-6 md:mt-3 flex gap-4 text-base md:text-sm lg:text-base">
            <div className="grid gap-2 ">
              <h2>Home</h2>
              <h2>Haircare</h2>
              <h2>Skincare</h2>
              <h2>Men's</h2>
            </div>
            <div className=" grid gap-2 ">
              <h2>Health Care</h2>
              <h2>All Products</h2>
              <h2>About Us</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="mt-20 border-2 md:w-44 lg:w-72">
          <h1 className="text-3xl md:text-xl font-serif">HELP & GUIDE</h1>
          <div className="mt-6 md:mt-3 grid gap-4 md:gap-2 text-base md:text-sm lg:text-base">
            <p>Term and Condition</p>
            <p>Privacy Policy</p>
            <p>Shipping and Delivery</p>
            <p>Refund & Cancellation</p>
          </div>
        </div>
        <div className="mt-20 flex md:block flex-col justify-center items-center md:w-44 w-60 lg:w-72">
          <h1 className="text-3xl md:text-xl font-serif mb-6 md:mb-3 ">Reservation</h1>
          <div className="grid gap-8 md:gap-3">
          <div className="flex items-center gap-6 md:gap-3">
            <div className="border-[1px] border-[#212B36] p-2 rounded-full">
              <img className="w-4" src="/src/assets/calling.svg" alt="" />
            </div>
            <div className="md:text-sm lg:text-base">
              <p>+91 89890 91645</p>
              <p>+91 94256 62832</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:text-sm md:gap-3 lg:text-base">
            <div className="border-[1px] border-[#212B36] p-2 rounded-full md:text-sm">
              <SiGmail />
            </div>
            <div>
              <p className="">pachmarhiayurveda@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:text-sm md:gap-3 lg:text-base">
            <div className="border-[1px] border-[#212B36] p-2 rounded-full" >
              <FaAddressBook />
            </div>
            <div className="md:text-sm lg:text-base">
              <p>Arvind Mark, Main Market, Madhya Pradesh</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='mt-9 max-w-6xl mx-auto border-t-[1px] border-[#5B7700]'></div>
        <img className="absolute rotate-[150deg] -bottom-40  md:top-49 -left-4 w-52 h-96" src="src/assets/plant.png" alt="" />
        <img className="absolute top-0 md:-top-36 right-0 md:-right-5 w-52 h-96" src="src/assets/plant.png" alt="" />
        <div className="max-w-6xl mx-auto flex justify-end gap-4 mt-5">
          <img className="w-7 h-7" src="src/assets/facebook.svg" alt="" />
          <img className="w-7 h-7" src="src/assets/instagram.svg" alt="" />
          <img className="w-7 h-7" src="src/assets/twitter.svg" alt="" />
        </div>
    </div> 
  );
}

export default Footer;
