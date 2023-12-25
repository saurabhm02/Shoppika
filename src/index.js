import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import WishlistContextProvider from "./components/utils/WishlistContext";
import SidebarContextProvider from "./components/utils/SidebarContext";
import CartContextProvider from "./components/utils/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
              <App />
          </WishlistContextProvider>
        </CartContextProvider>
      </SidebarContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
