import React, { useContext, useState } from 'react';
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
  const { id, title, thumbnail, rating, ratingsCount, brand, price, discountPercentage } = product;

  const [isHovered, setHovered] = useState(false);

  return (
    <div className="lg:w-[240px] md:w-[240px] group hover:shadow-xl transition-all duration-2000 ease-in-out relative group sm:w-[320px]">
      <div className="img relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to={`/product/${title}`}>
          <img
            src={thumbnail}
            alt="product image"
            style={{ height: '200px' }}
            className="w-full cursor-pointer object-cover"
          />
          {isHovered && (
            <img
              src={product.images[1]} 
              alt="second image on hover"
              style={{ height: '200px', position: 'absolute', top: 0, left: 0 }}
              className="cursor-pointer object-cover w-full"
            />
          )}

        </Link>
        <div className="p-1 absolute bottom-3 left-2 bg-white bg-opacity-70 text-xs font-semibold rounded z-10 flex items-center">
          {rating} <span className="pl-1 pr-1 text-sm text-green-600"><FaStar /></span> | {ratingsCount}
        </div>
        {/* <button onClick={() => addToWishlist(product, id)}>
          <div className="absolute bottom-8 right-2 p-1 text-lg bg-white bg-opacity-70 rounded-full hover:text-xl">
            <FiHeart />
          </div>
        </button> */}
      </div>

      <div className="content text-left flex flex-col py-1 px-2 ">
        <div className="det relative justify-end overflow-hidden">

          <div className="prod-det transform group-hover:translate-y-24 transition-transform duration-500">
            <p className="font-semibold text-lg mb-1">{brand}</p>
            <p className="text-sm mb-1 text-slate-700 cursor-pointer">{truncatedTitle}</p>
          </div>

          <div className="wishlist absolute z-20 w-full text-lg  flex items-center gap-1 top-20 transform translate-y-32 group-hover:translate-y-0 transition-transform cursor-pointer duration-500 ">
            <button onClick={() => addToWishlist(product, id)}>
              <div className="absolute w-full bottom-8  p-1  bg-white bg-opacity-70  flex items-center justify-center gap-5  hover:border-black border-2">
                <FiHeart /> Wishlist
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
};

export default Product;
