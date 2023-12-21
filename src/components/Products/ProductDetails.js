import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cartContext } from '../utils/CartContext';
import { wishlistContext } from '../utils/WishlistContext';
import { sidebarContext } from '../utils/SidebarContext';
import Sidebar from '../Pages/Sidebar';
import { MyContext } from '../../App';
import { BsBoxArrowLeft } from "react-icons/bs";



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

  const [activeImg, setActiveImg] = useState(product.thumbnail);
  if(!product){
    return(
        <div className="flex justify-center items-center h-screen text-lg">
            Loading...
        </div>
    )
  }
   
  const {thumbnail, brand, price, description} = product;

  return (
    <div className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
        <Sidebar></Sidebar>
        <div className="mx-auto flex flex-col gap-4">
            <div className="prevbtn pl-3">
                <BsBoxArrowLeft className="text-4xl cursor-pointer" 
                    onClick={() => navigate(-1)}
                />
            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="big-img flex flex-1 justify-center items-center mb-8 lg:mb-0">
                    <img src={activeImg} alt="product image" width={400}  className="max-h-80 object-cover aspect-square rounded-xl" />
                </div>

                <div className="flex-1 text-center lg:text-left mr-2">
                    <div  className="mb-2">
                        <p className="text-violet-600 font-semibold ">{brand}</p>
                        <h2 className="text-3xl font-bold">{title}</h2>
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

                    <div className="btn flex flex-wrap justify-between">
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
