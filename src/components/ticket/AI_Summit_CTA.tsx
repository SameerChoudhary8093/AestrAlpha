"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import WorkshopRegistrationModal from './WorkshopRegistrationModal';

const AI_Summit_CTA = () => {
    const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);

    // Variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    return (
        <section className="relative bg-[#181818] py-24 px-6 overflow-hidden">
            {/* --- Background Animated Elements --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D7F601] opacity-[0.03] blur-[120px] rounded-full animate-pulse"></div>

            {/* Floating Sparkles decoration */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[15%] text-[#D7F601] opacity-20 hidden md:block"
            >
                <Sparkles size={100} />
            </motion.div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                {/* Sub-heading with animation */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[#D7F601] font-mono tracking-[0.3em] uppercase text-sm mb-4 block"
                >
                    Limited Slots Available
                </motion.span>

                {/* Main Heading */}
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-6xl md:text-8xl font-black mb-10 uppercase italic tracking-tighter leading-none"
                >
                    Join the <span className="text-[#D7F601] drop-shadow-[0_0_15px_rgba(215,246,1,0.4)]">AI Summit</span> 2026
                </motion.h2>

                {/* List Points with Stagger Animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16"
                >
                    {[
                        "24-Hour Cyberthon",
                        "5 Expert-Led Workshops",
                        "Startup Panels & Networking"
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-center gap-3 text-[#C9C6C2] text-lg font-medium"
                        >
                            <CheckCircle className="text-[#D7F601]" size={24} />
                            <span>{text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Main Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(215,246,1,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-[#D7F601] text-black px-10 py-5 rounded-full font-black text-xl uppercase tracking-tighter flex items-center gap-3 overflow-hidden transition-all"
                        onClick={() => setIsWorkshopModalOpen(true)}
                    >
                        Register Now
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>


                {/* Floating background text (Decorative) */}
                <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.02]">
                    <h2 className="text-[150px] font-black text-white uppercase italic">
                        INNOVATE
                    </h2>
                </div>
            </div>

            <WorkshopRegistrationModal
                isOpen={isWorkshopModalOpen}
                onClose={() => setIsWorkshopModalOpen(false)}
            />
        </section>
    );
};

export default AI_Summit_CTA;
