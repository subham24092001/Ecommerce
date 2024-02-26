import React, { useState } from "react";
// Assets
import { WomenHero } from "../assets";
import { useSelector } from "react-redux";

const Hero = () => {
  //toggle theme
  const isDark = useSelector(state=>state.theme.isDark)

  //button effect
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 dark:bg-slate-900 bg-slate-300">
        <div className="container mx-auto flex justify-around h-full">
          {/* Text */}
          <div className="flex flex-col justify-center">
            {/* Pretitle */}
            <div className="font-semibold flex items-center uppercase dark:text-white">
              <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
            </div>

            {/* Title */}
            <h1 className="text-[70px] leading-[1.1] font-light mb-4 dark:text-white">
              AUTUMN SALE STYLISH <br />
              <span className="font-semibold ">WOMEN</span>
            </h1>

            {/* <Link to={"products"} smooth duration={500} className="self-start uppercase font-semibold border-b-2 border-primary"> */}
            <button className="self-start uppercase font-semibold dark:text-white hover:bg-green-400 border-b-2 border-primary" onClick={() => window.scrollTo({ top: 730, behavior: "smooth" })}>
              <button className={`${isClicked ? "text-red-200 transition duration-300" : ""}`} onClick={handleClick}>
                Discover More
              </button>
            </button>
            {/* </Link> */}
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img src={WomenHero} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
