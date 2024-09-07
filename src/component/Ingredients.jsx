import React from "react";
import Explore from "./Explore";
import Ingredent from "./Ingredent";
import Flex from "../assets/FLEX-SEEDS.png";

function Ingredients() {
  return (
    <div className="bg-[#EAECDD8C]">
      <div className="max-w-7xl mx-auto py-5">
        <Explore data={"INGREDIENTS"} style={"mt-1"} />
        <div className="flex items-center gap-20">
          <Ingredent Flex={Flex} data={"Flex seeds"} />
          <Ingredent Flex={Flex} data={"Flex seeds"} />
          <Ingredent Flex={Flex} data={"Flex seeds"} />
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
