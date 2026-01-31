"use client";

import React from 'react';
import { Rocket, Users, Presentation, Share2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// --- Types ---
interface Workshop {
    id: number;
    title: string;
    image: string;
    focusAreas: string[];
}

// --- Data ---
const workshops: Workshop[] = [
    {
        id: 2,
        title: "Generative AI Workshop",
        image: "/Workshop/Cards/gen-ai.png",
        focusAreas: ["Generative models", "Prompt engineering", "Business applications"],
    },
    {
        id: 3,
        title: "3D Printing Workshop",
        image: "/Workshop/Cards/3d-printing.png",
        focusAreas: ["Printing mechanics", "Design workflow", "Industry use-cases"],
    },
    {
        id: 4,
        title: "Web3 Workshop",
        image: "/Workshop/Cards/web3.png",
        focusAreas: ["Web3 fundamentals", "Smart contracts", "dApps future"],
    },
    {
        id: 1,
        title: "Robotics Workshop",
        image: "/Workshop/Cards/robotics.png",
        focusAreas: ["Basics of robotics", "Sensors & actuators", "Real-world applications"],
    },
];

// --- Components ---

const WorkshopCard = ({ workshop, index }: { workshop: Workshop; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 90, x: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 60,
                damping: 20
            }}
            style={{ perspective: 1000 }} // Needed for 3D rotation effect
            className="flex flex-col gap-6"
        >
            {/* Card Image Container - Auto height to fit image without gaps */}
            <div className="group relative w-full rounded-none overflow-hidden border border-[#383838] bg-[#1a1a1a] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(215,246,1,0.15)] hover:-translate-y-2 hover:scale-[1.02]">
                <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-auto object-cover transition-transform duration-700"
                />

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Focus Areas Section */}
            <div className="px-2">
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                    <p className="text-[#AFADAA] text-xs font-bold uppercase tracking-widest whitespace-nowrap">Focus Areas</p>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                    {workshop.focusAreas.map((area, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full border border-[#D7F601]/20 bg-[#D7F601]/5 text-[#C9C6C2] text-xs hover:border-[#D7F601]/50 hover:text-white transition-colors cursor-default"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const AISummitSection = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="workshops" className="bg-[#080808] py-20 px-6 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Workshops Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <h2 className="text-[#D7F601] text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter font-orbitron">
                        Parallel Hands-On Workshop
                    </h2>
                    <p className="text-[#C9C6C2] text-xl leading-relaxed">
                        Each workshop runs alongside the <span className="text-white font-bold italic underline decoration-[#D7F601]">Cybrathon</span> — designed to provide hands-on training in high-demand tech areas.
                    </p>
                </motion.div>

                {/* Workshop Cards Grid */}
                {/* Reduced gap to 8 to allow cards to be larger, but used max-w-[1400px] on container to give more room */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-32">
                    {workshops.map((ws, index) => (
                        <WorkshopCard key={ws.id} workshop={ws} index={index} />
                    ))}
                </div>

                {/* Startup & Panel Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-[#D7F601] rounded-[3rem] p-10 md:p-16 overflow-hidden max-w-7xl mx-auto"
                >
                    {/* Decorative background element */}
                    <div className="absolute right-[-10%] top-[-10%] opacity-10">
                        <Rocket size={400} className="text-black rotate-12" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-black text-[#D7F601] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                AI Summit Special
                            </span>
                            <h2 className="text-black text-5xl md:text-6xl font-black mt-6 mb-4 uppercase leading-none font-orbitron">
                                50 Startups <br /> Gathering
                            </h2>
                            <p className="text-black/80 text-lg mb-8 max-w-md font-medium">
                                A curated gathering of 50 innovative startups showcasing their ideas, products, and the future of AI.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <Presentation size={20} />, text: "Founder Panels" },
                                    { icon: <Users size={20} />, text: "Live Q&A" },
                                    { icon: <Rocket size={20} />, text: "Startup Journeys" },
                                    { icon: <Share2 size={20} />, text: "Investor Networking" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-black font-bold text-sm">
                                        <div className="bg-black/10 p-2 rounded-lg">{item.icon}</div>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black rounded-[2rem] p-8 text-white shadow-2xl">
                            <h4 className="text-[#D7F601] text-xl font-bold mb-4 uppercase font-orbitron">Panel Discussions</h4>
                            <p className="text-[#AFADAA] text-sm leading-relaxed mb-6">
                                Get exclusive insights into real startup challenges and opportunities in the tech and AI space.
                                Learn directly from industry leaders who have built scalable products.
                            </p>
                            <button
                                onClick={() => {
                                    const agendaSection = document.getElementById('agenda');
                                    if (agendaSection) {
                                        agendaSection.scrollIntoView({ behavior: 'smooth' });
                                        // Trigger highlight animation
                                        agendaSection.classList.add('ring-4', 'ring-[#D7F601]', 'ring-opacity-50', 'transition-all', 'duration-500');
                                        setTimeout(() => {
                                            agendaSection.classList.remove('ring-4', 'ring-[#D7F601]', 'ring-opacity-50');
                                        }, 2000);
                                    }
                                }}
                                className="w-full bg-[#D7F601] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 duration-200"
                            >
                                Check Schedule
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AISummitSection;
