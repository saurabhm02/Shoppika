import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import { MyContext } from '../../App';

const Products = () => {
  const { products } = useContext(MyContext);
  const [items, setItems] = useState(products);
  // console.log(products)

  const filterItem = (item)=>{

    const updateProducts = products.filter((curElem)=>{
      return curElem.category === item;
    });
    setItems(updateProducts);
  }

 
  if (!products || products.length === 0) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container mx-auto py-20">
      <div className="sec-header flex gap-4 items-center">
        <h2 className="text-3xl font-semibold">Explore Our Products</h2>
        <div>
          <ul className="flex gap-2 cursor-pointer">
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => setItems(products)}>All</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("smartphones")}>smartphones</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("Clothings")}>clothings</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("laptops")}>laptops</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("cap")}>cap</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("fragrances")}>fragrances</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("skincare")}>skincare</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("groceries")}>groceries</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("shoes")}>shoes</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("home-decoration")}>home-decoration</li>
            <li className="py-1 px-2 bg-gray-100 rounded-md " onClick={() => filterItem("electronics")}>electronics</li>
          </ul>
        </div>
      </div>
      <div className="grid items-end place-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-full mx-auto space-y-10 space-x-1 min-h-[80vh] py-2 px-4">
        {items.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
