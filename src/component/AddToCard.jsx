import React, { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import rectangle from "../assets/Rectangle 11.png";
import react from "../assets/Favorite.svg";
import image from "../assets/image.svg";
import { Link } from "react-router-dom";

function AddToCard() {
  const [three, setThree] = useState(3);
  const Data = [
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
    {
      upper: {
        img: rectangle,
        react: react,
      },
      middle: {
        para: "OIL",
        rating: 4.6,
        img: image,
        ratePrsn: 43,
      },
      name: "Garlic Oil",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cost: 100,
    },
  ];

  const slice = Data.slice(0, three);
  const addData = () => {
    setThree(three + 3);
  };

  return (
    <>
      <div className="md:grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {slice.map((item, index) => (
          <div
            key={index}
            className="md:w-[370px] h-[460] border-[2px] border-[#00AB55] rounded-md"
          >
            <div className="p-2">
              <div className="relative">
                <img className=" w-full" src={item.upper.img} alt="" />
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
            <div className="hover:bg-green-700 focus:ring focus:ring-green-500 flex justify-center items-center gap-2 text-xl text-center py-3 bg-[#00AB55] text-white">
              <RiShoppingBagLine style={{ width: "24px" }} />
              <Link to="/haircare/bringraj">Add to Bag</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className="rounded-2xl before:ease relative h-12 w-40 overflow-hidden border border-[#00AB55] shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#00AB55]  before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:before:-rotate-180"
          onClick={addData}
        >
          <span className="relative z-10">See more</span>
        </button>
      </div>
    </>
  );
}

export default AddToCard;
