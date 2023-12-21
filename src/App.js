import React, {createContext, useEffect, useState} from "react";
import Body from "./components/Pages/Body";
import Header from "./components/Pages/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Footer from "./components/Pages/Footer";
import WishlistContextProvider from "./components/utils/WishlistContext";
import SidebarContextProvider from "./components/utils/SidebarContext";
import ProductDetails from "./components/Products/ProductDetails";
import CartContextProvider from "./components/utils/CartContext";
export const MyContext = createContext();


function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  }, []);

  const getProducts = async() => {
    try{
      const data = await fetch("https://shoppika.onrender.com/api/products");
      const json = await data.json();
      setProducts(json.products);
      console.log(json.products);
    }
    catch(err){
      console.log("Error" + err);
    }
  }

  return (
    <SidebarContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <MyContext.Provider value={{products: products, setProducts: setProducts}}>
            <div className="App ">
              <div className="sticky top-0">
                <Header/>
              </div>
              <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/product/:title" element={<ProductDetails/>}/>
              </Routes>
              <Footer/>
            </div>
          </MyContext.Provider>
        </WishlistContextProvider>
      </CartContextProvider>
    </SidebarContextProvider>
  );
}

export default App;
