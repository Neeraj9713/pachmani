import React from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import visitingCard from "../assets/Visiting-Card.png"
import frame1 from "../assets/frame1.jpg"
import frame20 from "../assets/frame20.png"
import frame2 from "../assets/frame2.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useAuth } from '../store/auth';

function Navbar() {

  const {select, setSelect, isLoggedIn} = useAuth();

  return (
    <div >
      <p className='text-center bg-[#00AB55] py-4 text-white'>For any queries related to orders  please contact +91 8989091645</p>
        <div className='max-w-7xl flex items-center justify-end py-5 px-3'>
          <div className='md:hidden'>
                <FiAlignLeft style={{fontSize:'25px',}} />
          </div>

            <img className='w-36 h-14 m-auto md:mr-[35%]' src={visitingCard} alt="can't load" />
            <div className='flex md:gap-4 gap-5 mr-4' >
                <RiShoppingBagLine style={{fontSize:'25px'}} />
               <Link to="/login"><RiAccountCircleLine style={{fontSize:'25px'}} /></Link>                
            </div>
        </div>
        <div className='border-t-[1px] border-[#00AB55]'></div>
        <div className='hidden max-w-7xl mx-auto md:flex justify-between items-center font-medium p-6 text-lg'>
            <Link className={`${select === 'home' && `text-[#00AB55]`}`} to="/" onClick={()=>setSelect("home")}>Home</Link>
            <Link className={`${select === 'haircare' && `text-[#00AB55]`}`} to="/haircare" onClick={()=>setSelect("haircare")}>HairCare</Link>
            <Link className={`${select === 'skincare' && `text-[#00AB55]`}`} to="/" onClick={()=>setSelect("skincare")}>Skincare</Link>  
            <Link className={`${select === 'mens' && `text-[#00AB55]`}`} to="/" onClick={()=>setSelect("mens")}>Men's</Link>
            <Link className={`${select === 'products' && `text-[#00AB55]`}`} to="/" onClick={()=>setSelect("products")}>All Products</Link>
            <Link className={`${select === 'about' && `text-[#00AB55]`}`} to="/" onClick={()=>setSelect("about")}>About Us</Link>
            <Link className={`${select === 'contact' && `text-[#00AB55]`}`} to="/" onClick={()=>setSelect("contact")}>Contact Us</Link>
            {!isLoggedIn && <Link className={`${select === 'logout' && `text-[#00AB55]`}`} to="/logout" onClick={()=>setSelect("logout")}>Logout</Link>}
            
        </div>

        <Swiper className="mySwiper">
        <SwiperSlide><div className='w-full h-[474px] relative'>
            <img className='absolute w-full h-full object-center object-cover md:object-cover' src={frame1} alt="Can't load nav Image" />
            <h2 className='text-[#fff] absolute top-36 md:top-32 left-16 md:left-28 md:text-4xl font-serif md:font-medium'>AYURVEDA EXPERTISE IN A OIL</h2>
            <h2 className='absolute top-44 md:top-44 left-16 md:left-28 font-serif text-[#fff] md:text-3xl'>For Fresh, Balanced Scalp & Shiny Hair</h2>
            <p className='absolute top-56 md:top-56 text-[#fff] left-16 md:left-28 md:text-sm md:w-[464px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <button className='absolute top-[26rem] md:top-[354px] left-32 md:left-28 p-2 md:p-0 w-30 md:w-60 h-10 md:h-14 bg-white border-t-[1px] border-[#00AB55] text-[#00AB55] font-semibold md:text-lg hover:opacity-90 hover:text-[1.2rem]'><a href="">Shop Now</a></button>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-[474px] relative'>
            <img className='absolute w-full h-full object-center object-cover md:object-cover' src={frame20} alt="Can't load nav Image" />
            <h2 className='absolute top-36 md:top-32 left-16 md:left-28 md:text-4xl font-serif md:font-medium'>AYURVEDA EXPERTISE IN A OIL</h2>
            <h2 className='absolute top-44 md:top-44 left-16 md:left-28 font-serif md:text-3xl'>For Fresh, Balanced Scalp & Shiny Hair</h2>
            <p className='absolute top-56 md:top-56 left-16 md:left-28 md:text-sm md:w-[464px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <button className='absolute top-[26rem] md:top-[354px] left-32 md:left-28 p-2 md:p-0 w-30 md:w-60 h-10 md:h-14 bg-white border-t-[1px] border-[#00AB55] text-[#00AB55] font-semibold md:text-lg hover:opacity-90 hover:text-[1.2rem]'><a href="">Shop Now</a></button>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full h-[474px] relative'>
            <img className='absolute w-full h-full object-center object-cover md:object-cover' src={frame2} alt="Can't load nav Image" />
            <h2 className='absolute top-36 md:top-32 left-16 md:left-28 md:text-4xl font-serif md:font-medium'>AYURVEDA EXPERTISE IN A OIL</h2>
            <h2 className='absolute top-44 md:top-44 left-16 md:left-28 font-serif md:text-3xl'>For Fresh, Balanced Scalp & Shiny Hair</h2>
            <p className='absolute top-56 md:top-56 left-16 md:left-28 md:text-sm md:w-[464px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <button className='absolute top-[26rem] md:top-[354px] left-32 md:left-28 p-2 md:p-0 w-30 md:w-60 h-10 md:h-14 bg-white border-t-[1px] border-[#00AB55] text-[#00AB55] font-semibold md:text-lg hover:opacity-90 hover:text-[1.2rem]'><a href="">Shop Now</a></button>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Navbar
