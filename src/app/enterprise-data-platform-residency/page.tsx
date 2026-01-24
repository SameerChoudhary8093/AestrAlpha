"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Menu, X, Linkedin, Instagram, Twitter } from 'lucide-react';
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StarIcon from "@/components/icons/Star";
import ApplicationModal from "@/components/home/ApplicationModal";
import BrochureModal from "@/components/home/BrochureModal";

// --- Shared Components ---

// The 4-point star icon used frequently as bullets
const Sparkle = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

const Button = ({
    children,
    variant = 'primary',
    className = ''
}: {
    children: React.ReactNode,
    variant?: 'primary' | 'secondary' | 'outline-dark' | 'outline-light',
    className?: string
}) => {
    const baseStyle = "px-6 py-3 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all duration-300 border border-transparent";

    const variants = {
        primary: "bg-[#D2F628] text-black hover:bg-white",
        secondary: "bg-black text-white hover:bg-[#333]",
        'outline-dark': "border-[#D2F628] text-[#D2F628] hover:bg-[#D2F628] hover:text-black",
        'outline-light': "border-black text-black hover:bg-black hover:text-[#D2F628]",
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className} `}>
            <Sparkle className="w-3 h-3" />
            {children}
        </button>
    );
};

// --- Sections ---

const Hero = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
        <section className="bg-[#181818] text-white overflow-hidden relative min-h-screen lg:min-h-[888px]">
            <div className="max-w-[1440px] mx-auto relative h-full flex flex-col lg:flex-row items-center lg:items-start justify-center pt-28 pb-16 px-4 lg:px-16 gap-10 lg:gap-20">
                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start w-full lg:max-w-[616px] z-10">
                    {/* Badge Text */}
                    <div
                        className="font-bold text-base leading-[120%]"
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            color: '#FAFFD6',
                            height: '19px',
                            opacity: 1
                        }}
                    >
                        Enterprise Data Platform Track
                    </div>

                    {/* Main Heading */}
                    <h1
                        className="font-bold text-[40px] md:text-[56px] leading-[120%] mt-[8px]"
                        style={{
                            fontFamily: 'var(--font-orbitron), sans-serif',
                            color: '#FAFFD6',
                            opacity: 1
                        }}
                    >
                        The Enterprise<br />
                        Data Platform<br />
                        Residency
                    </h1>

                    {/* Mobile Image Section (Visible only on mobile) */}
                    <div className="relative w-full h-auto aspect-[616/576] flex justify-center z-10 my-8 lg:hidden">
                        <div className="relative w-full h-full overflow-hidden rounded-lg border border-[rgba(234,240,189,0.3)] bg-[#EAF0BD]/5 box-border">
                            <img
                                src="/home/Enterprise-Image.svg"
                                alt="Enterprise Data Platform"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-[#D7F601] mix-blend-overlay opacity-20"></div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-[24px] mt-[24px]">
                        <p
                            className="font-normal text-[24px] leading-[150%]"
                            style={{
                                fontFamily: 'Arial, sans-serif',
                                color: '#FAFFD6',
                                opacity: 1
                            }}
                        >
                            Master the Modern Data Stack.
                        </p>

                        <div
                            className="font-normal text-[18px] leading-[150%] space-y-4"
                            style={{
                                fontFamily: 'Arial, sans-serif',
                                color: '#FAFFD6',
                                opacity: 1
                            }}
                        >
                            <p>
                                A 6-month immersive residency designed to transform you into a Data Engineer capable of building scalable data platforms.
                            </p>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="pt-[24px]">
                        <button
                            onClick={() => setIsAppModalOpen(true)}
                            className="flex items-center justify-center gap-[8px] border border-[#EAF0BD] bg-transparent hover:bg-[#EAF0BD]/10 transition-colors box-border cursor-pointer"
                            style={{
                                width: '280px', // Precise width
                                height: '54px', // Precise height
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px'
                            }}
                        >
                            <div style={{ width: '28px', height: '29.8px', color: '#181818' }}>
                                <StarIcon className="w-full h-full text-[#D7F601]" />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] whitespace-nowrap"
                                style={{
                                    fontFamily: 'var(--font-orbitron), sans-serif',
                                    color: '#EAF0BD'
                                }}
                            >
                                Apply for Residency
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Image Section (Hidden on Mobile) */}
                <div className="hidden lg:flex relative w-full lg:max-w-[616px] h-full justify-center lg:justify-end z-10 mt-12 lg:mt-0">
                    <div className="relative w-full h-auto aspect-[616/576] overflow-hidden rounded-lg border border-[rgba(234,240,189,0.3)] bg-[#EAF0BD]/5 box-border">
                        <img
                            src="/home/Enterprise-Image.svg"
                            alt="Enterprise Data Platform"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-[#D7F601] mix-blend-overlay opacity-20"></div>
                    </div>
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
};

const InfoCard = ({
    title,
    text,
    height
}: {
    title: string;
    text: string;
    height?: string;
}) => (
    <div
        className="flex flex-col items-start border border-[#000000] rounded-[8px] p-[32px] gap-[16px] w-full bg-transparent box-border"
        style={{ height: height || 'auto' }}
    >
        <div
            className="flex items-center justify-center rounded-none"
            style={{
                width: '57.53px',
                height: '61.23px',
                color: '#5B1DD6',
                opacity: 1
            }}
        >
            <StarIcon className="w-full h-full" />
        </div>
        <h3
            className="font-bold text-[24px] leading-[140%] text-[#000000] mt-[16px]"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            {title}
        </h3>
        <p
            className="font-normal text-[16px] leading-[150%] text-[#000000]"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            {text}
        </p>
    </div>
);

const WhyThisTrack = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
        <section className="bg-[#D7F601] w-full flex justify-center items-center overflow-hidden">
            <div
                className="max-w-[1440px] w-full flex flex-col lg:flex-row items-start justify-between box-border py-16 px-4 lg:py-28 lg:px-16 gap-10 lg:gap-20"
            >
                <div className="flex flex-col w-full lg:max-w-[616px] gap-6 lg:sticky lg:top-[150px]">
                    <h2
                        className="font-bold text-[48px] leading-[120%] text-[#000000]"
                        style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                    >
                        Why This Track?
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                        <button
                            onClick={() => setIsAppModalOpen(true)}
                            className="flex items-center justify-center gap-[8px] bg-[#181818] border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                            style={{
                                width: '300px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px'
                            }}
                        >
                            <div style={{ width: '28px', height: '29.8px' }}>
                                <StarIcon className="w-full h-full" style={{ color: '#181818' }} />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] text-[#D8F602] whitespace-nowrap"
                                style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                            >
                                Apply for the Residency
                            </span>
                        </button>
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in the Enterprise Data Platform Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                            style={{
                                width: '260px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px'
                            }}
                        >
                            <div style={{ width: '28px', height: '29.8px' }}>
                                <StarIcon className="w-full h-full" style={{ color: '#181818' }} />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] text-[#181818] whitespace-nowrap"
                                style={{
                                    fontFamily: 'var(--font-orbitron), sans-serif',
                                    width: '176px',
                                    height: '24px'
                                }}
                            >
                                Talk to a Counselor
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row lg:flex-col w-full lg:max-w-[616px] gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                    <InfoCard title="High Demand" text="Data Engineering is one of the fastest growing fields." />
                    <InfoCard title="Future Proof" text="Every AI system needs a data platform." />
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
};

const TimelineRow = ({
    phaseNumber,
    phaseName,
    role,
    focus,
    project,
    isLast = false
}: {
    phaseNumber: string;
    phaseName: React.ReactNode;
    role: string;
    focus: string;
    project: string;
    isLast?: boolean;
}) => (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch box-border w-full max-w-[1312px] h-auto lg:h-[344px]">
        <div className="flex flex-col justify-center items-center lg:items-start box-border w-full lg:w-[560px] h-auto lg:h-[344px] py-8 lg:py-16">
            <h3
                className="text-center lg:text-left"
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '40px',
                    lineHeight: '120%',
                    color: '#FAFFD6',
                }}
            >
                <span style={{ color: '#D8F602' }}>{phaseNumber}: </span>
                {phaseName}
            </h3>
        </div>
        <div className="hidden lg:flex relative flex-col items-center box-border" style={{ width: '192px', height: '344px' }}>
            <div className="absolute" style={{ width: '2px', height: '58px', backgroundColor: '#888888', top: 0, zIndex: 0 }} />
            <div className="absolute" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#D8F602', top: '74px', zIndex: 10 }} />
            <div className="absolute" style={{ width: '2px', height: 'calc(100% - 105px)', backgroundColor: '#888888', top: '105px', zIndex: 0 }} />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start box-border w-full lg:w-[560px] h-auto lg:h-[344px] py-8 lg:py-16 gap-6">
            <div className="text-center lg:text-left text-[#FAFFD6] font-bold"><span className="text-[#D8F602]">Role:</span> {role}</div>
            <div className="text-center lg:text-left text-[#FAFFD6] font-bold"><span className="text-[#D8F602]">Focus:</span> {focus}</div>
            <div className="text-center lg:text-left text-[#FAFFD6] font-bold"><span className="text-[#D8F602]">The Project:</span> {project}</div>
        </div>
    </div>
);

const Evolution = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    return (
        <section className="flex flex-col items-center box-border w-full bg-[#181818] py-16 px-4 lg:py-28 lg:px-16 gap-16 lg:gap-28">
            <div className="flex flex-col items-center w-full max-w-[1440px] gap-16 lg:gap-28">
                <div className="flex flex-col items-center gap-6 w-full max-w-[768px]">
                    <h2 style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '120%', textAlign: 'center', color: '#FAFFD6' }}>
                        Your 6-Month Evolution
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center pt-4 gap-6">
                        <button
                            onClick={() => setIsAppModalOpen(true)}
                            className="flex items-center justify-center box-border hover:opacity-90 transition-opacity cursor-pointer"
                            style={{ width: '300px', height: '54px', padding: '12px 24px', gap: '8px', backgroundColor: '#D8F602', borderRadius: '4px 20px 4px 4px' }}
                        >
                            <div style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full text-[#181818]" /></div>
                            <span style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 900, fontSize: '16px', lineHeight: '150%', color: '#181818' }}>Apply for the Residency</span>
                        </button>
                        <button
                            onClick={() => setIsBrochureModalOpen(true)}
                            className="flex items-center justify-center box-border hover:bg-white/5 transition-colors cursor-pointer"
                            style={{ width: '263px', height: '54px', padding: '12px 24px', gap: '8px', backgroundColor: 'transparent', borderRadius: '4px 20px 4px 4px', border: '1px solid #FAFFD6' }}
                        >
                            <div style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full text-[#D8F602]" /></div>
                            <span style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 900, fontSize: '16px', lineHeight: '150%', color: '#EAF0BD' }}>Download Brochure</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full max-w-[1312px] mt-16 lg:mt-[112px]">
                    <TimelineRow phaseNumber="Phase 1" phaseName="Fundamentals" role="Data Analyst" focus="SQL and Python" project="Data Analysis Project" />
                    <TimelineRow phaseNumber="Phase 2" phaseName="Advanced" role="Data Engineer" focus="Spark and Kafka" project="Streaming Pipeline" isLast={true} />
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
            <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
        </section>
    );
};

const BoxOfProof = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
        <section className="w-full bg-[#D8F602] flex justify-center py-28 px-4 md:px-16 box-border">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">
                <div className="w-full max-w-[768px] flex flex-col items-center gap-6 text-center">
                    <h2 className="text-[#181818] font-bold text-center leading-[120%]" style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(32px, 5vw, 50px)" }}>Box of Proof</h2>
                </div>
                <div className="w-full flex flex-col items-center gap-12">
                    <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center">
                        <button onClick={() => setIsAppModalOpen(true)} className="w-full md:w-[300px] h-[54px] bg-[#181818] border border-[#181818] rounded-[4px] md:rounded-tr-[20px] shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                            <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
                            <span className="font-black text-base text-[#D8F602] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Apply for the Residency</span>
                        </button>
                    </div>
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
};

const WhoIsThisFor = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
        <section className="flex flex-col items-center box-border w-full bg-[#181818] py-16 px-4 lg:py-28 lg:px-16 gap-20">
            <div className="flex flex-col items-center w-full max-w-[1440px]">
                <h2 className="text-center m-0 w-full max-w-[768px] mb-6" style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '120%', color: '#EAF0BD' }}>Who Is This For?</h2>
                <div className="mt-[80px]">
                    <button
                        onClick={() => setIsAppModalOpen(true)}
                        className="flex items-center justify-center gap-[8px] border border-[#EAF0BD] bg-transparent hover:bg-[#EAF0BD]/10 transition-colors box-border cursor-pointer"
                        style={{ width: '280px', height: '54px', padding: '12px 24px', borderRadius: '4px 20px 4px 4px' }}
                    >
                        <div style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full text-[#D7F601]" /></div>
                        <span className="font-black text-[16px] leading-[150%] whitespace-nowrap" style={{ fontFamily: 'var(--font-orbitron), sans-serif', color: '#EAF0BD' }}>Apply for Aestr Alpha</span>
                    </button>
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
};

const ToolsSection = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
        <section className="flex justify-center items-center overflow-hidden w-full py-16 px-4 lg:py-28 lg:px-16" style={{ backgroundColor: '#D7F601' }}>
            <div className="flex flex-col lg:flex-row items-center justify-between box-border w-full max-w-[1440px] gap-16 lg:gap-20">
                <h2 className="m-0 text-center lg:text-left w-full lg:w-[616px]" style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '120%', color: '#000000' }}>Tools You Will Master</h2>
                <div className="flex flex-col md:flex-row items-center pt-4 gap-6 w-full lg:w-auto">
                    <button
                        onClick={() => setIsAppModalOpen(true)}
                        className="flex items-center justify-center gap-[8px] bg-[#181818] border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                        style={{ width: '300px', height: '54px', padding: '12px 24px', borderRadius: '4px 20px 4px 4px' }}
                    >
                        <div className="flex items-center justify-center" style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full" style={{ color: '#D8F602' }} /></div>
                        <span className="font-black text-[16px] leading-[150%] text-[#D8F602] whitespace-nowrap" style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}>Apply for the Residency</span>
                    </button>
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
};

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#181818] selection:bg-[#D2F628] selection:text-black">
            <Navbar />
            <Hero />
            <WhyThisTrack />
            <Evolution />
            <BoxOfProof />
            <WhoIsThisFor />
            <ToolsSection />
            <Footer />
        </div>
    );
}
