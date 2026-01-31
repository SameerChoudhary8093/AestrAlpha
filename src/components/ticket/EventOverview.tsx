"use client";

import React from 'react';
import { Shield, Cpu, Rocket, Users, Network, CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const EventOverview = () => {
    const features = [
        {
            title: "24-Hour Cybrathon",
            description: "A high-intensity hackathon where developers build the future in real-time.",
            icon: <Shield className="w-6 h-6 text-[#181818]" />,
            tag: "Hackathon"
        },
        {
            title: "5 Skill Workshops",
            description: "Master Robotics, 3D Printing, Gen AI, Web3, and App Dev with industry veterans.",
            icon: <Cpu className="w-6 h-6 text-[#181818]" />,
            tag: "Learning"
        },
        {
            title: "50+ Startups Gathering",
            description: "A massive showcase of emerging startups disrupting the tech landscape.",
            icon: <Rocket className="w-6 h-6 text-[#181818]" />,
            tag: "Exhibition"
        },
        {
            title: "Panel Discussions",
            description: "Thought-provoking sessions featuring startup founders and tech leaders.",
            icon: <Users className="w-6 h-6 text-[#181818]" />,
            tag: "Insight"
        },
        {
            title: "Innovator Networking",
            description: "Connect with like-minded creators, investors, and industry pioneers.",
            icon: <Network className="w-6 h-6 text-[#181818]" />,
            tag: "Community"
        }
    ];

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
        <section className="bg-[#111111] py-20 px-6 font-sans text-[#AFADAA] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content Area */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-[#EAF0BD] text-sm font-bold tracking-[0.3em] uppercase mb-4 font-orbitron">
                                The Main Event
                            </h2>
                            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight font-orbitron">
                                What’s Happening at <span className="text-[#D7F601]">AI Summit 2026?</span>
                            </h1>
                            <p className="mt-6 text-lg text-[#B8B5AD] max-w-xl">
                                A multi-track technology odyssey designed for the next generation of builders.
                                Experience innovation across the 3rd and 4th floors.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerContainer} className="space-y-4">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-center gap-3 group"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#D7F601] opacity-70 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-white font-medium text-lg tracking-wide">{item.title}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const agendaSection = document.getElementById('agenda');
                                if (agendaSection) {
                                    agendaSection.scrollIntoView({ behavior: 'smooth' });
                                    agendaSection.classList.add('ring-4', 'ring-[#D7F601]', 'ring-opacity-50', 'transition-all', 'duration-500');
                                    setTimeout(() => {
                                        agendaSection.classList.remove('ring-4', 'ring-[#D7F601]', 'ring-opacity-50');
                                    }, 2000);
                                }
                            }}
                            className="mt-4 px-8 py-4 bg-[#EAF0BD] text-[#181818] font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 rounded-sm font-orbitron"
                        >
                            Explore Agenda
                        </motion.button>
                    </motion.div>

                    {/* Right Grid Area */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {features.slice(0, 4).map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-[#222] p-6 rounded-lg hover:bg-[#2A2A2A] transition-colors border border-white/5 group"
                            >
                                <div className="w-12 h-12 bg-[#D7F601] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div className="text-xs font-bold text-[#D7F601] uppercase tracking-wider mb-2">
                                    {feature.tag}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2 font-orbitron">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EventOverview;
