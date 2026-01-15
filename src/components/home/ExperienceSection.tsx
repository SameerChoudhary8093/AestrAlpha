"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import StarIcon from "@/components/icons/Star";
import ApplicationModal from "./ApplicationModal";

export default function ExperienceSection() {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const handleApplyClick = () => {
        setIsAppModalOpen(true);
    };

    const handleShodhClick = () => {
        window.open("https://shodh.ai", "_blank");
    };

    return (
        <section
            className="w-full flex flex-col items-center box-border"
            style={{
                backgroundColor: "#D7F601",
                padding: "112px 64px",
                gap: "80px",
            }}
        >


            {/* Video Section */}
            <div
                className="relative rounded-2xl overflow-hidden bg-black flex items-center justify-center"
                style={{
                    width: "100%",
                    maxWidth: "1312px",
                    height: "700px",
                }}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/home/PM Video.mp4"
                    poster="/home/PM-Video-Image.svg"
                    loop
                />

                {/* Center Play Button */}
                {!isPlaying && (
                    <button
                        onClick={togglePlay}
                        className="absolute z-10 w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
                        style={{ border: "none", cursor: "pointer" }}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                )}

                {/* Bottom Right Volume Button */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 z-10 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "none", cursor: "pointer" }}
                >
                    {isMuted ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" />
                            <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                    )}
                </button>

                {/* Overlay to catch clicks for play/pause when playing */}
                {isPlaying && (
                    <div
                        className="absolute inset-0 z-0"
                        onClick={togglePlay}
                    />
                )}
            </div>

            {/* Shodh AI Section */}
            <div
                className="flex flex-col items-center"
                style={{
                    width: "100%",
                    maxWidth: "768px",
                    gap: "24px",
                }}
            >
                <h2
                    style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "120%",
                        color: "#181818",
                        textAlign: "center",
                        margin: 0
                    }}
                >
                    From Shodh AI to<br />Aestr Alpha
                </h2>

                <p
                    style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "150%",
                        color: "#181818",
                        textAlign: "center",
                        margin: 0,
                        maxWidth: "1312px", // Increased to full section width to allow single line
                    }}
                >
                    <span style={{ whiteSpace: 'nowrap' }}><strong>Arastu Sharma</strong> is the Founder & CEO of Aestr Alpha and the Founder of <strong>Shodh AI</strong>, a deep-tech AI company building <strong>India’s Sovereign “AI for Science” Foundation Model.</strong></span>
                    <br /><br />
                    Through Shodh AI, Arastu leads national-scale AI systems backed by IndiaAI, with access to <strong>1.2M+ GPU hours</strong> and partnerships with NVIDIA, Yotta, and Amazon Web Services.
                    <br /><br />
                    He was recently invited to meet <strong>Prime Minister Narendra Modi</strong> and was highlighted among the key contributors shaping India’s AI future.
                    <br /><br />
                    Aestr Alpha exists to transfer this real-world AI engineering experience to the next generation of builders.
                </p>

                {/* Logos Section */}
                <div
                    className="flex flex-row items-center justify-center flex-wrap"
                    style={{
                        width: "100%",
                        maxWidth: "670px",
                        gap: "32px",
                        padding: "24px 0",
                    }}
                >
                    <div style={{ width: "206px", height: "116px", position: "relative" }}>
                        <Image src="/home/nvidia.svg" alt="NVIDIA" fill className="object-contain" />
                    </div>
                    <div style={{ width: "200px", height: "125px", position: "relative" }}>
                        <Image src="/home/yotta.svg" alt="Yotta" fill className="object-contain" />
                    </div>
                    <div style={{ width: "200px", height: "120px", position: "relative" }}>
                        <Image src="/home/aws.svg" alt="AWS" fill className="object-contain" />
                    </div>
                </div>

                {/* Buttons Section */}
                <div
                    className="flex flex-row items-center justify-center flex-wrap"
                    style={{
                        width: "100%",
                        maxWidth: "648px",
                        gap: "24px",
                        paddingTop: "16px",
                    }}
                >
                    {/* Know more button */}
                    <button
                        onClick={handleShodhClick}
                        className="flex items-center justify-center hover:bg-black/5 transition-colors"
                        style={{
                            width: "324px",
                            height: "53.8px",
                            padding: "12px 24px",
                            gap: "8px",
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "20px",
                            borderBottomRightRadius: "4px",
                            borderBottomLeftRadius: "4px",
                            border: "1px solid #181818",
                            backgroundColor: "transparent",
                            cursor: "pointer"
                        }}
                    >
                        <StarIcon style={{ width: "24px", height: "24px", color: "#181818" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-orbitron), sans-serif",
                                fontWeight: 900,
                                fontSize: "16px",
                                color: "#181818",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Know more about Shodh AI
                        </span>
                    </button>

                    {/* Apply button */}
                    <button
                        onClick={handleApplyClick}
                        className="flex items-center justify-center hover:opacity-90 transition-opacity"
                        style={{
                            width: "300px",
                            height: "53.8px",
                            padding: "12px 24px",
                            gap: "8px",
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "20px",
                            borderBottomRightRadius: "4px",
                            borderBottomLeftRadius: "4px",
                            backgroundColor: "#181818",
                            border: "1px solid #181818",
                            cursor: "pointer"
                        }}
                    >
                        <StarIcon style={{ width: "24px", height: "24px", color: "#D8F602" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-orbitron), sans-serif",
                                fontWeight: 900,
                                fontSize: "16px",
                                color: "#D8F602",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Apply for the Residency
                        </span>
                    </button>
                </div>
            </div>

            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
}
