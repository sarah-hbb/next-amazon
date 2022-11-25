import React from "react";
import Image from "next/image";

// Icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu5Line } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* **Top nav** */}
      <div className="flex items-center justify-between bg-amazon_blue p-2 flex-grow py-2">
        {/* Logo*/}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt=''
            className="cursor-pointer px-4"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer h-10">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <div className="w-10 p-1 flex justify-center ">
            <BsSearch className="text-amazon_blue-light w-5 h-full" />
          </div>
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link ">
            <p>Hello sarah habibi</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>

          {/* Cart */}
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-amazon_blue-light text-center font-bold">
              9
            </span>
            <AiOutlineShoppingCart className="h-10 w-8" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* **Buttom nav** */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex items-center link">
          {" "}
          <RiMenu5Line className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
