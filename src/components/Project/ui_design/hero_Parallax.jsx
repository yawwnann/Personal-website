"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Optimized spring configuration for smoothness
  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

HeroParallax.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold dark:text-white">
        UI / UX DESIGN
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8 dark:text-neutral-200">
        UI/UX design is about creating seamless, intuitive experiences that
        focus on the user’s needs. By combining functionality with creativity, I
        design interfaces that are easy to navigate, visually engaging, and
        deliver a smooth, enjoyable journey. My goal is to make every
        interaction effortless, ensuring users have a positive and lasting
        experience.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y:
          typeof window !== "undefined" &&
          window.matchMedia("(hover: hover)").matches
            ? -20
            : 0,
      }}
      className="group/product h-64 sm:h-72 md:h-80 w-full sm:w-[90%] md:w-[40rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          className="object-cover sm:object-left-top object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-transparency pointer-events-none transition-opacity duration-300" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm sm:text-base md:text-lg transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  translate: PropTypes.object.isRequired,
};

export default HeroParallax;
