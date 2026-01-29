"use client";

import Link from "next/link";
import Image from "next/image";
import StarIcon from "../icons/Star";
import { useState } from "react";
import BrochureModal from "./BrochureModal";
import ApplicationModal from "./ApplicationModal";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const pulseAnimation: Variants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scaleUp: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden pt-[110px] md:pt-[130px] lg:pt-[200px] mt-[-108px] mb-0"
      style={{
        background: "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      {/* Background Graphic */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        style={{
          width: "491px",
          height: "390px",
          top: "87px",
          left: "-120px",
          background: "#D8F60246",
          mixBlendMode: "screen",
          filter: "blur(154px)",
          zIndex: 0
        }}
      />

      {/* Content Container */}
      <motion.div
        className="flex flex-col items-center px-4 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          width: "100%",
          maxWidth: "900px",
          gap: "16px",
        }}
      >
        {/* Inner Content Section */}
        <div
          className="flex flex-col items-center w-full"
          style={{
            maxWidth: "820px",
            gap: "12px"
          }}
        >
          {/* Main Heading */}
          <motion.h1
            className="flex flex-col items-center w-full text-center m-0"
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 71.07px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#FAFFD6",
              maxWidth: "820px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span>India’s</span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/test/Center-Logo.webp"
                  alt="logo shadow"
                  width={193}
                  height={141}
                  className="object-contain w-[80px] h-auto md:w-[193px] md:h-[141px]"
                  style={{
                    opacity: 1,
                    transform: "rotate(0deg)",
                    height: "auto",
                  }}
                  sizes="(max-width: 768px) 120px, 193px"
                />
              </motion.div>
              <span>First</span>
            </div>
            <div>Career-Focused</div>
            <div>Tech Ashram.</div>
          </motion.h1>

          {/* New Green Tech Ashram Section */}
          <motion.div
            variants={scaleUp}
            className="flex flex-col items-center justify-center w-full mt-[21.87px] mb-[24px]"
            style={{
              width: "100%",
              maxWidth: "820px",
              borderRadius: "8px",
              backgroundColor: "#D8F602",
              padding: "clamp(20px, 4vw, 25.56px) clamp(16px, 4vw, 36.44px)",
              gap: "13.67px",
            }}
          >
            {/* Text inside Green Card */}
            <p
              className="m-0 text-center"
              style={{
                width: "100%",
                maxWidth: "747px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(12px, 2vw, 14px)",
                lineHeight: "150%",
                color: "#000000",
              }}
            >
              A 6-Month Career Residency. Led by the<br />
              Founder of Shodh AI — building India’s<br />
              Sovereign AI for Science model. Powered by<br />
              Experience with
            </p>

            {/* Logos Row */}
            <div
              className="flex flex-wrap md:flex-nowrap items-center justify-center gap-y-1 gap-x-4 md:gap-[27.33px] w-full"
              style={{ maxWidth: "747.11px" }}
            >
              {[
                { src: "/hero-assets/Microsoft.svg", alt: "Microsoft", width: 116, height: 60, maxWidth: '116.5px' },
                { src: "/hero-assets/Cambridge.svg", alt: "Cambridge", width: 104, height: 22, maxWidth: '103.6px' },
                { src: "/test/India-Ai.webp", alt: "India AI", width: 77, height: 35, maxWidth: '77px' },
                { src: "/hero-assets/Shodh.svg", alt: "Shodh AI", width: 114, height: 27, maxWidth: '114.39px' },
                { src: "/hero-assets/DRDO.svg", alt: "DRDO", width: 64, height: 50, maxWidth: '64.22px' }
              ].map((logo, index) => (
                <div key={index} className="relative flex items-center justify-center h-[30px] md:h-[60px] w-auto">
                  {index === 2 && <div className="w-full md:hidden" />} {/* Mobile Break for India AI */}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="w-auto h-full object-contain max-h-[25px] md:max-h-full"
                    style={{ maxWidth: logo.maxWidth }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Buttons Section - Reordered */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center w-full"
          variants={fadeInUp}
          style={{
            maxWidth: "600px",
            gap: "24px",
          }}
        >
          {/* Button 1: Download Brochure (First) */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center transition-colors w-full md:w-[263px] cursor-pointer"
            style={{
              height: "53.8px",
              gap: "8px",
              padding: "12px 24px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
              border: "1px solid #FFFFFF",
              backgroundColor: "transparent",
              color: "#EAF0BD",
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              lineHeight: "150%",
              textDecoration: "none"
            }}
          >
            <StarIcon
              style={{
                width: "28px",
                height: "29.8px",
                color: "#D8F602",
                fill: "currentColor"
              }}
            />
            <span className="font-extrabold whitespace-nowrap">Download Brochure</span>
          </motion.button>

          {/* Button 2: Apply for the Residency (Second) */}
          <motion.button
            onClick={() => setIsAppModalOpen(true)}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center transition-opacity w-full md:w-[300px] cursor-pointer"
            style={{
              height: "53.8px",
              gap: "8px",
              padding: "12px 24px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
              backgroundColor: "#D8F602",
              color: "#181818",
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            <StarIcon
              style={{
                width: "28px",
                height: "29.8px",
                color: "#181818",
                fill: "currentColor"
              }}
            />
            <span className="font-extrabold whitespace-nowrap">Apply for the Residency</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Main Image */}
      <motion.div
        className="w-full max-w-[1312px] flex justify-center px-4 mb-16 md:mb-[112px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        style={{
          marginTop: "clamp(60px, 10vw, 179.33px)",
        }}
      >
        <Image
          src="/test/Hero-Main.webp"
          alt="Hero Main Visual"
          width={1312}
          height={700}
          priority
          fetchPriority="high"
          sizes="(max-width: 400px) 380px, (max-width: 768px) 768px, (max-width: 1200px) 1024px, 1312px"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
    </section>
  );
}