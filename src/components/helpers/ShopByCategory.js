import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const ShopByCategory = ({ setSelectedCategories }) => {
  const categories = ["smartphones", "Clothings", "laptops", "cap", "fragrances", "skincare", "groceries", "shoes", "home-decoration", "electronics"];
  const [selectedCategories, setLocalSelectedCategories] = useState([]);
  const [showCategory, setShowCategory] = useState(true);

  const handleCategoryChange = (category) => {
    const updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(category)) {
      updatedCategories.splice(updatedCategories.indexOf(category), 1);
    } else {
      updatedCategories.push(category);
    }
    setLocalSelectedCategories(updatedCategories);
  };

  useEffect(() => {
    setSelectedCategories(selectedCategories);
  }, [selectedCategories, setSelectedCategories]);

  return (
    <div className="mb-2">
      <div
        onClick={() => setShowCategory(!showCategory)}
        className="cursor-pointer"
      >
        <div className="flex gap-2 text-xl font-bold items-center justify-between px-2 py-2">
          <p>Shop by Category</p>
          <div>
            <IoIosArrowUp
              className={`ml-auto transition-transform duration-200 ease-out text-2xl ${
                !showCategory && "rotate-180"
              }`}
            />
          </div>
        </div>
      </div>
      {showCategory && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 text-lg"
        >
          {categories.map((category, index) => (
            <div key={index} className="flex items-center text-gray-600 hover:text-black">
              <input
                type="checkbox"
                id={`category-${index}`}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="cursor-pointer"
              />
              <label htmlFor={`category-${index}`} className="ml-2 cursor-pointer ">
                {category}
              </label>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ShopByCategory;
