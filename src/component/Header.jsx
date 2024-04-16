import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
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
  function handleLinkClick() {
    setShow(false);
  }
  return (
    <header className="py-2 md:px-10 px-4  relative shadow-lg items-center flex justify-between">
      <div>
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="" className="w-[170px]     object-contain" />
        </Link>
      </div>
      <div className="  ">
        <ul
          style={{
            maxHeight: `${show ? "100vh" : "0px"}`,
            minHeight: `${show ? "100vh" : "0px"}`,
          }}
          className=" md:flex  items-center w-full gap-9 overflow-hidden md:overflow-visible duration-300 md:static bg-white z-50 capitalize  text-[19px] font-semibold absolute top-full left-0 "
        >
          <li className="px-6 md:px-0 py-4 md:py-0">
            <NavLink
              onClick={handleLinkClick}
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-primary" : "text-inherit"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-6 pb-4 md:px-0 md:pb-0">
            <NavLink onClick={handleLinkClick}>About</NavLink>
          </li>

          <li className="relative  cursor-pointer px-6 pb-4 md:px-0 md:pb-0">
            <NavLink
              onClick={handleLinkClick}
              to="/category"
              className={({ isActive }) =>
                `${isActive ? "text-primary" : "text-inherit"}`
              }
            >
              Category
            </NavLink>
          </li>
          <li className="px-6 pb-4 md:px-0 md:pb-0">
            <NavLink to="/cart" onClick={handleLinkClick}>
              <Badge badgeContent={cartItem.length} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
              <span className="ml-3">Cart</span>{" "}
            </NavLink>
          </li>
          <li className="px-6 pb-8 md:px-0 md:pb-0" onClick={handleLinkClick}>
            {authStatus ? <button>Profile</button> : <button>Login</button>}
          </li>
        </ul>
      </div>

      <div className="block md:hidden " onClick={() => setShow(!show)}>
        {show ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
    </header>
  );
}

export default Header;
