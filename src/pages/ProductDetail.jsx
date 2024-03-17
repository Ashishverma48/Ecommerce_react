import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { discountPrice } from "../constant/index";
import { Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((data) => {
        setProduct(data?.data);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        setError(true);
      });
  }, []);

  console.log(product);
  return (
    <div className="  grid md:grid-cols-2 grid-cols-1 gap-5  md:p-6 p-5 w-full ">
      {!loading ? (
        <>
          <div className="  flex flex-col items-center ">
            <div className="w-[330px] ">
              <img
                src={product?.thumbnail}
                alt=""
                className="w-full max-h-[300px] 
                 object-contain"
              />
            </div>
            <div className=" w-full flex justify-center mt-2 px-10 gap-2">
              {product?.images.map((img) => (
                <div key={img} className="w-[90px]">
                  <img
                    src={img}
                    alt={img}
                    className="w-full max-h-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" md:p-6">
            <h2 className="font-bold text-3xl text-slate-800">
              {product?.title}
            </h2>
            <div className="mt-3 font-semibold">
              <span className=" text-gray-600"> Brand : </span>
              <span className=" ml-3"> {product?.brand}</span>
            </div>
            <div className="mt-3 font-semibold">
              <span className=" text-gray-600"> Category : </span>
              <span className=" ml-3"> {product?.category}</span>
            </div>
            <div className="mt-3 font-semibold  flex items-center gap-4">
              <span className=" text-gray-600"> Rated : </span>
              <Rating readOnly value={product?.rating} precision={0.5} />
              <span>({product?.stock})</span>
            </div>
            <div className="mt-3 flex gap-3 items-end">
              <h3 className="font-semibold text-xl line-through">
                $ {product?.price}
              </h3>
              <h4 className="font-semibold text-lg text-rose-400">
                {product?.discountPercentage} %
              </h4>
              <h2 className="font-bold text-[27px] text-primary">
                ${" "}
                {discountPrice(
                  product?.price,
                  product?.discountPercentage
                ).toFixed(2)}
              </h2>
            </div>
            <div className="mt-4">
              <h6 className="font-semibold text-gray-600 mb-2">
                Description :{" "}
              </h6>
              <p>{product?.description}</p>
            </div>
            <button className="py-2 px-10 bg-primary text-white font-semibold mt-7 rounded-sm  shadow-2xl hover:bg-orange-900 duration-300">
              <AddShoppingCartIcon /> Add To Cart
            </button>
          </div>
        </>
      ) : (
        <>
          <div className=" animate-pulse  flex flex-col items-center">
            <div className=" max-h-[300px] min-h-[300px] w-[330px] bg-slate-400 rounded-sm"></div>
            <div className=" w-full flex justify-center mt-2 px-2 rounded-sm gap-2 ">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <div
                    key={`loading-placeholder-${index}`}
                    className="w-[110px] min-h-[100px] bg-slate-400 rounded-sm"
                  ></div>
                ))}
            </div>
          </div>
          <div className="animate-pulse duration-300">
            <div className="h-10 w-full bg-slate-400 rounded-sm mt-6"></div>
            <div className="h-6 w-2/3 bg-slate-400 rounded-sm mt-3"></div>
            <div className="h-6 w-2/3 bg-slate-400 rounded-sm mt-3"></div>
            <div className="h-6 w-2/3 bg-slate-400 rounded-sm mt-4"></div>
            <div className="h-7 w-2/3 bg-slate-400 rounded-sm mt-4"></div>
            <div className="h-5 w-1/3 bg-slate-400 rounded-sm mt-4"></div>
            <div className="h-20 w-full bg-slate-400 rounded-sm mt-4"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
