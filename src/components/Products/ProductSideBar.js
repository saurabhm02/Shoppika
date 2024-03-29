import React from "react";
import ShopByCategory from "../helpers/ShopByCategory";
import ShopByBrand from "../helpers/ShopByBrand";

const ProductSideBar = ({ setSelectedCategories, setSelectedBrands }) => {
  return (
    <div className="mx-4 my-4 w-full rounded-md">
      <ShopByCategory setSelectedCategories={setSelectedCategories} setSelectedBrands={setSelectedBrands} />
      <ShopByBrand setSelectedBrands={setSelectedBrands} />
    </div>
  );
};

export default ProductSideBar;
