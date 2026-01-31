"use client";

import React from 'react';
import { Linkedin, Bot, Cpu, Box, Share2, Users, Presentation, Rocket } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- Types ---
interface Workshop {
    id: number;
    title: string;
    topic: string;
    speaker: string;
    linkedin: string;
    focusAreas: string[];
    icon: React.ReactNode;
}

// --- Data ---
const workshops: Workshop[] = [
    {
        id: 1,
        title: "Robotics Workshop",
        topic: "Robotics & Automation",
        speaker: "Kripal Singh",
        linkedin: "https://www.linkedin.com/in/kripalsingh---/",
        focusAreas: ["Basics of robotics", "Sensors & actuators", "Real-world applications"],
        icon: <Bot size={48} className="text-[#D7F601]" />,
    },
    {
        id: 2,
        title: "Generative AI Workshop",
        topic: "Gen AI & Modern Tools",
        speaker: "Rahul Gupta",
        linkedin: "https://www.linkedin.com/in/rahulguptatime/",
        focusAreas: ["Generative models", "Prompt engineering", "Business applications"],
        icon: <Cpu size={48} className="text-[#D7F601]" />,
    },
    {
        id: 3,
        title: "3D Printing Workshop",
        topic: "3D Printing & Prototyping",
        speaker: "To Be Updated",
        linkedin: "#",
        focusAreas: ["Printing mechanics", "Design workflow", "Industry use-cases"],
        icon: <Box size={48} className="text-[#D7F601]" />,
    },
    {
        id: 4,
        title: "Web3 Workshop",
        topic: "Blockchain & Web3",
        speaker: "To Be Updated",
        linkedin: "#",
        focusAreas: ["Web3 fundamentals", "Smart contracts", "dApps future", "Blockchain use cases"],
        icon: <Share2 size={48} className="text-[#D7F601]" />,
    },
];

// --- Components ---

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="group relative bg-[#303236] rounded-[2rem] p-8 pt-12 border border-[#383838] transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-visible"
        >
            {/* Floating 3D Icon Effect */}
            <div className="absolute -top-10 left-8 bg-[#181818] p-5 rounded-2xl border border-[#D7F601]/30 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-2">
                {workshop.icon}
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold text-white mb-1 leading-tight uppercase tracking-tighter font-orbitron">
                    {workshop.title}
                </h3>
                <p className="text-[#D7F601] font-medium text-sm mb-4">{workshop.topic}</p>

                <div className="mb-6">
                    <p className="text-[#C9C6C2] text-xs uppercase tracking-widest mb-1">Conducted By</p>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{workshop.speaker}</span>
                        {workshop.speaker !== "To Be Updated" && (
                            <a href={workshop.linkedin} target="_blank" rel="noreferrer" className="text-[#AFADAA] hover:text-[#D7F601] transition-colors">
                                <Linkedin size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4">
                    <p className="text-[#AFADAA] text-xs font-bold uppercase">Focus Areas:</p>
                    <ul className="space-y-1">
                        {workshop.focusAreas.map((item, idx) => (
                            <li key={idx} className="text-[#C9C6C2] text-sm flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#D7F601] rounded-full"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
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

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <section id="workshops" className="bg-[#181818] py-20 px-6 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Workshops Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <h2 className="text-[#D7F601] text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter font-orbitron">
                        Parallel Hands-On <br /> Workshops
                    </h2>
                    <p className="text-[#C9C6C2] text-xl max-w-2xl leading-relaxed">
                        Each workshop runs alongside the <span className="text-white font-bold italic underline decoration-[#D7F601]">Cyberthon</span> — designed to provide hands-on training in high-demand tech areas.
                    </p>
                </motion.div>

                {/* Workshop Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32"
                >
                    {workshops.map((ws) => (
                        <WorkshopCard key={ws.id} workshop={ws} />
                    ))}
                </motion.div>

                {/* Startup & Panel Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-[#D7F601] rounded-[3rem] p-10 md:p-16 overflow-hidden"
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
