import React from "react";
import { payment, wait, truck, save } from "../assets/index";
function Best() {
  return (
    <div className="mt-8 w-full  md:px-16 px-6">
      <div className="shadow-md rounded-sm md:gap-16 text-center  grid md:grid-cols-4 grid-cols-1 gap-y-2 justify-between px-10 py-7">
        <div className=" md:border-r-[1.8px] border-r-0">
          <div className=" mt-1">
            <img src={truck} alt="" className="w-[90px] mx-auto" />
          </div>
          <h3 className="font-semibold">Fast Delivery</h3>
          <p className="text-gray-500 text-sm">Start from $10</p>
        </div>
        <div className=" md:border-r-[1.8px] border-r-0">
          <div className=" mt-1 ">
            <img src={save} alt="" className="w-[90px] mx-auto " />
          </div>
          <div>
            <h3 className="font-semibold">Money Guarantee</h3>
            <p className="text-gray-500 text-sm">7 Days Back</p>
          </div>
        </div>
        <div className=" md:border-r-[1.8px] border-r-0">
          <div className=" mt-1 ">
            <img src={wait} alt="" className="w-[90px] mx-auto" />
          </div>
          <h3 className="font-semibold">365 Days</h3>
          <p className="text-gray-500 text-sm">For free return </p>
        </div>
        <div className="">
          <div className=" mt-1">
            <img src={payment} alt="" className="w-[90px] mx-auto" />
          </div>
          <h3 className="font-semibold ">Payment</h3>
          <p className="text-gray-500 text-sm">Secure System</p>
        </div>
      </div>
    </div>
  );
}

export default Best;
