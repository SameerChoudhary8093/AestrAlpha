"use client";

import React from 'react';

// --- Card Component ---
const ModuleCard = ({
    label,
    subline,
    title,
    points,
    borderRadius,
    children
}: {
    label: string,
    subline: string,
    title: React.ReactNode,
    points: React.ReactNode[],
    borderRadius: string,
    children?: React.ReactNode
}) => {
    return (
        <div
            className="transition-transform duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden shrink-0"
            style={{
                width: "100%",
                maxWidth: "605px",
                minWidth: "min(90vw, 605px)", // On mobile, take 90% width; ensure it doesn't exceed 605px on larger screens
                minHeight: "579px", // Ensure minimum height to maintain integrity
                borderRadius: borderRadius,
                background: "linear-gradient(180deg, rgba(46, 54, 15, 0.6) 0%, #181818 100%) padding-box, linear-gradient(180deg, #D7F601 0%, #666666 100%) border-box",
                border: "1px solid transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 8% 40px 8%", // Percentage padding to respond to width
                boxSizing: "border-box"
            }}
        >
            {children}

            {/* Label: Module A */}
            <div
                className="w-full text-left font-bold text-2xl leading-[120%] text-[#EAF0BD] mt-[61px] relative z-10"
                style={{ fontFamily: "Arial, sans-serif" }}
            >
                {label}
            </div>

            {/* Subline */}
            <div
                className="w-full text-left font-semibold text-base leading-[150%] text-[#EAF0BD] mt-[29px] relative z-10"
                style={{ fontFamily: "var(--font-roboto), sans-serif" }}
            >
                {subline}
            </div>

            {/* Title */}
            <h3
                className="w-full text-left font-bold text-[32px] md:text-[40px] leading-[120%] tracking-[-0.02em] text-[#EAF0BD] mt-4 relative z-10"
                style={{ fontFamily: "Arial, sans-serif" }}
            >
                {title}
            </h3>

            {/* Divider */}
            <div
                className="mt-9 h-[1px] w-full max-w-[481px] bg-[radial-gradient(39.09%_18400%_at_50%_50%,_#D7F601_0%,_#181818_100%)] relative z-10"
            />

            {/* Points */}
            <div className="w-full text-[#EAF0BD] text-left mt-3 relative z-10" style={{ fontFamily: "Arial, sans-serif" }}>
                <ul className="list-none p-0 m-0">
                    {points.map((point, i) => (
                        <li key={i} className="text-lg leading-[150%] mb-2 flex items-start gap-3">
                            <span className="text-2xl leading-[18px] mt-[2px]">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default function OperatingSystemSection() {
    // Scroll logic removed for vertical mobile layout


    return (
        <section
            className="w-full bg-[#181818] flex justify-center py-28 px-4 md:px-16"
        >
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-16">
                {/* Header Section */}
                <div className="w-full max-w-[768px] flex flex-col items-center gap-6 text-center">
                    <h2
                        className="text-[#EAF0BD] font-bold leading-[120%]"
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontSize: "clamp(32px, 5vw, 50px)"
                        }}
                    >
                        The Aestr Operating<br />System
                    </h2>
                    <p
                        className="text-[#EAF0BD] font-normal text-lg leading-[150%] whitespace-pre-line"
                        style={{ fontFamily: "Arial, sans-serif" }}
                    >
                        Beyond code. Built for Day-1.{'\n'}
                        Two foundational modules, mandatory for every resident.
                    </p>
                </div>

                {/* Cards Container */}
                <div
                    className="flex flex-col lg:flex-row items-center gap-6 w-full lg:justify-center lg:gap-24"
                >
                    {/* Module A */}
                    <ModuleCard
                        label="Module A"
                        subline="From learning Agile to living it — Day 1."
                        title={<>Agile Delivery &<br />Engineering Leadership</>}
                        borderRadius="8px"
                        points={[
                            <span key="1"><strong>No Theory. Only Jira</strong> - Real tools. Real workflows.</span>,
                            <span key="2"><strong>You Lead Scrums</strong> - Not observe. Actually lead.</span>,
                            <span key="3"><strong>Sprint Ownership</strong> - Plan. Execute. Retrospect.</span>,
                            <span key="4"><strong>Day-1 Ready</strong> - CSM / PSM-I level competence.</span>
                        ]}
                    >
                        {/* Ellipse 1 */}
                        <div
                            style={{
                                position: "absolute",
                                width: "1005px",
                                height: "200px",
                                left: "-279px",
                                top: "-168.24px",
                                background: "#D8F60294",
                                mixBlendMode: "screen",
                                filter: "blur(320.16px)",
                                borderRadius: "50%",
                                pointerEvents: "none",
                                zIndex: 1
                            }}
                        />
                    </ModuleCard>

                    {/* Module B */}
                    <ModuleCard
                        label="Module B"
                        subline="Built for deadlines. Not excuses."
                        title={<>Peak Performance &<br />Mindset Architecture</>}
                        borderRadius="18.71px"
                        points={[
                            <span key="1"><strong>Beat Imposter Syndrome</strong></span>,
                            <span key="2"><strong>High-stress mocks + calm-under-fire training.</strong></span>,
                            <span key="3"><strong>Learn to sustain 4-hour flow states.</strong></span>,
                            <span key="4"><strong>Weekly presentations. Stage → boardroom.</strong></span>
                        ]}
                    />
                </div>

            </div>
        </section>
    );
}
