import React from 'react';
import Image from "next/image";
import StarIcon from "../icons/Star"; // Assuming reused, or create generic if not available

export default function WorkSimulationSection() {
    return (
        <section
            style={{
                width: "100%", // Using 100% for responsiveness, max 1440 based on typical design
                maxWidth: "1440px",
                // height: "880.8px", // Let height be auto to fit content, or min-height
                background: "#181818", // Updated to #181818
                margin: "112px auto 0", // Gap from previous section
                padding: "112px 64px",
                boxSizing: "border-box",
                display: "flex", // To handle the gap between internal sections
                flexDirection: "column",
                alignItems: "center",
                gap: "80px"
            }}
        >
            {/* Section 1: Header Text */}
            <div
                style={{
                    width: "768px", // Based on widest element
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px"
                }}
            >
                {/* Top Tagline */}
                <div
                    style={{
                        width: "477px",
                        height: "24px",
                        fontFamily: "var(--font-roboto), sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "150%",
                        textAlign: "center",
                        color: "#EAF0BD",
                    }}
                >
                    Designed for Today. Relevant for Tomorrow. Built with the Industry.
                </div>

                {/* Main Headline */}
                <h2
                    style={{
                        width: "768px",
                        // height: "116px",
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "120%",
                        textAlign: "center",
                        color: "#EAF0BD",
                        margin: 0
                    }}
                >
                    We don’t teach subjects. We simulate a workplace.
                </h2>

                {/* Description */}
                <p
                    style={{
                        width: "768px",
                        // height: "81px",
                        marginTop: "8px", // 24px gap requested (16 inherited + 8)
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "150%",
                        textAlign: "center",
                        color: "#EAF0BD",
                        margin: "8px 0 0 0"
                    }}
                >
                    Aestr Alpha is built like a modern Tech Ashram — structured, immersive, and designed for deep transformation. You check in, lock in, and spend six months building real systems with real accountability.
                </p>
            </div>

            {/* Section 2: Three Columns */}
            <div
                style={{
                    width: "1312px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "48px"
                }}
            >
                {/* Column 1 */}
                <div style={{ width: "405.33px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                    <Image
                        src="/Wedon't-Teach/Vector1.svg"
                        alt="Projects Icon"
                        width={83}
                        height={80}
                        style={{
                            boxShadow: "0px 2.08px 2.08px 0px #00000040",
                            // background: "#D8F602", // Assuming SVG has color or background is applied to container?
                            // SVG usually handles its own shape. If it's a mask, it needs a wrapper.
                            // Prompt says "background: #D8F602", treating as icon color.
                        }}
                    />
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "130%", color: "#EAF0BD", margin: 0 }}>
                            Real Industry Projects
                        </h3>
                        <p style={{ marginTop: "16px", fontFamily: "Arial, sans-serif", fontSize: "16px", lineHeight: "150%", color: "#EAF0BD" }}>
                            Work on actual use-cases inspired by real companies and teams.
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div style={{ width: "405.33px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                    <Image src="/Wedon't-Teach/Vector2.svg" alt="Mentor Icon" width={82} height={77} />
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "130%", color: "#EAF0BD", margin: 0 }}>
                            Mentor-Led Learning
                        </h3>
                        <p style={{ marginTop: "16px", fontFamily: "Arial, sans-serif", fontSize: "16px", lineHeight: "150%", color: "#EAF0BD" }}>
                            Learn from practitioners working in Salesforce, UI/UX, AI, Data, and more.
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div style={{ width: "405.33px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                    <Image src="/Wedon't-Teach/Vector3.svg" alt="Outcomes Icon" width={82} height={80} />
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "130%", color: "#EAF0BD", margin: 0 }}>
                            Career-Driven Outcomes
                        </h3>
                        <p style={{ marginTop: "16px", fontFamily: "Arial, sans-serif", fontSize: "16px", lineHeight: "150%", color: "#EAF0BD" }}>
                            Portfolio, LinkedIn, interviews, and communication — all covered as part of the journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <button
                style={{
                    width: "280px",
                    height: "54px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "transparent",
                    border: "1px solid #EAF0BD",
                    color: "#EAF0BD",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "4px",
                    borderBottomLeftRadius: "4px",
                    cursor: "pointer",
                    marginTop: "-32px" // Adjusting for the 48px gap requested from bottom of columns
                }}
            >
                <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
                <span
                    style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 900,
                        fontSize: "16px",
                        lineHeight: "150%",
                        whiteSpace: "nowrap"
                    }}
                >
                    Apply for Aestr Alpha
                </span>
            </button>
        </section>
    );
}
