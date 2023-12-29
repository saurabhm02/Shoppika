import React, { useContext } from 'react';
import { FaS } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

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
            <div className="wishlist text-2xl lg:pr-3 sm:pr-0 relative">
              <FiHeart className="cursor-pointer text-[27px]" />
              <div className=" bg-red-500 text-white  absolute right-[8px] top-0 text-[15px] w-[18px] h-[18px]  rounded-full flex justify-center items-center">
                {wishlistItems && wishlistItems.length > 0 ? wishlistItems.length : ""}
              </div>
            </div>
          </Link>

          <Link to="/cart">
            <div className="cart text-2xl pl-5 pr-3 relative">
              <BsBag className="cursor-pointer" size={26} />
              <div className=" text-red-500  absolute right-[18px] -bottom-[-1px] text-[15px] w-[15px] h-[17px]  rounded-full flex justify-center items-center">
                {cartItems && cartItems.length > 0 ? cartItems.length : ""}
              </div>
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
