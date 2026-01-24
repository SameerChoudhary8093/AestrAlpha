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
          background: "#D8F60246",
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
              <Image
                src="/test/Center-Logo.webp"
                alt="logo shadow"
                width={193}
                height={141}
                priority
                className="object-contain w-[120px] h-auto md:w-[193px] md:h-[141px]"
                style={{
                  opacity: 1,
                  transform: "rotate(0deg)",
                }}
                sizes="(max-width: 768px) 120px, 193px"
              />
              <span>First</span>
            </div>
            <div>Career-Focused</div>
            <div>Tech Ashram.</div>
          </h1>

          {/* New Green Tech Ashram Section */}
          <div
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
              A 6-Month Career Residency. Led by the<br className="hidden md:block" />
              Founder of Shodh AI — building India’s<br className="hidden md:block" />
              Sovereign AI for Science model. Powered by<br className="hidden md:block" />
              Experience with
            </p>

            {/* Logos Row */}
            <div
              className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-[27.33px] w-full"
              style={{ maxWidth: "747.11px" }}
            >
              {/* Logo 1 (Microsoft) - Width 116.5 */}
              <div className="relative h-[60px] w-auto flex items-center justify-center">
                <Image
                  src="/hero-assets/Microsoft.svg"
                  alt="Microsoft"
                  width={116}
                  height={60}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '116.5px' }}
                />
              </div>
              {/* Logo 2 (Cambridge) - Width 103.6 */}
              <div className="relative h-[22px] w-auto flex items-center justify-center">
                <Image
                  src="/hero-assets/Cambridge.svg"
                  alt="Cambridge"
                  width={104}
                  height={22}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '103.6px' }}
                />
              </div>
              {/* Logo 3 (India AI) - Width 77 */}
              <div className="relative h-[35px] w-auto flex items-center justify-center">
                <Image
                  src="/test/India-Ai.webp"
                  alt="India AI"
                  width={77}
                  height={35}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '77px' }}
                  sizes="77px"
                />
              </div>
              {/* Logo 4 (Shodh AI) - Width 114.4 */}
              <div className="relative h-[27px] w-auto flex items-center justify-center">
                <Image
                  src="/hero-assets/Shodh.svg"
                  alt="Shodh AI"
                  width={114}
                  height={27}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '114.39px' }}
                />
              </div>
              {/* Logo 5 (DRDO) - Width 64.2 */}
              <div className="relative h-[50px] w-auto flex items-center justify-center">
                <Image
                  src="/hero-assets/DRDO.svg"
                  alt="DRDO"
                  width={64}
                  height={50}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '64.22px' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Buttons Section - Reordered */}
        <div
          className="flex flex-col md:flex-row items-center justify-center w-full"
          style={{
            maxWidth: "600px",
            gap: "24px",
          }}
        >
          {/* Button 1: Download Brochure (First) */}
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

          {/* Button 2: Apply for the Residency (Second) */}
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
          src="/test/Hero-Main.webp"
          alt="Hero Main Visual"
          width={1312}
          height={700}
          priority
          fetchPriority="high"
          sizes="(max-width: 400px) 380px, (max-width: 768px) 768px, (max-width: 1200px) 1024px, 1312px"
          className="w-full h-auto object-contain"
        />
      </div>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
    </section>
  );
}