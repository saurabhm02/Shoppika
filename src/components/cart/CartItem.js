import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { removeFromCart, updateCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToWishlist } from '../redux/wishlistSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: item.id,
        };
        dispatch(updateCart(payload));
    };

    const addWishlistHandler = () => {
        dispatch(removeFromCart({ id: item.id }));
        const savedWishList = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    
        // Use a different variable (wishListItem) for the existing item check
        const existingItem = savedWishList.find((wishListItem) => wishListItem.id === item.id);
    
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            savedWishList.push({ ...item, quantity: 1 });
        }
    
        localStorage.setItem('wishlistItems', JSON.stringify(savedWishList));
    
        dispatch(addToWishlist({ ...item, oneQuantityPrice: item.price }));
    
        toast.success(`${item.title} is moved to wishlist!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    

    const removeHandler = ()=>{
        dispatch(removeFromCart({ id: item.id }));
        toast.error(`${item.title} is removed from cart!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b pr-3">
    <ToastContainer/>
        
        <div className="shrink-0 aspect-square w-[50px] sm:w-[70px] md:w-[120px]">
            <img
                src={item?.thumbnail}
                alt={item?.title}
                width={120}
                className="object-cover lg:h-24  sm:h-20 rounded-md"
            />
        </div>

        <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
                    
                <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                    {item.title}
                </div>

                    
                <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                    {item.brand}
                </div>

                  
                <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                MRP : &#8377;{item?.price}
                </div>
            </div>

                
            <div className="text-md font-medium text-black/[0.5] hidden md:block">
                {item?.brand}
            </div>

            <div className="flex items-center mt-4">
                <div className=" w-full flex items-center justify-between gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                    <div className="flex items-center gap-1">

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, "quantity")}
                                value={item.quantity}
                            >
                                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => (
                                    <option key={i} value={q}>
                                        {q}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
    
                        <div
                            onClick={addWishlistHandler}
                            className="font-semibold flex items-center cursor-pointer"
                        >
                            <FiHeart size={19}/>
                        </div>

                        <RiDeleteBin6Line
                            onClick={removeHandler}
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem