import React from 'react';
import productOfYear from "../../assets/banners/productOfYear.webp";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductOfYear = () => {
  return (
    <motion.div
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}  
    className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <img
          className="w-full h-full object-cover hidden md:inline-block"
          src={productOfYear}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-4xl font-bold text-primeColor">
            Product of The year
          </h1>
          <p className="text-lg font-sans font-normal max-w-[600px] mr-4">
          In our fast-paced world, where every moment matters, the search for the perfect timepiece is an enduring pursuit. This year, the unveiled "Timepiece of the Year" embodies precision, elegance, and innovation in horology.
          </p>
          <Link to="/products">
            <button className=" bg-gray-900 text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
                Shop Now
            </button>
          </Link>
        </div>
    </motion.div>
  )
}

export default ProductOfYear