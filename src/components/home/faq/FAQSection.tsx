"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import StarIcon from "@/components/icons/Star"; // Assuming this exists from previous steps

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
        <div
            onClick={onClick}
            className="w-full border border-[#FCFFE4] p-5 md:p-6 cursor-pointer flex flex-col gap-0 transition-all duration-300 bg-transparent"
        >
            <div className="flex justify-between items-start gap-6">
                {/* Question Text */}
                <h3
                    className="flex-1 font-bold text-lg leading-[150%] text-[#FCFFE4] m-0"
                    style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                >
                    {question}
                </h3>

                {/* Toggle Icon */}
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    {isOpen ? (
                        <Minus size={32} color="#FCFFE4" />
                    ) : (
                        <Plus size={32} color="#FCFFE4" />
                    )}
                </div>
            </div>

            {/* Answer Section */}
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
            >
                <div className="overflow-hidden">
                    <p
                        className="font-normal text-lg leading-[150%] text-[#FCFFE4] m-0"
                        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
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

    return (
        <section
            className="w-full bg-[#5B1DD6] flex justify-center py-28 px-4 md:px-16 box-border"
        >
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">

                {/* Left Column: Title & CTA */}
                <div className="w-full lg:max-w-[500px] flex flex-col gap-6 items-start">
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
                    <button
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#D7F601] rounded-[4px] rounded-tr-[20px] cursor-pointer hover:bg-white/10 transition-colors"
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
                    </button>
                </div>

                {/* Right Column: Accordion List */}
                <div className="w-full lg:max-w-[732px] flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openItems.has(index)}
                            onClick={() => toggleItem(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
