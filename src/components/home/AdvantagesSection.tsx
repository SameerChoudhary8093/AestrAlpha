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
        width: "405.33px"
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
        // height: "561px", // Removed fixed height to allow scaling content without cutoff if needed
        minHeight: "561px",
        background: "#D7F601",
        margin: "112px auto 0",
        paddingTop: "112px",
        paddingRight: "64px",
        paddingBottom: "112px",
        paddingLeft: "64px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* Header Section */}
      <div
        style={{
          width: "1312px",
          // height: "159px", 
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center"
        }}
      >
        <h2
          style={{
            width: "516px",
            fontFamily: "var(--font-orbitron), sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "120%",
            textAlign: "center",
            color: "#1C1825",
            margin: 0
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            width: "1312px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "150%",
            textAlign: "center",
            color: "#1C1825",
            margin: 0
          }}
        >
          {byline}
        </p>
      </div>

      {/* Columns Section */}
      <div
        style={{
          width: "1312px",
          marginTop: "80px",
          display: "flex",
          flexDirection: "row",
          gap: "48px"
        }}
      >
        {advantages.map((advantage, index) => (
          <AdvantageCard key={index} title={advantage.title} description={advantage.description} />
        ))}
      </div>
    </section>
  );
}