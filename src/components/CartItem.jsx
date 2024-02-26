import React, { useContext, useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// context
// import { CartContext } from "../contexts";
import { useSelector ,useDispatch} from "react-redux";
import { removeFromCart, increaseAmount, decreaseAmount } from "../store/slices/cartSlice";

const CartItem = ({item}) => {
  //toggle theme
  const isDark = useSelector((state) => state.theme.isDark);

  //button effect
  const [minus, minusClicked] = useState(false);
  const [plus, plusClicked] = useState(false);

  const plusClick = () => {
    plusClicked(true);
    setTimeout(() => {
      plusClicked(false);
    }, 300);
  };
  const minusClick = () => {
    minusClicked(true);
    setTimeout(() => {
      minusClicked(false);
    }, 300);
  };

  // cart Context
  // const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncreament = () => {
    dispatch(increaseAmount(item.id));
  };

  const handleDecrement = () => {
    dispatch(decreaseAmount(item.id));
  };

  // Destructuring the item
  // const {cart} = useSelector(state=>state.cart)
  const { id,title, images, price, amount } = item;
  // console.log(id,title,images,price,amount)
  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 dark:bg-black">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          {/* Image */}
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px] hover:scale-110 transition-all duration-150" src={images} alt={title} />
          </Link>

          {/* Product Details */}
          <div className="w-full flex flex-col">
            {/* title and remove icons */}
            <div className="flex justify-between mb-2">
              {/* title */}
              <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline dark:text-white">
                {title}
              </Link>
              {/* remove icon */}
              <div onClick={handleRemove} className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition dark:text-white" />
              </div>
            </div>

            <div className="flex gap-x-2 h-[36px] text-sm">
              {/* Quantity */}
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                {/* Minus Icon */}
                <div onClick={handleDecrement} className={`flex-1 h-full flex justify-center hover:text-green-400 items-center cursor-pointer `}>
                  <button className={`${minus ? "text-red-700 animate-ping transition duration-300" : ""}`} onClick={minusClick}>
                    <IoMdRemove className="dark:text-white" />
                  </button>
                </div>

                {/* Amount */}
                <div className="h-full flex justify-center items-center px-2 dark:text-white">{amount}</div>

                {/* Plus Icon */}
                <div onClick={handleIncreament} className="flex-1 h-full flex justify-center hover:text-green-400 items-center cursor-pointer">
                  <button className={`${plus ? "text-red-700 animate-ping transition duration-300" : ""}`} onClick={plusClick}>
                    <IoMdAdd className="dark:text-white" />
                  </button>
                </div>
              </div>

              {/* Item Price */}
              <div className="flex-1 flex items-center justify-center dark:text-white">$ {price}</div>

              {/* Final Price upto 2 decimal places */}
              <div className="flex-1 flex justify-end items-center text-primary font-medium dark:text-white"> {`$ ${parseFloat(price * amount).toFixed(2)}`} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
