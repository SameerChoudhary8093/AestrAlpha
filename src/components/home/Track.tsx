"use client";

import React, { useState } from 'react';
import Image from "next/image";
import StarIcon from "@/components/icons/Star";

// Card Component
const TrackCard = ({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-start cursor-pointer transition-transform duration-300"
      style={{
        width: "100%",
        maxWidth: "405px",
        minHeight: "410px",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        background: "transparent",
      }}>
      {/* Ellipse 190 */}
      <div style={{
        position: "absolute",
        width: "286px",
        height: "286px",
        left: "11px",
        top: "-95.24px",
        background: "#D7F601",
        filter: "blur(244px)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Image */}
      <div
        className="relative z-10 w-full rounded-lg overflow-hidden border border-transparent"
        style={{
          height: "240px",
          background: "linear-gradient(#181818, #181818) padding-box, linear-gradient(180deg, #D8F602 0%, rgba(255, 255, 255, 0.11) 100%) border-box",
        }}>
        <Image
          src={imageSrc}
          alt={title}
          width={405}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h3
        className="relative z-10 w-full mt-8"
        style={{
          fontFamily: "var(--font-roboto), sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "140%",
          color: "#EAF0BD",
        }}>
        {title}
      </h3>

      {/* Subtext */}
      <p
        className="relative z-10 w-full mt-4"
        style={{
          fontFamily: "var(--font-roboto), sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "150%",
          color: "#EAF0BD",
        }}>
        {description}
      </p>
    </div>
  );
};

interface TrackProps {
  heading?: React.ReactNode;
  byline?: string;
  alignDesktop?: "center" | "start" | "end" | "left" | "right";
}

export default function Track({ heading, byline, alignDesktop = "center" }: TrackProps) {
  // Normalize alignDesktop to valid flex alignment
  const alignment = alignDesktop === "left" || alignDesktop === "start" ? "flex-start" : alignDesktop === "right" || alignDesktop === "end" ? "flex-end" : "center";
  const textAlign = alignDesktop === "left" || alignDesktop === "start" ? "left" : alignDesktop === "right" || alignDesktop === "end" ? "right" : "center";

  // Exact data from the uploaded image
  const cardData = [
    {
      title: "Salesforce Ecosystem Residency",
      desc: "Enterprise CRM + Agentforce layer • Consulting & platform roles",
      img: "/ChooseYourTrack/image-1.svg"
    },
    {
      title: "AI Infrastructure & Cloud Native Residency",
      desc: "Cloud + Kubernetes + LLMOps • Infra, SRE, platform roles",
      img: "/ChooseYourTrack/image-2.svg"
    },
    {
      title: "Enterprise Data Platform Residency",
      desc: "Modern data stack + vector pipelines • Data engineering & AI data roles",
      img: "/ChooseYourTrack/image-3.svg"
    },
    // Row 2
    {
      title: "ServiceNow Architect Residency",
      desc: "Workflow systems + enterprise automation • ITSM + platform roles",
      img: "/ChooseYourTrack/image-4.svg"
    },
    {
      title: "Modern Enterprise Backend Residency (Java)",
      desc: "Spring Boot + microservices + scale • BFSI & backend roles",
      img: "/ChooseYourTrack/image-5.svg"
    },
    {
      title: "Apple Ecosystem Residency (iOS)",
      desc: "Native Swift + Apple lab ecosystem • Premium mobile roles",
      img: "/ChooseYourTrack/image-6.svg"
    }
  ];

  const defaultHeading = (
    <h2 style={{
      fontFamily: "var(--font-orbitron), sans-serif",
      fontWeight: 700,
      fontSize: "clamp(32px, 5vw, 48px)",
      lineHeight: "120%",
      color: "#EAF0BD",
      margin: 0,
      textAlign: textAlign as any
    }}>
      Choose Your Track
    </h2>
  );

  const defaultByline = "(Or explore multiple, based on your clarity.)";

  return (
    <section
      id="choose-your-track"
      className="w-full bg-[#181818] flex justify-center py-28 px-4 md:px-16 box-border"
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">
        {/* Header */}
        <div
          className="w-full max-w-[1312px] flex flex-col gap-6"
          style={{ alignItems: alignment }}
        >
          {heading ? heading : defaultHeading}

          {(byline !== undefined) ? (
            byline && <p style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "150%",
              color: "#EAF0BD",
              textAlign: textAlign as any
            }}>
              {byline}
            </p>
          ) : (
            <p style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "150%",
              color: "#EAF0BD",
              textAlign: textAlign as any
            }}>
              {defaultByline}
            </p>
          )}

        </div>

        {/* Cards Container - Grid Layout */}
        <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {cardData.map((card, i) => (
            <TrackCard
              key={i}
              imageSrc={card.img}
              title={card.title}
              description={card.desc}
            />
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-0 w-full justify-center items-center">
          {/* Button 1: Apply Now */}
          <button
            className="group w-full md:w-[181px] h-[54px] bg-[#D7F601] border border-[#D7F601] rounded-[4px] md:rounded-tl-[4px] md:rounded-tr-[20px] md:rounded-br-[4px] md:rounded-bl-[4px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <StarIcon style={{ width: "28px", height: "30px", color: "#181818" }} />
            <span style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#181818",
              whiteSpace: "nowrap"
            }}>
              Apply Now
            </span>
          </button>

          {/* Button 2: Download Curriculum */}
          <button
            className="group w-full md:w-[363px] h-[54px] bg-transparent border border-[#D7F601] rounded-[4px] md:rounded-tl-[4px] md:rounded-tr-[20px] md:rounded-br-[4px] md:rounded-bl-[4px] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#D7F601]/10 transition-colors"
          >
            <StarIcon style={{ width: "28px", height: "30px", color: "#D7F601" }} />
            <span style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#D7F601",
              whiteSpace: "nowrap"
            }}>
              Download complete curriculum
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}