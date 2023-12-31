import React, { useState } from 'react';
import { LiaCartPlusSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { addToCart } from '../redux/cartSlice';

const truncateTitle = (title, maxLength) => {
    if (typeof title !== 'string' || title.length <= maxLength) {
        return title;
    }
    return title.slice(0, maxLength - 2) + '..';
};

const truncateBrand = (brand, maxLength) => {
  if (typeof brand !== 'string' || brand.length <= maxLength) {
      return brand;
  }
  return brand.slice(0, maxLength - 2) + '..';
};

const WishListItem = ({item}) => {
    const dispatch =  useDispatch();

    const actualPrice = (item.price * 100) / (100 - item.discountPercentage);
    const truncatedTitle = truncateTitle(item.title, 18);
    const truncatedBrand = truncateBrand(item.brand, 15);
  
    // deconstruct the product
    const { id, title, thumbnail, rating, ratingsCount, price, discountPercentage } = item;
  
    const [isHovered, setHovered] = useState(false);
    const isSmallScreen = window.innerWidth <= 700;

  
    const addProductHandler = () => {
        dispatch(removeFromWishlist({ id: item.id }));
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        const existingItem = savedCartItems.find((item) => item.id === id);
      
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          savedCartItems.push({ ...item, quantity: 1 });
        }
    
        localStorage.setItem('cartItems', JSON.stringify(savedCartItems));
      
        dispatch(addToCart({ ...item, oneQuantityPrice: price }));
      
        toast.success(`${title} is moved to cart!`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };

      const removeHandler = () =>{
        dispatch(removeFromWishlist({ id: item.id }))
        toast.error(`${title} is removed from wishlist!`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
  
    return (
      <div className="lg:w-[240px] md:w-[205px] group hover:shadow-xl transition-all duration-2000 ease-in-out relative group sm:w-[160px]">
        <ToastContainer/>
        <div className="img relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link to={`/product/${title}`}>
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={thumbnail}
              alt="product image"
              style={{ height: '200px' }}
              className="w-full cursor-pointer object-cover"
            />
            {isHovered && (
              <img
                src={item.images[1]} 
                alt="secondImage on hover"
                style={{ height: '200px', position: 'absolute', top: 0, left: 0 }}
                className="cursor-pointer object-cover w-full"
              />
            )}
  
          </Link>
          <div className="p-1 absolute bottom-2 left-2 bg-white bg-opacity-70 text-xs font-semibold rounded z-10 flex items-center">
            {rating} <span className="pl-1 pr-1 text-sm text-green-600"><FaStar /></span> | {ratingsCount}
          </div>
          <div onClick={removeHandler}>
            <div className="absolute top-3 right-3 p-1 text-lg bg-white bg-opacity-70 rounded-full cursor-pointer hover:text-xl block">
              <RxCross2 /> 
            </div>
            <div onClick={addProductHandler}>
                <div className="absolute bottom-2 right-2 p-1 text-lg bg-white bg-opacity-70 rounded-full cursor-pointer hover:text-xl sm:inline-block lg:hidden">
                    <LiaCartPlusSolid />
                </div>
            </div>
          </div>
        </div>
  
        <div className="content text-left flex flex-col py-0 px-2 ">
          <div className="det relative justify-end overflow-hidden">
  
            <div className={` prod-det ${isSmallScreen ? " " : "transform group-hover:translate-y-24 sm:transition-transform duration-500"} `}>
              <p className="font-semibold text-lg mb-1">{truncatedBrand}</p>
              <p className="text-sm mb-1 text-slate-700 cursor-pointer">{truncatedTitle}</p>
            </div>
  
            <div className="cart absolute z-20 w-full text-lg translate-y-32 lg:flex items-center gap-1 top-20 transform  group-hover:translate-y-0 transition-transform cursor-pointer duration-500 sm:hidden ">
              <button onClick={addProductHandler}>
                <div className="absolute w-full bottom-8  p-1  bg-white bg-opacity-70  flex items-center justify-center gap-2  hover:border-black border-2">
                   move to cart <LiaCartPlusSolid className="text-2xl"/>
                </div>
              </button>
            </div>
          </div>
  
          <div className="product-price flex gap-2 items-center">
            <p className="font-bold ">Rs. {price}</p>
            <div className="price-right text-xs flex gap-1">
              <span className="line-through text-slate-600">Rs. {actualPrice.toFixed(0)}</span>
              <span className="text-orange-500">({discountPercentage}% OFF)</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WishListItem;