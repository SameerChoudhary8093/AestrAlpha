"use client";

import React from 'react';
import { heading, perks, byline, buttonText } from "@/data/ambassador";
import Image from "next/image";
import DoubleStarIcon from "../icons/DoubleStar";
import StarIcon from "../icons/Star";
import Link from "next/link";
import { motion, Variants } from 'framer-motion';

export default function CampusAmbassador() {

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
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

  return (
    <section
      className="w-full p-6 py-16 md:p-8 md:py-32 bg-(--primary-color) flex flex-col justify-center items-center text-black"
      id="ambassador"
    >

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1312px] gap-10 md:gap-4 mb-12 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >

        <motion.div variants={fadeInUp} className="text-[32px] md:text-[48px] font-orbitron font-bold leading-[1.2] whitespace-pre-line max-w-[616px] w-full md:w-1/2 text-left">
          {heading}
        </motion.div>

        <motion.div variants={staggerContainer} className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
          {/* byline: Lead. Inspire. Represent. */}
          <motion.div
            variants={fadeInUp}
            style={{
              width: '100%',
              maxWidth: '616px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              color: '#000000',
            }}
          >
            {byline}
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            className="flex flex-col gap-3"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
            }}
          >
            {perks.map((perk, index) => (
              <motion.li variants={fadeInUp} key={index} className="flex flex-row gap-4 items-start">
                <DoubleStarIcon className="h-6 w-auto text-(--accent-color) shrink-0 mt-1" />
                <span>{perk}</span>
              </motion.li>
            ))}
          </motion.ul>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfX-l0DhYna7HIFA_qjP4b3OQpvGZJo-wdSx5XbvrOa3YbIgg/viewform?usp=publish-editor"
            target="_blank"
            className='w-full md:w-auto'
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 hover:bg-black/5 transition-colors mt-8 w-full md:w-[181px]"
              style={{
                height: '53.8px',
                padding: '12px 24px',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                border: '1px solid #000000',
                fontFamily: "var(--font-orbitron), sans-serif",
                fontWeight: 900,
                fontSize: '16px',
                lineHeight: '150%',
                textDecoration: 'none',
                color: '#000000',
                cursor: 'pointer'
              }}
            >
              <StarIcon style={{ width: "24px", height: "24px", color: "#5B1DD6" }} />
              <span className="whitespace-nowrap">Apply Now</span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1312px] h-auto rounded-2xl overflow-hidden"
      >
        <Image
          src="/test/Ambassador.webp"
          alt="Campus Ambassador Program"
          width={1312}
          height={662}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1312px"
          style={{ borderRadius: "16px" }}
          className="w-full h-auto object-cover"
          quality={100}
          unoptimized
        />
      </motion.div>
    </section>
  );
}