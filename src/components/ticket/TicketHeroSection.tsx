"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ticketHeading,
  ticketDescription,
  ticketTagLine,
  primaryButtonText,
  secondaryButtonText,
} from "@/data/ticket";
import StarIcon from "../icons/Star";
import Link from "next/link";

const ticketImages = [
  "/Herosection/herosectionimage4.svg",
  "/Herosection/herosectionimage5.svg",
  "/Herosection/herosectionimage6.svg",
];

export default function TicketHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ticketImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-start justify-start"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #426000 9.13%, #181818 68.08%)",
      }}
      id="tickets"
    >
      {/* Background Blur Element */}
      <div className="absolute w-[60%] md:w-[30%] aspect-square -left-[20%] md:-left-[10%] top-[5%] md:top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[50px] md:blur-[77px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-start justify-center gap-8 md:gap-24 pt-24 pb-12 md:pt-0 px-6 md:px-20">
        
        <div className="flex flex-col items-start justify-center gap-6 md:gap-8 text-left w-full">
          
          {/* 
            HEADING AREA 
            Changes: 
            - Added responsive font sizes (text-4xl up to text-[96px])
            - Adjusted leading (line-height) for tighter mobile display
          */}
          <div className="flex flex-col justify-center items-start font-bold text-left gap-2 md:gap-0.5 font-orbitron text-[#FCFFE4] mt-8 md:mt-40 leading-tight md:leading-none">
            
            {/* Dynamic Font Size for First Line */}
            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px]">
              {ticketHeading[0]}
            </div>
            
            <div className="flex flex-row justify-start items-center flex-wrap gap-x-3 gap-y-0 md:gap-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px]">Experience</h1>
              
              {/* 
                 Inline Image
                 Changes: removed fixed width/height prop dominance and used responsive CSS height 
                 to match the text size on mobile vs desktop.
              */}
              <div className="relative h-18 w-auto sm:h-18 md:h-25 lg:h-[115px] aspect-[104/130]">
                <Image
                  src={"/Workshop/Elements.svg"}
                  alt="Decorative Element"
                  fill
                  className="object-contain"
                />
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px]">2025</h1>
            </div>
          </div>

          {/* Tagline - Responsive Text Size */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#FCFFE4] font-regular">
            {ticketTagLine.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          {/* Description - Responsive Text Size & Width */}
          <div className="text-base sm:text-lg md:text-[20px] w-full md:w-3/4 text-gray-200 leading-relaxed">
            {ticketDescription}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-start items-center w-full">
            <Link 
              href="https://finance.gyanvihar.org/aestr-alpha" 
              className="button-primary w-full sm:w-auto justify-center"
            >
              <StarIcon className="h-5 w-5 md:h-6 md:w-auto mr-2" />
              {primaryButtonText}
            </Link>
            <Link href="#agenda" className="button-secondary w-full sm:w-auto justify-center">
              <StarIcon className="h-5 w-5 md:h-6 md:w-auto mr-2 text-(--primary-color)" />
              {secondaryButtonText}
            </Link>
          </div>
        </div>

        {/* Mobile: auto-sliding carousel (match main hero behavior) */}
        <div className="w-full max-w-[95%] overflow-hidden mb-8 md:mb-40 sm:hidden">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {ticketImages.map((src, idx) => (
              <div key={src} className="w-full flex-shrink-0">
                <Image
                  src={src}
                  alt="Ticket Hero Visual"
                  height={700}
                  width={1312}
                  className="w-full h-100 object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / tablet: 3-column grid, similar to main hero */}
        <div className="w-full max-w-[95%] grid grid-cols-1 sm:grid-cols-3 gap-0 mb-8 md:mb-40 hidden sm:grid">
          {ticketImages.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt="Ticket Hero Visual"
              height={700}
              width={438}
              className="w-full h-auto md:h-[700px] object-cover"
              priority={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}