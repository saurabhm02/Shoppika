import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWishListItems } from '../redux/wishlistSlice';
import { motion } from 'framer-motion';
import emptyBanner from "../../assets/banners/emptyBanner.jpg";
import { Link } from 'react-router-dom';
import WishListItem from './WishListItem';

const WishListPage = () => {
    const dispatch = useDispatch();
    const { wishlistItems } = useSelector((state) => state.wishlist);

    useEffect(() => {
        const savedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        dispatch(loadWishListItems(savedWishlistItems));
    }, [dispatch]);

  return (
    <div className="w-full md:py-20">
         <div>
          {wishlistItems.length > 0 ? (
            <>
              <div className="flex-[2]">
                    <div className="text-xl font-bold">
                            Wishlist Items
                    </div>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="grid items-end place-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full mx-auto space-y-12 space-x-1 min-h-[80vh] lg:py-4 sm:py-10 md:py-4 pr-5"
                        >
                        {wishlistItems.map((item) => (
                            <WishListItem key={item.id} item={item} />
                        ))}
                    </motion.div>
                </div>

            </>

          ) : (
            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
              <img
                  src={emptyBanner}
                  width={300}
                  height={300}
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
                <Link
                    to="/products"
                    className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                >
                    Continue Shopping
                </Link>
            </div>
          )}
 
        </div>
     </div>
  )
}

export default WishListPage