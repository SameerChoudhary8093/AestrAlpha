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

const SectionHeader = ({ title, className = "" }: { title: string, className?: string }) => (
    <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-widest mb-8 font-mono ${className} `}>
        {title}
    </h2>
);

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
                        AI Infrastructure & Cloud Native Track
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
                        The AI<br />
                        Infrastructure &<br />
                        Cloud Native<br />
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
                                src="/home/ai-infra-Image.svg"
                                alt="AI Infrastructure"
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
                            Master the Cloud Backbone (Kubernetes) + The Future of AI Infra (LLMOps).
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
                                A 6-month immersive residency in Jaipur. Move from "Linux Beginner" to "Cloud Native Architect."
                                No textbooks. No multiple-choice quizzes. Just 6 months of building a private cloud, deploying massive AI models, and mastering the infrastructure that runs the modern internet.
                            </p>

                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="pt-[24px]">
                        <button
                            onClick={() => setIsAppModalOpen(true)}
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
                        <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
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
                            src="/home/ai-infra-Image.svg"
                            alt="AI Infrastructure"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-[#D7F601] mix-blend-overlay opacity-20"></div>
                    </div>
                </div>
            </div>
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

const Evolution = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    return (
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
                            onClick={() => setIsAppModalOpen(true)}
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
                                <StarIcon className="w-full h-full" style={{ color: '#181818' }} />
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
                            onClick={() => setIsBrochureModalOpen(true)}
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
                        <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
                        <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
                    </div>
                </div>

                {/* Timeline Section */}
                <div
                    className="flex flex-col items-center w-full max-w-[1312px] mt-16 lg:mt-[112px]"
                >
                    <TimelineRow
                        phaseNumber="Phase 1"
                        phaseName={<>The Metal<br />(Months 1-2)</>}
                        role=" Linux System Admin & Cloud Associate"
                        focus="Mastering the Command Line (Bash), Networking (VPCs, Subnets, DNS), and Core AWS Services (EC2, S3, IAM)."
                        project="Manually architect a secure, multi-tier web application network on AWS without using any automation."
                    />
                    <TimelineRow
                        phaseNumber="Phase 2"
                        phaseName={<>The Container<br />(Months 3-4)</>}
                        role="DevOps Engineer"
                        focus=" Docker (Containerization), Kubernetes (Orchestration), and Terraform (Infrastructure as Code).s"
                        project="The 'One-Click Deploy.' Write a script that spins up a fully functional server cluster from scratch in under 3 minutes."
                    />
                    <TimelineRow
                        phaseNumber="Phase 3"
                        phaseName={<>The Intelligence<br />(Months 5-6)</>}
                        role="LLMOps & AI Architect"
                        focus="Deploying Open Source LLMs (Llama-3/Mistral) on private GPUs, Vector Databases (Pinecone/Weaviate), and Auto-scaling based on traffic."
                        project="Build and host a private 'ChatGPT' for a specific industry that runs entirely on your own infrastructure."
                        isLast={true}
                    />
                </div>
            </div>
        </section >
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

const WhyThisTrack = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const scrollContainer = scrollContainerRef.current;
            if (scrollContainer) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
                if (scrollWidth <= clientWidth) return;

                const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;

                if (isEnd) {
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
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
                        Your gateway to the engine room of the internet. From keeping global apps alive to deploying the next generation of AI models, this track puts you in control.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                        {/* Button 1 */}
                        <button
                            onClick={() => setIsAppModalOpen(true)}
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
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in the AI Infrastructure & Cloud Native Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:opacity-90 transition-opacity box-border"
                            style={{
                                width: '340px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px',
                                textDecoration: 'none'
                            }}
                        >
                            <div
                                className="flex items-center justify-center flex-shrink-0 relative z-10"
                                style={{ width: '28px', height: '29.8px' }}
                            >
                                <StarIcon className="w-full h-full text-[#181818]" />
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
                    <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
                </div>

                {/* Right Column (Scrollable Cards) */}
                <div
                    ref={scrollContainerRef}
                    className="flex flex-row lg:flex-col w-full lg:max-w-[616px] gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0"
                >
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title="The 'Invisible Power' Career"
                            text="When ChatGPT goes down, the world panics. The people who fix it aren't 'Prompt Engineers'—they are Cloud Architects. They are the plumbers of the digital age, and they are paid handsomely to keep the lights on."
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title="The $1 Million Mistake"
                            text="One wrong configuration in the cloud can cost a company millions in minutes. Companies don't hire 'Juniors' for this; they hire people who have proven they can handle production. We give you that proof."
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title="The AI Pivot"
                            text={`AI models are heavy. They eat RAM and GPU power. The industry is desperate for engineers who know LLMOps—how to host, scale, and manage these massive AI models on their own servers (AWS/Azure) without going bankrupt.`}
                        />
                    </div>
                    <div className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center">
                        <InfoCard
                            title=""
                            text={`40% Annual Growth in Cloud & DevOps Jobs globally.
₹8L - ₹20L Starting Salary Potential for Skilled Cloud/SRE Engineers.
100% Hard Engineering, 0% Fluff.`}
                        />
                    </div>
                </div>
            </div>
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
                        Designed for the "Builder" Mindset. Built with the Industry.
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
                        Aestr Alpha is built like a modern Tech Ashram — structured, immersive, and designed for deep transformation.You check in, lock in, and spend six months building real systems with real accountability.
                    </div>

                </div>

                {/* Cards Container */}
                <div
                    className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-12 lg:mt-[80px] w-full max-w-[1312px] gap-12 lg:gap-12"
                >
                    <PersonaCard
                        title='The "Systems Thinker"'
                        desc="You love logic and structure but hate designing UI/UX. You prefer a black terminal screen over Figma."
                    />
                    <PersonaCard
                        title='The CS Engineer'
                        desc="You learned theory in college but have no idea how to actually deploy code to the internet."
                    />
                    <PersonaCard
                        title='The Upgrade Seeker'
                        desc="You work in IT Support or traditional testing and want to break into the high-paying world of Cloud & DevOps."
                    />
                </div>

                {/* Apply Button (Visual match for provided image) */}
                <div className="mt-[80px]">
                    <button
                        onClick={() => setIsAppModalOpen(true)}
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
                            Apply for Residency
                        </span>
                    </button>
                    <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
                </div>
            </div>
        </section>
    );
};


const BoxOfProof = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
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
                        {`We don’t give you a piece of paper. We give you a GitHub profile that proves you are a Senior Engineer in the making.`}
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
                                    The "Private Cloud" Repo
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
                                    {`A GitHub repository containing the complete Terraform code to spin up a bank-grade cloud infrastructure. Recruiters can view your code to see how you handle security groups, load balancers, and subnets.`}
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
                                    The "Chaos Engineering" Report
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
                                    {`A video recording where you intentionally "kill" a server in your cluster while users are active, demonstrating that your Kubernetes setup auto-heals and the system stays online. (This is the ultimate trust signal for recruiters).`}
                                </p>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="w-full max-w-[610px] aspect-square md:h-[540px] md:aspect-auto rounded-2xl overflow-hidden bg-[#E5E5E5] shrink-0">
                            <Image
                                src="/ImmersiveWorkshop/CenterImage.svg"
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
                                    The "Self-Hosted LLM" Demo
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
                                    {`A live link where users can chat with an AI model (like Llama-3) that you deployed. It proves you understand GPU allocation, latency optimization, and API wrapping—skills highly valued by AI startups.`}
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
                                    The "FinOps" Audit
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
                                    {`A technical case study on "How I optimized cloud costs." You will document how you reduced the server bill of your project by 40% using Spot Instances and auto-scaling policies.`}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center">
                        {/* Button 1: Apply */}
                        <button
                            onClick={() => setIsAppModalOpen(true)}
                            className="w-full md:w-[300px] h-[54px] bg-[#181818] border border-[#181818] rounded-[4px] md:rounded-tr-[20px] shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
                        >
                            <StarIcon style={{ width: "28px", height: "30px", color: "#D8F602" }} />
                            <span className="font-black text-base text-[#D8F602] leading-[150%]" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                                Apply for the Residency
                            </span>
                        </button>

                        {/* Button 2: Talk to Counselor */}
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in the AI Infrastructure & Cloud Native Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="w-full md:w-[340px] h-[54px] px-6 py-3 bg-transparent border border-[#181818] rounded-[4px] md:rounded-tr-[20px] flex items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors"
                        >
                            <div className="flex items-center justify-center flex-shrink-0" style={{ width: '28px', height: '29.8px' }}>
                                <StarIcon className="w-full h-full text-[#181818]" />
                            </div>
                            <span className="font-black text-[16px] text-[#181818] leading-[150%] whitespace-nowrap" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                                Talk to a Counselor (Free 1:1)
                            </span>
                        </Link>
                    </div>
                    <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />

                </div>
            </div>
        </section>
    );
};

const ToolsSection = () => {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    return (
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
                            onClick={() => setIsAppModalOpen(true)}
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
                        <Link
                            href={`https://wa.me/919828781952?text=${encodeURIComponent("Hi, I am interested in the AI Infrastructure & Cloud Native Residency at Aestr Alpha and would like to talk to a counselor.")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-[8px] bg-transparent border border-[#181818] hover:bg-[#181818]/5 transition-colors box-border"
                            style={{
                                width: '340px',
                                height: '54px',
                                padding: '12px 24px',
                                borderRadius: '4px 20px 4px 4px',
                                textDecoration: 'none'
                            }}
                        >
                            <div
                                className="flex items-center justify-center flex-shrink-0"
                                style={{ width: '28px', height: '29.8px' }}
                            >
                                <StarIcon className="w-full h-full text-[#181818]" />
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
                    <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
                </div>

                {/* Right Column: Tools List */}
                <div
                    className="flex flex-col w-full lg:w-[616px] gap-2 lg:gap-2"
                >
                    {[
                        ['AWS', 'Linux'],
                        ['Kubernetes (K8s)', 'Docker'],
                        ['Terraform • Python', 'Prometheus/Grafana'],
                        ['LangChain (Deployment)', 'Vector DBs']
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
};

// --- Main Page Component ---

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#181818] selection:bg-[#D2F628] selection:text-black">
            <Navbar />
            <Hero />
            <Evolution />
            <WhyThisTrack />
            <WhoIsThisFor />
            <BoxOfProof />
            <ToolsSection />
            <Footer />
        </div>
    );
}
