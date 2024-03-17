import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";

function Header() {
  
  return (
    <header className="py-2 px-10 border shadow-lg items-center flex justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-[170px]     object-contain" />
        </Link>
      </div>
      <div className="">
        <ul className="flex md:gap-12 text-lg font-semibold">
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
            <NavLink to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink>
              Cart
              <Badge badgeContent={22} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </NavLink>
          </li>
          <li>
            <NavLink
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
    </header>
  );
}

export default Header;
