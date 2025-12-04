"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  homeHeading,
  homeDescription,
  homeTagLine,
  primaryButtonText,
  secondaryButtonText,
} from "@/data/home";
import StarIcon from "../icons/Star";
import Link from "next/link";

const heroImages = [
  "/Herosection/herosectionimage1.svg",
  "/Herosection/herosectionimage2.svg",
  "/Herosection/herosectionimage3.svg",
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-start"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      <div className="absolute w-[60%] md:w-[30%] aspect-square -left-[20%] md:-left-[10%] top-[5%] md:top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[50px] md:blur-[77px] rounded-full pointer-events-none" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-12 md:gap-24 pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 px-4 text-center">
          <div className="flex flex-col justify-center items-center font-bold text-[3rem] sm:text-6xl md:text-7xl lg:text-[6rem] text-center gap-2 md:gap-0.5 font-orbitron text-[#FCFFE4] mt-12 md:mt-40 leading-tight">
            <div className="flex flex-row justify-center items-center flex-wrap gap-2 md:gap-0">
              <h1>{homeHeading[0]}</h1>
              <Image
                src={"/home/TextImage.png"}
                alt="Decorative Element"
                height={710}
                width={973}
                className="h-18 sm:h-18 md:h-24 lg:h-[10rem] w-auto mx-2 md:mx-4"
              />
              <h1>{homeHeading[1]}</h1>
            </div>
            <div>{homeHeading[2]}</div>
          </div>
          <div className="text-xl md:text-5xl text-[#FCFFE4] font-medium">
            {homeTagLine}
          </div>
          <div className="text-base md:text-xl w-full md:w-3/4 text-gray-200 leading-relaxed px-2">
            {homeDescription}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center w-full">
            <Link
              href="/Workshop"
              className="button-primary w-full sm:w-auto justify-center"
            >
              <StarIcon className="h-6 w-auto mr-2" />
              {primaryButtonText}
            </Link>
            <Link
              href="/AestrAlphaBrochure.pdf"
              className="button-secondary w-full sm:w-auto justify-center"
              download
            >
              <StarIcon className="h-6 w-auto mr-2 text-(--primary-color)" />
              {secondaryButtonText}
            </Link>
          </div>
        </div>
        {/* Mobile: auto-sliding carousel */}
        <div className="w-full max-w-[95%] overflow-hidden mb-12 md:mb-40 sm:hidden">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {heroImages.map((src, idx) => (
              <div key={src} className="w-full flex-shrink-0">
                <Image
                  src={src}
                  alt="Hero Visual"
                  height={700}
                  width={438}
                  className="w-full h-100 object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop / tablet: 3-column grid */}
        <div className="w-full max-w-[95%] grid grid-cols-1 sm:grid-cols-3 gap-0 mb-12 md:mb-40 hidden sm:grid">
          {heroImages.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt="Hero Visual"
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