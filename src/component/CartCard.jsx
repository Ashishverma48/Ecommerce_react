import React from "react";
import { cart, discountPrice } from "../constant";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../redux/feature/cart/CartSlice";
function CartCard({ cart }) {
  const dispatch = useDispatch();

  function totalPrice(cart) {
    return (
      cart.quantity *
      discountPrice(cart.price, cart.discountPercentage).toFixed(0)
    );
  }

  return (
    <div
      key={cart.id}
      className="w-full mb-3 p-4 text-[14px] flex-wrap  gap-2 backdrop-blur-md bg-opacity-75 justify-between  hover:shadow-none duration-1500  flex rounded-sm shadow-md bg-slate-50 border   "
    >
      <div>
        <img src={cart.thumbnail} className="w-[95px]  rounded-sm " alt="" />
      </div>
      <div>
        <h2 className="font-semibold mb-1 text-blue-700 ">{cart.title}</h2>
        <p>{cart.category}</p>
        <div className="mt-1">
          <Rating precision={0.5} value={cart.rating} readOnly />
        </div>{" "}
        <div
          className="flex  gap-1 cursor-pointer  text-red-600"
          onClick={() => dispatch(removeItem(cart))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="red"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <span>Remove</span>
        </div>
      </div>
      <div className=" flex items-center gap-1">
        <button
          onClick={() => dispatch(decrementItem(cart))}
          className="py-1 px-2 bg-red-500 hover:bg-red-600 duration-200 hover:shadow-none text-white rounded-sm shadow-xl mr-2 font-semibold text-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <button className="py-2 px-3 mr-2 font-semibold text-xl">
          {cart.quantity}
        </button>
        <button
          onClick={() => dispatch(incrementItem(cart))}
          className="py-1 px-2 bg-green-500 hover:bg-green-600 hover:shadow-none text-white  rounded-sm shadow-xl duration-200 mr-2 font-semibold text-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="font-semibold ">
        <h2 className="line-through">${cart.price}</h2>
        <h4 className="text-red-600 text-[10px]">
          {cart.discountPercentage} %
        </h4>
        <div className=" mt-2">
          <span> Total Price</span>{" "}
          <h2 className="text-green-700 mt-1 text-[17px]">
            ${totalPrice(cart)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
