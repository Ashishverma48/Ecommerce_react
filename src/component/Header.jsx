import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { logout } from "../redux/feature/cart/AuthSlice";
import { handleSignOut } from "../api/FirebaseAuthApi";
function Header() {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const cartItem = useSelector((state) => state?.cart?.cart);
  const authStatus = useSelector((state) => state?.auth?.status);
  const userRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="py-2 md:px-10 px-4  relative shadow-lg items-center flex justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-[170px]     object-contain" />
        </Link>
      </div>
      <div className="  md:block">
        <ul
          className={`flex flex-row md:gap-12  text-lg font-semibold ${
            show
              ? " flex-col h-screen duration-500 transition-all font-normal text-[30px] absolute top-[70px] pt-10  right-0 px-10 gap-5 z-10 bg-white w-2/3 pb-10"
              : "hidden md:flex items-center"
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
            <p
              className={() => {
                `flex border `;
              }}
            >
              <div className="relative">
                <button
                  className="top-10"
                  onClick={() => setShowUser(!showUser)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
                <div
                  style={{
                    maxHeight: `${
                      showUser ? userRef.current.scrollHeight : "0"
                    }px`,
                  }}
                  ref={userRef}
                  className="bg-white mt-1 static overflow-hidden duration-200 ease-out   md:absolute top-[130%]  rounded-sm z-10 pl-6 pr-12 right-0"
                >
                  {authStatus ? (
                    <div className="">
                      <button
                        onClick={() => navigate("/user")}
                        className="mt-1 pt-2"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          handleSignOut();
                          dispatch(logout());
                        }}
                        className="mt-1 py-3"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => navigate("/login")}
                        className="mt-1 py-3"
                      >
                        Login
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </p>
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
