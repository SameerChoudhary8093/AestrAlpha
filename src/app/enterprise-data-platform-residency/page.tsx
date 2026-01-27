"use client";

import React, { useState, useRef, useEffect } from 'react';
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
                        Cloud Architect<br />
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
                            Master the "Brain" of the Modern Company (Snowflake/<br />Databricks) + The Fuel of AI (Vector Pipelines)
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
                                Don’t Just Analyze Data. Engineer the "Truth" That Powers Decisions.
                            </p>
                            <p>
                                A 6-month immersive residency in Jaipur. Move from "SQL Basics" to "Big Data Architect." No spreadsheets. No toy datasets.
                            </p>
                            <p>
                                Just 6 months of building massive-scale data pipelines, cleaning the messy reality of business data, and feeding the AI models that everyone else is just talking about.
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
    text: React.ReactNode;
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
            className="font-normal text-[16px] leading-[150%] text-[#000000] whitespace-pre-line"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            {text}
        </p>
    </div>
);

const WhyThisTrack = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        // Only enable auto-scroll if content is scrollable (e.g., mobile view)
        if (scrollWidth <= clientWidth) return;

        let scrollPos = 0;
        const cardWidth = clientWidth * 0.85; // Approximate width based on 85vw
        const gap = 16; // 1rem gap
        const scrollItemWidth = cardWidth + gap;

        const intervalId = setInterval(() => {
            if (!scrollContainer) return;

            // Calculate next scroll position
            const currentScroll = scrollContainer.scrollLeft;
            const maxScroll = scrollWidth - clientWidth;

            let nextScroll = currentScroll + scrollItemWidth;

            // If we reach the end, loop back significantly or reset
            if (nextScroll >= maxScroll + (scrollItemWidth / 2)) {
                // Smooth reset to 0 might be jarring, but "infinite" loop requires cloning. 
                // Let's just scroll back to 0 smoothly.
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollTo({ left: nextScroll, behavior: 'smooth' });
            }
        }, 3000); // 3 seconds interval

        return () => clearInterval(intervalId);
    }, []);

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
                                <StarIcon className="w-full h-full" fill="#D8F602" />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] text-[#D8F602] whitespace-nowrap"
                                style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                            >
                                Apply for the Residency
                            </span>
                        </button>
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in The Enterprise Cloud Architect Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                            style={{
                                width: '340px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px',
                                textDecoration: 'none'
                            }}
                        >
                            <div className="flex-shrink-0 flex items-center justify-center relative z-10" style={{ width: '28px', height: '29.8px' }}>
                                <StarIcon className="w-full h-full" fill="#181818" />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] text-[#181818] whitespace-nowrap"
                                style={{
                                    fontFamily: 'var(--font-orbitron), sans-serif',
                                }}
                            >
                                Talk to a Counselor (Free 1:1)
                            </span>
                        </Link>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    className="flex flex-row lg:flex-col w-full lg:max-w-[616px] gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0"
                >
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title='The "High-Stakes" Career'
                            text="Data Scientists build models, but Data Engineers build the pipes that feed them. Without you, the AI starves. It is arguably the most stable, high-demand role in the tech ecosystem today."
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title='The "Garbage In, Garbage Out" Problem'
                            text="AI models are only as good as the data they consume. Companies are drowning in dirty, unstructured data. They pay huge premiums for engineers who can turn that chaos into clean, usable intelligence."
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title='The AI Pivot'
                            text={`The future isn't just "Chatbots." It's RAG (Retrieval-Augmented Generation). Companies need engineers who can convert millions of PDF documents into Vector Embeddings so their AI can actually "read" their internal files.`}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title=""
                            text={
                                <>
                                    <b>• 50%</b> Higher demand for Data Engineers than Data Scientists in 2025.
                                    <br />
                                    <b>• ₹7L - ₹18L</b> Starting Salary Range for specialized Data Engineers.
                                    <br />
                                    <b>• 100%</b> Backend Logic, <b>0%</b> Guesswork.
                                </>
                            }
                        />
                    </div>
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
                <span style={{ color: '#D7F601' }}>{phaseNumber}: </span>
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
            <div className="flex flex-col items-center w-full max-w-[1440px]">
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
                            style={{
                                width: '263px',
                                height: '54px',
                                padding: '12px 24px',
                                gap: '8px',
                                backgroundColor: 'transparent',
                                borderRadius: '4px 20px 4px 4px',
                                border: '1px solid #FAFFD6'
                            }}
                        >
                            <div style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full" style={{ color: '#D8F602' }} /></div>
                            <span className="whitespace-nowrap" style={{ fontFamily: 'var(--font-orbitron), sans-serif', fontWeight: 900, fontSize: '16px', lineHeight: '150%', color: '#EAF0BD' }}>Download Brochure</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full max-w-[1312px] mt-[112px]">
                    <TimelineRow
                        phaseNumber="Phase 1"
                        phaseName={<>The Foundation <br />(Months 1-2)</>}
                        role="Python & SQL Developer"
                        focus="Advanced SQL (Window Functions, CTEs), Python for Data (Pandas/Polars), and API Extraction."
                        project="Build a robust 'ETL Pipeline' that scrapes real-time financial data (Crypto/Stocks), cleans it, and stores it in a database automatically every minute."
                    />
                    <TimelineRow
                        phaseNumber="Phase 2"
                        phaseName={<>The Warehouse <br />(Months 3-4)</>}
                        role="Analytics Engineer"
                        focus="Snowflake & Databricks (The Industry Standards), dbt (Data Build Tool), and Airflow (Orchestration)."
                        project="The 'Modern Data Stack.' Architect a warehouse that processes raw data into 'Gold Standard' tables ready for CEO-level dashboards."
                    />
                    <TimelineRow
                        phaseNumber="Phase 3"
                        phaseName={<>The Intelligence <br />(Months 5-6)</>}
                        role="AI Data Architect"
                        focus="RAG Pipelines, Vector Databases (Pinecone/Weaviate), and Unstructured Data Engineering (processing audio/images/PDFs at scale)."
                        project="Build a 'Corporate Brain'—a system that ingests 500+ legal contracts and allows users to query them using Natural Language, powered by the pipeline you built."
                        isLast={true}
                    />
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
                    <p
                        className="text-center whitespace-pre-line"
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '150%',
                            color: '#000000',
                            maxWidth: '768px'
                        }}
                    >
                        We don’t give you a piece of paper. We give you a live architecture that processes millions of <br /> rows.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center gap-12">
                    {/* 3-Column Layout Container */}
                    <div className="w-full flex flex-col lg:flex-row justify-center gap-12 lg:gap-12 flex-wrap items-center lg:items-center">

                        {/* Left Column */}
                        <div className="w-full max-w-[303px] flex flex-col gap-16 lg:gap-16">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center gap-6">
                                <div
                                    className="flex items-center justify-center rounded-none"
                                    style={{
                                        width: '57.53px',
                                        height: '61.23px',
                                        color: '#5B1DD6',
                                    }}
                                >
                                    <StarIcon className="w-full h-full" />
                                </div>
                                <p
                                    className="text-center m-0"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        lineHeight: '140%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        // height: '68px', // Ensuring height implies layout space
                                    }}
                                >
                                    The "Million-Row" Dashboard
                                </p>
                                <p
                                    className="text-center whitespace-pre-line"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '150%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        height: 'auto'
                                    }}
                                >
                                    {`A live link to a dashboard powered by a Snowflake instance you manage. It visualizes over 1 million rows of data in real-time, proving you understand partitioning, clustering, and query optimization.`}
                                </p>

                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col items-center gap-6">
                                <div
                                    className="flex items-center justify-center rounded-none"
                                    style={{
                                        width: '57.53px',
                                        height: '61.23px',
                                        color: '#5B1DD6',
                                    }}
                                >
                                    <StarIcon className="w-full h-full" />
                                </div>
                                <p
                                    className="text-center m-0"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        lineHeight: '140%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        // height: '68px',
                                    }}
                                >
                                    The "dbt" Documentation Site
                                </p>
                                <p
                                    className="text-center whitespace-pre-line"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '150%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        height: 'auto'
                                    }}
                                >
                                    {`A hosted documentation site generated by your dbt project. It shows the lineage of your data—how it moves from Source A to Table B. This demonstrates "Data Governance," a massive keyword for hiring managers.`}
                                </p>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="w-full max-w-[610px] aspect-square md:h-[688px] md:aspect-auto rounded-2xl overflow-hidden bg-[#E5E5E5] shrink-0">
                            <Image
                                src="/ImmersiveWorkshop/CenterImage.svg"
                                alt="Graduate Info"
                                width={610}
                                height={688}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                        </div>

                        {/* Right Column */}
                        <div className="w-full max-w-[303px] flex flex-col gap-16 lg:gap-16">
                            {/* Item 3 */}
                            <div className="flex flex-col items-center gap-6">
                                <div
                                    className="flex items-center justify-center rounded-none"
                                    style={{
                                        width: '57.53px',
                                        height: '61.23px',
                                        color: '#5B1DD6',
                                    }}
                                >
                                    <StarIcon className="w-full h-full" />
                                </div>
                                <p
                                    className="text-center m-0"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        lineHeight: '140%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        // height: '68px',
                                    }}
                                >
                                    The "Corporate Brain" (RAG System)
                                </p>
                                <p
                                    className="text-center whitespace-pre-line"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '150%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        height: 'auto'
                                    }}
                                >
                                    {`A functional demo where a recruiter can upload a PDF and ask questions. Your backend handles the chunking, embedding, and retrieval. This proves you are ready for the "AI Age" of data`}
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col items-center gap-6">
                                <div
                                    className="flex items-center justify-center rounded-none"
                                    style={{
                                        width: '57.53px',
                                        height: '61.23px',
                                        color: '#5B1DD6',
                                    }}
                                >
                                    <StarIcon className="w-full h-full" />
                                </div>
                                <p
                                    className="text-center m-0"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        lineHeight: '140%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        // height: '68px',
                                    }}
                                >
                                    The "Optimization" Case Study
                                </p>
                                <p
                                    className="text-center whitespace-pre-line"
                                    style={{
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '150%',
                                        color: '#000000',
                                        width: '100%',
                                        maxWidth: '240px',
                                        height: 'auto'
                                    }}
                                >
                                    {`A technical blog post titled "How I cut query latency by 50%." You detail how you rewrote bad SQL queries and optimized warehouse sizing to save money and time.
`}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center">
                        <button onClick={() => setIsAppModalOpen(true)} className="w-full md:w-[300px] h-[54px] bg-[#181818] border border-[#181818] rounded-[4px] md:rounded-tr-[20px] shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                            <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
                            <span className="font-black text-base text-[#D8F602] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Apply for the Residency</span>
                        </button>

                        {/* Button 2: Talk to Counselor */}
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in The Enterprise Cloud Architect Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                            style={{
                                width: '340px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px',
                                textDecoration: 'none'
                            }}
                        >
                            <div className="flex-shrink-0 flex items-center justify-center relative z-10" style={{ width: '28px', height: '29.8px' }}>
                                <StarIcon className="w-full h-full" fill="#181818" />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] text-[#181818] whitespace-nowrap"
                                style={{
                                    fontFamily: 'var(--font-orbitron), sans-serif',
                                }}
                            >
                                Talk to a Counselor (Free 1:1)
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
        </section>
    );
};

