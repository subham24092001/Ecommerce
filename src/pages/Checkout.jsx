import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
import { CartContext } from "../contexts";
import { useSelector } from "react-redux";

const Checkout = () => {
  //toggle theme
  const isDark = useSelector(state=>state.theme.isDark)

  const { setDot } = useContext(CartContext);

  return (
    <div  className={`${isDark && "dark"} transition-colors duration-1000`}>
      <div className="h-[86vh] flex flex-col items-center justify-center gap-y-6 dark:bg-slate-900">
        <div className="flex items-center justify-center dark:bg-slate-850">
          <div className="text-center">
            <h1 className="text-4xl dark:text-white">Thank You for purchasing the products from Our Website.</h1>
          </div>
        </div>

        <div className={`cursor-pointer dark:text-white `}>
          <Link to={"/"} className={`hover:underline hover:text-red-400 dark:text-white ${isDark && "dark:hover:text-red-500"}`}>
            <button onClick={() => setDot([])}>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
