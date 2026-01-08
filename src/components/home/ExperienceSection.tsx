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
                className="flex flex-col items-center justify-center"
                style={{
                    width: "100%",
                    maxWidth: "1312px",
                    gap: "64px",
                    justifyContent: "center"
                }}
            >
                {/* Centered Text */}
                <div
                    className="w-full text-center"
                    style={{
                        maxWidth: "1000px",
                    }}
                >
                    <p
                        className="m-0 w-full"
                        style={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "150%",
                            color: "#000000",
                        }}
                    >
                        Aestr Alpha is a 6-Month Career Residency. We bridge the gap between a university degree and Day-1 at a top tech company. At Aestr Alpha, you don’t “attend classes” — you operate: stand-ups, tickets, reviews, shipping real work.
                    </p>
                </div>
            </div>
        </section>
    );
}
