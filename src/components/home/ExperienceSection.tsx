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
                            fontFamily: "var(--font-roboto), Roboto, sans-serif",
                            fontWeight: 400,
                            fontSize: "clamp(24px, 4vw, 40px)",
                            lineHeight: "140%",
                            color: "#111111",
                            textAlign: "center"
                        }}
                    >
                        Aestr Alpha is a 6-Month Career Residency.<br />
                        We bridge the gap between a university<br />
                        degree and Day-1 at a top tech company.<br />
                        At Aestr Alpha, you don’t “attend classes”<br />
                        — you operate: stand-ups, tickets, reviews,<br />
                        shipping real work.
                    </p>
                </div>
            </div>
        </section>
    );
}
