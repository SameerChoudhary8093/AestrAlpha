"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const AgendaSnapshot: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="agenda" className="bg-[#050505] text-white py-20 px-4 flex justify-center overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="w-full max-w-[1280px]"
      >

        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-[48px] font-bold font-orbitron tracking-[0.1em] text-white">
            EVENT SCHEDULE
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#181818] p-8 md:p-12 rounded-3xl border border-white/10">

          {/* Day 1 Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="border-b border-[#D7F601] pb-4 mb-6">
              <h3 className="text-2xl font-bold font-orbitron text-[#D7F601]">Day 1 — 6 Feb</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Opening Ceremony",
                "Cybrathon Kickoff",
                "Parallel Workshops",
                "Startup Panel Discussions"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-white/90 text-lg font-roboto"
                >
                  <span className="w-2 h-2 bg-[#D7F601] rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Day 2 Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="border-b border-[#D7F601] pb-4 mb-6">
              <h3 className="text-2xl font-bold font-orbitron text-[#D7F601]">Day 2 — 7 Feb</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Cybrathon Continues",
                "Advanced Workshops",
                "Startup Pitches & Networking",
                "Closing Ceremony & Awards"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-white/90 text-lg font-roboto"
                >
                  <span className="w-2 h-2 bg-[#D7F601] rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Venue Details Section */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 bg-[#D7F601] text-black rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl"
        >

          <div className="text-left space-y-2">
            <h4 className="text-xl font-black font-orbitron uppercase tracking-widest text-[#181818] mb-2 opacity-80">
              Venue Details
            </h4>
            <div className="text-2xl md:text-3xl font-bold font-sans flex flex-col gap-1">
              <span>Library Building — 3rd & 4th Floor</span>
              <span className="text-xl font-medium opacity-90">SGVU Campus, Jaipur</span>
            </div>
          </div>

          <div className="text-right md:text-right text-black font-bold text-lg md:text-xl max-w-md leading-relaxed">
            <div className="mb-2 text-3xl font-black font-orbitron">
              6-7 February 2026
            </div>
            <p className="opacity-80 text-base">
              Multiple halls will host the Cybrathon and all workshops simultaneously.
            </p>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default AgendaSnapshot;