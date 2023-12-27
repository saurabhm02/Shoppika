import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const ShopByBrand = ({ setSelectedBrands }) => {
  const [showBrands, setShowBrands] = useState(false);
  const brands = ["Apple", "Adidas", "Puma", "OPPO", "Huawei", "Microsoft Surface", "Realme", "Samsung"];
  const [selectedBrands, setSelectedBrandsInternal] = useState([]);

  const handleBrandChange = (brand) => {
    const updatedBrands = [...selectedBrands];
    if (updatedBrands.includes(brand)) {
      updatedBrands.splice(updatedBrands.indexOf(brand), 1);
    } else {
      updatedBrands.push(brand);
    }
    setSelectedBrandsInternal(updatedBrands);
    setSelectedBrands(updatedBrands);
  };

  return (
    <div className="mb-2">
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <div className="flex gap-2 text-xl font-bold items-center justify-between px-2 py-2">
          <p>Shop by Brand</p>
          <div className={``}>
            <IoIosArrowUp
              className={`ml-auto transition-transform duration-200 ease-out text-2xl ${
                !showBrands && "rotate-180"
              }`}
            />
          </div>
        </div>
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 text-lg"
        >
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center text-gray-600 hover:text-black">
              <input
                type="checkbox"
                id={`brand-${index}`}
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="cursor-pointer"
              />
              <label htmlFor={`brand-${index}`} className="ml-2 cursor-pointer ">
                {brand}
              </label>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ShopByBrand;
