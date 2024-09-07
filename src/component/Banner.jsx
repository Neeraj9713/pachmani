import React from "react";

function Banner({style}) {
  return (
    <div className={`w-[65rem] bg-white flex ${style}`}>
      <div className="w-full h-full ">
        <img className="rounded" src="../../src/assets/gorgeous.png" alt="" />
      </div>
      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-2xl font-serif">
          88% NATURAL HAIR CONDITIONER FOR DRY HAIR
        </h1>
        <p className="">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. 
        </p>
      </div>
    </div>
  );
}

export default Banner;
