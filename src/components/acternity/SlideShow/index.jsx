"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "./base";

export function ImagesSliderDemo() {
  const images = [
    "/slideshow/about1.jpg",
    "/slideshow/about2.jpg",
    "/slideshow/about3.jpg",
  ];
  return (
    <ImagesSlider className="min-h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,          
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="mt-44 font-bold text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          About Us  
        </motion.p>
        <motion.p className="text-3xl font-medium text-center text-neutral-300">
          Discover our stories and values.
        </motion.p>        
      </motion.div>
    </ImagesSlider>    
  );
}
