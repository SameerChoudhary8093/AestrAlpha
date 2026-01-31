"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import StarIcon from '@/components/icons/Star';
import ApplicationModal from './ApplicationModal';
import { motion, Variants } from 'framer-motion';

// Custom Sparkle Icon
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

    // Animation Variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const scaleUp: Variants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section
            id="pricing"
            className="flex flex-col items-center box-border w-full bg-[#181818] min-h-auto py-12 px-4 md:py-28 md:px-16 gap-12 md:gap-20"
        >
            <motion.div
                className="w-full flex flex-col items-center gap-12 md:gap-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {/* Header Section */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center"
                    style={{
                        width: "100%",
                        maxWidth: "768px",
                        gap: "24px"
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(32px, 5vw, 48px)",
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
                            fontSize: "clamp(16px, 2vw, 18px)",
                            lineHeight: "150%",
                            textAlign: "center",
                            color: "#D7F601",
                            margin: 0
                        }}
                    >
                        Aestr Alpha is a 6-month career residency designed to bridge the gap between academics and the real industry.
                    </p>
                </motion.div>

                {/* Card Section */}
                <motion.div
                    variants={scaleUp}
                    className="flex flex-col items-center box-border"
                    style={{
                        width: "100%",
                        maxWidth: "560px",
                        borderRadius: "16px",
                        border: "1px solid #D7F601",
                        background: "#181818",
                        overflow: "hidden"
                    }}
                >
                    <div className="flex flex-col items-center w-full p-6 md:p-8 gap-6 md:gap-8">

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
                                fontFamily: "var(--font-roboto), sans-serif",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight: "150%",
                                textAlign: "center",
                                color: "#D7F601",
                                margin: 0
                            }}>
                                New second cohort starting. Accommodation included.
                            </p>
                        </div>

                        {/* Price Info */}
                        <motion.div
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col items-center"
                            style={{ gap: "16px" }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <p style={{
                                    fontFamily: "Arial, sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(48px, 10vw, 64px)",
                                    lineHeight: "100%",
                                    textAlign: "center",
                                    color: "#D7F601",
                                    margin: 0
                                }}>
                                    ₹2,40,000
                                </p>
                            </div>

                            {/* Seats Pill */}
                            <div className="px-5 py-2 md:px-6 md:py-2 border border-[#D7F601] rounded-full">
                                <p style={{
                                    fontFamily: "var(--font-roboto), sans-serif",
                                    fontWeight: 700,
                                    fontSize: "clamp(14px, 1.5vw, 16px)",
                                    lineHeight: "150%",
                                    color: "#D7F601",
                                    margin: 0
                                }}>
                                    Limited Seats Available
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Bottom Section with Gradient */}
                    <div
                        className="flex flex-col items-center w-full p-6 md:p-8 gap-8"
                        style={{
                            background: "linear-gradient(16.05deg, rgba(215, 246, 1, 0.50) -5.39%, #181818 55.41%)"
                        }}
                    >
                        {/* Features Info */}
                        <div className="flex flex-col box-border w-full gap-4 pt-2 pb-2">
                            {/* Item 1 */}
                            <div className="flex flex-row gap-4">
                                <div className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-[#D7F601] mt-1">
                                    <StarIcon style={{ width: "100%", height: "100%", fill: "currentColor" }} />
                                </div>
                                <p className="text-[#D7F601] text-sm md:text-base leading-[150%] font-normal m-0 font-roboto">
                                    Real industry projects, expert mentorship, soft-skills
                                    training, portfolio development, on-campus immersion,
                                    and Aestr Alpha certification.
                                </p>
                            </div>



                            {/* Item 2 */}
                            <div className="flex flex-row gap-4">
                                <div className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-[#D7F601] mt-1">
                                    <StarIcon style={{ width: "100%", height: "100%", fill: "currentColor" }} />
                                </div>
                                <p className="text-[#D7F601] text-sm md:text-base leading-[150%] font-normal m-0 font-roboto">
                                    One-time payment or installments (shared after selection).
                                    Admissions are selection-based. Payment applies only
                                    after acceptance.
                                </p>
                            </div>
                        </div>

                        {/* Button - Styles matched to Hero Section as requested */}
                        <motion.button
                            onClick={() => setIsAppModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center hover:opacity-90 transition-opacity w-full max-w-[300px]"
                            style={{
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
                                marginTop: "8px",
                                cursor: "pointer"
                            }}
                        >
                            <StarIcon
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    color: "#181818",
                                    fill: "currentColor"
                                }}
                            />
                            <span className="font-extrabold whitespace-nowrap">Apply for the Residency</span>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
}
