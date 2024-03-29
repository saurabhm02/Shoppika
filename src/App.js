import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Pages/Body";
import Header from "./components/Pages/Header";
import Products from "./components/Products/Products";
import "slick-carousel/slick/slick.css";
import ProductDetails from "./components/Products/ProductDetails";
import Footer from "./components/helpers/Footer";
import CartPage from "./components/cart/CartPage";
import WishListPage from "./components/wishList/WishListPage";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { ToastContainer } from 'react-toastify';

export const MyContext = createContext();

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:title" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/wishlist" element={<WishListPage/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const data = await fetch("https://shoppika.onrender.com/api/products");
      const json = await data.json();
      setProducts(json.products);
      console.log(json.products);
    } catch (err) {
      console.log("Error" + err);
    }
  };

  return (
    <MyContext.Provider value={{ products: products, setProducts: setProducts }}>
      <Router>
        <ToastContainer />
        <Layout />
      </Router>
    </MyContext.Provider>
  );
}

export default App;
