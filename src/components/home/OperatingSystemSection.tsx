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
            className="transition-transform duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden shrink-0 flex flex-col items-start box-border p-6 md:p-[0_53px_40px_53px] w-full max-w-[605px] md:max-w-[480px] lg:max-w-[605px]"
            style={{
                minHeight: "579px",
                borderRadius: "8px",
                background: "linear-gradient(180deg, #2E360F 0%, #181818 40%, #181818 100%) padding-box, linear-gradient(180deg, #D7F601 0%, #666666 100%) border-box",
                border: "1px solid transparent",
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
                className="w-full text-left font-bold text-[32px] md:text-[40px] leading-[120%] tracking-[-0.02em] text-[#EAF0BD] mt-[16px] relative z-10"
                style={{ fontFamily: "Arial, sans-serif" }}
            >
                {title}
            </h3>

            {/* Divider */}
            <div
                className="mt-[36.76px] relative z-10"
                style={{
                    width: "100%",
                    maxWidth: "481px",
                    height: "1px",
                    background: "radial-gradient(39.09% 18400% at 50% 50%, #D7F601 0%, #181818 100%)",
                    opacity: 1
                }}
            />

            {/* Points */}
            <div className="w-full text-[#EAF0BD] text-left mt-[50px] relative z-10" style={{ fontFamily: "Arial, sans-serif" }}>
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
                    >
                        {/* Ellipse 1 (Copied from Module A for consistency) */}
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
                </div>

            </div>
        </section>
    );
}
