import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Product = ({ product }) => {
  const actualPrice = (product.price * 100) / (100 - product.discountPercentage);

  return (
    <div className="max-w-[240px] group hover:shadow-xl transition-all duration-2000 ease-in-out relative">
      <div className="img relative">
        <img 
          src={product.thumbnail} 
          alt="product image" 
          style={{ height: '220px', width: '230px' }} 
          className=""
        />
        <div className="p-1 absolute bottom-2 left-2 bg-white bg-opacity-70  text-xs font-semibold rounded z-50 flex items-center">
          {product.rating}  <span className="pl-1 pr-1 text-sm text-green-600"><FaStar/></span>  | {product.ratingPeople}
        </div>
      </div>
      <div className="content text-left flex flex-col py-2 px-2">
        <p className="font-semibold text-lg mb-1">{product.brand}</p>
        <p className="text-sm mb-1 text-slate-700">{product.title}</p>
        <div className="product-price flex gap-2 items-center">
          <p className="font-bold ">Rs. {product.price}</p>
          <div className="price-right text-xs flex gap-1">
            <span className="line-through text-slate-600">Rs. {actualPrice.toFixed(0)}</span>
            <span className="text-orange-500">({product.discountPercentage}% OFF)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
