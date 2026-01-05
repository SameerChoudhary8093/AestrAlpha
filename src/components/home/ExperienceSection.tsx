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
                    className="w-full xl:w-[320px] text-center xl:text-left"
                    style={{
                        color: "#000000",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "140%",
                        letterSpacing: "0%",
                    }}
                >
                    <p className="m-0">Experience shaped inside</p>
                    <p className="m-0">companies that set the</p>
                    <p className="m-0">standard.</p>
                </div>

                {/* Right Logos */}
                {/* Mobile/Tablet: 2x2 Grid. Desktop (>xl): Flex Row */}
                <div
                    className="grid grid-cols-2 xl:flex items-center justify-center xl:justify-end gap-x-8 gap-y-8 xl:gap-8"
                    style={{
                        maxWidth: "928px",
                    }}
                >
                    {/* Microsoft Logo */}
                    <div className="relative flex justify-center xl:block w-full xl:w-auto h-[110px]" style={{ minWidth: "212px" }}>
                        <Image
                            src="/Herosection/Microsoft.svg"
                            alt="Microsoft"
                            width={212}
                            height={110}
                            className="object-contain"
                        />
                    </div>

                    {/* Cambridge Logo */}
                    <div className="relative flex justify-center xl:block w-full xl:w-auto h-[42px]" style={{ minWidth: "200px" }}>
                        <Image
                            src="/Herosection/Cambridge.svg"
                            alt="University of Cambridge"
                            width={200}
                            height={42}
                            className="object-contain"
                        />
                    </div>

                    {/* Shodh AI Logo */}
                    <div className="relative flex justify-center xl:block w-full xl:w-auto h-[47px]" style={{ minWidth: "200px" }}>
                        <Image
                            src="/Herosection/Shodh.svg"
                            alt="Shodh AI"
                            width={200}
                            height={47}
                            className="object-contain"
                        />
                    </div>

                    {/* DRDO Logo */}
                    <div className="relative flex justify-center xl:block w-full xl:w-auto h-[84px]" style={{ minWidth: "108px" }}>
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
        </section>
    );
}
