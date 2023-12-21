import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import { FiSearch } from 'react-icons/fi';

const desc = "we have the largest collection of products";

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
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-6xl font-bold text-red-700">UNIVERSAL FINDS HUB</h1>
        <p className="text-2xl font-bold text-black">
          Your One-Stop Source for Fashion, Electronics, Furniture & More
        </p>

        <form>
          <div className="relative max-w-sm max-sm:w-[300px] max-md:w-[350px] w-[400px] mx-auto mt-2 bg-transparent">
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm"
              type="search"
              placeholder="Search..."
              value={searchInput}
              onChange={searchHandler}
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 text-lg">
              <FiSearch />
            </button>
          </div>
        </form>

        <Link
          to="/products"
          className="text-xl text-white mt-4 bg-rose-600 px-3 py-1 rounded-md hover:bg-rose-400 "
        >
          Shop Now
        </Link>

        {searchInput ? (
          <>
            <p className="text-2xl font-bold text-slate-700">{desc}</p>
            <ul className="flex flex-wrap gap-2">
              {filterProducts.map((product) => (
                <li className="p-1 px-4 bg-slate-100 flex rounded-md" key={product.id}>
                  <Link to={`/product/${product.title}`}>{product.title}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Body;
