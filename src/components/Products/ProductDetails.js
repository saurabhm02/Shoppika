// // import React, { useContext, useState } from 'react';
// // import { Link, useParams } from "react-router-dom";
// // import { MyContext } from '../../App';
// // import { HiOutlineChevronRight } from "react-icons/hi";
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../redux/cartSlice';
// // import { ToastContainer, toast } from 'react-toastify';
// // import { addToWishlist } from '../redux/wishlistSlice';

// // const ProductDetails = () => {
// //   const { title } = useParams();
// //   const { products } = useContext(MyContext);
// //   const dispatch = useDispatch();
  
// //   const product = products.find((product) => {
// //     return product.title.toLowerCase() === title.toLowerCase();
// //   });

// //   const [activeImg, setActiveImg] = useState(product?.thumbnail || '');

// //   if(!product){
// //     return(
// //         <div className="flex justify-center items-center h-screen text-lg">
// //             Loading...
// //         </div>
// //     )
// //   }
   
// //   const {id , brand, price, description} = product;

// //   const addProductHandler = async () => {
// //     try {
// //       const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
// //       const existingItem = savedCartItems.find((item) => item.id === id);

// //       if (existingItem) {
// //         existingItem.quantity += 1;
// //       } else {
// //         savedCartItems.push({ ...product, quantity: 1 });
// //       }

// //       localStorage.setItem('cartItems', JSON.stringify(savedCartItems));

// //       dispatch(addToCart({ id: id, title: title, price: price }));

// //       toast.success(`Success. ${title} is in the cart!`, {
// //         position: 'bottom-right',
// //         autoClose: 5000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         progress: undefined,
// //         theme: 'dark',
// //       });
// //     } catch (error) {
// //       console.error('Error adding to cart:', error);
// //     }
// //   };

// //   const addwishlistProductHandler = async () => {
// //     try {
// //       const savedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
// //       const existingItem = savedWishlistItems.find((item) => item.id === id);

// //       if (existingItem) {
// //         existingItem.quantity += 1;
// //       } else {
// //         savedWishlistItems.push({ ...product, quantity: 1 });
// //       }

// //       localStorage.setItem('wishlistItems', JSON.stringify(savedWishlistItems));

// //       dispatch(addToWishlist({ ...product, oneQuantityPrice: price }));

// //       // Add the item to Firestore
// //       toast.success(`Success. ${title} is in the wishList!`, {
// //         position: 'bottom-right',
// //         autoClose: 5000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         progress: undefined,
// //         theme: 'dark',
// //       });
// //     } catch (error) {
// //       console.error('Error adding to wishlist:', error);
// //     }
// //   };


// //   return (
// //     <div className=" h-full lg:pt-0 lg:mt-32 md:pt-24 lg:pb-[200px] sm:pt-2 sm:pb-[120px] md:pb-12 lg:py-32 flex items-center lg:overflow-hidden">
// //         <ToastContainer/>
// //         <div className="mx-auto flex flex-col gap-4">
// //             <div className="w-full flex flex-col gap-3 lg:mt-0 sm:mt-10 lg:ml-14 sm:ml-2">
// //                 <h1 className="text-3xl inline-block font-bold lg:mt-0 sm:mt-10 sm:text-lg">
// //                     <span>{title}</span>
// //                 </h1>
// //                 <p className="text-sm font-normal text-lightText capitalize flex items-center ">
// //                     <span className="text-lightText hover:font-semibold"> <Link to="/">Home</Link>  </span>
// //                     <span className="px-1">
// //                         <HiOutlineChevronRight />
// //                     </span>

// //                     <span className="text-lightText hover:font-semibold"> <Link to="/products">Products</Link></span>

// //                     <span className="px-1">
// //                         <HiOutlineChevronRight />
// //                     </span>
// //                     <span className="capitalize font-semibold text-primeColor">
// //                         {title}
// //                     </span>
// //                 </p>
// //             </div>
// //             <div className="flex flex-col lg:flex-row items-center sm:justify-center ">
// //                 <div className="big-img flex flex-1 justify-center items-center mb-8 lg:mb-0">
// //                     <img src={activeImg} alt="productImage" width={400}  className="lg:h-80 sm:h-60 object-cover aspect-square rounded-xl lg:max-w-[30rem] sm:max-w-[20rem]" />
// //                 </div>

// //                 <div className="flex-1 text-center lg:text-left mr-2 ">
// //                     <div  className="lg:mb-2 md:mb-2 sm:mb-0">
// //                         <p className="text-violet-600 font-semibold ">{brand}</p>
// //                         <h2 className="lg:text-3xl sm:hidden font-bold">{title}</h2>
// //                     </div>
                    
// //                     <p className="text-gray-700 mb-2">{description}</p>
// //                     <h6 className="text-2xl font-semibold mb-2">Rs. {price}</h6>
                    
