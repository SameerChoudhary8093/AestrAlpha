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
            className="w-full flex flex-col items-center box-border px-4 py-12 md:px-16 md:py-28"
            style={{
                backgroundColor: "#D7F601",
                gap: "clamp(40px, 8vw, 80px)",
            }}
        >
            {/* Video Section */}
            <div
                className="relative rounded-2xl overflow-hidden bg-black flex items-center justify-center w-full"
                style={{
                    maxWidth: "1312px",
                    height: "auto",
                    aspectRatio: "16 / 9",
                    maxHeight: "700px"
                }}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/home/pm-video.mp4"
                    poster="/home/PM-Video-Image.svg"
                    loop
                    preload="none"
                    playsInline
                />

                {/* Center Play Button */}
                {!isPlaying && (
                    <button
                        onClick={togglePlay}
                        aria-label="Play video"
                        className="absolute z-10 w-12 h-12 md:w-20 md:h-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
                        style={{ border: "none", cursor: "pointer" }}
                    >
                        <svg width="24" height="24" className="md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                )}

                {/* Bottom Right Volume Button */}
                <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "none", cursor: "pointer" }}
                >
                    {isMuted ? (
                        <svg width="20" height="20" md-width="24" md-height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" />
                            <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" md-width="24" md-height="24" viewBox="0 0 24 24" fill="white">
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
                className="flex flex-col items-center w-full"
                style={{
                    maxWidth: "1100px",
                    gap: "24px",
                }}
            >
                <h2
                    className="w-full text-center"
                    style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(32px, 5vw, 48px)",
                        lineHeight: "120%",
                        color: "#181818",
                        margin: 0,
                        maxWidth: "600px" // To encourage 2 lines on mobile
                    }}
                >
                    From Shodh AI to Aestr Alpha
                </h2>

                <div
                    className="w-full text-center flex flex-col items-center"
                    style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 2vw, 18px)",
                        lineHeight: "150%",
                        color: "#181818",
                        margin: 0,
                    }}
                >
                    <span className="block md:whitespace-nowrap"><strong>Arastu Sharma</strong> is the Founder & CEO of Aestr Alpha and the Founder of <strong>Shodh AI</strong>, a deep-tech AI</span>
                    <span className="block">company building <strong>India’s Sovereign “AI for Science” Foundation Model.</strong></span>

                    <div className="mt-8 md:mt-10 flex flex-col items-center">
                        <span className="block md:whitespace-nowrap">Through Shodh AI, Arastu leads national-scale AI systems backed by IndiaAI, with access to</span>
                        <span className="block md:whitespace-nowrap"><strong>1.2M+ GPU hours</strong> and partnerships with NVIDIA, Yotta, and Amazon Web Services.</span>
                    </div>

                    <div className="mt-6 flex flex-col items-center">
                        <span className="block md:whitespace-nowrap">He was recently invited to meet <strong>Prime Minister Narendra Modi</strong> and was highlighted among</span>
                        <span className="block md:whitespace-nowrap">the key contributors shaping India’s AI future.</span>
                    </div>

                    <div className="mt-6 flex flex-col items-center">
                        <span className="block md:whitespace-nowrap">Aestr Alpha exists to transfer this real-world AI engineering experience to the next generation of</span>
                        <span className="block">builders.</span>
                    </div>
                </div>

                {/* Logos Section */}
                <div
                    className="flex flex-row items-center justify-center flex-wrap gap-6 md:gap-8 py-6 w-full"
                    style={{ maxWidth: "670px" }}
                >
                    <div className="relative w-32 h-16 md:w-[206px] md:h-[116px]">
                        <Image src="/home/nvidia.svg" alt="NVIDIA" fill sizes="(max-width: 768px) 128px, 206px" className="object-contain" />
                    </div>
                    <div className="relative w-32 h-16 md:w-[200px] md:h-[125px]">
                        <Image src="/home/yotta.svg" alt="Yotta" fill sizes="(max-width: 768px) 128px, 200px" className="object-contain" />
                    </div>
                    <div className="relative w-32 h-16 md:w-[200px] md:h-[120px]">
                        <Image src="/home/aws.svg" alt="AWS" fill sizes="(max-width: 768px) 128px, 200px" className="object-contain" />
                    </div>
                </div>

                {/* Buttons Section */}
                <div
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4 w-full"
                    style={{ maxWidth: "648px" }}
                >
                    {/* Know more button */}
                    <button
                        onClick={handleShodhClick}
                        className="flex items-center justify-center hover:bg-black/5 transition-colors w-full md:w-[324px]"
                        style={{
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
                            className="whitespace-nowrap font-black"
                            style={{
                                fontFamily: "var(--font-orbitron), sans-serif",
                                fontSize: "16px",
                                color: "#181818",
                            }}
                        >
                            Know more about Shodh AI
                        </span>
                    </button>

                    {/* Apply button */}
                    <button
                        onClick={handleApplyClick}
                        className="flex items-center justify-center hover:opacity-90 transition-opacity w-full md:w-[300px]"
                        style={{
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
                            className="whitespace-nowrap font-black"
                            style={{
                                fontFamily: "var(--font-orbitron), sans-serif",
                                fontSize: "16px",
                                color: "#D8F602",
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
