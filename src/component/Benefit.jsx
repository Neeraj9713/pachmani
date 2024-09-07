import React from "react";
import Explore from "./Explore";
import Banner from "./Banner";

function Benefit() {
  return (
    <div className=" bg-[#CD862A1A]">
      <div className="max-w-7xl mx-auto py-4">
        <Explore data={"BENEFITS"} style2={"w-[7rem] ml-1"} style={"mt-0"}/>
        <div className="flex flex-col gap-10">
          <Banner />
          <Banner style={"ml-24"}/>
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Benefit;
