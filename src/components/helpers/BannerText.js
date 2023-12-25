import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BannerText = ({ title }) => {
  return (
    <div className=" inline-block absolute w-full h-full max-w-screen-xl lg:top-20 lg:left-24 md:top-12 md:left-14 sm:mx-auto sm:px-4 xl:px-0 sm:py-10 sm:top-[-30px] sm:left-2">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-white lg:text-7xl  md:text-5xl sm:text-2xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" text-slate-100 lg:text-xl lg:mt-2 md:text-lg sm:text-sm sm:pr-10"
      >
        Elevate your style in our mid-season sale. Explore tech, fashion, and <br/>
        more on our diverse multistore platform.
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex gap-x-4 mt-2"
      >
        <button className="rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold lg:py-3 lg:px-6 md:py-3 md:px-5 sm:py-2 sm:px-3 sm:mt-2">
          Find out more
        </button>
        <Link to="/products" >
            <button className="rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold lg:py-3 lg:px-6 md:py-3 md:px-5 sm:py-2 sm:px-3 sm:mt-2 ">
            Shop Now
            </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BannerText;
