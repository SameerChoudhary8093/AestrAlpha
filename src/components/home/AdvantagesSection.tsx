"use client";

import { heading, byline, advantages } from "@/data/advantages";
import { useState } from "react";

const AdvantageCard = ({ title, description }: { title: string, description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col cursor-pointer transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{
        width: "100%",
        maxWidth: "405px"
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-roboto), sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "140%",
          color: "#1C1825",
          margin: 0
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: "16px",
          fontFamily: "var(--font-roboto), sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "150%",
          color: "#1C1825",
          margin: "16px 0 0 0"
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default function AdvantagesSection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "561px",
        background: "#D7F601",
        // margin: "112px auto 0", // Can be handled by usage
        paddingTop: "112px",
        paddingBottom: "112px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      className="px-4 md:px-16"
    >
      {/* Header Section */}
      <div
        className="w-full max-w-[1312px] flex flex-col items-center gap-4"
      >
        <h2
          className="w-full md:max-w-[516px] text-center"
          style={{
            fontFamily: "var(--font-orbitron), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: "120%",
            color: "#1C1825",
            margin: 0
          }}
        >
          {heading}
        </h2>
        <p
          className="w-full max-w-[1312px] text-center"
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "150%",
            color: "#1C1825",
            margin: 0
          }}
        >
          {byline}
        </p>
      </div>

      {/* Columns Section */}
      <div
        className="w-full max-w-[1312px] flex flex-col md:flex-row gap-8 md:gap-12 mt-12 md:mt-20 justify-between items-start"
      >
        {advantages.map((advantage, index) => (
          <AdvantageCard key={index} title={advantage.title} description={advantage.description} />
        ))}
      </div>
    </section>
  );
}