"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Menu, X, Linkedin, Instagram, Twitter } from 'lucide-react';
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StarIcon from "@/components/icons/Star";

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

const SectionHeader = ({ title, className = "" }: { title: string, className?: string }) => (
    <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-widest mb-8 font-mono ${className} `}>
        {title}
    </h2>
);

// --- Sections ---

const Hero = () => (
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
                    DATA ENGINEERING & ARCHITECTURE
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
                    {/* Ellipse 2 (Background Blur - Reduced for Mobile) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: '-20%',
                            left: '-20%',
                            background: 'rgba(216, 246, 2, 0.1)',
                            filter: 'blur(80px)',
                            mixBlendMode: 'screen',
                            pointerEvents: 'none',
                            zIndex: -1,
                        }}
                    />

                    {/* Main Image */}
                    <div className="relative w-full h-full overflow-hidden rounded-lg border border-[rgba(234,240,189,0.3)] bg-[#EAF0BD]/5 box-border">
                        <img
                            src="/salesforce-ecosystem-residency/MainImage.svg" // Using existing image path until new one is available
                            alt="Enterprise Cloud Architect"
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
                        Master the "Brain" of the Modern Company (Snowflake/Databricks) + The Fuel of AI (Vector Pipelines).
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
                            Don't just move data. Engineer the "Truth" that Runs Decisions.
                        </p>
                        <p>
                            A 6-month immersive residency in Jaipur. Move from 'SQL Board' to 'Big Data Architect'. No spreadsheets. Heavy compute.
                        </p>
                        <p>
                            Just 6 months of building massive scale data pipelines, powering the messy reality of business data, and creating the AI context that everyone else is just talking about.
                        </p>
                    </div>
                </div>

                {/* Button Section */}
                <div className="pt-[24px]">
                    <button
                        className="flex items-center justify-center gap-[8px] border border-[#EAF0BD] bg-transparent hover:bg-[#EAF0BD]/10 transition-colors box-border"
                        style={{
                            width: '280px', // Precise width
                            height: '54px', // Precise height
                            padding: '12px 24px',
                            borderRadius: '4px 20px 4px 4px'
                        }}
                    >
                        {/* Logo / Icon */}
                        <div style={{ width: '28px', height: '29.8px', color: '#181818' }}>
                            <StarIcon className="w-full h-full text-[#D7F601]" />
                        </div>
                        {/* Button Text */}
                        <span
                            className="font-black text-[16px] leading-[150%] whitespace-nowrap"
                            style={{
                                fontFamily: 'var(--font-orbitron), sans-serif',
                                color: '#EAF0BD'
                            }}
                        >
                            Apply for Team Alpha
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Image Section (Hidden on Mobile) */}
            <div className="hidden lg:flex relative w-full lg:max-w-[616px] h-full justify-center lg:justify-end z-10 mt-12 lg:mt-0">
                {/* Ellipse 2 (Background Blur) */}
                <div
                    style={{
                        position: 'absolute',
                        width: '1436px',
                        height: '811px',
                        top: '-150px',
                        left: '-200px',
                        background: 'rgba(216, 246, 2, 0.1)',
                        filter: 'blur(154px)',
                        mixBlendMode: 'screen',
                        pointerEvents: 'none',
                        zIndex: -1,
                        transform: 'translateZ(0)'
                    }}
                />
                {/* Ellipse 1 (Background Blur) */}
                <div
                    style={{
                        position: 'absolute',
                        width: '1745px',
                        height: '715px',
                        top: '100px',
                        left: '-200px',
                        background: 'rgba(216, 246, 2, 0.1)',
                        filter: 'blur(154px)',
                        mixBlendMode: 'screen',
                        pointerEvents: 'none',
                        zIndex: -1,
                        transform: 'translateZ(0)'
                    }}
                />

                {/* Main Image */}
                <div className="relative w-full h-auto aspect-[616/576] overflow-hidden rounded-lg border border-[rgba(234,240,189,0.3)] bg-[#EAF0BD]/5 box-border">
                    <img
                        src="/salesforce-ecosystem-residency/MainImage.svg"
                        alt="Enterprise Cloud Architect"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-[#D7F601] mix-blend-overlay opacity-20"></div>
                </div>
            </div>
        </div>
    </section>
);

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
    <div
        className="flex flex-col lg:flex-row items-center lg:items-stretch box-border w-full max-w-[1312px] h-auto lg:h-[344px]"
    >
        {/* Left Column: Title */}
        <div
            className="flex flex-col justify-center items-center lg:items-start box-border w-full lg:w-[560px] h-auto lg:h-[344px] py-8 lg:py-16"
        >
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

        {/* Center Column: Divider & Circle - Hidden on Mobile */}
        <div
            className="hidden lg:flex relative flex-col items-center box-border"
            style={{
                width: '192px',
                height: '344px',
            }}
        >
            {/* Top Vertical Line */}
            <div
                className="absolute"
                style={{
                    width: '2px',
                    height: '58px', // 74px (circle top) - 16px (gap)
                    backgroundColor: '#888888',
                    top: 0,
                    zIndex: 0
                }}
            />

            {/* Circle */}
            <div
                className="absolute"
                style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: '#D8F602',
                    top: '74px', // Adjusted to align visually with the first line of text
                    zIndex: 10
                }}
            />

            {/* Bottom Vertical Line */}
            <div
                className="absolute"
                style={{
                    width: '2px',
                    height: 'calc(100% - 105px)', // 344px - (74px + 15px + 16px)
                    backgroundColor: '#888888',
                    top: '105px',
                    zIndex: 0
                }}
            />
        </div>

        {/* Right Column: Details */}
        <div
            className="flex flex-col justify-center items-center lg:items-start box-border w-full lg:w-[560px] h-auto lg:h-[344px] py-8 lg:py-16 gap-6"
        >
            <div
                className="text-center lg:text-left"
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '150%',
                    color: '#FAFFD6', // Text color
                    whiteSpace: 'pre-line'
                }}
            >
                <span className="text-[#D8F602]">Role:</span> {role}
            </div>
            <div
                className="text-center lg:text-left"
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '150%',
                    color: '#FAFFD6',
                }}
            >
                <span className="text-[#D8F602]">Focus:</span> {focus}
            </div>
            <div
                className="text-center lg:text-left"
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '150%',
                    color: '#FAFFD6',
                }}
            >
                <span className="text-[#D8F602]">The Project:</span> {project}
            </div>
        </div>
    </div>
);

const Evolution = () => (
    <section
        className="flex flex-col items-center box-border w-full bg-[#181818] py-16 px-4 lg:py-28 lg:px-16 gap-16 lg:gap-28"
    >
        <div className="flex flex-col items-center w-full max-w-[1440px] gap-16 lg:gap-28">
            {/* Header Section */}
            <div
                className="flex flex-col items-center gap-6 w-full max-w-[768px]"
            >
                <h2
                    style={{
                        fontFamily: 'var(--font-orbitron), sans-serif',
                        fontWeight: 700,
                        fontSize: '48px',
                        lineHeight: '120%',
                        textAlign: 'center',
                        color: '#FAFFD6',
                        width: '100%'
                    }}
                >
                    Your 6-Month Evolution
                </h2>

                {/* Buttons Container */}
                <div
                    className="flex flex-col md:flex-row justify-center items-center pt-4 gap-6"
                >
                    {/* Button 1 */}
                    <button
                        className="flex items-center justify-center box-border hover:opacity-90 transition-opacity"
                        style={{
                            width: '300px',
                            height: '54px',
                            padding: '12px 24px',
                            gap: '8px',
                            backgroundColor: '#D8F602',
                            borderRadius: '4px 20px 4px 4px'
                        }}
                    >
                        {/* Logo */}
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '28px', height: '29.8px' }}
                        >
                            <StarIcon className="w-full h-full text-[#181818]" />
                        </div>
                        {/* Text */}
                        <span
                            style={{
                                fontFamily: 'var(--font-orbitron), sans-serif',
                                fontWeight: 900,
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#181818',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Apply for the Residency
                        </span>
                    </button>

                    {/* Button 2 */}
                    <button
                        className="flex items-center justify-center box-border hover:bg-white/5 transition-colors"
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
                        {/* Logo */}
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '28px', height: '29.8px' }}
                        >
                            <StarIcon className="w-full h-full text-[#D8F602]" />
                        </div>
                        {/* Text */}
                        <span
                            style={{
                                fontFamily: 'var(--font-orbitron), sans-serif',
                                fontWeight: 900,
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#EAF0BD',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Download Brochure
                        </span>
                    </button>
                </div>
            </div>

            {/* Timeline Section */}
            <div
                className="flex flex-col items-center w-full max-w-[1312px] mt-16 lg:mt-[112px]"
            >
                <TimelineRow
                    phaseNumber="Phase 1"
                    phaseName={<>The Foundation<br />(Months 1-2)</>}
                    role="Python and SQL Developer"
                    focus="Advanced SQL, Window Functions, CTEs, Python for Data (Pandas/Polars), and API Extraction."
                    project="Build a robust ETL Pipeline that scrapes real-time financial data (Stocks/Crypto), cleans it, and stores it in a Database automatically every minute."
                />
                <TimelineRow
                    phaseNumber="Phase 2"
                    phaseName={<>The Warehouse<br />(Months 3-4)</>}
                    role="Data Build Engineer"
                    focus="Snowflake / Databricks, DBT (Data Build Tool), Airflow (Orchestration), Data Modeling (Star Schema)."
                    project="The 'Modern Data Stack'. Build an end-to-end data warehouse for a 'Uber-like' startup, handling ride data and surge pricing logic."
                />
                <TimelineRow
                    phaseNumber="Phase 3"
                    phaseName={<>The Intelligence<br />(Months 5-6)</>}
                    role="AI Data Architect"
                    focus="RAG Pipelines, Vector Databases (Pinecone/Weaviate), and Unstructured Data Engineering (Processing PDFs/Audio)."
                    project="Build a 'Corporate Brain' — an internal RAG tool that ingests 100+ legal documents and allows users to query them via Natural Language. Connect the data pipeline to an LLM."
                    isLast={true}
                />
            </div>
        </div>
    </section>
);

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
        {/* Logo Icon */}
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

        {/* Heading */}
        <h3
            className="font-bold text-[24px] leading-[140%] text-[#000000] mt-[16px]"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            {title}
        </h3>

        {/* Text */}
        <p
            className="font-normal text-[16px] leading-[150%] text-[#000000]"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            {text}
        </p>
    </div>
);

const WhyThisTrack = () => (
    <section className="bg-[#D7F601] w-full flex justify-center items-center overflow-hidden">
        <div
            className="max-w-[1440px] w-full flex flex-col lg:flex-row items-start justify-between box-border py-16 px-4 lg:py-28 lg:px-16 gap-10 lg:gap-20"
        >
            {/* Left Column (Sticky/Fixed content) */}
            <div className="flex flex-col w-full lg:max-w-[616px] gap-6 lg:sticky lg:top-[150px]">
                {/* Heading */}
                <h2
                    className="font-bold text-[48px] leading-[120%] text-[#000000]"
                    style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                >
                    Why This Track?
                </h2>

                {/* Subtext */}
                <p
                    className="font-normal text-[18px] leading-[150%] text-[#000000]"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    {/* Placeholder content if needed, but based on image it's just cards on right. The image doesn't show left subtext, but to keep layout I will reuse intro text or similar or just keep generic track intro. Wait, previous page kept it.
                    Image doesn't show text below "Why This Track?" heading on the left, but I'll keep the buttons.
                    Actually, let's just use the subtext from the hero or a generic relevant one. "Data is the new oil" cliché? Or "Without data engineering, AI is just a toy." */}
                    Your gateway to the backbone of modern intelligence. Without robust data pipelines, AI is hallucinatory and dashboards are empty.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    {/* Button 1 */}
                    <button
                        className="flex items-center justify-center gap-[8px] bg-[#181818] border border-[#181818] hover:opacity-90 transition-opacity box-border"
                        style={{
                            width: '300px',
                            height: '54px',
                            padding: '12px 24px',
                            borderRadius: '4px 20px 4px 4px'
                        }}
                    >
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '28px', height: '29.8px' }}
                        >
                            <StarIcon className="w-full h-full text-[#D8F602]" />
                        </div>
                        <span
                            className="font-black text-[16px] leading-[150%] text-[#D8F602] whitespace-nowrap"
                            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                        >
                            Apply for the Residency
                        </span>
                    </button>

                    {/* Button 2 */}
                    <button
                        className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:opacity-90 transition-opacity box-border"
                        style={{
                            width: '260px',
                            height: '54px',
                            padding: '12px 24px',
                            borderRadius: '4px 20px 4px 4px'
                        }}
                    >
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '28px', height: '29.8px' }}
                        >
                            <StarIcon className="w-full h-full text-[#181818]" />
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
                    </button>
                </div>
            </div>

            {/* Right Column (Scrollable Cards) */}
            <div className="flex flex-row lg:flex-col w-full lg:max-w-[616px] gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                    <InfoCard
                        title="The 'High-Stakes' Career:"
                        text="Decisions used to be made on gut feel. Now they are made on 'Truth'. You build that Truth. If the data is wrong, the company flies blind. It's a high-stress, high-impact role. And highly compensated too."
                    />
                </div>
                <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                    <InfoCard
                        title="The 'Garbage In, Garbage Out' Problem"
                        text="AI models are only as good as the data they consume. Companies are drowning in dirty, unconnected data. They pay huge premiums for Engineers who can turn that chaos into clean, usable intelligence."
                    />
                </div>
                <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                    <InfoCard
                        title="The AI Pivot"
                        text={`The future isn't just 'Chatbots'. It's RAG (Retrieval Augmented Generation). Companies need engineeres who can connect Vector DBs to LLMs. That's precisely what you'll build here.`}
                    />
                </div>
                <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                    <InfoCard
                        title="50% Higher Demand for Data Engineers than Data Scientists in 2024."
                        text={`• ₹7L - ₹18L Starting Salary Range for specialized Data Engineers.\n• 100% Backend Logic, 0% Guesswork.`}
                    />
                </div>
            </div>
        </div>
    </section>
);

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

const WhoIsThisFor = () => (
    <section
        className="flex flex-col items-center box-border w-full bg-[#181818] py-16 px-4 lg:py-28 lg:px-16 gap-20"
    >
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
                    Designed for those dedicated to Structure, Truth, and Reliability.
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
                <div
                    className="text-center w-full max-w-[768px] mb-6"
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#EAF0BD'
                    }}
                >
                    You don't need to be a 'Math Wizard' — you need to be a 'Logic Architect'. This track is for those who love order in chaos and want to support systems with high accuracy requirements.
                </div>

            </div>

            {/* Cards Container */}
            <div
                className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-12 lg:mt-[80px] w-full max-w-[1312px] gap-12 lg:gap-12"
            >
                <PersonaCard
                    title='The "Detective"'
                    desc="You love investigating root causes. When something breaks, you dig until you find the source. You care about 'Why' it broke, not just fixing it."
                />
                <PersonaCard
                    title='The Analyst'
                    desc="You know SQL and Excel, but you are tired of manual reporting. You want to automate the flow and build systems that do the work for you."
                />
                <PersonaCard
                    title='The Backend Dev'
                    desc="You want to specialise. You liked building APIs but realize that 'Data' is where the complexity (and money) is massive right now."
                />
            </div>

            {/* Apply Button (Visual match for provided image) */}
            <div className="mt-[80px]">
                <button
                    className="flex items-center justify-center gap-[8px] border border-[#EAF0BD] bg-transparent hover:bg-[#EAF0BD]/10 transition-colors box-border"
                    style={{
                        width: '280px',
                        height: '54px',
                        padding: '12px 24px',
                        borderRadius: '4px 20px 4px 4px'
                    }}
                >
                    <div style={{ width: '28px', height: '29.8px' }}>
                        <StarIcon className="w-full h-full text-[#D7F601]" />
                    </div>
                    <span
                        className="font-black text-[16px] leading-[150%] whitespace-nowrap"
                        style={{
                            fontFamily: 'var(--font-orbitron), sans-serif',
                            color: '#EAF0BD'
                        }}
                    >
                        Apply for Team Alpha
                    </span>
                </button>
            </div>
        </div>
    </section>
);


const BoxOfProof = () => {
    return (
        <section
            className="w-full bg-[#D8F602] flex justify-center py-28 px-4 md:px-16 box-border"
        >
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">

                {/* Header */}
                <div className="w-full max-w-[768px] flex flex-col items-center gap-6 text-center">
                    <h2
                        className="text-[#181818] font-bold text-center leading-[120%]"
                        style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            fontSize: "clamp(32px, 5vw, 50px)"
                        }}
                    >
                        Box of Proof
                    </h2>

                    <p
                        className="text-[#181818] font-normal text-lg leading-[150%] text-center whitespace-pre-line"
                        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                    >
                        {`We don’t give you a piece of paper. We give you a live architecture that proves your intellectual value.`}
                    </p>
                </div>

                {/* Main Content Area */}
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
                                    }}
                                >
                                    The "Million Row" Dashboard
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
                                    {`A live link to a dashboard powered by a Snowflake warehouse you managed. Processing 1M+ rows of sales data in real-time. Lightning fast. No lag. Complex query logic.`}
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
                                    {`A functional demo where a recruiter can upload a PDF and ask questions. You built the backend, the chunking, embedding, and vector search. This proves you are ready for the AI Age. Totally.`}
                                </p>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="w-full max-w-[610px] aspect-square md:h-[540px] md:aspect-auto rounded-2xl overflow-hidden bg-[#E5E5E5] shrink-0">
                            <Image
                                src="/ImmersiveWorkshop/CenterImage.svg" // Placeholder, user will update
                                alt="Graduate Info"
                                width={610}
                                height={540}
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
                                    {`A hosted docs site (automatic via dbt) showing the lineage of your data—where it comes from, how it transforms. This proves you write Clean, Reliable, Enterprise-Grade code. Not hacking projects.`}
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
                                    }}
                                >
                                    The "Optimizer" Case Study
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
                                    {`A technical blog post where you explain how you cut query costs by 70% by optimizing table partitions and clustering keys. This proves you understand 'Scale' and 'Cost'.`}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center">
                        {/* Button 1: Github */}
                        <button
                            className="w-full md:w-[200px] h-[48px] bg-transparent border border-[#000000] rounded-[4px] shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors"
                        >
                            <span className="font-bold text-base text-[#000000] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                                Github
                            </span>
                        </button>

                        {/* Button 2: Docs > */}
                        <button
                            className="w-full md:w-[200px] h-[48px] bg-transparent border border-[#000000] rounded-[4px] shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors"
                        >
                            <span className="font-bold text-base text-[#000000] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                                Docs &gt;
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ToolsSection = () => (
    <section
        className="flex justify-center items-center overflow-hidden w-full py-16 px-4 lg:py-28 lg:px-16"
        style={{
            backgroundColor: '#D7F601',
        }}
    >
        <div
            className="flex flex-col lg:flex-row items-center justify-between box-border w-full max-w-[1440px] gap-16 lg:gap-20"
        >
            {/* Left Column: Heading & Buttons */}
            <div
                className="flex flex-col items-center lg:items-start w-full lg:w-[616px] gap-6"
            >
                {/* Heading */}
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

                {/* Buttons Container */}
                <div
                    className="flex flex-col md:flex-row items-center pt-4 gap-6 w-full lg:w-auto"
                >
                    {/* Button 1: Apply (Matching BoxOfProof Apply Button) */}
                    <button
                        className="flex items-center justify-center gap-[8px] bg-[#181818] border border-[#181818] hover:opacity-90 transition-opacity box-border"
                        style={{
                            width: '300px',
                            height: '54px',
                            padding: '12px 24px',
                            borderRadius: '4px 20px 4px 4px'
                        }}
                    >
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '28px', height: '29.8px' }}
                        >
                            <StarIcon className="w-full h-full text-[#D8F602]" />
                        </div>
                        <span
                            className="font-black text-[16px] leading-[150%] text-[#D8F602] whitespace-nowrap"
                            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                        >
                            Apply for the Residency
                        </span>
                    </button>

                    {/* Button 2: Talk to Counselor (Matching BoxOfProof Talk Button) */}
                    <button
                        className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:bg-[#181818]/5 transition-colors box-border"
                        style={{
                            width: '260px',
                            height: '54px',
                            padding: '12px 24px',
                            borderRadius: '4px 20px 4px 4px'
                        }}
                    >
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '28px', height: '29.8px' }}
                        >
                            <StarIcon className="w-full h-full text-[#181818]" />
                        </div>
                        <span
                            className="font-black text-[16px] leading-[150%] text-[#181818] whitespace-nowrap"
                            style={{
                                fontFamily: 'var(--font-orbitron), sans-serif',
                                width: '176px', // Matching specific width from earlier
                                height: '24px'
                            }}
                        >
                            Talk to a Counselor
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Column: Tools List */}
            <div
                className="flex flex-col w-full lg:w-[616px] gap-2 lg:gap-2"
            >
                {[
                    ['Snowflake', 'Databricks'],
                    ['Python', 'SQL (Adv)'],
                    ['Apache Airflow', 'Pinecone (Vector DB)'],
                    ['dbt (Data Build Tool)', 'Spark']
                ].map((pair, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-col md:flex-row w-full lg:w-[616px] h-auto gap-2"
                    >
                        {pair.map((tool, toolIndex) => (
                            <div
                                key={toolIndex}
                                className="flex items-center justify-center border border-[#181818] rounded-[8px] w-full md:w-[304px] h-[52px] bg-transparent p-[14px]"
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
            </div>
        </div>
    </section>
);

// --- Main Page Component ---

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
