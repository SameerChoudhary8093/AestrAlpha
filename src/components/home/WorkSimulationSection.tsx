"use client";

import React, { useState } from 'react';
import Image from "next/image";
import StarIcon from "../icons/Star";
import ApplicationModal from "./ApplicationModal";

export default function WorkSimulationSection() {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);

    return (
        <section
            className="w-full bg-[#181818] flex flex-col items-center box-border px-4 md:px-16 py-16 md:py-28"
            style={{
                marginTop: "0", // Gap handled by padding/margin logic
            }}
        >
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">
                {/* Section 1: Header Text */}
                <div className="w-full max-w-[768px] flex flex-col items-center gap-4 text-center">
                    {/* Top Tagline */}
                    <div
                        className="text-[#EAF0BD] font-semibold text-base leading-[150%]"
                        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                    >
                        Designed for Today. Relevant for Tomorrow. Built with the Industry.
                    </div>

                    {/* Main Headline */}
                    <h2
                        className="w-full text-[#EAF0BD] font-bold leading-[120%] text-[28px] md:text-[40px] lg:text-[48px]"
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                        }}
                    >
                        We don’t teach subjects. We simulate a workplace.
                    </h2>

                    {/* Description */}
                    <p
                        className="w-full text-[#EAF0BD] font-normal leading-[150%] mt-2"
                        style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "clamp(16px, 2vw, 18px)"
                        }}
                    >
                        Aestr Alpha is built like a modern Tech Ashram — structured, immersive, and designed for deep transformation. You check in, lock in, and spend six months building real systems with real accountability.
                    </p>
                </div>

                {/* Section 2: Three Columns */}
                <div className="w-full max-w-[1312px] flex flex-col md:flex-row justify-between gap-12 md:gap-8 lg:gap-12">
                    {/* Column 1 */}
                    <div
                        className="w-full md:flex-1 flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        <Image
                            src="/Wedon't-Teach/Vector1.svg"
                            alt="Projects Icon"
                            width={83}
                            height={80}
                            style={{
                                boxShadow: "0px 2.08px 2.08px 0px #00000040",
                            }}
                        />
                        <div className="text-center">
                            <h3 className="text-[#EAF0BD] font-bold text-2xl leading-[130%]" style={{ fontFamily: "Arial, sans-serif" }}>
                                Real Industry Projects
                            </h3>
                            <p className="text-[#EAF0BD] text-base leading-[150%] mt-4" style={{ fontFamily: "Arial, sans-serif" }}>
                                Work on actual use-cases inspired by real companies and teams.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div
                        className="w-full md:flex-1 flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        <Image src="/Wedon't-Teach/Vector2.svg" alt="Mentor Icon" width={82} height={77} />
                        <div className="text-center">
                            <h3 className="text-[#EAF0BD] font-bold text-2xl leading-[130%]" style={{ fontFamily: "Arial, sans-serif" }}>
                                Mentor-Led Learning
                            </h3>
                            <p className="text-[#EAF0BD] text-base leading-[150%] mt-4" style={{ fontFamily: "Arial, sans-serif" }}>
                                Learn from practitioners working in Salesforce, UI/UX, AI, Data, and more.
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div
                        className="w-full md:flex-1 flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        <Image src="/Wedon't-Teach/Vector3.svg" alt="Outcomes Icon" width={82} height={80} />
                        <div className="text-center">
                            <h3 className="text-[#EAF0BD] font-bold text-2xl leading-[130%]" style={{ fontFamily: "Arial, sans-serif" }}>
                                Career-Driven Outcomes
                            </h3>
                            <p className="text-[#EAF0BD] text-base leading-[150%] mt-4" style={{ fontFamily: "Arial, sans-serif" }}>
                                Portfolio, LinkedIn, interviews, and communication — all covered as part of the journey.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Button Section */}
                <button
                    onClick={() => setIsAppModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#EAF0BD] text-[#EAF0BD] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[4px] rounded-bl-[4px] cursor-pointer hover:bg-white/5 transition-colors -mt-8 md:mt-0"
                    style={{
                        width: "280px",
                        height: "54px",
                    }}
                >
                    <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
                    <span
                        className="font-black text-base leading-[150%] whitespace-nowrap"
                        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                        Apply for Aestr Alpha
                    </span>
                </button>
                <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
            </div>
        </section>
    );
}
