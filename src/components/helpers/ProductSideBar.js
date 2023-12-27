import React from "react";
import ShopByCategory from "./ShopByCategory";
import ShopByBrand from "./ShopByBrand";
import ShopByPrice from "./ShopByPrice";

const ProductSideBar = ({ setSelectedCategories, setSelectedBrands }) => {
  return (
    <div className="mx-4 my-4 w-full rounded-md">
      <ShopByCategory setSelectedCategories={setSelectedCategories} setSelectedBrands={setSelectedBrands} />
      <ShopByBrand setSelectedBrands={setSelectedBrands} />
      <ShopByPrice />
    </div>
  );
};

export default ProductSideBar;
