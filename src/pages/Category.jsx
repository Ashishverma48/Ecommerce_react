import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../component/Card";
import ProductLoad from "../component/ProductLoad";
function Category() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categoryType, setCategoryType] = useState("all");
  const [loading, setLoading] = useState(false);
  const categotyRef = useRef(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((data) => {
        data.data.unshift("All");
        setCategory(data?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setLoading(true);
    function getCategoryProduct(url) {
      axios
        .get(url)
        .then((data) => {
          setProduct(data?.data?.products);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
    if (categoryType == "all") {
      getCategoryProduct("https://dummyjson.com/products?limit=8&skip=10");
    } else {
      getCategoryProduct(
        `https://dummyjson.com/products/category/${categoryType}`
      );
    }
  }, [categoryType]);

  console.log(product);
  //   console.log(categotyRef.current.scrollHeight);
  function toggleCategory() {
    setIsCategoryOpen((prev) => !prev);
  }
  console.log(isCategoryOpen);
  return (
    <div className="w-full flex p-5 gap-4">
      <div className="w-[300px]  bg-gray-100 shadow-lg rounded-sm">
        <h2
          onClick={toggleCategory}
          className="py-2 flex  cursor-pointer justify-between mt-1 px-7 bg-slate-500 rounded-sm text-white font-semibold"
        >
          <span>Select Category</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 duration-150 transition-all ease-in-out h-6 ${
              isCategoryOpen ? "rotate-180" : 0
            }`}
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </h2>
        <div
          ref={categotyRef}
          className="bg-white  pl-10 overflow-hidden transition-max-height duration-500 ease-in-out"
          style={{
            maxHeight: `${
              isCategoryOpen ? categotyRef.current.scrollHeight : 0
            }px`,
          }}
        >
          {category?.map((item) => (
            <p
              key={`categoty ${item}`}
              onClick={(e) => setCategoryType(e.target.innerText.toLowerCase())}
              className="mt-1 pb-1 cursor-pointer hover:text-primary hover:font-semibold"
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[calc(100vw-300px)] border grid md:grid-cols-3 gap-10  rounded-sm">
        {loading
          ? Array(6)
              .fill("")
              .map((_, index) => <ProductLoad />)
          : product?.map((item, index) => <Card card={item} />)}
      </div>
    </div>
  );
}

export default Category;
