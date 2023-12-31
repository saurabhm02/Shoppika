import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaS } from 'react-icons/fa6';
import { BsBag } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SlHeart } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { MdArrowBack } from "react-icons/md";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const location = useLocation();
  const navigate =  useNavigate();
  const isSmallScreen = window.innerWidth <= 600;
  const [left, setLeft] = useState();
  const [right, setRight] = useState();

  const clickHandler = () =>{
    navigate(-1);
  }

  useEffect(() => {
    if (location.pathname === '/cart') {
      setRight(isSmallScreen ? (
        <Link to="/wishlist">
          <div className="wishlist text-2xl pr-3 relative">
            <SlHeart className="cursor-pointer" />
          </div>
        </Link>
      ) : (
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl pr-3 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl pl-5 pr-3 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="login-btn">
              <div className="login-btn">
                <button className="lg:pl-7 sm:pl-5 pr-3 cursor-pointer">Login</button>
              </div>
            </div>
        </div>
      ));
    } else if (location.pathname === '/wishlist') {
      setRight(isSmallScreen ? (
        <Link to="/cart">
          <div className="cart text-2xl pl-5 pr-3 relative">
            <BsBag className="cursor-pointer" size={26} />
              {cartItems.length > 0 && (
                <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                  {cartItems.length}
                </div>
              )}
          </div>
        </Link>
      ) : (
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl pr-3 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl pl-5 pr-3 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="login-btn">
              <div className="login-btn">
                <button className="lg:pl-7 sm:pl-5 pr-3 cursor-pointer">Login</button>
              </div>
            </div>
        </div>
      ));
    } else {
      setRight(
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl pr-3 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl pl-5 pr-3 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="login-btn">
              <div className="login-btn">
                <button className="lg:pl-7 sm:pl-5 pr-3 cursor-pointer">Login</button>
              </div>
            </div>
        </div>
      );
    }
  }, [location.pathname, isSmallScreen, cartItems.length]);


  useEffect(() => {
    const clickHandler = () => {
      navigate(-1);
    };
    if(location.pathname === '/cart'){
      setLeft( isSmallScreen ? (
        <div className="flex items-center gap-3">
          <div 
            onClick={clickHandler}
            className="backArrow  pl-4 "
          >
            <MdArrowBack size={30}/>
            
          </div>
          <div className="name font-bold text-2xl">
            Shopping Bag
          </div>
        </div>
      ) : (
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
            <div className="logo-icon text-2xl">
              <FiShoppingCart />
            </div>
            <div className="logo-name">
              <span className="font-bold flex items-center relative">
                <span className="text-[20px]">
                  <FaS />
                </span>
                <span className="absolute left-[17px]">hoppika</span>
              </span>
            </div>
        </Link>
      ));
      }
    else if(location.pathname === '/wishlist'){
      setLeft(isSmallScreen ? (
        <div className="flex items-center gap-3">
          <div 
          onClick={clickHandler}
          className="backArrow  pl-4 "
        >
            <MdArrowBack size={30}/>
          </div>
          <div className="name flex flex-col">
           <span className="font-bold">Wishlist</span>
            {wishlistItems.length > 0 && (
                <span className="text-[14px] text-gray-500">{wishlistItems.length} items</span>
            )}
          </div>
        </div>
      ) : (
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
            <div className="logo-icon text-2xl">
              <FiShoppingCart />
            </div>
            <div className="logo-name">
              <span className="font-bold flex items-center relative">
                <span className="text-[20px]">
                  <FaS />
                </span>
                <span className="absolute left-[17px]">hoppika</span>
              </span>
            </div>
        </Link>
      ));
    }
    else{
      setLeft(
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
          <div className="logo-icon text-2xl">
            <FiShoppingCart />
          </div>
          <div className="logo-name">
            <span className="font-bold flex items-center relative">
              <span className="text-[20px]">
                <FaS />
              </span>
              <span className="absolute left-[17px]">hoppika</span>
            </span>
          </div>
        </Link>
      )
    }
  }, [location.pathname, isSmallScreen, wishlistItems.length]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16 lg:px-8">
      <div className="flex justify-between w-full h-full items-center">
        <div className="leftPart">
          {left}
        </div>
        <div className="rightPArt">
          {right}
        </div>
      </div>
    </header>
  );
};

export default Header;
