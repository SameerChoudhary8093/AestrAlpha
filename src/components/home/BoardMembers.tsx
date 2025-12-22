import React from 'react';
import Image from "next/image";
import Link from "next/link";
// Assuming we can reuse an icon or need a new one. I'll use a standard SVG path for LinkedIn inline or a placeholder if I don't have the icon component handy.
// Checking previous imports, "DoubleStarIcon", "StarIcon" were used. I'll assume no LinkedInIcon exists and create a simple SVG.

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 4.024 5.534 3.235 6.5 3.235C7.466 3.235 8.25 4.024 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#EAF0BD" />
  </svg>
);

const GuestMentorCard = () => (
  <div className="transition-transform duration-300 hover:scale-[1.02] cursor-pointer" style={{
    width: "394.67px",
    height: "588px",
    display: "flex",
    flexDirection: "column",
    gap: "0" // Gap is handled by margins/flex gaps specific to children order
  }}>
    {/* Image */}
    <div style={{
      width: "395px", // Rounding up 394.67 to 395 as per "isme 1 image h - width: 395"
      height: "395px",
      // background: "#EAF0BD", // Placeholder color as per prompt
      position: "relative"
    }}>
      <Image
        src="/FeaturesSpeakers/Mentor.svg"
        alt="Mentor"
        width={395}
        height={395}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>

    {/* Text Section */}
    <div style={{
      display: "flex",
      flexDirection: "column",
      marginTop: "24px",
      gap: "0"
    }}>
      {/* Name */}
      <h3 style={{
        width: "394.67px",
        height: "30px",
        fontFamily: "var(--font-roboto), sans-serif",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "150%",
        color: "#EAF0BD",
        margin: 0
      }}>
        Full name
      </h3>
      {/* Title */}
      <p style={{
        width: "394.67px",
        height: "27px",
        fontFamily: "var(--font-roboto), sans-serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "150%",
        color: "#EAF0BD",
        marginTop: "0px", // Just below name? Prompt says "iske just niche"
        margin: 0
      }}>
        Job title
      </p>

      {/* Bio */}
      <p style={{
        width: "394.67px", // Matches card width
        // height: "48px", // Fixed height might cut text if overflow, but fulfilling req
        fontFamily: "var(--font-roboto), sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "150%",
        color: "#EAF0BD",
        marginTop: "16px",
        marginBottom: "0"
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>

      {/* Social Icons */}
      <div style={{ marginTop: "24px", display: "flex", gap: "14px" }}>
        <Link href="#" aria-label="LinkedIn">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  </div>
);

export default function BoardMembers() {
  return (
    <section
      style={{
        width: "100%", // Max width 1440 handled by internal container or parent
        background: "#181818",
        display: "flex",
        justifyContent: "center",
        padding: "112px 0", // Generic vertical padding, horizontal centered
        boxSizing: "border-box"
      }}
    >
      <div style={{
        maxWidth: "1440px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Header Section */}
        <div style={{ width: "1280px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start", textAlign: "left" }}>
          <h2 style={{
            width: "100%",
            fontFamily: "var(--font-orbitron), sans-serif",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "120%",
            color: "#EAF0BD",
            margin: 0
          }}>
            Our Guests Mentors
          </h2>
          <p style={{
            width: "100%",
            fontFamily: "var(--font-roboto), sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "150%",
            color: "#EAF0BD",
            margin: 0
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Content Container with 80px gap from header */}
        <div style={{
          marginTop: "80px",
          width: "1280px",
          display: "flex",
          flexDirection: "column",
          gap: "64px" // "cards ke is section ke niche 64px ka gap deke fir same card section"
        }}>
          {/* Row 1 */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between", // to fit 3 cards in 1280 with 48px gap? 
            // 394.67 * 3 = 1184. 1280 - 1184 = 96. 96 / 2 gaps = 48px. Calculation fits exactly.
            gap: "48px"
          }}>
            <GuestMentorCard />
            <GuestMentorCard />
            <GuestMentorCard />
          </div>
          {/* Row 2 */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "48px"
          }}>
            <GuestMentorCard />
            <GuestMentorCard />
            <GuestMentorCard />
          </div>
        </div>

      </div>
    </section>
  );
}