// //                     <p></p>
// //                     <div className="img-carousel flex flex-row gap-3 lg:justify-between sm:justify-around h-24 lg:pr-42 sm:pr-0 sm:pl-2 mb-4">
// //                         {product.images.map((img, i) => (
// //                             <img src={img} alt="productImage" key={i} 
// //                                 className="lg:w-28 lg:h-24 sm:max-w-[87px] sm:h-[90px] rounded-md cursor-pointer"
// //                                 onClick={() => setActiveImg(img)}    
// //                             />
// //                         ))}
// //                     </div>

// //                     <div className="btn flex flex-wrap justify-between lg:pb-0 sm:pb-20">
// //                     <button
// //                         className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-300 via-red-300 to-yellow-200 text-lg font-semibold py-2 px-10 rounded-xl h-full"
// //                         onClick={addProductHandler}  
// //                     >
// //                         Add to cart
// //                     </button>
// //                         <button className="bg-red-400 text-lg text-white font-semibold py-2 px-10 rounded-xl h-full"
// //                             onClick={addwishlistProductHandler}
// //                         >
// //                             Add to wishlist
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;




// import React, { useContext, useState } from 'react';
// import { Link, useParams } from "react-router-dom";
// import { MyContext } from '../../App';
// import { HiOutlineChevronRight } from "react-icons/hi";
// import { useDispatch } from 'react-redux';
// // import { addToCart, addToWishlist } from '../redux';
// import { addToCart } from '../redux/cartSlice';
// import { addToWishlist } from '../redux/wishlistSlice';
// import { toast } from 'react-toastify';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../../firebase/config';
// import { auth } from '../../firebase/config';

// const ProductDetails = () => {
//   const { title } = useParams();
//   const { products } = useContext(MyContext);
//   const dispatch = useDispatch();

//   const product = products.find((product) => product.title.toLowerCase() === title.toLowerCase());

//   const [activeImg, setActiveImg] = useState(product?.thumbnail || '');

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen text-lg">
//         Loading...
//       </div>
//     );
//   }

//   const { id, brand, price, description } = product;

//   const addProductHandler = async () => {
//     try {
//       const cartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);
//       const docRef = await addDoc(cartCollectionRef, { ...product, quantity: 1 });
  
//       dispatch(addToCart({ id: docRef.id, title: title, price: price }));
  
