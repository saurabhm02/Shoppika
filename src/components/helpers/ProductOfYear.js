import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import saleBanner from "../../assets/banners/saleBanner.png";

const ProductOfYear = () => {
  
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const countDown = () =>{
    const destination = new Date('July 1, 2024').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime()
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60));
      const seconds =  Math.floor(different % (1000 * 60) / 1000);

      if(destination < 0){
        clearInterval(interval.current);
      }
      else{
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  })

  return (
    <motion.div
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}  
    className=" w-[100vw] flex lg:flex-row md:flex-row  sm:flex-col justify-between lg:h-72 md:h-72 sm:h-[22rem] mb-6 mt-4 bg-gray-900 text-white">
        <div className=" left lg:px-40 lg:pt-12 md:px-12 md:pt-12 sm:pt-2 sm:px-5  flex flex-col lg:items-start sm:items-center ">
          <div className="pb-3">
            <div className="tit">
              <p className="text-2xl">Limited Offers</p>
              <p className="text-3xl">Quality Products</p>
            </div>
          </div>
          
          <div className="flex gap-5 pb-3">
            <div className="flex items-center gap-5 ">
              <div className="flex flex-col items-center">
                <h1>{days}</h1>
                <h5>Days</h5>
              </div>
              <span>:</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center">
                <h1>{hours}</h1>
                <h5>Hours</h5>
              </div>
              <span>:</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center">
                <h1>{minutes}</h1>
                <h5>Minutes</h5>
              </div>
              <span>:</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center">
                <h1>{seconds}</h1>
                <h5>Seconds</h5>
              </div>
            </div>
          </div>

          <div className="btn">
          <Link to="/products">
              <motion.button whileHover={{scale: 1.1}} className=" bg-white text-black text-lg font-bodyFont lg:w-[170px] lg:h-[45px] sm:w-[140px] sm:h-[40px] sm:mb-6 duration-300 font-bold rounded-md">
                  visit store
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="banner lg:pr-40 sm:pl-14 sm:mb-2 flex items-center">
          <img src={saleBanner}  alt="" className="lg:w-80 sm:w-60 " />
        </div>
    </motion.div>
  )
}

export default ProductOfYear