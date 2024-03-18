import React from "react";

function Spin() {
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center">
      <div className="w-20 h-20 border-[6px] border-gray-300 border-t-orange-700 rounded-full animate-spin"></div>

      <h2 className="mt-10 font-semibold text-2xl animate-ping">Loading ...</h2>
    </div>
  );
}

export default Spin;
