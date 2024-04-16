import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Card from "../component/Card";
import ProductLoad from "../component/ProductLoad";
import Paginate from "../component/Paginate";
function Category() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [productCopy, setProductCopy] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [categoryType, setCategoryType] = useState("all");
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("relevent");
  const categotyRef = useRef(null);
  const sortRef = useRef(null);

  function handleCategoryClick() {
    setIsCategoryOpen(!isCategoryOpen);
  }
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((data) => {
        data.data.unshift("All");
        setCategory(data?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const paginate = useCallback(
    {},

    []
  );

  useEffect(() => {
    setLoading(true);
    function getCategoryProduct(url) {
      axios
        .get(url)
        .then((data) => {
          setProduct(data?.data?.products);
          setProductCopy(data?.data?.products);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
    if (categoryType == "all") {
      getCategoryProduct("https://dummyjson.com/products?limit=10");
    } else {
      getCategoryProduct(
        `https://dummyjson.com/products/category/${categoryType}`
      );
    }
  }, [categoryType]);

  function toggleCategory() {
    setIsCategoryOpen((prev) => !prev);
  }
  function toggleSort() {
    setSortOpen((prev) => !prev);
  }

  useEffect(() => {
    if (sortBy == "relevent") {
      setProduct([...productCopy]);
    } else if (sortBy == "highToLow") {
      setProduct([...product.sort((a, b) => b.price - a.price)]);
    } else if (sortBy == "lowToHigh") {
      setProduct([...product].sort((a, b) => a.price - b.price));
    }
  }, [sortBy, productCopy]);

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap p-5 gap-4">
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
              onClick={(e) => {
                setCategoryType(e.target.innerText.toLowerCase()),
                  handleCategoryClick();
              }}
              className="mt-1 pb-1 cursor-pointer hover:text-primary text-slate-600  text-[14px] font-semibold"
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
        <div>
          <h2
            className="font-semibold flex justify-between py-2 px-7 rounded-sm bg-slate-500 mt-5 text-white cursor-pointer "
            onClick={toggleSort}
          >
            <span>Sort Price By</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 duration-150 transition-all ease-in-out h-6 ${
                sortOpen ? "rotate-180" : 0
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
            ref={sortRef}
            className="bg-white   pl-10 overflow-hidden transition-max-height duration-500 ease-in-out text-slate-700 text-[15px]"
            style={{
              maxHeight: `${sortOpen ? sortRef.current.scrollHeight : 0}px`,
            }}
          >
            <button
              className="py-1 mt-1 duration-200 hover:text-primary block  font-semibold"
              onClick={() => setSortBy("relevent")}
            >
              Relevent
            </button>
            <button
              onClick={() => setSortBy("highToLow")}
              className="py-1 mt-1 block duration-200 hover:text-primary  font-semibold"
            >
              High to Low
            </button>
            <button
              onClick={() => setSortBy("lowToHigh")}
              className="pb-5 py-1 mt-1 duration-200 hover:text-primary block  font-semibold"
            >
              Low To High
            </button>
          </div>
          <div className="mt-5 px-5 py-4 font-semibold">
            <h2>
              <div className="flex justify-between ">
                <p>Min</p>
                <p>12</p>
                <p>Max</p>
              </div>

              <input
                type="range"
                class="w-full h-4 rounded-full overflow-hidden appearance-none bg-gray-300 slider-thumb mt-1 focus:outline-none focus:bg-gray-300"
              />
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-300px)]">
        <h2 className="font-semibold text-2xl py-1 mb-2 ml-10">
          {categoryType.toLocaleUpperCase()}
        </h2>
        <div className="w-full  grid md:grid-cols-3 gap-10  rounded-sm">
          {loading
            ? Array(6)
                .fill("")
                .map((_, index) => <ProductLoad />)
            : product?.map((item, index) => <Card card={item} />)}
        </div>
        <Paginate data = {product}/>
      </div>
    </div>
  );
}

export default Category;
