import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
import { useSelector } from "react-redux";

function Header() {
  const [show, setShow] = useState(false);
  const cartItem = useSelector((state) => state?.cart?.cart);

  return (
    <header className="py-2 md:px-10 px-4  relative shadow-lg items-center flex justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-[170px]     object-contain" />
        </Link>
      </div>
      <div className="  md:block">
        <ul
          className={`flex flex-row   md:gap-12  text-lg font-semibold ${
            show
              ? " flex-col h-screen duration-500 transition-all font-normal text-[30px] absolute top-[70px] pt-10  right-0 px-10 gap-5 z-10 bg-white w-2/3 pb-10"
              : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-primary" : "text-inherit"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>

          <li className="relative  cursor-pointer">
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `${isActive ? "text-primary" : "text-inherit"}`
              }
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <Badge badgeContent={cartItem.length} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={() => {
                `flex border`;
              }}
            >
              <PersonOutlineIcon />
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`block transform md:hidden  ${show ? "rotate-180" : ""}`}
        onClick={() => setShow(!show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 stroke-2"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
