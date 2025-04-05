import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// List of brands
const brands = [
  { src: '/bmw.png', alt: 'bmw.png' },
  { src: '/bugatti.png', alt: 'bugatti.png' },
  { src: '/ford.png', alt: 'ford.png' },
  { src: '/lambr.png', alt: 'lambr.png' },
  { src: '/hd.png', alt: 'hd.png' },
  { src: '/mercedes.png', alt: 'mercedes.png' },
  { src: '/pg.png', alt: 'pg.png' },
  { src: '/volkswagen.png', alt: 'volkswagen.png' },
];

// Carousel responsiveness settings
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
    <div className="px-4 space-y-16 md:px-16 lg:px-12 bg-[#e7e7e7] py-8">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition=" 0.5s"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      
      >
        {brands.map((brand, index) => {
          const randomX = Math.random() * 50 - 25; 
          const randomY = Math.random() * 50 - 25;

          return (
            <motion.div
              key={index}
              className="flex justify-center px-2"
              initial={{ opacity: 0, x: randomX, y: randomY }} 
              animate={{ opacity: 1, x: 0, y: 0 }} 
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="rounded-xl max-w-32 h-auto"
              />
            </motion.div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Brand;
