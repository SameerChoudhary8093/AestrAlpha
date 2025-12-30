"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import StarIcon from '@/components/icons/Star';
import ApplicationModal from './ApplicationModal';
// Ensure you have these fonts imported/available if they are custom
// The user specified 'Orbitron', 'Roboto', 'Arial'.

// Custom Sparkle Icon (as requested previously, though I should check if I should use StarIcon or Sparkle. 
// HeroSection uses StarIcon. User said "same wesa hi rhega jesa hero section me h" for button. Hero uses StarIcon.
// But valid user request had a Sparkle component. 
// "ek logo h... background #D7F601".
// I will use Sparkle for the Features section as requested in previous instruction, and StarIcon for the Button to match Hero.)
const Sparkle = ({ className = "w-5 h-5", style }: { className?: string, style?: React.CSSProperties }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

export default function InvestmentSection() {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);

    return (
        <section
            id="pricing"
            className="flex flex-col items-center box-border w-full bg-[#181818] min-h-[1053px] py-16 px-4 md:py-28 md:px-16 gap-20"
        >
            {/* Header Section */}
            <div
                className="flex flex-col items-center text-center"
                style={{
                    width: "100%",
                    maxWidth: "768px",
                    gap: "24px"
                }}
            >
                <h2
                    style={{
                        fontFamily: "var(--font-orbitron), sans-serif", // Assuming variable since Orbitron is used elsewhere
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "120%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}
                >
                    Investment in Your Career
                </h2>

                <p
                    style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "150%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}
                >
                    Aestr Alpha is a 6-month career residency designed to bridge the gap between academics and the real industry.
                </p>
            </div>

            {/* Card Section */}
            <div
                className="flex flex-col items-center box-border"
                style={{
                    width: "100%",
                    maxWidth: "560px",
                    // height: "613.8px", // Let height be auto to fit content? Or fixed? User said fixed height.
                    // Fixed height might break responsive text. I'll use minHeight or Auto. 
                    // But I'll stick close to design:
                    padding: "32px",
                    gap: "32px",
                    borderRadius: "16px",
                    border: "1px solid #D7F601",
                    background: "linear-gradient(16.05deg, rgba(215, 246, 1, 0.1) -5.39%, #181818 36.41%)"
                }}
            >

                {/* Fee Info */}
                <div className="flex flex-col items-center" style={{ gap: "8px" }}>
                    <p style={{
                        fontFamily: "var(--font-roboto), sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "140%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}>
                        Program Fee:
                    </p>

                    <p style={{
                        textDecoration: "line-through",
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 700,
                        fontSize: "36px",
                        lineHeight: "120%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}>
                        ₹2,40,000
                    </p>

                    <p style={{
                        fontFamily: "var(--font-roboto), sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "150%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}>
                        Early Bird Offer: 50% Off
                    </p>
                </div>

                {/* Price Info */}
                <div className="flex flex-col items-center" style={{ gap: "8px" }}>
                    <p style={{
                        fontFamily: "var(--font-roboto), sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "140%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}>
                        Early Bird Price
                    </p>
                    <p style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(36px, 10vw, 64px)",
                        lineHeight: "120%",
                        textAlign: "center",
                        color: "#D7F601",
                        margin: 0
                    }}>
                        ₹1,20,000
                    </p>
                </div>

                {/* Features Info */}
                <div className="flex flex-col box-border" style={{
                    width: "100%",
                    gap: "16px",
                    paddingTop: "8px",
                    paddingBottom: "8px"
                }}>
                    {/* Item 1 */}
                    <div className="flex flex-row" style={{ gap: "16px" }}>
                        <div style={{
                            width: "26px",
                            height: "27.67px",
                            color: "#D7F601",
                            flexShrink: 0
                        }}>
                            <StarIcon style={{ width: "100%", height: "100%", fill: "currentColor" }} />
                        </div>
                        <p style={{
                            fontFamily: "var(--font-roboto), sans-serif",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#D7F601",
                            margin: 0,
                            whiteSpace: "pre-line"
                        }}>
                            Real industry projects, expert mentorship, soft-skills{"\n"}
                            training, portfolio development, on-campus immersion,{"\n"}
                            and Aestr Alpha certification.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-row" style={{ gap: "16px" }}>
                        <div style={{
                            width: "26px",
                            height: "27.67px",
                            color: "#D7F601",
                            flexShrink: 0
                        }}>
                            <StarIcon style={{ width: "100%", height: "100%", fill: "currentColor" }} />
                        </div>
                        <p style={{
                            fontFamily: "var(--font-roboto), sans-serif",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#D7F601",
                            margin: 0,
                            whiteSpace: "pre-line"
                        }}>
                            One-time payment or installments (shared after selection).{"\n"}
                            Admissions are selection-based. Payment applies only{"\n"}
                            after acceptance.
                        </p>
                    </div>
                </div>

                {/* Button - Styles matched to Hero Section as requested */}
                <button
                    onClick={() => setIsAppModalOpen(true)}
                    className="flex items-center justify-center hover:opacity-90 transition-opacity"
                    style={{
                        width: "300px",
                        height: "53.8px",
                        gap: "8px",
                        padding: "12px 24px",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "4px",
                        borderBottomLeftRadius: "4px",
                        backgroundColor: "#D8F602",
                        color: "#181818",
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 800,
                        fontSize: "16px",
                        lineHeight: "150%",
                        textDecoration: "none",
                        marginTop: "0px", // User said gap '32px' from section above. The parent flex gap is '32px'. So margin 0 is correct.
                        cursor: "pointer"
                    }}
                >
                    <StarIcon
                        style={{
                            width: "28px",
                            height: "29.8px",
                            color: "#181818",
                            fill: "currentColor"
                        }}
                    />
                    <span className="font-extrabold whitespace-nowrap">Apply for the Residency</span>
                </button>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
}
