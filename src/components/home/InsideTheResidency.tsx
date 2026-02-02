"use client";

import React from 'react';
import Image from "next/image";
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const GalleryImage = ({ src, width, height, alt, priority = false }: { src: string, width: number, height: number, alt: string, priority?: boolean }) => (
  <motion.div
    variants={fadeInUp}
    className="group cursor-pointer w-full relative overflow-hidden h-auto rounded-lg"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="w-full h-auto object-cover"
        quality={100}
        unoptimized
        priority={priority}
      />
    </motion.div>
  </motion.div>
);

export default function InsideTheResidency() {
  return (
    <section
      id="gallery"
      className="w-full bg-[#D7F601] flex justify-center py-16 px-4 md:py-28 md:px-16 box-border overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full max-w-[1440px] flex flex-col items-center gap-20"
      >

        {/* Header */}
        <motion.div variants={fadeInUp} className="w-full flex justify-center">
          <h2
            className="w-full max-w-[768px] text-[#000000] font-bold text-center leading-[120%]"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontSize: "clamp(32px, 5vw, 50px)"
            }}
          >
            Inside the Residency
          </h2>
        </motion.div>

        {/* Images Grid Section */}
        <motion.div variants={staggerContainer} className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div className="flex flex-col gap-8 w-full">
            <GalleryImage
              src="/test/Image-1.webp"
              alt="Gallery 1-1"
              width={416}
              height={416}
              priority={true}
            />
            <GalleryImage
              src="/test/Image-2.webp"
              alt="Gallery 1-2"
              width={416}
              height={416}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 w-full">
            <GalleryImage
              src="/test/Image-3.webp"
              alt="Gallery 2-1"
              width={416}
              height={234}
              priority={true}
            />
            <GalleryImage
              src="/test/Image-4.webp"
              alt="Gallery 2-2"
              width={416}
              height={234}
            />
            <GalleryImage
              src="/test/Image-5.webp"
              alt="Gallery 2-3"
              width={416}
              height={416}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 w-full">
            <GalleryImage
              src="/test/Image-6.webp"
              alt="Gallery 3-1"
              width={416}
              height={416}
              priority={true}
            />
            <GalleryImage
              src="/test/Image-7.webp"
              alt="Gallery 3-2"
              width={416}
              height={416}
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}