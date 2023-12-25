import React from 'react';
import { Link } from 'react-router-dom';
import saleImgOne from "../../assets/sales/saleImgOne.webp";
import saleImgTwo from "../../assets/sales/saleImgTwo.webp";
import saleImgThree from "../../assets/sales/saleImgThree.webp";
import { motion, AnimatePresence } from 'framer-motion';

const Sale = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10"
      >
        <div className="w-full md:w-2/3 lg:w-1/2 h-full">
            <Link to="/products">
                <img className="h-full w-full object-cover" src={saleImgOne} />
            </Link>
        </div>
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10"
        >
            <div className="h-1/2 w-full">
                <Link to="/products">
                <img className="h-full w-full object-cover" src={saleImgTwo} />
                </Link>
            </div>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="h-1/2 w-full"
            >
                <Link to="/products">
                <img
                    className="h-full w-full object-cover"
                    src={saleImgThree}
                />
                </Link>
            </motion.div>
        </motion.div>
      </motion.div>
  </AnimatePresence>
  )
}

export default Sale