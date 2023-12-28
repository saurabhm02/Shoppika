import React, { useContext } from 'react';
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { MyContext } from '../../App';
import Product from '../Products/Product';
import { motion } from 'framer-motion';

const NewArrivals = () => {
  const { products } = useContext(MyContext);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="w-10 h-10 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-[-10px]"
        onClick={onClick}
      >
        <span>
          <FaLongArrowAltLeft />
        </span>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="w-10 h-10 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-[-10px]"
        onClick={onClick}
      >
        <span className="text-xl">
          <FaLongArrowAltRight />
        </span>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-1 px-3 overflow-x-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }} 
        className="text-4xl font-semibold pb-6"
      > New Arrivals</motion.div>

      <Slider {...settings}>
        {products.slice(0, 10).map((product) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }} 
            key={product.id}
            className="px-3"
          >
            <Product product={product} />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
