import React, { useEffect, useState } from "react";
import { BannerImage } from "../constant/index";
function Banner() {
  const [index, setIndex] = useState(0);

  function handleAutolLoad() {
    setIndex((prev) => (prev === BannerImage.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const id = setInterval(handleAutolLoad, 5000);
    return () => clearInterval(id);
  }, [index]);
  return (
    <div className="relative w-full h-[calc(100vh-7rem)] overflow-hidden">
      {BannerImage?.map((img, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full bg-cover md:bg-top bg-right-top transition-opacity duration-1000 ease-in-out ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="border absolute top-0 h-full w-full py-10 px-10  md:bg-gradient-to-l bg-gradient-to-b from-transparent to-slate-600  md:bg-transparent  md:top-1/2 p-2 md:-translate-y-1/2   ">
            <div className="md:ml-20  mt-[80%] md:mt-0 text-white ">
              <h3 className=" text-2xl ">LifeStyle Collection </h3>
              <h1 className="font-bold md:text-[70px] text-orange-600 md:text-primary mt-1 text-[45px] ">
                {index == 0 ? "Women" : "Men"}
              </h1>
              <p className="font-semibold text-2xl mt-1">
                SALE UP TO{" "}
                <span className="text-[17px] text-orange-600 md:text-primary">
                  35% OFF
                </span>{" "}
              </p>
              <p className="mt-1 font-semibold text-slate-200">
                Get Free Shipping on order over $99.00
              </p>
              <button className="mt-6 mx-auto hover:bg-orange-800 duration-200 py-2 text-white  px-7 bg-primary rounded-sm shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
