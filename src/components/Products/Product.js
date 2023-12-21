import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { wishlistContext } from '../utils/WishlistContext';

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength - 2) + '..';
  }
  return title;
};

const Product = ({ product }) => {
  const { addToWishlist } = useContext(wishlistContext);
  const actualPrice = (product.price * 100) / (100 - product.discountPercentage);
  const truncatedTitle = truncateTitle(product.title, 25);

  // deconstruct the product
  const {id, title, thumbnail, rating, ratingsCount, brand, price,discountPercentage } = product;

  return (
    <div className="max-w-[240px] group hover:shadow-xl transition-all duration-2000 ease-in-out relative ">
    
        <div className="img relative">
          <img 
            src={thumbnail} 
            alt="product image" 
            style={{ height: '220px', width: '230px' }} 
            className="cursor-pointer object-cover"
          />
          <div className="p-1 absolute bottom-8 left-2 bg-white bg-opacity-70  text-xs font-semibold rounded z-50 flex items-center">
            {rating}  <span className="pl-1 pr-1 text-sm text-green-600"><FaStar/></span>  | {ratingsCount}
          </div>
          <button onClick={() => addToWishlist(product, id)}>
            <div className="absolute bottom-8 right-2 p-1 text-lg bg-white bg-opacity-70 rounded-full hover:text-xl">
              <FiHeart/>
            </div>
          </button>
        </div>
      
      <div className="content text-left flex flex-col py-2 px-2">
        <p className="font-semibold text-lg mb-1">{brand}</p>
        <Link to={`/product/${title}`}>
          <p className="text-sm mb-1 text-slate-700 cursor-pointer">{truncatedTitle}</p>
        </Link>
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
};

export default Product;
