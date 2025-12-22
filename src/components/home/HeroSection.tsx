"use client";

import Link from "next/link";
import Image from "next/image";
import StarIcon from "../icons/Star";

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center"
      style={{
        marginTop: "119px",
        marginBottom: "100px",
        background: "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "491px",
          height: "390px",
          top: "87px",
          left: "-120px",
          background: "#D8F6021A",
          mixBlendMode: "screen",
          filter: "blur(154px)",
          zIndex: 0
        }}
      />
      <div
        className="flex flex-col items-center"
        style={{
          width: "900px",
          gap: "24px",
        }}
      >
        {/* Inner Content Section */}
        <div
          className="flex flex-col items-center"
          style={{
            width: "820px",
            gap: "21.87px"
          }}
        >
          {/* Main Heading "The [Logo] Workplace Is the Curriculum." */}
          <h1
            className="flex flex-col items-center"
            style={{
              width: "820px",
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 700,
              fontSize: "71.07px",
              lineHeight: "120%",
              textAlign: "center",
              color: "#FAFFD6",
              margin: 0
            }}
          >
            <div className="flex items-center justify-center gap-4">
              <span>India’s</span>
              <Image
                src="/home/TextImage.png"
                alt="logo shadow"
                width={193}
                height={141}
                className="object-contain"
              />
              <span>First</span>
            </div>
            <div>Career-Focused</div>
            <div>Tech Ashram.</div>
          </h1>

          {/* Subtext description */}
          <p
            style={{
              width: "820px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              textAlign: "center",
              color: "#FAFFD6",
              margin: 0
            }}
          >
            Aestr Alpha is a 6-Month Career Residency. We bridge the gap between a university degree and Day-1 at a top tech company. At Aestr Alpha, you don’t “attend classes” — you operate: stand-ups, tickets, reviews, shipping real work.
          </p>
        </div>

        {/* Buttons Section */}
        <div
          className="flex items-start justify-center"
          style={{
            width: "579px",
            height: "69.8px",
            gap: "16px",
            paddingTop: "16px"
          }}
        >
          {/* Button 1: Primary */}
          <Link
            href="/Workshop"
            className="flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{
              width: "300px",
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
              textDecoration: "none"
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
            <span className="font-extrabold">Apply for the Residency</span>
          </Link>

          {/* Button 2: Secondary (Outline) */}
          <Link
            href="/AestrAlphaBrochure.pdf"
            download
            className="flex items-center justify-center hover:bg-white/5 transition-colors"
            style={{
              width: "263px",
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
            <span className="font-extrabold" style={{ whiteSpace: "nowrap" }}>Download Brochure</span>
          </Link>
        </div>
      </div>

      {/* Hero Main Image */}
      <div
        style={{
          marginTop: "179.33px",
          marginBottom: "112px",
          width: "1312px",
          height: "700px",
          maxWidth: "100%", // Ensure responsiveness if screen is smaller
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Image
          src="/Herosection/Heromainimage.svg"
          alt="Hero Main Visual"
          width={1312}
          height={700}
          priority
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}