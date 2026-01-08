"use client";

import Link from "next/link";
import Image from "next/image";
import StarIcon from "../icons/Star";

import { useState } from "react";
import BrochureModal from "./BrochureModal";
import ApplicationModal from "./ApplicationModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden pt-[110px] md:pt-[130px] lg:pt-[200px] mt-[-108px] mb-0"
      style={{
        background: "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      {/* Background Graphic */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "491px",
          height: "390px",
          top: "87px",
          left: "-120px",
          background: "#D8F6021A",
          mixBlendMode: "screen",
          filter: "blur(154px)",
          zIndex: 0
        }}
      />

      {/* Content Container */}
      <div
        className="flex flex-col items-center px-4 relative z-10"
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
          <h1
            className="flex flex-col items-center w-full text-center m-0"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 700,
              // Responsive Font Size
              fontSize: "clamp(32px, 5vw, 71.07px)",
              lineHeight: "120%",
              color: "#FAFFD6",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span>India’s</span>
              <Image
                src="/home/TextImage.png"
                alt="logo shadow"
                width={193}
                height={141}
                className="object-contain w-[120px] h-auto md:w-[193px]"
              />
              <span>First</span>
            </div>
            <div>Career-Focused</div>
            <div>Tech Ashram.</div>
          </h1>

          {/* Subtext description */}
          {/* "Built by" Text Block */}
          <div className="flex flex-col items-center w-full mb-2">
            <p
              className="m-0 mb-4 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-orbitron), sans-serif",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "120%",
                color: "#FAFFD6",
              }}
            >
              Built by AI Engineers.
            </p>
            <p
              className="text-center m-0 w-full"
              style={{
                maxWidth: "820px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 24px)",
                lineHeight: "150%",
                color: "#FAFFD6",
              }}
            >
              Powered by Experience.<br />
              We bring real-world tech to your career journey.
            </p>
          </div>

          {/* Logos Section (Horizontal Row) */}
          {/* Logos Section (Horizontal Row) */}
          {/* Logos Section (Horizontal Row - Single Line) */}
          <div
            className="flex flex-nowrap items-center justify-center gap-3 md:gap-10 w-full max-w-[1000px] mb-8 px-4 py-6 md:py-8"
            style={{
              backgroundColor: "#D7F601",
              borderRadius: "16px",
            }}
          >
            {/* Microsoft */}
            <div className="relative h-[30px] md:h-[60px] w-auto">
              <Image
                src="/Herosection/Microsoft.svg"
                alt="Microsoft"
                width={140}
                height={60}
                className="w-auto h-full object-contain"
              />
            </div>
            {/* Cambridge */}
            <div className="relative h-[16px] md:h-[32px] w-auto">
              <Image
                src="/Herosection/Cambridge.svg"
                alt="University of Cambridge"
                width={160}
                height={32}
                className="w-auto h-full object-contain object-center"
              />
            </div>
            {/* India AI (Placeholder) */}
            <div className="relative h-[25px] md:h-[50px] w-auto">
              <Image
                src="/Herosection/India-ai.png"
                alt="India AI"
                width={120}
                height={50}
                className="w-auto h-full object-contain object-center"
              />
            </div>
            {/* Shodh AI */}
            <div className="relative h-[18px] md:h-[35px] w-auto">
              <Image
                src="/Herosection/Shodh.svg"
                alt="Shodh AI"
                width={140}
                height={35}
                className="w-auto h-full object-contain object-center"
              />
            </div>
            {/* DRDO */}
            <div className="relative h-[25px] md:h-[50px] w-auto">
              <Image
                src="/Herosection/DRDO.svg"
                alt="DRDO"
                width={100}
                height={50}
                className="w-auto h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center pt-4 w-full"
          style={{
            maxWidth: "600px",
            gap: "16px",
          }}
        >
          {/* Button 1: Primary */}
          <button
            onClick={() => setIsAppModalOpen(true)}
            className="flex items-center justify-center hover:opacity-90 transition-opacity w-full md:w-[300px] cursor-pointer"
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
          </button>

          {/* Button 2: Secondary (Outline) - Now opens Modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center hover:bg-white/5 transition-colors w-full md:w-[263px] cursor-pointer"
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
          </button>
        </div>
      </div>

      {/* Hero Main Image */}
      <div
        className="w-full max-w-[1312px] flex justify-center px-4 mb-16 md:mb-[112px]"
        style={{
          marginTop: "clamp(60px, 10vw, 179.33px)",
        }}
      >
        <Image
          src="/Herosection/new.jpeg"
          alt="Hero Main Visual"
          width={1312}
          height={700}
          priority
          sizes="100vw"
          unoptimized
          className="w-full h-auto object-contain"
        />
      </div>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
    </section>
  );
}