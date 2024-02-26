import React, { useContext, useState } from "react";
// link
import { Link } from "react-router-dom";
// ṛeact-icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
// context
// import { CartContext } from "../contexts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const Product = ({ product }) => {
  //toggle theme
  const isDark = useSelector((state) => state.theme.isDark);

  //button effect
  const [isClicked, setIsClicked] = useState(false);
  const [vClicked, viewClicked] = useState(false);

  const plusClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  const viewClick = () => {
    viewClicked(true);
    setTimeout(() => {
      viewClicked(false);
    }, 300);
  };
  // Cart Context
  // const { addToCart, dot } = useContext(CartContext);

  const { dot } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // destructure product
  const { id, images, category, title, price } = product;
  // // console.log(product);

  const handleAddCart = ()=>{
    // console.log(id,title)
    dispatch(addToCart(product, id))
  }

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <div className="relative border border-[#e4e4e4] h-[300px] mb-4 overflow-hidden group transition">
        {/* Images */}
        <div className="w-full h-full flex justify-center items-center rounded-sm dark:bg-slate-900">
          <div className="relative w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[220px] group-hover:scale-110 transition duration-300" src={images[0]} alt={title} />
            <div className={`absolute ${dot.includes(id) ? "block" : "hidden"} w-3 h-3 rounded-xl bg-red-500 -right-1 -top-1`}></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={handleAddCart}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-400 hover:bg-slate-400">
              <button className={`${isClicked ? "bg-red-100 animate-ping transition duration-500" : ""}`} onClick={plusClick}>
                <BsPlus className="text-3xl" />
              </button>
            </div>
          </button>

          <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
            <button className={`${!vClicked ? "hover:animate-spin transition duration-500" : ""}`} onClick={viewClick}>
              <BsEyeFill />
            </button>
          </Link>
        </div>
      </div>

      {/* Category & Title & Price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category.name}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 hover:underline dark:text-white">{title}</h2>
        </Link>
        <div className="font-semibold dark:text-white">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
