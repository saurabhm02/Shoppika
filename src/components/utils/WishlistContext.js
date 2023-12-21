import React, { createContext, useState } from 'react';

export const wishlistContext = createContext();

const WishlistContext = ({ children }) => {
  const [list, setList] = useState([]);

  const addToWishlist = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const wishlistItem = list.find((item) => {
      return item.id === id;
    });

    if (wishlistItem) {
      const newWishlist = [...list].map((item) => {
        if (item.id === id) {
          return { ...item, amount: wishlistItem.amount + 1 };
        } else {
          return item;
        }
      });
      setList(newWishlist);
    } else {
      setList([...list, newItem]);
    }
  };

  const removeFromWishList = (id) => {
    const newWishlist = list.filter((item) => {
      return item.id !== id;
    });
    setList(newWishlist);
  };

  return (
    <wishlistContext.Provider
      value={{
        list,
        setList,
        addToWishlist,
        removeFromWishList,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistContext;
