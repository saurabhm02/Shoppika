import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import reportWebVitals from './reportWebVitals';
import WishlistContextProvider from "./components/utils/WishlistContext";
import SidebarContextProvider from "./components/utils/SidebarContext";
import CartContextProvider from "./components/utils/CartContext";
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SidebarContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
              <App />
          </WishlistContextProvider>
        </CartContextProvider>
    </SidebarContextProvider>
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
