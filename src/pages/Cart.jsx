import React, { useEffect, useState } from "react";
import CartCard from "../component/CartCard";
import { useSelector } from "react-redux";
import { discountPrice } from "../constant";

function Cart() {
  const CartItem = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, delevery] = [10, 5];

  useEffect(() => {
    let totalPrice = 0;
    CartItem.forEach((item) => {
      totalPrice +=
        item.quantity *
        discountPrice(item.price, item.discountPercentage).toFixed();
      setTotalPrice(totalPrice);
    });
  }, [CartItem]);

  let totalOrderPrice = totalPrice + tax + delevery;

  return (
    <div>
      <h1 className="font-semibold py-4 text-center px-10 text-3xl">
        Shooping Cart
      </h1>
      <div className="w-full flex md:px-10 py-3 gap-3  flex-wrap md:flex-nowrap">
        <div className=" w-full p-4 shadow-xl md:w-2/3 bg-white border  rounded-sm ">
          {CartItem.length > 0 ? (
            CartItem?.map((item) => <CartCard cart={item} />)
          ) : (
            <div className="font-semibold text-3xl animate-pulse">
              Your Cart Is Empty !
            </div>
          )}
          <div></div>
        </div>
        <div className="h-screen w-full shadow-xl md:w-1/3 bg-white border rounded-sm p-4">
          <h2 className="font-semibold text-2xl text-slate-900">
            Order Summery
          </h2>
          <div className="flex mt-2 justify-between  py-2 border-b-[1px] border-slate-500">
            <h5 className="font-semibold text-gray-700">Sub Total</h5>
            <p className="font-semibold text-black text-[14px]">
              $ {totalPrice}
            </p>
          </div>
          <div className="flex mt-2 justify-between  py-2 border-b-[1px] border-slate-500">
            <h5 className="font-semibold text-gray-700">Shipping </h5>
            <p className="font-semibold text-black text-[14px]">$ 10</p>
          </div>
          <div className="flex mt-2 justify-between  py-2 border-b-[1px] border-slate-500">
            <h5 className="font-semibold text-gray-700">Taxes</h5>
            <p className="font-semibold text-black text-[14px]">$ 5</p>
          </div>
          <div className="flex mt-4 justify-between text-[19px]  py-2  border-slate-500">
            <h5 className="font-semibold text-black">Order Total Price</h5>
            <p className="font-semibold text-black ">$ {totalOrderPrice}</p>
          </div>
          <div className="mt-7">
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
