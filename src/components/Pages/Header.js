import React, { useContext, useState } from 'react';
import { FaS} from 'react-icons/fa6';
import { FiShoppingCart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { sidebarContext } from '../utils/SidebarContext';
import { cartContext } from '../utils/CartContext';


const Header = () => {
    const [headerFixed , setHeaderFixed] = useState(false);
    const { isOpen, setIsOpen } = useContext(sidebarContext);
    const { itemAmount } = useContext(cartContext);

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 50){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
    })
  return (
    <div className={`flex justify-between ${headerFixed ? "bg-white shadow-md" : "bg-none"} fixed w-full z-50 px-10 py-4  transition-all`}>
        <Link to="/" className="logo flex  p-1 text-lg gap-2 items-center">
            
            <div className="logo-icon text-2xl">
                <FiShoppingCart /> 
            </div>
            <logo-name>
             <span className="font-bold flex items-center relative"><span className="text-[20px]"><FaS/></span><span className=" absolute left-[17px]">hoppika</span></span>
            </logo-name>           
        </Link>

        <div className="other flex items-center text-lg">
            <div 
                onClick={() => { setIsOpen(!isOpen); console.log("Clicked"); }}
                className="wishlist text-2xl">
                <FiHeart className=" cursor-pointer"/>
            </div>
            <div 
                onClick={() => { setIsOpen(!isOpen); console.log("Clicked"); }}
                className="cart text-2xl pl-5 pr-3 relative">
                <BsBag className=" cursor-pointer"/>
                <div className="bg-red-500 absolute -right-2 -bottom-0 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                    {itemAmount}
                </div>
            </div>
            <div className="login-btn">
                <button className="pl-5 pr-3 cursor-pointer">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header