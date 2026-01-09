"use client";

import React from "react";
import Image from "next/image";

export default function MentorSection() {
    return (
        <section
            className="w-full flex justify-center items-center py-16 px-6 md:py-28 md:px-16"
            style={{
                backgroundColor: "#5B1DD6",
                minHeight: '862px',
                paddingTop: '112px',
                paddingBottom: '112px',
            }}
        >
            <div
                className="w-full max-w-[1312px] flex flex-col lg:flex-row items-start justify-center gap-[80px]"
            >
                {/* Left Side: Image */}
                <div
                    className="relative shrink-0 rounded-lg overflow-hidden"
                    style={{
                        width: '100%',
                        maxWidth: '616px',
                        height: '638px',
                        background: '#181818'
                    }}
                >
                    <Image
                        src="/gallery/Image7.svg"
                        alt="Dr. Arastu Sharma"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div
                    className="flex flex-col w-full max-w-[616px]"
                    style={{ gap: '32px' }}
                >
                    {/* Heading */}
                    <h2
                        className="m-0"
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontWeight: 700,
                            fontSize: "40px",
                            lineHeight: "120%",
                            color: "#EAF0BD",
                        }}
                    >
                        Designing the Future of Industry-Driven Learning
                    </h2>

                    {/* Gap 24px (handled by gap-32 on container, but let's be precise if needed, simpler to use gaps on flex col) */}
                    {/* Text 1 */}
                    <p
                        className="m-0"
                        style={{
                            fontFamily: "var(--font-roboto), Roboto, sans-serif",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "150%",
                            color: "#EAF0BD",
                        }}
                    >
                        Dr. Arastu Sharma is a technology and research leader focused on solving real-world problems. Along with a founding team of engineers from Shodh AI (USA) and global tech firms, he has built Aestr Alpha as a space where students are mentored by working software developers, AI practitioners, and system architects — not disconnected faculty. His vision is simple: build future-ready talent through industry-driven learning.
                    </p>

                    {/* Text 2 - Name and Highlight */}
                    <div className="flex flex-col gap-6">
                        <p
                            className="m-0"
                            style={{
                                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "150%",
                                color: "#EAF0BD",
                            }}
                        >
                            <span style={{ fontSize: '24px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>Dr. Arastu Sharma, CEO Shodh AI</span>
                            (<span style={{ color: "#D7F601" }}>Shodh AI</span> is now part of <span style={{ color: "#D7F601" }}>IndiaAI 2.0.</span> One of 10 startups selected to build Indian foundational model ecosystem.)
                        </p>

                        {/* LinkedIn Logo */}
                        <a href="https://www.linkedin.com/in/drarastu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity w-fit mt-0">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 4.024 5.534 3.235 6.5 3.235C7.466 3.235 8.25 4.024 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#EAF0BD" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
