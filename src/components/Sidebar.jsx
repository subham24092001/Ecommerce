import React, { useContext} from "react";
// react-router-dom
import { Link } from "react-router-dom";
// icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// components
import { CartItem } from "../components";
// context
// import {CartContext} from "../contexts";
import { useDispatch, useSelector } from "react-redux";
import {handleClosing,setisOpen} from "../store/slices/sidebarSlice"
import { clearCart } from "../store/slices/cartSlice";

const Sidebar = () => {
  //toggle theme
  const isDark = useSelector(state => state.theme.isDark)

  const isOpen = useSelector(state => state.sidebar.isOpen)
  const dispatch = useDispatch()
  
  const { cart, itemAmount, total } = useSelector(state=>state.cart);
  // const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  
  // console.log(cart[0])
  // console.log(total) 
  const handleCheckout = () => {
    dispatch(setisOpen());
  };

  const handleclose = () => {
    dispatch(handleClosing())
  }

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        }  dark:bg-slate-800 w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] scrollbar scrollbar-thumb-red-600`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between py-6 border-b ">
          <div className="uppercase text-sm font-semibold animate-bounce dark:text-white">Shopping Bag ({itemAmount})</div>
          {/* Icon */}

          <div onClick={handleclose} className="cursor-pointer w-8 h-8  flex justify-center items-center scale-125 animate-spin">
            <IoMdArrowForward className="text-2xl dark:text-white" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-y-2 h-[40vh] overflow-y-auto overflow-x-hidden border-b scrollbar-thin scrollbar-webkit dark:text-white">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>

        {/* Sidebar Bottom */}
        <div className="flex flex-col gap-y-1 py-1 md:py-0 md:gap-y-1 lg:py-0 lg:gap-y-1 mt-4 bottom-10">
          <div className="flex w-full justify-between items-center">
            {/* Total */}
            <div className="uppercase font-semibold dark:text-white">
              <span className="mr-2 dark:text-white">Total: </span>$ {parseFloat(total).toFixed(2)}
            </div>

            {/* Clear Cart Icon */}
            <div onClick={()=>dispatch(clearCart())} className="cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex justify-center items-center text-xl rounded-full animate-pulse">
              <FiTrash2 />
            </div>
          </div>

          <Link to={"/"} className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">
            View Cart
          </Link>

          {/* Checkout */}
          <Link
            onClick={handleCheckout}
            to={cart.length > 0 ? "/checkout" : "/"}
            className={`${
              cart.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
            } hover:text-red-300 bg-primary flex p-4 justify-center items-center text-white w-full font-medium`}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
