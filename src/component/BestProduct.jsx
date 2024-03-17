import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function BestProduct() {
  const [bestProduct, setBestProduct] = useState([]);
  const [randomNumber, setrandomNumber] = useState(0);

  function genrateRandomNumber() {
    setrandomNumber(Math.floor(Math.random() * 100));
  }

  console.log(randomNumber);
  useEffect(() => {
    axios
    .get(`https://dummyjson.com/products?skip=${randomNumber}&limit=10`)
    .then((data) => setBestProduct(data?.data?.products));
  }, [randomNumber]);
  useEffect(()=>{
  genrateRandomNumber();

},[])

  // console.log("bestProduct");
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-2xl text-center">
        Best Selling Product
      </h2>
      <div className="mt-10 flex gap-8 px-10 overflow-x-scroll w-full">
        {bestProduct?.map((item) => (
          <Card card={item} />
        ))}
      </div>
    </div>
  );
}

export default BestProduct;
