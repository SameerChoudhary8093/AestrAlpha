import React from 'react';
interface AgendaItemProps {
  time: string;
  badge?: string;
  title: string;
  description: string;
}
const AgendaItem: React.FC<AgendaItemProps> = ({ time, badge, title, description }) => {
  return (
    // Top border creates the divider lines shown in the image
    <div className="border-t border-[#CCFF00]/80 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 font-orbitron">
        {/* Left Side Content */}
        <div className="flex-1 space-y-3">
          {/* Time & Badge Row */}
          <div className="flex items-center flex-wrap gap-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              {/* Clock Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="tracking-wide">{time}</span>
            </div>
            {/* Optional Badge */}
            {badge && (
              <span className="bg-[#CCFF00] text-black text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                {badge}
              </span>
            )}
          </div>
          {/* Title & Description */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        {/* Right Side Action */}
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <button className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-all duration-300">
            {/* Plus Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
const AgendaSnapshot: React.FC = () => {
  const items = [
    {
      time: '10:00 AM – 10:30 AM',
      badge: 'Aestr Alpha Experience',
      title: 'Welcome, Registration & High-Tea',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
      time: '10:30 AM – 10:45 AM',
      title: 'Opening Note + Intro to Aestr Alpha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
      time: '10:45 AM – 11:15 AM',
      title: 'Decode Your Future - Quiz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    }
  ];
  return (
    <section className="min-h-screen bg-[#181818] text-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 font-orbitron">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest font-mono">
            Agenda Snapshot
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        {/* Agenda List */}
        <div className="flex flex-col mb-16">
          {items.map((item, index) => (
            <AgendaItem
              key={index}
              time={item.time}
              badge={item.badge}
              title={item.title}
              description={item.description}
            />
          ))}
          {/* Bottom border for the last item to close the list visually if desired,
              though the design usually implies dividers between items.
              Adding one final divider line to match the aesthetic: */}
          <div className="border-t border-[#CCFF00]/80"></div>
        </div>
        {/* Footer Button */}
        <div className="flex justify-center">
          <button className="bg-[#CCFF00] text-black text-sm font-black uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:-translate-y-1 transition-all duration-300 font-orbitron">
            See the Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
};
export default AgendaSnapshot;