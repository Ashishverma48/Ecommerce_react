import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
function Best() {
  return (
    <div className="mt-8 w-full  md:px-16 px-6">
      <div className="shadow-2xl rounded-sm md:gap-16 grid md:grid-cols-4 grid-cols-1 gap-y-2 justify-between px-10 py-7">
        <div className="flex md:border-r-[1.8px] border-r-0">
          <div className=" mt-1 mr-3">
            <LocalShippingOutlinedIcon
              fontSize="large"
              className="text-gray-700"
            />
          </div>
          <div>
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">Start from $10</p>
          </div>
        </div>
        <div className="flex md:border-r-[1.8px] border-r-0">
          <div className=" mt-1 mr-3">
            <SavingsOutlinedIcon fontSize="large" className="text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold">Money Guarantee</h3>
            <p className="text-gray-500 text-sm">7 Days Back</p>
          </div>
        </div>
        <div className="flex md:border-r-[1.8px] border-r-0">
          <div className=" mt-1 mr-3">
            <AccessAlarmOutlinedIcon
              fontSize="large"
              className="text-gray-700"
            />
          </div>
          <div>
            <h3 className="font-semibold">365 Days</h3>
            <p className="text-gray-500 text-sm">For free return </p>
          </div>
        </div>
        <div className="flex">
          <div className=" mt-1 mr-3">
            <CreditScoreIcon fontSize="large" className="text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold">Payment</h3>
            <p className="text-gray-500 text-sm">Secure System</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Best;
