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
      style={{
        position: "relative",
        width: "405.33px",
        height: "410px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        background: "transparent", // Explicitly ensure no bg color change on container
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
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "405px",
        height: "240px",
        borderRadius: "8px",
        borderImageSource: "linear-gradient(180deg, #D8F602 0%, rgba(255, 255, 255, 0.11) 100%)",
        borderImageSlice: 1,
        // Using background origin trick for reliable rendering
        background: "linear-gradient(#181818, #181818) padding-box, linear-gradient(180deg, #D8F602 0%, rgba(255, 255, 255, 0.11) 100%) border-box",
        border: "1px solid transparent",
        overflow: "hidden"
      }}>
        <Image
          src={imageSrc}
          alt={title}
          width={405}
          height={240}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Heading */}
      <h3 style={{
        position: "relative",
        zIndex: 1,
        marginTop: "32px",
        width: "365.33px",
        fontFamily: "var(--font-roboto), sans-serif",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "140%",
        color: "#EAF0BD",
        margin: "32px 0 0 0"
      }}>
        {title}
      </h3>

      {/* Subtext */}
      <p style={{
        position: "relative",
        zIndex: 1,
        marginTop: "16px",
        width: "365.33px",
        fontFamily: "var(--font-roboto), sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "150%",
        color: "#EAF0BD",
        margin: "16px 0 0 0"
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
      fontSize: "48px",
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
      style={{
        width: "100%",
        backgroundColor: "#181818", // Explicitly set background color here
        display: "flex",
        justifyContent: "center",
        padding: "112px 64px 112px 64px",
        boxSizing: "border-box"
      }}>
      <div style={{
        width: "100%",
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px"
      }}>
        {/* Header */}
        <div style={{
          width: "100%",
          maxWidth: "1312px",
          display: "flex",
          flexDirection: "column",
          alignItems: alignment, // Dynamic alignment
          gap: "24px" // Increased gap as requested
        }}>
          {heading ? heading : defaultHeading}

          {/* Render byline if it's provided or if we fall back to default when heading wasn't provided either? 
              Actually, the user might provide heading but empty byline. 
              The Workshop page passes `byline=""` so we should respect empty string.
              If `byline` prop is passed (even empty), use it. If undefined, use default.
          */}
          {(byline !== undefined) ? (
            byline && <p style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#EAF0BD",
              marginTop: "0px",
              marginBottom: "0px",
              marginLeft: "0px",
              marginRight: "0px",
              textAlign: textAlign as any
            }}>
              {byline}
            </p>
          ) : (
            <p style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#EAF0BD",
              marginTop: "0px",
              marginBottom: "0px",
              marginLeft: "0px",
              marginRight: "0px",
              textAlign: textAlign as any
            }}>
              {defaultByline}
            </p>
          )}

        </div>

        {/* Cards Container - Row 1 */}
        <div style={{
          width: "1312px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "48px"
        }}>
          {cardData.slice(0, 3).map((card, i) => (
            <TrackCard
              key={i}
              imageSrc={card.img}
              title={card.title}
              description={card.desc}
            />
          ))}
        </div>

        {/* Cards Container - Row 2 */}
        <div style={{
          width: "1312px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "48px"
        }}>
          {cardData.slice(3, 6).map((card, i) => (
            <TrackCard
              key={i + 3}
              imageSrc={card.img}
              title={card.title}
              description={card.desc}
            />
          ))}
        </div>

        {/* Buttons Section */}
        <div style={{
          display: "flex",
          gap: "24px",
          marginTop: "0",
          justifyContent: "center" // Centered buttons
        }}>
          {/* Button 1: Apply Now */}
          <button style={{
            width: "181px",
            height: "54px",
            background: "#D7F601",
            border: "1px solid #D7F601",
            borderRadius: "4px 20px 4px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer"
          }}>
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
          <button style={{
            width: "363px",
            height: "54px",
            background: "transparent",
            border: "1px solid #D7F601",
            borderRadius: "4px 20px 4px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer"
          }}>
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