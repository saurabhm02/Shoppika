import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import ProductSideBar from './ProductSideBar';
import ProductsBanner from '../helpers/ProductsBanner';
import ProductsPagination from './ProductsPagination';
import { Link } from 'react-router-dom';
import { HiOutlineChevronRight } from 'react-icons/hi';


const Products = () => {
  const { products, setProducts } = useContext(MyContext);
  const [items, setItems] = useState(products);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("Default");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const itemPerPagefromContainer = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    setSortBy(selectedSortOption);
    let sortedProducts = [...products];
    if (selectedSortOption === "Default") {
      sortedProducts = defaultSort(products);
    } else if (selectedSortOption === "Better Discount") {
      sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else if (selectedSortOption === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  const defaultSort = (products) => {
    return [...products].sort((a, b) => a.id - b.id);
  };

  const filterPrice = (item) => {
    const [min, max] = item.split(" - ");
    const updateProducts = products.filter((curElem) => {
      const price = curElem.price;
      return price >= parseInt(min) && price <= parseInt(max);
    });
    setItems(updateProducts);
    setSelectedPrices([...selectedPrices, item]);
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const filterItem = (item) => {
    const updateProducts = products.filter((curElem) => {
      return curElem.category === item;
    });
    setItems(updateProducts);
    setSelectedCategories([item]);
    setSelectedBrands([]);
  };

  useEffect(() => {
    setItems(products);
  }, [products]);

  return (
    <div className="container mx-auto py-4 relative w-[100vw]">
      <div className="w-full flex flex-col gap-3 px-7">
        <p className="text-5xl font-bold ">
          <span>Products</span>
        </p>
        <p className="text-lg font-normal text-lightText capitalize flex items-center ">
          <span className="text-lightText hover:font-semibold">
            <Link to="/">Home</Link>
          </span>
          <span className="px-1">
            <HiOutlineChevronRight />
          </span>
          <span className="text-lightText hover:font-semibold">
            <Link to="/products">Products</Link>
          </span>
        </p>
      </div>
      <div className="w-full h-full flex pb-20 gap-2">
        <div className="w-[20%] lg:w-[20%] hidden lg:inline-flex h-full">
          <ProductSideBar
            setSelectedCategories={setSelectedCategories}
            setSelectedBrands={setSelectedBrands}

          />
        </div>
        <div className="w-full md:w-[100%] lg:w-[80%] h-full flex flex-col items-center gap-10">
          <ProductsBanner
            itemPerPagefromContainer={itemPerPagefromContainer}
            handleSortChange={handleSortChange}
            sortBy={sortBy}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            filterItem={filterItem}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
          />
          <ProductsPagination
            itemsPerPage={itemsPerPage}
            products={items}
            setProducts={setItems}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
          />
        </div>
      </div>
    </div>
  );
};
export default Products;