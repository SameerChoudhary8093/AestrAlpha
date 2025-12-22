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
            style={{
                width: "732px",
                // Height is dynamic based on content, though prompt gave fixed heights for specific rows. 
                // We will let it grow based on content + openness, but set base padding/border.
                border: "1px solid #FCFFE4",
                padding: "20px 24px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "0px", // Content spacing handled internally
                transition: "all 0.3s ease",
                background: "transparent"
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px" }}>
                {/* Question Text */}
                <h3 style={{
                    width: "600px", // Approx remaining width
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "150%",
                    color: "#FCFFE4",
                    margin: 0
                }}>
                    {question}
                </h3>

                {/* Toggle Icon */}
                <div style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {isOpen ? (
                        <Minus size={32} color="#FCFFE4" />
                    ) : (
                        <Plus size={32} color="#FCFFE4" />
                    )}
                </div>
            </div>

            {/* Answer Section */}
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? "16px" : "0px",
                    transition: "all 0.3s ease-out"
                }}
            >
                <div style={{ overflow: "hidden" }}>
                    <p style={{
                        fontFamily: "var(--font-roboto), sans-serif",
                        fontWeight: 400, // Regular assumption for body
                        fontSize: "18px",
                        lineHeight: "150%",
                        color: "#FCFFE4",
                        margin: 0
                    }}>
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
        <section style={{
            width: "100%",
            background: "#5B1DD6",
            display: "flex",
            justifyContent: "center",
            padding: "112px 64px 112px 64px",
            boxSizing: "border-box"
        }}>
            <div style={{
                width: "100vw",
                maxWidth: "1440px",
                display: "flex",
                flexDirection: "row", // Desktop default
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "80px",
                flexWrap: "wrap" // Responsive wrap
            }}>

                {/* Left Column: Title & CTA */}
                <div style={{
                    width: "500px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    alignItems: "flex-start"
                }}>
                    {/* FAQ Heading */}
                    <h2 style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "120%",
                        color: "#FCFFE4",
                        margin: 0
                    }}>
                        FAQs
                    </h2>

                    {/* Contact Button */}
                    <button style={{
                        width: "182px",
                        height: "54px",
                        background: "transparent",
                        border: "1px solid #D7F601",
                        borderRadius: "4px 20px 4px 4px",
                        padding: "12px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        cursor: "pointer"
                    }}>
                        <StarIcon style={{ width: "28px", height: "30px", color: "#D7F601" }} />
                        <span style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontWeight: 900,
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#D7F601",
                            whiteSpace: "nowrap"
                        }}>
                            Contact us
                        </span>
                    </button>
                </div>

                {/* Right Column: Accordion List */}
                <div style={{
                    width: "732px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px"
                }}>
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
