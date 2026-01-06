"use client";

import React from "react";
import Image from "next/image";

export default function ExperienceSection() {
    return (
        <section
            className="w-full flex justify-center items-center py-12 px-6 md:py-20 md:px-12 lg:py-[80px] lg:px-[64px]"
            style={{
                backgroundColor: "#D7F601",
            }}
        >
            <div
                className="flex flex-col xl:flex-row items-center justify-between"
                style={{
                    width: "100%",
                    maxWidth: "1312px",
                    gap: "64px"
                }}
            >
                {/* Left Text */}
                <div
                    className="w-full xl:w-[500px] text-center xl:text-left"
                    style={{
                        color: "#000000",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "140%",
                        letterSpacing: "0%",
                    }}
                >
                    <p
                        className="m-0 mb-4 whitespace-nowrap"
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontSize: "32px",
                            fontWeight: 700,
                            lineHeight: "120%"
                        }}
                    >
                        Built by AI Engineers.
                    </p>
                    <p className="m-0">
                        Powered by Experience.<br />
                        From Microsoft to Cambridge,<br />
                        we bring real-world tech to your career journey.
                    </p>
                </div>

                {/* Right Logos */}
                <div style={{ maxWidth: "928px" }} className="w-full xl:w-auto">

                    {/* MOBILE LAYOUT (< md) */}
                    <div className="flex flex-col gap-6 md:hidden w-full">
                        {/* Row 1: Microsoft & Cambridge - Left aligned, 2px gap */}
                        <div className="flex items-center justify-start gap-[2px] pl-[2px] w-full">
                            {/* Microsoft */}
                            <div className="relative h-[80px] w-auto" style={{ width: "160px" }}>
                                <Image
                                    src="/Herosection/Microsoft.svg"
                                    alt="Microsoft"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-contain object-left"
                                />
                            </div>
                            {/* Cambridge */}
                            <div className="relative h-[32px] w-auto" style={{ width: "180px" }}>
                                <Image
                                    src="/Herosection/Cambridge.svg"
                                    alt="University of Cambridge"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-contain object-center"
                                />
                            </div>
                        </div>

                        {/* Row 2: Shodh & DRDO - Left aligned to match above */}
                        <div className="flex items-center justify-start gap-[2px] pl-[2px] w-full">
                            {/* Shodh AI */}
                            <div className="relative h-[40px] w-auto" style={{ width: "160px" }}>
                                <Image
                                    src="/Herosection/Shodh.svg"
                                    alt="Shodh AI"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-contain object-left"
                                />
                            </div>
                            {/* DRDO */}
                            <div className="relative h-[60px] w-auto" style={{ width: "180px" }}>
                                <Image
                                    src="/Herosection/DRDO.svg"
                                    alt="DRDO"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TABLET & DESKTOP LAYOUT (>= md) */}
                    <div className="hidden md:grid md:grid-cols-2 xl:flex items-center justify-center xl:justify-end gap-x-8 gap-y-8 xl:gap-8 w-full">
                        {/* Microsoft Logo */}
                        <div className="relative flex justify-start xl:block w-full xl:w-auto h-[110px]" style={{ minWidth: "212px" }}>
                            <Image
                                src="/Herosection/Microsoft.svg"
                                alt="Microsoft"
                                width={212}
                                height={110}
                                className="object-contain"
                            />
                        </div>

                        {/* Cambridge Logo */}
                        <div className="relative flex justify-start xl:block w-full xl:w-auto h-[42px]" style={{ minWidth: "200px" }}>
                            <Image
                                src="/Herosection/Cambridge.svg"
                                alt="University of Cambridge"
                                width={200}
                                height={42}
                                className="object-contain"
                            />
                        </div>

                        {/* Shodh AI Logo */}
                        <div className="relative flex justify-end xl:block w-full xl:w-auto h-[47px]" style={{ minWidth: "200px" }}>
                            <Image
                                src="/Herosection/Shodh.svg"
                                alt="Shodh AI"
                                width={200}
                                height={47}
                                className="object-contain"
                            />
                        </div>

                        {/* DRDO Logo */}
                        <div className="relative flex justify-start xl:block w-full xl:w-auto h-[84px]" style={{ minWidth: "108px" }}>
                            <Image
                                src="/Herosection/DRDO.svg"
                                alt="DRDO"
                                width={108}
                                height={84}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
