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
  "/Workshop/ai_summit_1_v2.png",
  "/Workshop/ai_summit_2.png",
  "/Workshop/ai_summit_3.png",
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

          {/* HEADING AREA */}
          <div className="flex flex-col justify-center items-start font-bold text-left gap-2 md:gap-0.5 font-orbitron text-[#FCFFE4] mt-8 md:mt-40 leading-tight md:leading-none">

            <div className="flex flex-col gap-0 md:gap-2">
              <div className="flex flex-row items-center flex-wrap gap-x-3 gap-y-0 md:gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[96px] leading-[0.9] md:leading-tight">
                  AI Summit &
                </h1>
                <div className="relative h-[3.5rem] w-auto sm:h-[4.5rem] md:h-[5.5rem] lg:h-[115px] aspect-[104/130]">
                  <Image
                    src={"/Workshop/Elements.svg"}
                    alt="Decorative Element"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[96px] text-[#D8F602] leading-[0.9] md:leading-tight">
                Cyberthon 2026
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#FCFFE4] font-regular">
            {ticketTagLine.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          {/* Description */}
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
                  className={`w-full h-auto aspect-[4/3] ${idx === 0 ? "object-contain bg-black" : "object-cover"
                    }`}
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / tablet: 3-column grid, similar to main hero */}
        <div className="w-full max-w-[95%] grid grid-cols-1 sm:grid-cols-3 gap-0 mb-8 md:mb-40 hidden sm:grid">
          {[ticketImages[1], ticketImages[0], ticketImages[2]].map((src) => {
            const isMain = src.includes("ai_summit_1_v2");
            return (
              <Image
                key={src}
                src={src}
                alt="Ticket Hero Visual"
                height={700}
                width={438}
                className={`w-full h-auto md:h-[700px] ${isMain ? "object-contain bg-black" : "object-cover"
                  }`}
                priority={isMain}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}