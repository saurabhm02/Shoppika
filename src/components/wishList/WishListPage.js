import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWishListItems } from '../redux/wishlistSlice';
import { motion } from 'framer-motion';
import emptyBanner from "../../assets/banners/emptyBanner.jpg";
import WishListItem from './WishListItem';

const WishListPage = () => {
    const dispatch = useDispatch();
    const isSmallScreen = window.innerWidth <= 600;
    const { wishlistItems } = useSelector((state) => state.wishlist);

    useEffect(() => {
        const savedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        dispatch(loadWishListItems(savedWishlistItems));
    }, [dispatch]);

  return (
    <div className=" border-2 mt-14">
      {
        !isSmallScreen && (
          <div className="text-xl pt-8 px-6 flex  gap-2">
            <span className="font-bold">
              My Wishlist
            </span> 
            {wishlistItems.length > 0 && (
              <span>  
                {wishlistItems.length}items
              </span>
            )}
          </div>
        )
      }
      <div>
        {wishlistItems.length > 0 ? (
          <div className="flex-[2]">
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="grid items-end place-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-full mx-auto space-y-12 space-x-1 min-h-[80vh] lg:py-0 lg:pb-10 sm:py-2 md:py-3 pr-5"
              >
              {wishlistItems.map((item) => (
                  <WishListItem key={item.id} item={item} />
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <img
              src={emptyBanner}
              width={300}
              height={300}
              alt="emptyBanner"
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">
              Your Wishlist is empty
            </span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your wishList.
              <br />
              Go ahead and explore top categories.
            </span>
          </div>
        )}
      </div>
     </div>
  )
}

export default WishListPage;