import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GoTriangleDown } from 'react-icons/go';
import { HiOutlineSortDescending, HiOutlineSortAscending } from "react-icons/hi";

const ProductsBanner = ({
  itemPerPagefromContainer,
  handleSortChange,
  sortBy,
  selectedCategories,
  setSelectedCategories,
  filterItem,
  selectedBrands,
  setSelectedBrands
}) => {
  const categories = ["smartphones", "Clothings", "laptops", "cap", "fragrances", "skincare", "groceries", "shoes", "home-decoration", "electronics"];
  const [show, setShow] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  return (
    <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0 py-2 absolute lg:right-12 sm:right-6">

      <div className="flex items-center gap-2 text-[#767676] relative lg:hidden sm:pr-16">
        <div
        onClick={() => setShow(!show)}
        ref={ref}
        className="flex h-14 cursor-pointer items-center gap-2 text-xl "
      >
        {/* {show ? <HiOutlineSortAscending className="w-10 h-8 " /> : <HiOutlineSortDescending className="w-10 h-8 "/>} */}
        <HiOutlineSortDescending className="w-10 h-8 "/>
        <p className="text-[14px] sm:hidden inline-block font-normal">Shop by Category</p>

        {show && (
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-12 z-50 bg-primeColor w-auto text-[#767676] h-auto p-2 pb-2 bg-[#262626] rounded-lg "
          >
            {categories.map((category, index) => (
              <motion.li
                key={index}
                onClick={() => {
                  setShow(false);
                  filterItem(category);
                  setSelectedCategories([category]);
                  setSelectedBrands([]); // Reset selected brands when category changes
                }}
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
              >
                {category}
              </motion.li>
            ))}
          </motion.ul>
        )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-[#767676] relative hidden">
        <label className="block">Category:</label>
        <select
          onChange={(e) => {
            filterItem(e.target.value);
            setSelectedCategories([e.target.value]);
            setSelectedBrands([]); // Reset selected brands when category changes
          }}
          value={selectedCategories.length ? selectedCategories[0] : 'All'}
          id="categories"
          className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-base block appearance-none focus-within:outline-none focus-visible:border-black focus-visible:text-black"
        >
          <option value="All">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="clothings">Clothings</option>
          {/* Add more categories as needed */}
        </select>
        <span className="absolute text-sm right-2 md:right-4 top-2.5">
          <GoTriangleDown />
        </span>
      </div>


      <div className="flex items-center gap-2 text-base text-[#767676] relative sm:pr-6">
        <label className="block">Sort by:</label>
        <select
          id="countries"
          value={sortBy}
          onChange={handleSortChange}
          className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-base block appearance-none focus-within:outline-none focus-visible:border-black focus-visible:text-black"
        >
          <option value="Default">Default</option>
          <option value="Better Discount">Better Discount</option>
          <option value="Low to High">Price: Low to High</option>
          <option value="High to Low">Price: High to Low</option>
        </select>
        <span className="absolute text-sm right-2 md:right-4 sm:right-8 top-2.5">
          <GoTriangleDown />
        </span>
      </div>
      
     
      
      <div className="lg:inline-flex items-center gap-2 text-[#767676] relative hidden">
        <label className="block">Show:</label>
        <select
          onChange={(e) => itemPerPagefromContainer(+e.target.value)}
          id="countries"
          className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-base block appearance-none focus-within:outline-none focus-visible:border-black focus-visible:text-black"
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </select>
        <span className="absolute text-sm right-3 top-2.5">
          <GoTriangleDown />
        </span>
      </div>
    </div>
  );
};

export default ProductsBanner;