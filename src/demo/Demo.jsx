import React, { useState } from "react";

const HoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      {/* <div className="relative w-[98vw] h-[86vh] flex justify-center items-center">
        <div className="relative w-80 h-80 border-[2px] border-red-400 flex items-center justify-center rounded-lg top-[10%] right-[10%]">
          <div className="absolute w-52 h-52 border-[2px] border-yellow-400 top-0"></div>
        </div>

        <div className="absolute w-52 h-52 border-[2px] border-blue-400"></div>
      </div> */}

      <div className="relative w-[98vw] h-[86vh] flex justify-center items-center">
        <div className="relative w-40 h-40 bg-yellow-500 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-blue-500"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </div>
        <div className="absolute"></div>
      </div>

      <div className="group relative z-50 hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Div 1 */}
        <div className="bg-blue-500 p-4 cursor-pointer hover:bg-blue-700 transition duration-300">Hover me (Div 1)</div>

        {/* Div 2 */}
        <div className={`${isHovered ? "block" : "hidden"} absolute top-full left-0 bg-green-500 p-4`}>I appear when Div 1 is hovered (Div 2)</div>
      </div>
    </div>
  );
};

export default HoverEffect;
