import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { MyContext } from '../../App';
import Product from '../Products/Product';

const SpecialOffers = () => {

    const { products } = useContext(MyContext);

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div
            className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
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
            className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
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
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
    };

    return (
        <div className="w-full px-10 pb-20">
          <motion.div
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }} 
                className="text-4xl font-sans font-semibold pb-6"
            > Special Offers
            </motion.div>
            <Slider {...settings}>
                {products
                    .filter((product) => product.discountPercentage >= 20)
                    .map((product) => (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }} 
                             key={product.id}>
                        <Product product={product} />
                        </motion.div>
                    ))}
            </Slider>
        </div>
      );
}

export default SpecialOffers