//       toast.success(`Item added to cart!`, {
//         position: 'bottom-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'dark',
//       });
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       toast.error(`Failed to add item to cart. Please try again.`, {
//         position: 'bottom-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'dark',
//       });
//     }
//   };
  
//   const addwishlistProductHandler = async () => {
//     try {
//       const wishlistCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);
//       await addDoc(wishlistCollectionRef, { ...product, quantity: 1 });
  
//       dispatch(addToWishlist({ ...product, oneQuantityPrice: price }));
  
//       toast.success(`Item added to wishlist!`, {
//         position: 'bottom-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'dark',
//       });
//     } catch (error) {
//       console.error('Error adding to wishlist:', error);
//       toast.error(`Failed to add item to wishlist. Please try again.`, {
//         position: 'bottom-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'dark',
//       });
//     }
//   };
  


//   return (
//     <div className=" h-full lg:pt-0 lg:mt-32 md:pt-24 lg:pb-[200px] sm:pt-2 sm:pb-[120px] md:pb-12 lg:py-32 flex items-center lg:overflow-hidden">
//         <div className="mx-auto flex flex-col gap-4">
//             <div className="w-full flex flex-col gap-3 lg:mt-0 sm:mt-10 lg:ml-14 sm:ml-2">
//                 <h1 className="text-3xl inline-block font-bold lg:mt-0 sm:mt-10 sm:text-lg">
//                     <span>{title}</span>
//                 </h1>
//                 <p className="text-sm font-normal text-lightText capitalize flex items-center ">
//                     <span className="text-lightText hover:font-semibold"> <Link to="/">Home</Link>  </span>
//                     <span className="px-1">
//                         <HiOutlineChevronRight />
//                     </span>

//                     <span className="text-lightText hover:font-semibold"> <Link to="/products">Products</Link></span>

//                     <span className="px-1">
//                         <HiOutlineChevronRight />
//                     </span>
//                     <span className="capitalize font-semibold text-primeColor">
//                         {title}
//                     </span>
//                 </p>
//             </div>
//             <div className="flex flex-col lg:flex-row items-center sm:justify-center ">
//                 <div className="big-img flex flex-1 justify-center items-center mb-8 lg:mb-0">
//                     <img src={activeImg} alt="productImage" width={400}  className="lg:h-80 sm:h-60 object-cover aspect-square rounded-xl lg:max-w-[30rem] sm:max-w-[20rem]" />
//                 </div>

//                 <div className="flex-1 text-center lg:text-left mr-2 ">
//                     <div  className="lg:mb-2 md:mb-2 sm:mb-0">
//                         <p className="text-violet-600 font-semibold ">{brand}</p>
//                         <h2 className="lg:text-3xl sm:hidden font-bold">{title}</h2>
//                     </div>
                    
//                     <p className="text-gray-700 mb-2">{description}</p>
//                     <h6 className="text-2xl font-semibold mb-2">Rs. {price}</h6>
                    
//                     <p></p>
//                     <div className="img-carousel flex flex-row gap-3 lg:justify-between sm:justify-around h-24 lg:pr-42 sm:pr-0 sm:pl-2 mb-4">
//                         {product.images.map((img, i) => (
//                             <img src={img} alt="productImage" key={i} 
//                                 className="lg:w-28 lg:h-24 sm:max-w-[87px] sm:h-[90px] rounded-md cursor-pointer"
//                                 onClick={() => setActiveImg(img)}    
//                             />
//                         ))}
//                     </div>

//                     <div className="btn flex flex-wrap justify-between lg:pb-0 sm:pb-20">
//                     <button
//                         className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-300 via-red-300 to-yellow-200 text-lg font-semibold py-2 px-10 rounded-xl h-full"
//                         onClick={addProductHandler}  
//                     >
//                         Add to cart
//                     </button>
//                         <button className="bg-red-400 text-lg text-white font-semibold py-2 px-10 rounded-xl h-full"
//                             onClick={addwishlistProductHandler}
//                         >
//                             Add to wishlist
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { MyContext } from '../../App';
import { HiOutlineChevronRight } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { addToWishlist } from '../redux/wishlistSlice';
const ProductDetails = () => {
  const { title } = useParams();
  const { products } = useContext(MyContext);
  const dispatch = useDispatch();
 
  
  const product = products.find((product) => {
    return product.title.toLowerCase() === title.toLowerCase();
  });
  const [activeImg, setActiveImg] = useState(product?.thumbnail || '');
  if(!product){
    return(
        <div className="flex justify-center items-center h-screen text-lg">
            Loading...
        </div>
    )
  }
   
  const {id , brand, price, description} = product;
const addProductHandler = () => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = savedCartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      savedCartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(savedCartItems));

    dispatch(addToCart({ id: id, title: title, price: price }));

    toast.success(`item added in cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  const addwishlistProductHandler = () =>{
    const savedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const existingItem = savedWishlistItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
        savedWishlistItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('wishlistItems', JSON.stringify(savedWishlistItems));
  
    dispatch(addToWishlist({ ...product, oneQuantityPrice: price }));
  
    toast.success(`item added in wishList!`, {
      position: "top-center",            
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
    <div className=" h-full lg:pt-0 lg:mt-32 md:pt-24 lg:pb-[200px] sm:pt-2 sm:pb-[120px] md:pb-12 lg:py-32 flex items-center lg:overflow-hidden">
        <ToastContainer/>
        <div className="mx-auto flex flex-col gap-4">
            <div className="w-full flex flex-col gap-3 lg:mt-0 sm:mt-10 lg:ml-14 sm:ml-2">
                <h1 className="text-3xl inline-block font-bold lg:mt-0 sm:mt-10 sm:text-lg">
                    <span>{title}</span>
                </h1>
                <p className="text-sm font-normal text-lightText capitalize flex items-center ">
                    <span className="text-lightText hover:font-semibold"> <Link to="/">Home</Link>  </span>
                    <span className="px-1">
                        <HiOutlineChevronRight />
                    </span>
                    <span className="text-lightText hover:font-semibold"> <Link to="/products">Products</Link></span>
                    <span className="px-1">
                        <HiOutlineChevronRight />
                    </span>
                    <span className="capitalize font-semibold text-primeColor">
                        {title}
                    </span>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center sm:justify-center ">
                <div className="big-img flex flex-1 justify-center items-center mb-8 lg:mb-0">
                    <img src={activeImg} alt="productImage" width={400}  className="lg:h-80 sm:h-60 object-cover aspect-square rounded-xl lg:max-w-[30rem] sm:max-w-[20rem]" />
                </div>

                <div className="flex-1 text-center lg:text-left mr-2 ">
                    <div  className="lg:mb-2 md:mb-2 sm:mb-0">
                        <p className="text-violet-600 font-semibold ">{brand}</p>
                        <h2 className="lg:text-3xl sm:hidden font-bold">{title}</h2>
                    </div>
                    
                    <p className="text-gray-700 mb-2">{description}</p>
                    <h6 className="text-2xl font-semibold mb-2">Rs. {price}</h6>
                    
                    <p></p>
                    <div className="img-carousel flex flex-row gap-3 lg:justify-between sm:justify-around h-24 lg:pr-42 sm:pr-0 sm:pl-2 mb-4">
                        {product.images.map((img, i) => (
                            <img src={img} alt="productImage" key={i} 
                                className="lg:w-28 lg:h-24 sm:max-w-[87px] sm:h-[90px] rounded-md cursor-pointer"
                                onClick={() => setActiveImg(img)}    
                            />
                        ))}
                    </div>
                    <div className="btn flex flex-wrap justify-between lg:pb-0 sm:pb-20">
                    <button
                        className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-300 via-red-300 to-yellow-200 text-lg font-semibold py-2 px-10 rounded-xl h-full"
                        onClick={addProductHandler}  
                    >
                        Add to cart
                    </button>
                        <button className="bg-red-400 text-lg text-white font-semibold py-2 px-10 rounded-xl h-full"
                            onClick={addwishlistProductHandler}
                        >
                            Add to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default ProductDetails;