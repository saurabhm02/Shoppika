import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { cartContext } from '../utils/CartContext';
import { wishlistContext } from '../utils/WishlistContext';
import { sidebarContext } from '../utils/SidebarContext';
import Sidebar from '../Pages/Sidebar';
import { MyContext } from '../../App';
import { BsBoxArrowLeft } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";



const ProductDetails = () => {
  const { title } = useParams();
  const { products } = useContext(MyContext);
  const { addToCart} = useContext(cartContext);
  const { addToWishlist } = useContext(wishlistContext);
  const { isOpen, setIsOpen } = useContext(sidebarContext);
  const navigate = useNavigate();
  
  const product = products.find((product) => {
    return product.title === title;
  });

  const [activeImg, setActiveImg] = useState(product?.thumbnail || '');

  if(!product){
    return(
        <div className="flex justify-center items-center h-screen text-lg">
            Loading...
        </div>
    )
  }
   
  const {thumbnail, brand, price, description} = product;

  return (
    <div className="lg:pt-0 lg:mt-0 md:pt-24 lg:pb-[200px] sm:pt-10 sm:pb-[100px] md:pb-12 lg:py-32 h-screen flex items-center lg:overflow-hidden">
        <Sidebar></Sidebar>
        <div className="mx-auto flex flex-col gap-4">
            <div className="w-full flex flex-col gap-3 lg:mt-0 sm:mt-10 lg:ml-10 sm:ml-2">
                <h1 className="text-3xl text-primeColor font-titleFont font-bold lg:mt-0 sm:mt-20 sm:text-lg">
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
            <div className="flex flex-col lg:flex-row items-center sm:justify-center">
                <div className="big-img flex flex-1 justify-center items-center mb-8 lg:mb-0">
                    <img src={activeImg} alt="product image" width={400}  className="lg:max-h-80 sm:max-h-60 object-cover aspect-square rounded-xl md:max-w-full" />
                </div>

                <div className="flex-1 text-center lg:text-left mr-2">
                    <div  className="lg:mb-2 md:mb-2 sm:mb-0">
                        <p className="text-violet-600 font-semibold ">{brand}</p>
                        <h2 className="lg:text-3xl sm:hidden font-bold">{title}</h2>
                    </div>
                    
                    <p className="text-gray-700 mb-2">{description}</p>
                    <h6 className="text-2xl font-semibold mb-2">Rs. {price}</h6>
                    
                    <p></p>
                    <div className="img-carousel flex flex-row gap-3 justify-between h-24 pr-32 mb-4">
                        {product.images.map((img, i) => (
                            <img src={img} alt="product image" key={i} 
                                className=" w-24 h-24 rounded-md cursor-pointer"
                                onClick={() => setActiveImg(img)}    
                            />
                        ))}
                    </div>

                    <div className="btn flex flex-wrap justify-between pb-0">
                        <button className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-300 via-red-300 to-yellow-200 text-lg font-semibold py-2 px-10 rounded-xl h-full"
                            onClick={()=>{
                                addToCart(product, product.id);
                            }}
                        >
                            Add to cart
                        </button>
                        <button className="bg-red-400 text-lg text-white font-semibold py-2 px-10 rounded-xl h-full"
                            onClick={() =>{
                                addToWishlist(product, product.id);
                            }}
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
