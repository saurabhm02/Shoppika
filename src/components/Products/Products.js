import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  }, []);

  const getProducts = async() => {
    try{
      const data = await fetch("https://shoppika.onrender.com/api/products");
      const json = await data.json();
      setProducts(json.products);
    }
    catch(err){
      console.log("Error" + err);
    }
  }
  return (
    <div>
      {
        <div className="grid items-end place-items-center xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-full mx-auto space-y-10 space-x-1 min-h-[80vh] py-2 px-4">
          {
            products.map((product) => {
              return (
                <Product key={product.id} product={product} />
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Products