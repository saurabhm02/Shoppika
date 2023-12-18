import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" flex justify-between fixed w-full z-10 lg:px-8 lg:py-2">
        <Link to="/" className="logo flex  p-2 text-lg gap-2 items-center">
            <div className="logo-icon text-2xl">
                <FiShoppingCart /> 
            </div>
            <logo-name>
             <span className="font-bold"><span className="text-[22px]">S</span>hoppika</span>
            </logo-name>           
        </Link>

        <div className="other flex items-center text-lg">
            <div className="cart text-2xl font-bold">
                <PiHandbagSimpleLight/>
                
            </div>
            <div className="login-btn">
                <button className="pl-5 pr-3">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header