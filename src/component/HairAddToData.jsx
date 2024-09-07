import { Link } from "react-router-dom";
import link from "../assets/Linkdesign-1.png";
import react from "../assets/Favorite.svg";
import image from "../assets/image.svg";
import { RiShoppingBagLine } from "react-icons/ri";
import { useState } from "react";

function HairAddToData() {
  const DummyData = [
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    },
    {
      upper: {
        img: link,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Bhringraj Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      cost: 100,
    }
  ];

  const [three, setThree] = useState(3);

  const handleButton = () =>{
    setThree(three + 3);
  }
  const slice = DummyData.slice(0,three);

  return (
    <>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-10  p-6 xl:p-0" >
      {slice.map((item, index) => (
        <div
          key={index}
          className="w-full h-[460] border-[2px] border-[#00AB55] rounded-md">
          <div className="p-2">
            <div className="relative flex justify-center items-center">
              <img className="" src={item.upper.img} alt="" />
              <img
                className="absolute w-6 top-2 right-2"
                src={item.upper.react}
                alt=""
              />
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#00AB55] pt-2">
              <p>{item.middle.para}</p>
              <div className="flex">
                <span className="pr-2">{item.middle.rating}</span>
                <img src={item.middle.img} alt="" />
                <span>{43}</span>
              </div>
            </div>
            <h1 className="text-xl font-medium">{item.name}</h1>
            <p className="text-sm py-4">{item.para}</p>
            <h1 className="text-[22px]">₹{item.cost}</h1>
          </div>
          <div className=" flex justify-center items-center gap-2 text-xl text-center py-3 bg-[#00AB55] text-white">
            <RiShoppingBagLine style={{ width: "24px" }} />
            <Link to="/haircare/bringraj">Add to Bag</Link>
          </div>
        </div>
      ))}
    </div>
      <div className="text-center mt-8">
          <button className="border-[2px] border-green-600 h-10 w-40 rounded-2xl font-semibold" onClick={handleButton} >See More</button>
      </div>
      </>
  );
}
export default HairAddToData;
