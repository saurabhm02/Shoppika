import React, { useState, useEffect, useContext, useRef } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { FaS } from 'react-icons/fa6';
import { BsBag, BsArrowLeftShort } from 'react-icons/bs';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { SlHeart } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowBack } from "react-icons/md";
import { MyContext } from '../../App';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import {  toast } from 'react-toastify';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../redux/authSlice';
import { ShowOnLogin, ShowOnLogout } from '../helpers/Constant';
import { selectIsLoggedIn } from '../redux/authSlice';
import { FaRegCircleUser } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const location = useLocation();
  const navigate =  useNavigate();
  const isSmallScreen = window.innerWidth <= 600;
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const { products } = useContext(MyContext);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showsearchResults, setShowsearchResults] = useState(false);
  const [smSearch,setsmSearch]=useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [show, setShow] = useState(false);

  const imgRef = useRef();
  const menuRef = useRef();

  window.addEventListener("click", (e) => {
    if(e.target !== menuRef.current && e.target !== imgRef.current) {
      setShow(false);
    }
  });

  const searchHandler = (e) =>{
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  }

  const handleLoginClick = () => {
    setIsClicked(true);
  };

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      toast.success("Logout Successful!..");
      navigate("/");
    }).
    catch((error) => {
      toast.error(error.message);
    });
  };

  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        if(user.displayName == null){
          const u1 = user.email.slice(0, -10);
          const name = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(name);
          console.log("user is loggedIn" , displayName);
        }
        else{
          setDisplayName(user.displayName);
        }

        const userPhotoURL = user.photoURL; 
        setProfilePicture(userPhotoURL);

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
            profilePicture: userPhotoURL,
          })
        );
      }
      else{
        setDisplayName("");
        setProfilePicture(null);
        dispatch(REMOVE_ACTIVE_USER());
      }
    })
  }, [dispatch, displayName, profilePicture]);


  useEffect(() => {
    setIsClicked(false);
  }, [location.pathname]);

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
              <div className="wishlist text-2xl lg:pr-3 sm:mr-2 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl lg:pl-5 lg:pr-3 sm:pr-1 sm:mx-2 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

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
              <div className="wishlist text-2xl lg:pr-3 sm:mr-2 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl lg:pl-5 lg:pr-3 sm:pr-1 sm:mx-2 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

        </div>
      ));
    } else {
      setRight(
        <div className="other flex items-center text-lg">
            <Link to="/wishlist">
              <div className="wishlist text-2xl  sm:mr-2 relative">
                <SlHeart className="cursor-pointer" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart text-2xl lg:pl-4 lg:pr-5 sm:pr-1 sm:mx-2 relative">
                <BsBag className="cursor-pointer" size={26} />
                {cartItems.length > 0 && (
                  <div className="bg-red-500 text-white absolute right-[8px] -bottom-[-8px] text-[16px] w-[17px] h-[18px] rounded-full flex justify-center items-center">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

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
          <div className=' flex items-center pl-1 mx-0'>
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

     

        <div className="rightPArt flex items-center">
          <div className={`${smSearch?'':' sm:flex sm:justify-end'} ml-1 sm:mr-1 md:ml-24 relative`}>
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
          <div className="mr-4">
            <ShowOnLogin>
                <div className="flex h-14 cursor-pointer items-center gap-2 text-xl"
                  onClick={() => {
                    setShow((prev) => !prev)
                  }} 
                >

                  {profilePicture ? (
                    <img src={profilePicture} alt="profile" ref={imgRef}  className="rounded-full h-8 w-8"
                    />
                  ) : (
                    <FaRegCircleUser size={30}  
                    />
                  )}
                  {show && (
                    <motion.div
                          initial={{ y: -30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-10 right-6">
                      <div className="py-3">
                        <div className="w-4 h-4 left-14 absolute mt-1 bg-gray-300 rotate-45">

                        </div>
                      </div>

                      <div
                          className=" z-50  w-auto text-[#3d3d3d] h-auto p-2 pb-2 bg-gray-300 rounded-lg "
                          onClick={() => setShow(false)}
                          ref={menuRef}
                      >
                        <ul>
                          <motion.li className=" px-2 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            {displayName}
                          </motion.li>
                          <motion.li className=" px-2 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            <Link to="/"
                                className="lg:py-[3px] sm:mx-1 cursor-pointer transition-all duration-500 ease-in-out"
                                onClick={handleLogout}
                              >
                                Logout
                              </Link>
                          </motion.li>
                    </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
            </ShowOnLogin>
            <ShowOnLogout>
                <Link to="/login"
                  className={`group rounded-md ${location.pathname === "/login" ? "text-red-500" : "text-black"} lg:text-xl mr-1`}
                >
                  <button
                    className={`lg:mx-5 lg:py-[3px] sm:mx-1 cursor-pointer
                              ${location.pathname === "/login" ? "border-b-2 border-red-500 transition-all duration-500 ease-in-out" : " transition-all duration-500 ease-in-out"
                            }`}
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                </Link>
            </ShowOnLogout>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
