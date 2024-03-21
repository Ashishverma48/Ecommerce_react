import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Best from "../component/Best";
import BestProduct from "../component/BestProduct";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { login } from "../redux/feature/cart/AuthSlice";
import { useDispatch } from "react-redux";
function Home() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res.accessToken) {
        dispatch(login(res));
      }
    });
  }, []);
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
