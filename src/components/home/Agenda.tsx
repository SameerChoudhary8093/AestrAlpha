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
    <div className="border-t border-[#D7F601] py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 font-sans">

        {/* Left Side Content */}
        <div className="flex-1 space-y-3">
          {/* Time & Badge Row */}
          <div className="flex items-center flex-wrap gap-3 text-sm text-[#EFEFEF]">
            <div className="flex items-center gap-2">
              {/* Clock Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-roboto font-medium text-sm md:text-base leading-[1.5] text-white">{time}</span>
            </div>
            {/* Optional Badge */}
            {badge && (
              <span className="bg-[#D7F601] text-[#111] text-xs font-semibold px-2.5 py-1 rounded-sm leading-[1.5]">
                {badge}
              </span>
            )}
          </div>
          {/* Title & Description */}
          <div>
            <h3 className="font-roboto font-bold text-2xl md:text-[24px] leading-[1.4] text-white mb-2">
              {title}
            </h3>
            <p className="font-roboto text-[14px] md:text-base leading-[1.5] text-[#EFEFEF]/80">
              {description}
            </p>
          </div>

        </div>
        {/* Right Side Action */}
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <button className="w-12 h-12 rounded-full bg-[#D7F601] flex items-center justify-center text-[#111] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section id="agenda" className="min-h-screen bg-[#0F0F0F] text-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-[1280px]">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 font-orbitron">
          <h2 className="text-4xl md:text-[48px] font-bold tracking-[0.1em] text-white">
            Agenda Snapshot
          </h2>
          <p className="font-roboto text-base md:text-lg leading-[1.5] text-[#EFEFEF] max-w-[1280px] mx-auto">
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
          <button className="w-[246px] h-[48px] flex items-center justify-center gap-6 bg-[#D7F601] text-[#181818] font-orbitron font-black text-[16px] leading-[1.5] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[24px] rounded-tr-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
            <span className="whitespace-nowrap">See the Full Schedule</span>
          </button>
        </div>

      </div>
    </section>

  );
};
export default AgendaSnapshot;