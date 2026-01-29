"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Plus, Minus } from 'lucide-react';
import StarIcon from "@/components/icons/Star";
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Types ---
interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

// --- Individual FAQ Item Component ---
const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="w-full border border-[#FCFFE4] overflow-hidden bg-transparent"
        >
            <div
                onClick={onClick}
                className="p-5 md:p-6 cursor-pointer flex justify-between items-start gap-6"
            >
                {/* Question Text */}
                <h3
                    className="flex-1 font-bold text-lg leading-[150%] text-[#FCFFE4] m-0"
                    style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                >
                    {question}
                </h3>

                {/* Toggle Icon */}
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? (
                            <Minus size={32} color="#D7F601" />
                        ) : (
                            <Plus size={32} color="#D7F601" />
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Answer Section */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6">
                            <p
                                className="font-normal text-lg leading-[150%] text-[#FCFFE4] m-0"
                                style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                            >
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Main Component ---
export default function FAQSection() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (index: number) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const faqs = [
        {
            question: "Is this a course?",
            answer: "No — it’s a career residency designed like a workplace simulation."
        },
        {
            question: "Do I need prior coding experience?",
            answer: "Not necessarily. Each track has a structured onboarding phase and mentorship."
        },
        {
            question: "Is AI included?",
            answer: "Yes. AI is treated as a layer on strong foundations — applied where it creates real value."
        },
        {
            question: "Is there a certificate?",
            answer: "Where relevant (example: ServiceNow), we support certifications — but the core value is proof-of-work and deployments."
        },
        {
            question: "What is the time commitment?",
            answer: "This is a full-time residency-style commitment with office-like hours."
        }
    ];

    // Animation Variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
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
            className="w-full bg-[#181818] flex justify-center py-28 px-4 md:px-16 box-border"
        >
            <motion.div
                className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >

                {/* Left Column: Title & CTA */}
                <motion.div variants={fadeInUp} className="w-full lg:max-w-[500px] flex flex-col gap-6 items-start">
                    {/* FAQ Heading */}
                    <h2
                        className="text-[#FCFFE4] font-bold leading-[120%]"
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontSize: "clamp(32px, 5vw, 48px)"
                        }}
                    >
                        FAQs
                    </h2>

                    {/* Contact Button */}
                    <Link
                        href="/#footer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#D7F601] rounded-[4px] rounded-tr-[20px] cursor-pointer hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                            width: "182px",
                            height: "54px",
                        }}
                    >
                        <StarIcon style={{ width: "28px", height: "30px", color: "#D7F601" }} />
                        <span
                            className="text-[#D7F601] font-black text-base leading-[150%] whitespace-nowrap"
                            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                        >
                            Contact us
                        </span>
                    </Link>
                </motion.div>

                {/* Right Column: Accordion List */}
                <motion.div variants={staggerContainer} className="w-full lg:max-w-[732px] flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openItems.has(index)}
                            onClick={() => toggleItem(index)}
                        />
                    ))}
                </motion.div>

            </motion.div>
        </section>
    );
}
