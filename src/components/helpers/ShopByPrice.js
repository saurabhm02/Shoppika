import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const ShopByPrice = () => {
    const prices = ["Rs. 0 to 200", "Rs. 200 - 500", "Rs. 500 - 1000", "Rs. 1000 - 5000", "Rs. 5000 - 10000", "Rs. 10000 - 50000", "Rs. 50000 - 100000"];
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [showPrice, setShowPrice] = useState(false);
    

    const handlePriceChange = (price) => {
        const updatedPrices = [...selectedPrices];
        if (updatedPrices.includes(price)) {
          updatedPrices.splice(updatedPrices.indexOf(price), 1);
        } else {
          updatedPrices.push(price);
        }
        setSelectedPrices(updatedPrices);
    };


  return (
    // <div>
    //     <div
    //       onClick={() => setShowPrice(!showPrice)}
    //       className="cursor-pointer"
    //     >
    //       <div className="flex gap-2 text-xl font-bold items-center justify-between px-2 py-2">
    //         <p>Shop by Price</p>
    //         <div className={``}>
    //         <IoIosArrowUp
    //           className={`ml-auto transition-transform duration-200 ease-out text-2xl ${
    //             !showPrice && "rotate-180"
    //           }`}
    //         />
    //         </div>
    //       </div>
    //     </div>
    //     {showPrice && (
    //       <motion.div
    //         initial={{ y: 50, opacity: 0 }}
    //         animate={{ y: 0, opacity: 1 }}
    //         transition={{ duration: 0.5 }}
    //         className="px-3 py-1 text-lg"
    //       >
    //         <ul className="flex flex-col gap-4">
    //         <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b">Rs. 0 to 200</li>
    //           <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b" >Rs. 200 - 500</li>
    //           <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b" >Rs. 500 - 1000</li>
    //           <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b" >Rs. 1000 - 5000</li>
    //           <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b" >Rs. 5000 - 10000</li>
    //           <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b">Rs. 10000 - 50000</li>
    //           <li className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer border-b" >Rs. 50000 - 100000</li>
    //         </ul>
    //       </motion.div>
    //     )}
    // </div>
    <div>
        <div
          onClick={() => setShowPrice(!showPrice)}
          className="cursor-pointer"
        >
          <div className="flex gap-2 text-xl font-bold items-center justify-between px-2 py-2">
            <p>Shop by Price</p>
            <div className={``}>
            <IoIosArrowUp
              className={`ml-auto transition-transform duration-200 ease-out text-2xl ${
                !showPrice && "rotate-180"
              }`}
            />
            </div>
          </div>
        </div>
        {showPrice && (
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="px-3 py-1 text-lg"
            >
                {prices.map((price, index) => (
                <div key={index} className="flex items-center text-gray-600 hover:text-black">
                <input
                    type="checkbox"
                    id={`price-${index}`}
                    value={price}
                    checked={selectedPrices.includes(price)}
                    onChange={() => handlePriceChange(price)}
                    className="cursor-pointer"
                />
                <label htmlFor={`price-${index}`} className="ml-2 cursor-pointer ">
                    {price}
                </label>
                </div>
            ))}
            </motion.div>
        )}
    </div>
  )
}

export default ShopByPrice