import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emptyBanner from "../../assets/banners/emptyBanner.jpg";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { loadCartItems, removeFromCart, updateCart } from '../redux/cartSlice';


const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log("product cartpage", cartItems);
  const [totalAmount, setTotalAmount] = useState(" ");


  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    dispatch(loadCartItems(savedCartItems));
  }, [dispatch]);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
        (total, val) => total + val.price,
        0
    );
}, [cartItems]);

  // useEffect(() => {
  //   if(totalAmount <= 200){
  //     setShippingFee(60);
  //   } 
  //   else if(totalAmount <= 1500){
  //     setShippingFee(40);
  //   }
  //   else if(totalAmount <= 5000){
  //     setShippingFee(30);
  //   }
  //   else{
  //     setShippingFee(0);
  //   }
  // }, [totalAmount]);


  return(
     <div className="w-full md:py-20">
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                  <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                      Shopping Cart
                  </div>
              </div>
               
              <div className="flex flex-col lg:flex-row gap-12 py-10 px-14">
                <div className="flex-[2]">
                  <div className="text-xl font-bold">
                          Cart Items
                  </div>
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                 
                <div className="flex-[1]">
                  <div className="text-xl font-bold">Summary</div>

                  <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                    <div className="flex justify-between">
                        <div className="uppercase text-md md:text-lg font-medium text-black">
                            Subtotal
                        </div>
                          <div className="text-md md:text-lg font-medium text-black">
                              &#8377;{subTotal}
                          </div>
                    </div>
                    <div className="text-sm md:text-md pt-4 pr-2 border-t-[2px] mt-5">
                        {cartItems.map((item) => (
                          <div className="flex pb-4" key={item.id}>
                            <div className="shrink-0 aspect-square w-[50px] md:w-[60px]">
                              <img
                                  src={item?.thumbnail}
                                  alt={item?.title}
                                  width={60}
                                  className="object-cover h-16 rounded-md"
                              />
                            </div>

                            <div className="w-full flex flex-col pl-5">
                              <div className="flex flex-col md:flex-row justify-between">
                                      
                                  <div className="text-sm font-semibold text-black/[0.8]">
                                      {item.title}
                                  </div>

                                      
                                  <div className="text-sm  font-medium text-black/[0.5] block sm:hidden md:hidden">
                                      {item.brand}
                                  </div>

                                    
                                  <div className="text-sm  font-bold text-black/[0.5] mt-2">
                                      MRP : &#8377;{item?.price}
                                  </div>
                              </div>

                                
                            {/* <div className="text-md font-medium text-black/[0.5] hidden md:block">
                                {item?.brand}
                            </div> */}

                            <div className="flex items-center mt-4">
                                <div className=" w-full flex items-center justify-between gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-1">
                                        <div className="font-semibold">Quantity:</div>
                                        <p>{item.quantity}</p>
                                    </div>
                                </div>
                                <RxCross2
                                  onClick={() =>
                                      dispatch(removeFromCart({ id: item.id }))
                                  }
                                  className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                                />
                                </div>
                            </div>
                            </div>

                          </div>
                        ))}
                    </div>
                  </div>

                  <button
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                    // onClick={handlePayment}
                  >
                    Checkout
                    {/* {loading && <img src="/spinner.svg" />} */}
                  </button>
                  <Link
                    to="/products"
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  >
                    Continue Shopping
                  </Link>

                </div>
             
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
                Your cart is empty
              </span>
              <span className="text-center mt-4">
                Looks like you have not added anything in your cart.
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

export default CartPage
