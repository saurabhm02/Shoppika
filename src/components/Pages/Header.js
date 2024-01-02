import React, { useState, useEffect, useContext } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { FaS } from 'react-icons/fa6';
import { BsBag, BsArrowLeftShort } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SlHeart } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { MdArrowBack } from "react-icons/md";
import { MyContext } from '../../App';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const location = useLocation();
  const navigate =  useNavigate();
  const isSmallScreen = window.innerWidth <= 600;
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const { products } = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showsearchResults, setShowsearchResults] = useState(false);
  const [smSearch,setsmSearch]=useState(false);

  const clickHandler = () =>{
    navigate(-1);
  }

  const searchHandler = (e) =>{
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  }


  useEffect(() => {
    if (location.pathname === '/cart') {
      setRight(isSmallScreen ? (
        <Link to="/wishlist">
          <div className="wishlist text-2xl pr-3 relative">
            <SlHeart className="cursor-pointer" />
          </div>
        </Link>
      ) : (
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl lg:pr-3 sm:pr-2 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl lg:pl-5 lg:pr-3 sm:pr-1 sm:pl-2 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="login-btn">
              <div className="login-btn">
                <button className="lg:pl-7  sm:pl-2 pr-3 cursor-pointer">Login</button>
              </div>
            </div>
        </div>
      ));
    } else if (location.pathname === '/wishlist') {
      setRight(isSmallScreen ? (
        <Link to="/cart">
          <div className="cart text-2xl pl-5 pr-3 relative">
            <BsBag className="cursor-pointer" size={26} />
              {cartItems.length > 0 && (
                <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                  {cartItems.length}
                </div>
              )}
          </div>
        </Link>
      ) : (
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl lg:pr-3 sm:pr-2 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl lg:pl-5 lg:pr-3 sm:pr-1 sm:pl-2 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="login-btn">
              <div className="login-btn">
                <button className="lg:pl-7  sm:pl-2 pr-3 cursor-pointer">Login</button>
              </div>
            </div>
        </div>
      ));
    } else {
      setRight(
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl lg:pr-3 sm:pr-2 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl lg:pl-5 lg:pr-3 sm:pr-1 sm:pl-2 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="login-btn">
              <div className="login-btn">
                <button className="lg:pl-7  sm:pl-2 pr-3 cursor-pointer">Login</button>
              </div>
            </div>
        </div>
      );
    }
  }, [location.pathname, isSmallScreen, cartItems.length]);


  useEffect(() => {
    const clickHandler = () => {
      navigate(-1);
    };
    if(location.pathname === '/cart'){
      setLeft( isSmallScreen ? (
        <div className="flex items-center gap-3">
          <div 
            onClick={clickHandler}
            className="backArrow  pl-4 "
          >
            <MdArrowBack size={30} className="cursor-pointer" />
            
          </div>
          <div className="name font-bold text-2xl">
            Shopping Bag
          </div>
        </div>
      ) : (
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
            <div className="logo-icon text-2xl">
              <FiShoppingCart />
            </div>
            <div className="logo-name">
              <span className="font-bold flex items-center relative">
                <span className="text-[20px]">
                  <FaS />
                </span>
                <span className="absolute left-[17px]">hoppika</span>
              </span>
            </div>
        </Link>
      ));
      }
    else if(location.pathname === '/wishlist'){
      setLeft(isSmallScreen ? (
        <div className="flex items-center gap-3">
          <div 
          onClick={clickHandler}
          className="backArrow  pl-4 "
        >
            <MdArrowBack size={30} className="cursor-pointer" />
          </div>
          <div className="name flex flex-col">
           <span className="font-bold">Wishlist</span>
            {wishlistItems.length > 0 && (
                <span className="text-[14px] text-gray-500">{wishlistItems.length} items</span>
            )}
          </div>
        </div>
      ) : (
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
            <div className="logo-icon text-2xl">
              <FiShoppingCart />
            </div>
            <div className="logo-name">
              <span className="font-bold flex items-center relative">
                <span className="text-[20px]">
                  <FaS />
                </span>
                <span className="absolute left-[17px]">hoppika</span>
              </span>
            </div>
        </Link>
      ));
    }
    else{
      setLeft(
        <Link to="/" className="logo flex lg:px-4 sm:px-4 text-lg gap-2 items-center">
          <div className="logo-icon text-2xl">
            <FiShoppingCart />
          </div>
          <div className="logo-name">
            <span className="font-bold flex items-center relative">
              <span className="text-[20px]">
                <FaS />
              </span>
              <span className="absolute left-[17px]">hoppika</span>
            </span>
          </div>
        </Link>
      )
    }
  }, [location.pathname, isSmallScreen, wishlistItems.length]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.title?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  }, [searchQuery]);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16 lg:px-8">
    

      <div className="flex justify-between w-full h-full items-center">
        {smSearch && 
          <div className=' flex items-center pl-2 mx-0'>
              <button
                  onClick={()=>{
                      setsmSearch(false);
                  }}
                  >
                      <BsArrowLeftShort size={33}/>
              </button>
          </div>
        }
        <div className={`${smSearch?'sm:hidden':''}`}>
          {left}
        </div>

      
      {/* <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-gray-300 flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={searchHandler}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-gray-200 top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer rounded-md`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.title}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowsearchResults(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-20 bg-gray-50 mb-3 flex items-center gap-3 rounded-lg px-4"
                    >
                      <img className="w-24 h-[75px] object-contain" src={item.thumbnail} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.title}
                        </p>
                        <p className="text-xs">{item.brand}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            Rs.{item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
      </div> */}

         

        <div className="rightPArt flex items-center">
          <div className={`${smSearch?'':' sm:flex sm:justify-end'} ml-1 sm:mr-3 md:ml-24 relative`}>
            <div className={`${smSearch? '':'lg:w-[850px] md:w-96' } group flex flex-row text-lg`}>
              <input 
              onChange={searchHandler}
              value={searchQuery}
              className={`${smSearch?'w-full':'w-3/5 lg:flex md:flex sm:hidden'} md:w-2/3 border border-gray-400 rounded-l-full py-1 pl-3 md:pl-5 group-focus-within:border-sky-300 `}
              type='text'
              placeholder='Search'
              
              />
              <button 
                className={`border border-gray-400 ${!smSearch?'lg:border-solid md:border-solid sm:border-none max-sm:rounded-full':''} rounded-r-full md:py-2 px-2 md:px-5 flex justify-center items-center  hover:bg-gray-100`}
                onClick={() => {
                  if (isSmallScreen && !smSearch) {
                    if (!smSearch) setsmSearch(true);
                  }
              }}
              >
              <FiSearch className="text-xl" size={24}/>
              </button>
            </div>

            {searchQuery && (
              <div className={` mx-auto h-96 bg-white top-14 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer rounded-md`}>
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.title}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowsearchResults(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="lg:w-[600px] md:w-96 sm:w-[14.5rem] h-24 bg-gray-100 mb-3 flex items-center gap-3 rounded-lg px-5 py-1 hover:bg-gray-200"
                    >
                      <img className="w-24 h-[75px] object-cover" src={item.thumbnail} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold lg:text-lg sm:text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs">{item.brand}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            Rs.{item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {right}
        </div>
      </div>
    </header>
  );
};

export default Header;
