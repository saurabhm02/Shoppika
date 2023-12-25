import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import { FiSearch } from 'react-icons/fi';
import Banner from '../helpers/Banner';
import Sale from '../helpers/Sale';
import NewArrivals from '../helpers/NewArrivals';
import ProductOfYear from '../helpers/ProductOfYear';
import SpecialOffers from '../helpers/SpecialOffers';


const Body = () => {
  const { products } = useContext(MyContext);
  console.log("body:", products);

  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(products);

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = products.filter((product) =>
      product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(filtered);
  };

  return (
    <div className=" w-[100vw] h-[100vh] overflow-x-hidden">
      <Banner/>
      <div className="max-w-container mx-auto px-4">
        <Sale/>
        <NewArrivals/>
        <ProductOfYear/>
        <SpecialOffers/>
      </div>
    </div>
  );
};

export default Body;
