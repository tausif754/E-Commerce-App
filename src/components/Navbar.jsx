import React from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <Router>
      <div className="flex items-center justify-between py-5 font-medium">
        <img src={assets.logo} className="w-36" alt="logo" />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collections"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTIONS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />

            <div className="group-hover:block hidden absolute droupdon-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My profile</p>
                <p className="cursor-pointer hover:text-black"> Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt=""
              className="w-5 min-w-5 cursor-pointer"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
