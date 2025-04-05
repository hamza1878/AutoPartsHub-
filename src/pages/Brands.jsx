import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const brands = [
  { src: '/polo.png', alt: 'polo.png' },
  { src: '/calvin.jpeg', alt: 'calvin.png' },
  { src: '/chanel.png', alt: 'chanel.png' },
  { src: '/zara.png', alt: 'zara.png' },
  { src: '/calvin.jpeg', alt: 'calvin.png' },
  { src: '/chanel.png', alt: 'chanel.png' },
  { src: '/zara.png', alt: 'zara.png' },
  { src: '/chanel.png', alt: 'chanel.png' },
  { src: '/zara.png', alt: 'zara.png' },
  { src: '/Dior.png', alt: 'Dior.png' }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Brand = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 bg-[#feccec] py-8">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {brands.map((brand, index) => (
          <motion.div 
            key={index}
            className="flex justify-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="rounded-xl max-w-32 h-auto"
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Brand;