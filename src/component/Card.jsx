import React from "react";
import { discountPrice } from "../constant";
import { Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/feature/cart/CartSlice";
import { toast } from "react-toastify";
function Card({ card }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart() {
    dispatch(addCart(card));
    toast.success("Item Addedd SuccessFully");
  }
  return (
    <div
      key={`card - ${card.id}`}
      className=" w-full h-max  group relative cursor-pointer  rounded-sm shadow-md bg-slate-100"
    >
      <div className=" group-hover:bg-slate-200 p-3 overflow-hidden">
        <div className="">
          <img
            onClick={() => navigate(`/product/${card.id}`)}
            src={card.thumbnail}
            className="min-w-[250px] object-contain h-[200px] hover:scale-110 duration-300 transition  brightness-95"
            alt=""
          />
        </div>
        <div className="text-center mt-2">
          <h5 className="text-gray-500">{card.category}</h5>
          <h2 className="font-semibold">{card.title}</h2>
          <div className="flex items-end gap-2 mt-1 justify-center">
            <p className="line-through"> $ {card.price} </p>
            <span className="text-primary text-[13px]">
              {card.discountPercentage} %
            </span>
            <p className="font-semibold text-xl text-green-800">
              $ {discountPrice(card.price, card.discountPercentage).toFixed(2)}
            </p>
          </div>
          <div className="mt-3">
            <Rating value={card.rating} precision={0.5} readOnly />
            <p></p>
          </div>{" "}
        </div>
      </div>
      <div className=" absolute top-0 right-0 mr-2 mt-4 z-10 transition-transform duration-300 transform scale-0 group-hover:scale-100">
        <div className="flex flex-col gap-3">
          <div
            onClick={() => addToCart()}
            className="p-2  shadow-2xl rounded-full bg-slate-600 text-white    "
          >
            <AddShoppingCartIcon />
          </div>
          <div className="p-2  shadow-2xl rounded-full bg-orange-600 text-white">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
