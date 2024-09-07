import React from "react";

function Ingredent({Flex , data}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#FFF] rounded-full w-40 h-40 p-5">
        <img className="h-28 w-28" src={Flex} alt="" />
      </div>
      <div>
        <h1 className="text-lg">{data}</h1>
      </div>
    </div>
  );
}

export default Ingredent;