const PersonaCard = ({
    title,
    desc,
    logoColor = '#D7F601'
}: {
    title: string;
    desc: string;
    logoColor?: string;
}) => (
    <div
        className="flex flex-col items-center gap-6 w-full max-w-[405px]"
    >
        {/* Logo */}
        <div
            className="flex items-center justify-center"
            style={{
                width: '57.53px',
                height: '61.23px',
                color: logoColor
            }}
        >
            <StarIcon className="w-full h-full" />
        </div>

        {/* Heading */}
        <h3
            className="m-0 text-center"
            style={{
                width: '100%',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '130%',
                color: '#EAF0BD'
            }}
        >
            {title}
        </h3>

        {/* Description */}
        <p
            className="m-0 text-center"
            style={{
                width: '100%',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#EAF0BD'
            }}
        >
            {desc}
        </p>
    </div>
);

const WhoIsThisFor = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
        <section className="flex flex-col items-center box-border w-full bg-[#181818] py-16 px-4 lg:py-28 lg:px-16 gap-20">
            <div className="flex flex-col items-center w-full max-w-[1440px]">
                {/* Header Section */}
                <div className="flex flex-col items-center">
                    {/* Tagline */}
                    <div
                        className="text-center w-full max-w-[477px] mb-4"
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '150%',
                            color: '#EAF0BD',
                        }}
                    >
                        Designed for Today. Relevant for Tomorrow. Built with the Industry.
                    </div>

                    {/* Main Heading */}
                    <h2
                        className="text-center m-0 w-full max-w-[768px] mb-6"
                        style={{
                            fontFamily: 'var(--font-orbitron), sans-serif',
                            fontWeight: 700,
                            fontSize: '48px',
                            lineHeight: '120%',
                            color: '#EAF0BD',
                        }}
                    >
                        Who Is This For?
                    </h2>

                    {/* Subtext */}
                    <p
                        className="text-center m-0 w-full max-w-[768px]"
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '150%',
                            color: '#EAF0BD'
                        }}
                    >
                        Aestr Alpha is built like a modern Tech Ashram — structured, immersive, and designed for deep transformation.You check in, lock in, and spend six months building real systems with real accountability.
                    </p>
                </div>

                {/* Cards Container */}
                <div
                    className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-12 lg:mt-[80px] w-full max-w-[1312px] gap-12 lg:gap-12"
                >
                    <PersonaCard
                        title='The "Detective"'
                        desc="You love finding patterns and solving logical puzzles. You get satisfaction from making things efficient."
                    />
                    <PersonaCard
                        title='The Analyst'
                        desc="You know SQL and PowerBI, but you are tired of just reporting the news. You want to make the news by owning the infrastructure."
                    />
                    <PersonaCard
                        title='The Backend Dev'
                        desc="You want to specialize in a field where the 'Data' is the product, moving away from generic web development."
                    />
                </div>

                <div className="mt-[80px]">
                    <button
                        onClick={() => setIsAppModalOpen(true)}
                        className="flex items-center justify-center gap-[8px] border border-[#EAF0BD] bg-transparent hover:bg-[#EAF0BD]/10 transition-colors box-border cursor-pointer"
                        style={{ width: '280px', height: '54px', padding: '12px 24px', borderRadius: '4px 20px 4px 4px' }}
                    >
                        <div style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full text-[#D7F601]" /></div>
                        <span className="font-black text-[16px] leading-[150%] whitespace-nowrap" style={{ fontFamily: 'var(--font-orbitron), sans-serif', color: '#EAF0BD' }}>Apply for Residency</span>
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
        <section
            className="flex justify-center items-center overflow-hidden w-full"
            style={{
                backgroundColor: '#D7F601',
                paddingTop: '112px',
                paddingBottom: '112px',
                paddingLeft: '64px',
                paddingRight: '64px'
            }}
        >
            <div className="flex flex-col lg:flex-row items-start justify-between box-border w-full max-w-[1440px] gap-[80px]">
                {/* Left Column: Heading & Buttons */}
                <div className="flex flex-col w-full lg:w-[616px] gap-[24px]">
                    <h2
                        className="m-0 text-center lg:text-left w-full lg:w-[616px]"
                        style={{
                            fontFamily: 'var(--font-orbitron), sans-serif',
                            fontWeight: 700,
                            fontSize: '48px',
                            lineHeight: '120%',
                            color: '#000000'
                        }}
                    >
                        Tools You Will Master
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
                        <button
                            onClick={() => setIsAppModalOpen(true)}
                            className="flex items-center justify-center gap-[8px] bg-[#181818] border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                            style={{ width: '300px', height: '54px', padding: '12px 24px', borderRadius: '4px 20px 4px 4px' }}
                        >
                            <div className="flex items-center justify-center" style={{ width: '28px', height: '29.8px' }}><StarIcon className="w-full h-full" style={{ color: '#D8F602' }} /></div>
                            <span className="font-black text-[16px] leading-[150%] text-[#D8F602] whitespace-nowrap" style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}>Apply for the Residency</span>
                        </button>

                        {/* Button 2: Talk to Counselor */}
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in The Enterprise Cloud Architect Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:opacity-90 transition-opacity box-border cursor-pointer"
                            style={{
                                width: '340px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px',
                                textDecoration: 'none'
                            }}
                        >
                            <div className="flex-shrink-0 flex items-center justify-center relative z-10" style={{ width: '28px', height: '29.8px' }}>
                                <StarIcon className="w-full h-full" fill="#181818" />
                            </div>
                            <span
                                className="font-black text-[16px] leading-[150%] text-[#181818] whitespace-nowrap"
                                style={{
                                    fontFamily: 'var(--font-orbitron), sans-serif',
                                }}
                            >
                                Talk to a Counselor (Free 1:1)
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Tools List */}
                <div className="flex flex-col w-full lg:w-[616px] gap-2 lg:gap-2">
                    {[
                        ['Snowflake', 'Databricks'],
                        ['Python (Pandas/Polars)', 'SQL • dbt (Data Build Tool)'],
                        ['Apache Airflow', 'Pinecone (Vector DB)'],
                        [' AWS Glue']
                    ].map((pair, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-col md:flex-row w-full lg:w-[616px] h-auto gap-2"
                        >
                            {pair.map((tool, toolIndex) => (
                                <div
                                    key={toolIndex}
                                    className={`flex items-center justify-center border border-[#181818] rounded-[8px] w-full ${pair.length === 1 ? 'md:w-full' : 'md:w-[304px]'} h-[52px] bg-transparent p-[14px]`}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '150%',
                                            color: '#181818',
                                            textAlign: 'center',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {tool}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                    {/* 4th Empty Row as requested */}
                    <div style={{ width: '616px', height: '52px' }} />
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
