import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Best from "../component/Best";
import BestProduct from "../component/BestProduct";
function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response?.data?.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(product);
  return (
    <main>
      <Banner />
      <Best />
      <BestProduct />
    </main>
  );
}

export default Home;
