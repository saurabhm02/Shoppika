import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';

const ProductsPagination = ({ itemsPerPage, products, setProducts, selectedCategories, selectedBrands }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const filteredProducts = products.filter((product) => {
    const categoryFilter = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandFilter = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryFilter && brandFilter;
  });

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    setItemStart(newOffset + 1);
  };

  useEffect(() => {
    setItemOffset(0);
    setItemStart(1);
  }, [selectedCategories, selectedBrands]);

  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid items-end place-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full mx-auto space-y-12 space-x-1 min-h-[80vh] lg:py-4 sm:py-10 md:py-4 pr-5"
      >
        <ProductItem currentItems={currentItems} />
      </motion.div>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
        pageClassName="mr-6"
        containerClassName="flex text-base font-semibold font-titleFont py-8 lg:px-10"
        activeClassName="bg-black text-white"
      />
      <p className="text-base font-normal text-lightText lg:px-10 inline-block sm:hidden ">
        Products from {itemStart} to {endOffset} of {filteredProducts.length}
      </p>
    </div>
  );
};

export default ProductsPagination;