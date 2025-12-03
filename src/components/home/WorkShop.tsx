import React from 'react';
const WorkshopHighlights: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#5b1dd6] text-white font-sans selection:bg-[#CCFF00] selection:text-[#5216E2] py-16 px-4">
      {/* --- Header Section --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#CCFF00] uppercase tracking-wide mb-6">
          Workshop Highlights
        </h1>
        <p className="text-sm md:text-base text-gray-200 mb-2 leading-relaxed">
          Join the community that’s helping students become industry-grade professionals — and turning Jaipur into a city built by its own talent.
        </p>
        <p className="text-lg md:text-xl font-bold mt-4">
          Jan 12, 2035, 9:00 AM &nbsp;|&nbsp; Conference Venue
        </p>
      </div>
      {/* --- Main Grid Content --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-50 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-16 order-2 lg:order-1">
          {/* Item 1: Community Jams */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#CCFF00] w-20 h-20">
              {/* Star Icon */}
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community Jams</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              Collaborative challenges that spark creativity, innovation, and teamwork.
            </p>
          </div>
          {/* Item 2: Hands-on Learning */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#CCFF00] w-24 h-16">
              {/* Orbit Icon */}
              <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="6" className="w-full h-full">
                <ellipse cx="50" cy="30" rx="45" ry="15" />
                <path d="M50 10 L55 25 L70 30 L55 35 L50 50 L45 35 L30 30 L45 25 Z" fill="currentColor" stroke="none"/>
                <line x1="50" y1="5" x2="50" y2="55" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Hands-on Learning</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              Real projects that turn ideas into prototypes and prototypes into portfolios.
            </p>
          </div>
        </div>
        {/* Center Column: Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
            {/* Placeholder for the denim jacket image */}
            <img
              src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1000&auto=format&fit=crop"
              alt="Participant wearing denim jacket"
              className="w-full h-full object-cover"
            />
            {/* Logo Overlay Simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center opacity-90">
                     {/* Using text to simulate the logo on the jacket */}
                    <div className="text-[#CCFF00] font-black text-6xl italic" style={{ transform: 'skew(-10deg)' }}>A</div>
                    <div className="text-[#CCFF00] font-bold text-xl mt-2 tracking-widest uppercase">AESTR</div>
                    <div className="text-[#CCFF00] font-bold text-xl tracking-widest uppercase">ALPHA</div>
                    <div className="text-[#CCFF00] text-[10px] tracking-[0.3em] uppercase mt-1">Ambassador</div>
                </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-16 order-3 lg:order-3">
          {/* Item 3: Mentorship Circles */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#CCFF00] w-24 h-16">
              {/* Ripple Icon */}
              <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
                <ellipse cx="50" cy="25" rx="45" ry="15" />
                <ellipse cx="50" cy="25" rx="30" ry="10" />
                <ellipse cx="50" cy="25" rx="15" ry="5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Mentorship Circles</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              One-on-one guidance from professionals who've built their way into the industry.
            </p>
          </div>
          {/* Item 4: Expert Speakers */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#CCFF00] w-24 h-16">
              {/* Speaker Waves Icon */}
              <svg viewBox="0 0 100 60" fill="currentColor" className="w-full h-full">
                <path d="M10 50 Q 50 10 90 20 L 85 25 Q 50 18 15 50 Z" />
                <path d="M25 50 Q 50 30 75 35 L 70 40 Q 50 38 30 50 Z" />
                <circle cx="80" cy="45" r="5" />
                <circle cx="95" cy="45" r="5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Speakers</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              Founders, innovators, and tech leaders from across India sharing actionable insights.
            </p>
          </div>
        </div>
      </div>
      {/* --- Footer Buttons --- */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20">
        {/* Primary Button */}
        <button className="bg-[#CCFF00] text-[#5216E2] hover:bg-white transition-colors duration-300 px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
             <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
          </svg>
          Know more Details
        </button>
        {/* Secondary Button */}
        <button className="bg-transparent border border-gray-400 text-[#CCFF00] hover:border-[#CCFF00] transition-colors duration-300 px-8 py-3 rounded-lg font-bold flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
             <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
          </svg>
          View Agenda
        </button>
      </div>
    </div>
  );
};
export default WorkshopHighlights;