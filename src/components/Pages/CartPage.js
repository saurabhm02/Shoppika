import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from 'react-router-dom';
import { cartContext } from '../utils/CartContext';

const CartPage = ({item}) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(cartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${item?.title}`}>
          <img className="max-w-[80px]" src={item?.thumbnail} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${item?.title}`}
              className="title text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {item?.title}
            </Link>
         
            <div
              onClick={() => removeFromCart(item?.id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            
            <div className="remove-icon flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={()=>decreaseAmount(item?.id)} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="amount h-full flex justify-center items-center px-2">
                {item?.amount}
              </div>
              <div onClick={()=>increaseAmount(item?.id)} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            
            <div className="item-price flex flex-1 justify-around items-center">
              Rs. {item?.price}
            </div>
            <div className="final-price flex flex-1 justify-end items-center text-primary font-medium">{`Rs. ${parseFloat(
                item?.price * item?.amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage