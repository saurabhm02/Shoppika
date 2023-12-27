import React from 'react';
import Product from './Product';

const ProductItem = ({ currentItems }) => {
    // console.log('Current Items:', currentItems);
    return (
      <>
        {currentItems && currentItems.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    );
};
  

export default ProductItem;
