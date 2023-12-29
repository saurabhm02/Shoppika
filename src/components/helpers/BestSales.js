import React, { useContext } from 'react';
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { MyContext } from '../../App';
import Product from '../Products/Product';
import { motion } from 'framer-motion';

const BestSales = () => {
  const { products } = useContext(MyContext);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="w-12 h-12 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-[-10px]"
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
        className="w-12 h-12 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-[-10px]"
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
    <div className="w-full pb-1 px-4 overflow-x-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }} 
        className="text-4xl font-semibold pb-6"
      > Best Sales</motion.div>

      <Slider {...settings}>
        {products.slice(0, 10)
          .filter((product) => product.ratingsCount >= 600)
          .map((product) => (
          <div
            
            key={product.id}
            className="px-4"
          >
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSales;
