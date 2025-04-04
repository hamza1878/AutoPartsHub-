import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

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

const Brand = () => {
  return (
    <div className="pl-24 bg-[#feccec]  flex ">
      <section className="  flex  space-x-8">
        {brands.map((brand, index) => (
          <motion.img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="rounded-xl max-w-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          />
        ))}
      </section>
    </div>
  );
};

export default Brand;