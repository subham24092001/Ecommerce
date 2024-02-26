import React, { useContext, useEffect, useState } from "react";
// react-icons
import { BsBag } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
// react-router-dom
import { Link } from "react-router-dom";
// Assets
import { Logo } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { toggletheme } from "../store/slices/themeCart";
import { setisOpen } from "../store/slices/sidebarSlice";

const Header = () => {
  //toggle theme
  const isDark = useSelector((state) => state.theme.isDark);

  const dispatch = useDispatch();

  const handletoggletheme = () => {
    dispatch(toggletheme());
  };

  //button effect
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  // Header State
  const [isActive, setIsActive] = useState(false);

  // Navbar hidden state
  const [navHide, setNavHide] = useState(window.innerWidth >= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const handleCartOpen = () => {
    dispatch(setisOpen(!isOpen));
  };

  const handleNav = () => {
    setNavHide(!navHide);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  // const { itemAmount } = useContext(CartContext);
  const { itemAmount } = useSelector((state) => state.cart);

  // Event Listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      setNavHide(false);
    };
  }, []);

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      {/* <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} dark:bg-black fixed w-full z-10 transition-all`}> */}
      {isMobile && (
        <div className="fixed mt-5 ml-11 text-xl mx-auto z-30 cursor-pointer" onClick={handleNav}>
          {navHide ? <FaTimes className="w-full" /> : <FaBars className="w-full" />}
        </div>
      )}
      <header className={`bg-white py-6 dark:bg-black fixed h-full lg:h-fit w-fit lg:w-full z-20 transition-all shadow-lg lg:shadow-none`}>
        <div className={`${!isMobile || navHide ? "flex" : "hidden"} container flex-col lg:flex-row items-center justify-between h-full lg:mx-auto pt-10 lg:pt-0`}>
          {/* Logo */}
          <Link to={"/"}>
            <div>
              <button className={`${isClicked ? "bg-red-100 transition duration-300" : ""} `} onClick={handleClick}>
                <img className="w-[40px] hover:scale-125 hover:animate-spin dark:bg-white" src={Logo} alt="" />
              </button>
            </div>
          </Link>

          {/* Theme */}
          <div>
            <button
              onClick={handletoggletheme}
              className={`animate-pulse w-12 h-12 bottom-12 right-12 bg-black dark:bg-white rounded-full text-white dark:text-black font-semibold `}>
              {isDark ? "LHT" : "DRK"}
            </button>
          </div>

          {/* Help */}
          <div>
            <Link to={"/help"}>
              <button
                className={`hover:bg-orange-200 ${
                  isDark && "dark:hover:bg-orange-200"
                } animate-pulse w-12 h-7 bottom-12 right-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl`}>
                Help
              </button>
            </Link>
          </div>

          {/* contact */}
          <div>
            <Link to={"/contact"}>
              <button
                className={`hover:bg-orange-200 ${
                  isDark && "dark:hover:bg-orange-200"
                } flex items-center justify-center animate-pulse w-12 h-7 bottom-12 right-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl`}>
                <IoIosContact size={24} />
              </button>
            </Link>
          </div>

          {/* Cart */}
          <div onClick={handleCartOpen} className="cursor-pointer flex relative animate-bounce">
            <BsBag className={`text-2xl hover:text-green-400 dark:text-white ${isDark && "dark:hover:text-green-300"}`} />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
