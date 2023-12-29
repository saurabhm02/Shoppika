import React from 'react';
import { FaS } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16 lg:px-8">
      <div className="flex justify-between w-full h-full items-center">
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
          <div className="logo-icon text-2xl">
            <FiShoppingCart />
          </div>
          <logo-name>
            <span className="font-bold flex items-center relative">
              <span className="text-[20px]">
                <FaS />
              </span>
              <span className="absolute left-[17px]">hoppika</span>
            </span>
          </logo-name>
        </Link>

        <div className="other flex items-center text-lg">
          <Link to="/wishlist">
            <div className="wishlist text-2xl pr-3 relative">
              <SlHeart className="cursor-pointer" />
            </div>
          </Link>

          <Link to="/cart">
            <div className="cart text-2xl pl-5 pr-3 relative ">
              <BsBag className="cursor-pointer" size={26} />
              {cartItems.length > 0 && (
                <div
                  className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px]  rounded-full flex  justify-center items-center">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>

          <div className="login-btn">
            <button className="lg:pl-7 sm:pl-5 pr-3 cursor-pointer">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
