"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/components/icons/Star";
import ApplicationModal from "./ApplicationModal";

interface WorkShopProps {
  heading?: React.ReactNode;
  description?: string;
  date?: React.ReactNode;
}

export default function WorkShop({ heading, description, date }: WorkShopProps) {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const defaultHeading = (
    <h2
      className="text-[#181818] font-bold text-center leading-[120%]"
      style={{
        fontFamily: "var(--font-orbitron), sans-serif",
        fontSize: "clamp(32px, 5vw, 50px)"
      }}
    >
      What You Graduate With
    </h2>
  );

  const defaultDescription = `If you’re looking for shortcuts, this isn’t it.\nIf you’re ready to build real skills, real systems, and real proof — apply for the residency.`;

  return (
    <section
      className="w-full bg-[#D8F602] flex justify-center py-16 px-4 md:px-16 box-border"
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">

        {/* Header */}
        <div className="w-full max-w-[768px] flex flex-col items-center gap-6 text-center">
          {heading ? heading : defaultHeading}

          <p
            className="text-[#181818] font-normal text-lg leading-[150%] text-center whitespace-pre-line"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            {description ? description : defaultDescription}
          </p>

          {date && (
            <div
              className="text-[#181818] font-bold text-lg leading-[150%] text-center mt-0"
              style={{ fontFamily: "var(--font-roboto), sans-serif" }}
            >
              {date}
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="w-full flex flex-col items-center gap-12">

          {/* 3-Column Layout Container */}
          <div className="w-full flex flex-col lg:flex-row justify-center gap-12 lg:gap-12 flex-wrap items-center lg:items-center">

            {/* Left Column */}
            <div className="w-full max-w-[303px] flex flex-col gap-16 lg:gap-16">
              {/* Item 1 */}
              <div className="flex flex-col items-center gap-6 cursor-default">
                <Image src="/ImmersiveWorkshop/logo-1.svg" alt="Deployment History" width={68} height={68} />
                <p className="w-[240px] text-[#181818] font-normal text-2xl leading-[140%] text-center m-0" style={{ fontFamily: "Arial, sans-serif" }}>
                  A deployment history (not just a certificate)
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center gap-6 cursor-default">
                <Image src="/ImmersiveWorkshop/logo-2.svg" alt="Documented Artifacts" width={95} height={69} />
                <p className="w-[240px] text-[#181818] font-normal text-2xl leading-[140%] text-center m-0" style={{ fontFamily: "Arial, sans-serif" }}>
                  Documented artifacts: demos, walkthroughs, architecture notes
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="w-full max-w-[610px] aspect-square md:h-[540px] md:aspect-auto rounded-2xl overflow-hidden bg-[#E5E5E5] shrink-0">
              <Image
                src="/home/Graduateimage.svg"
                alt="Graduate Info"
                width={610}
                height={540}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Right Column */}
            <div className="w-full max-w-[303px] flex flex-col gap-16 lg:gap-16">
              {/* Item 3 */}
              <div className="flex flex-col items-center gap-6 cursor-default">
                <Image src="/ImmersiveWorkshop/logo-3.svg" alt="GitHub Portfolio" width={95} height={68} />
                <p className="w-[240px] text-[#181818] font-normal text-2xl leading-[140%] text-center m-0" style={{ fontFamily: "Arial, sans-serif" }}>
                  A public GitHub portfolio with real projects
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center gap-6 cursor-default">
                <Image src="/ImmersiveWorkshop/logo-4.svg" alt="Delivery Maturity" width={99} height={53} />
                <p className="w-[240px] text-[#181818] font-normal text-2xl leading-[140%] text-center m-0" style={{ fontFamily: "Arial, sans-serif" }}>
                  Delivery maturity: sprints, reviews, collaboration
                </p>
              </div>
            </div>

          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center">
            {/* Button 1: Apply */}
            <button
              onClick={() => setIsAppModalOpen(true)}
              className="w-full md:w-[300px] h-[54px] bg-[#181818] border border-[#181818] rounded-[4px] md:rounded-tr-[20px] shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
              <span className="font-black text-base text-[#D8F602] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                Apply for the Residency
              </span>
            </button>

            {/* Button 2: Talk to Counselor */}
            <Link
              href={`https://wa.me/919828781952?text=${encodeURIComponent(
                "Hi, I went through the “What You Graduate With” section on Aestr Alpha and would like to talk to a counselor."
              )}`}
              target="_blank"
              className="w-full md:w-[320px] h-[54px] bg-transparent border border-[#181818] rounded-[4px] md:rounded-tr-[20px] flex items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors"
            >
              <StarIcon style={{ width: "28px", height: "30px", color: "#181818" }} />
              <span className="font-black text-base text-[#181818] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                Talk to a Counselor (Free 1:1)
              </span>
            </Link>
          </div>

        </div>
      </div>

      <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
    </section >
  );
}