import React, { useState } from "react";
import Cart from "./cart";

const Navbar = ({toggleCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className="navbar w-full h-24 items-center justify-center flex flex-col relative md:z-0 z-10">
      <div className="nav w-10/12 h-20  m-auto flex items-center justify-between">
        <ul className="flex items-center w-4/5 h-16 gap-4 list-none">
          <img
            src="images/icon-menu.svg"
            className="h-6 md:hidden block"
            alt="menu"
            onClick={toggleMenu}
          />
          <h1 className="brand text-3xl font-bold">sneakers</h1>
          <div
            className={`lists md:flex text-gray-600 md:gap-4 gap-0 items-center ${
              menuOpen ? "open" : "hidden"
            }`}
          >
            <img
              src="images/icon-close.svg"
              alt=""
              className="close w-4 mt-8 ml-10 md:hidden"
              onClick={toggleMenu}
            />
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </ul>
        <div className="cartBox flex items-center gap-5 h-16 ">
          <img
            src="images/icon-cart.svg"
            className="h-6 cursor-pointer"
            alt="cart"
            onClick={toggleCart}
          />
          <div className="profile">
            <img
              src="images/image-avatar.png"
              className="w-10 cursor-pointer border-2 border-orange-500 rounded-full"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <span className="hover-line"></span>
      <div className="line w-10/12 bg-gray-300 h-0.5"></div>
    </nav>
    </>
  );
};

export default Navbar;
