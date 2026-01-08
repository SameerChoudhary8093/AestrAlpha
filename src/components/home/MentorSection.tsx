"use client";

import React from "react";
import FeaturedMentor from "./FeaturedMentor";

export default function MentorSection() {
    return (
        <section
            className="w-full flex justify-center items-center py-16 px-6 md:py-20 md:px-12 lg:py-[80px] lg:px-[64px]"
            style={{
                backgroundColor: "#5B1DD6",
            }}
        >
            <div
                className="w-full"
                style={{
                    maxWidth: "1100px",
                }}
            >
                <FeaturedMentor />
            </div>
        </section>
    );
}
