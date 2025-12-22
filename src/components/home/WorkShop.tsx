import React from 'react';
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/components/icons/Star";

interface WorkShopProps {
  heading?: React.ReactNode;
  description?: string;
  date?: React.ReactNode;
}

export default function WorkShop({ heading, description, date }: WorkShopProps) {
  const defaultHeading = (
    <h2
      style={{
        fontFamily: "var(--font-orbitron), sans-serif",
        fontWeight: 700, // Bold
        fontSize: "50px",
        lineHeight: "120%",
        textAlign: "center",
        color: "#181818",
        margin: 0
      }}
    >
      What You Graduate With
    </h2>
  );

  const defaultDescription = `If you’re looking for shortcuts, this isn’t it.\nIf you’re ready to build real skills, real systems, and real proof — apply for the residency.`;

  return (
    <section
      style={{
        width: "100%",
        background: "#D8F602",
        display: "flex",
        justifyContent: "center",
        padding: "112px 64px 112px 64px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "80px"
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "768px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px"
          }}
        >
          {heading ? heading : defaultHeading}

          <p
            style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400, // Regular
              fontSize: "18px",
              lineHeight: "150%",
              textAlign: "center",
              color: "#181818",
              margin: 0,
              whiteSpace: "pre-line"
            }}
          >
            {description ? description : defaultDescription}
          </p>

          {date && (
            <div
              style={{
                fontFamily: "var(--font-roboto), sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "150%",
                textAlign: "center",
                color: "#181818",
                marginTop: "0px"
              }}
            >
              {date}
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Mobile responsiveness default, but prompt implies row for desktop
            alignItems: "center",
            gap: "48px"
          }}
        >
          {/* 3-Column Layout Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // width: "1312px", // As per prompt max width roughly
              gap: "48px",
              flexWrap: "wrap"
            }}
          >
            {/* Left Column */}
            <div style={{ width: "303px", display: "flex", flexDirection: "column", gap: "64px" }}>
              {/* Item 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                {/* Logo Placeholder */}
                <Image src="/ImmersiveWorkshop/logo-1.svg" alt="Deployment History" width={68} height={68} />
                <p style={{
                  width: "240px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "140%",
                  textAlign: "center",
                  color: "#181818",
                  margin: 0
                }}>
                  A deployment history (not just a certificate)
                </p>
              </div>

              {/* Item 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                {/* Logo Placeholder */}
                <Image src="/ImmersiveWorkshop/logo-2.svg" alt="Documented Artifacts" width={95} height={69} />
                <p style={{
                  width: "240px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "140%",
                  textAlign: "center",
                  color: "#181818",
                  margin: 0
                }}>
                  Documented artifacts: demos, walkthroughs, architecture notes
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div style={{ width: "610px", height: "540px", borderRadius: "16px", overflow: "hidden", background: "#E5E5E5" }}>
              <Image
                src="/ImmersiveWorkshop/CenterImage.svg"
                alt="Graduate Info"
                width={610}
                height={540}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Right Column */}
            <div style={{ width: "303px", display: "flex", flexDirection: "column", gap: "64px" }}>
              {/* Item 3 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                {/* Logo Placeholder */}
                <Image src="/ImmersiveWorkshop/logo-3.svg" alt="GitHub Portfolio" width={95} height={68} />
                <p style={{
                  width: "240px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "140%",
                  textAlign: "center",
                  color: "#181818",
                  margin: 0
                }}>
                  A public GitHub portfolio with real projects
                </p>
              </div>

              {/* Item 4 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                {/* Logo Placeholder */}
                <Image src="/ImmersiveWorkshop/logo-4.svg" alt="Delivery Maturity" width={99} height={53} />
                <p style={{
                  width: "240px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "140%",
                  textAlign: "center",
                  color: "#181818",
                  margin: 0
                }}>
                  Delivery maturity: sprints, reviews, collaboration
                </p>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div style={{ display: "flex", gap: "24px", marginTop: "48px" }}>
            {/* Button 1: Apply */}
            <button
              style={{
                width: "300px",
                height: "54px",
                background: "#181818",
                border: "1px solid #181818",
                borderRadius: "4px 20px 4px 4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer"
              }}
            >
              <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
              <span style={{
                fontFamily: "var(--font-orbitron), sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#D8F602",
                lineHeight: "150%"
              }}>
                Apply for the Residency
              </span>
            </button>

            {/* Button 2: Talk to Counselor */}
            <button
              style={{
                width: "260px",
                height: "54px",
                background: "transparent",
                border: "1px solid #181818",
                borderRadius: "4px 20px 4px 4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer"
              }}
            >
              <StarIcon style={{ width: "28px", height: "30px", color: "#181818" }} />
              <span style={{
                fontFamily: "var(--font-orbitron), sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#181818",
                lineHeight: "150%"
              }}>
                Talk to a Counselor
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}