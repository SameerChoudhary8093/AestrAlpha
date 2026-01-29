"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const FeaturedMentor = () => {

    // Animation Variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="flex flex-col md:flex-row items-center md:items-start"
            style={{
                width: '100%',
                // We use min-height to respect the design intent while allowing responsiveness
                minHeight: '403px',
                gap: '64px',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.3
                    }
                }
            }}
        >
            {/* Left Side: Image + Socials */}
            <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-4 shrink-0"
            >
                {/* Image Container */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-lg overflow-hidden"
                    style={{
                        width: '300px', // Adjust as needed or make responsive
                        height: '350px',
                        background: "linear-gradient(180deg, #D8F602 0%, #181818 100%)" // Matching card style
                    }}
                >
                    <Image
                        src="/FeaturesSpeakers/Arastu.webp"
                        alt="Featured Mentor"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                    />
                </motion.div>

                {/* Social Media IDs */}
                <div className="flex items-center gap-3">
                    <span className="text-[#EAF0BD] font-bold text-sm uppercase tracking-wide">Connect:</span>
                    <a href="https://www.linkedin.com/in/drarastu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        {/* Using inline SVG to match BoardMembers style exactly */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 4.024 5.534 3.235 6.5 3.235C7.466 3.235 8.25 4.024 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#EAF0BD" />
                        </svg>
                    </a>
                </div>
            </motion.div>

            {/* Right Side: Description */}
            <motion.div
                variants={fadeInUp}
                className="flex flex-col h-full justify-center"
            >
                <h3
                    className="font-bold text-[#EAF0BD] mb-4"
                    style={{
                        fontSize: '32px',
                        lineHeight: '120%',
                        fontFamily: 'var(--font-orbitron), sans-serif'
                    }}
                >
                    Dr. Arastu Sharma
                </h3>
                <p
                    className="text-[#EAF0BD] opacity-80"
                    style={{
                        fontSize: '18px',
                        lineHeight: '160%',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    Dr. Arastu is a highly experienced technology and research professional with a strong background in innovation, leadership, and real-world problem solving. Our founding team includes engineers from Shodh AI (USA) and other global tech leaders. Here, students don’t learn from disconnected faculty — they are mentored by full-time software developers, AI practitioners, and system architects who are actively shaping the real world. Dr. Arastu is passionate about building future-ready talent through industry-driven education and cutting-edge technology.
                </p>
            </motion.div>

        </motion.div>
    );
};

export default FeaturedMentor;

