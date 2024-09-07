import React from "react";
import Right from "../assets/Done.svg"

function Small() {
  return (
    <div className="flex gap-4 w-80 h-16 my-4">
      <div className="flex items-center">
        <img className="w-6 h-6 p-[2px] bg-[#00AB55]" src={Right} alt="" />
      </div>
      <div className="gap-4">
        <h1 className="text-xl ">100% Organic Herbel</h1>
        <p className="text-xs">
        It is a long established fact that a reader will be distracted by the 
        </p>
      </div>
    </div>
  );
}

export default Small;
