import React, { useContext } from 'react';
import { sidebarContext } from '../utils/SidebarContext';
import { wishlistContext } from '../utils/WishlistContext';
import { cartContext } from '../utils/CartContext';

import { GoArrowRight } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import CartPage from './CartPage';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { isOpen, closeHandler } = useContext(sidebarContext);
    const { cart, clearCart, itemAmount, total } = useContext(cartContext);

  return (
    <div className={`${isOpen ? "right-0" :"-right-full"} "w-full fixed h-full shadow-xl bg-white top-0 transition-all duration-300 z-20 px-4 lg:px-[35px] md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] " `}>
        <div className="upper flex justify-between items-center border-b py-6">
            <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
            <div className="backbtn flex justify-center items-center cursor-poniter w-8 h-8"
                onClick={closeHandler}
            >
                <GoArrowRight className="text-2xl cursor-pointer"/>

            </div>
        </div>
        
        <div className="cart-items flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
            {cart.map((item) => {
                return <CartPage item={item} key={item.id} />;
            })}
        </div>
        <div className="flex flex-col gap-y-3  mt-4">
            <div className="flex w-full justify-between items-center">
            
                <div className="font-semibold">
                    <span className="mr-2">Subtotal:</span> ${" "}
                    {parseFloat(total).toFixed(2)}
                </div>
                <div
                    onClick={clearCart}
                    className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                >
                    <GoTrash />
                </div>
            </div>
            <Link
                to={"/products"}
                className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
            >
                View more
            </Link>
            <Link
                to={"/checkout"}
                className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
            >
                Checkout
            </Link>
        </div>


    </div>
  )
}

export default Sidebar