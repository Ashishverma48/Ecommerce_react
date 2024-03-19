import React from "react";
import CartCard from "../component/CartCard";
import { useSelector } from "react-redux";

function Cart() {
  const CartItem = useSelector((state) => state.cart.cart);

  return (
    <div>
      <h1 className="font-semibold py-4 text-center px-10 text-3xl">
        Shooping Cart
      </h1>
      <div className="w-full flex md:px-10 py-3 gap-3  flex-wrap md:flex-nowrap">
        <div className="h-screen w-full p-4 shadow-md md:w-2/3 bg-neutral-100  rounded-sm ">
          {CartItem.length > 0 ? (
            CartItem?.map((item) => <CartCard cart={item} />)
          ) : (
            <div className="font-semibold text-3xl animate-pulse">
              Your Cart Is Empty !
            </div>
          )}
        </div>
        <div className="h-screen w-full shadow-md md:w-1/3 bg-gray-100 rounded-sm p-4">
          <h2 className="font-semibold text-2xl text-slate-900">
            Order Summery
          </h2>
          <div className="flex mt-2 justify-between  py-2 border-b-[1px] border-slate-500">
            <h5 className="font-semibold text-gray-700">Sub Total</h5>
            <p className="font-semibold text-black text-[14px]">
              {CartItem.reduce((a, b) => a.price + b.price, 0)}
            </p>
          </div>
          <div className="flex mt-2 justify-between  py-2 border-b-[1px] border-slate-500">
            <h5 className="font-semibold text-gray-700">Shipping Estimate</h5>
            <p className="font-semibold text-black text-[14px]">& 10</p>
          </div>
          <div className="flex mt-2 justify-between  py-2 border-b-[1px] border-slate-500">
            <h5 className="font-semibold text-gray-700">Tax Estimate</h5>
            <p className="font-semibold text-black text-[14px]">& 5</p>
          </div>
          <div className="flex mt-4 justify-between text-[19px]  py-2  border-slate-500">
            <h5 className="font-semibold text-black">Order Total Price</h5>
            <p className="font-semibold text-black ">&3663</p>
          </div>
          <div className="mt-5">
            <button className="py-2 px-10 w-full rounded-sm shadow-2xl hover:bg-indigo-800 duration-200 hover:shadow-none bg-indigo-700 text-white font-semibold ">
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
