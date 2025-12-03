import React from 'react';
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/components/icons/Star";

type WorkshopHighlightsProps = {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  date?: React.ReactNode;
};

const WorkshopHighlights: React.FC<WorkshopHighlightsProps> = ({
  heading,
  description,
  date,
}) => {
  const defaultDescription = `Join the community that’s helping students become industry-grade professionals — and turning
Jaipur into a city built by its own talent.`;
  const defaultHeading = "Aestr Alpha Experience Immersive Workshop";
  const defaultDate = (
    <>
      Jan 12, 2025, 9:00 AM &nbsp;|&nbsp; Conference Venue
    </>
  );
  return (
    <div className="min-h-screen bg-[#5b1dd6] text-white font-sans selection:bg-[#CCFF00] selection:text-[#5216E2] py-16 px-4">
      {/* --- Header Section --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-orbitron font-bold text-[32px] md:text-[50px] leading-[1.2] text-center text-[#D7F601] tracking-[0%] mb-6">
          {heading ?? defaultHeading}
        </h1>
        <p className="max-w-[768px] mx-auto font-sans font-normal text-[18px] leading-[1.5] text-center text-[#E8E4F1] mb-4 whitespace-pre-line">
          {description ?? defaultDescription}
        </p>
        <p className="max-w-[768px] mx-auto font-sans font-bold text-[25px] leading-[1.5] text-center text-[#D7F601] mt-4">
          {date ?? defaultDate}
        </p>
      </div>
      {/* --- Main Grid Content --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-16 order-2 lg:order-1">
          {/* Item 1: Community Jams */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/ImmersiveWorkshop/CommunityJamslogo.svg"
                alt="Community Jams logo"
                width={152}
                height={152}
                className="w-[152.435px] h-[152.435px]"
              />
            </div>
            <h3 className="max-w-[240px] text-center font-sans font-bold text-[24px] leading-[1.4] mb-2">
              Community Jams
            </h3>
            <p className="max-w-[240px] text-center font-sans font-normal text-[16px] leading-[1.5] text-[#E8E4F1]">
              Collaborative challenges that spark creativity, innovation, and teamwork.
            </p>
          </div>
          {/* Item 2: Hands-on Learning */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/ImmersiveWorkshop/HandsonLearninglogo.svg"
                alt="Hands-on Learning logo"
                width={182}
                height={132.286}
                className="w-[182px] h-[132.286px]"
              />
            </div>
            <h3 className="max-w-[240px] text-center font-sans font-bold text-[24px] leading-[1.4] mb-2">
              Hands-on Learning
            </h3>
            <p className="max-w-[240px] text-center font-sans font-normal text-[16px] leading-[1.5] text-[#E8E4F1]">
              Real projects that turn ideas into prototypes and prototypes into portfolios.
            </p>
          </div>
        </div>
        {/* Center Column: Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-[610px] h-[540px] bg-gray-200 overflow-hidden shadow-2xl">
            <Image
              src="/ImmersiveWorkshop/jacket.svg"
              alt="Participant wearing denim jacket"
              width={610}
              height={540}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center opacity-90">
                {/* <div className="text-[#CCFF00] font-black text-6xl italic" style={{ transform: 'skew(-10deg)' }}>
                  A
                </div>
                <div className="text-[#CCFF00] font-bold text-xl mt-2 tracking-widest uppercase">AESTR</div>
                <div className="text-[#CCFF00] font-bold text-xl tracking-widest uppercase">ALPHA</div>
                <div className="text-[#CCFF00] text-[10px] tracking-[0.3em] uppercase mt-1">Ambassador</div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-16 order-3 lg:order-3">
          {/* Item 3: Mentorship Circles */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/ImmersiveWorkshop/MentorshipCircleslogo.svg"
                alt="Mentorship Circles logo"
                width={200}
                height={200}
                className="w-[150px] h-[150px]"
                style={{ transformOrigin: "center" }}
              />
            </div>
            <h3 className="max-w-[240px] text-center font-sans font-bold text-[24px] leading-[1.4] mb-2">
              Mentorship Circles
            </h3>
            <p className="max-w-[240px] text-center font-sans font-normal text-[16px] leading-[1.5] text-[#E8E4F1]">
              One-on-one guidance from professionals who've built their way into the industry.
            </p>
          </div>
          {/* Item 4: Expert Speakers */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/ImmersiveWorkshop/ExpertSpeakerlogo.svg"
                alt="Expert Speakers logo"
                width={186}
                height={99.902}
                className="w-[186px] h-[99.902px]"
              />
            </div>
            <h3 className="max-w-[240px] text-center font-sans font-bold text-[24px] leading-[1.4] mb-2">
              Expert Speakers
            </h3>
            <p className="max-w-[240px] text-center font-sans font-normal text-[16px] leading-[1.5] text-[#E8E4F1]">
              Founders, innovators, and tech leaders from across India sharing actionable insights.
            </p>
          </div>
        </div>
      </div>
      {/* --- Footer Buttons --- */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20">
        {/* Primary Button */}
        <button className="w-[255px] h-[53.8px] flex items-center justify-center gap-2 px-6 py-3 rounded-tl-[4px] rounded-tr-[20px] rounded-br-[4px] rounded-bl-[4px] border border-[#D7F601] bg-[#D7F601] text-[#5B1DD6] font-orbitron font-black text-[16px] leading-[1.5]">
          <StarIcon className="h-[29.8px] w-[28px] text-[#5B1DD6]" />
          <span className="whitespace-nowrap">Know more Details</span>
        </button>

        {/* Secondary Button */}
        <Link
          href="/Ticket#agenda"
          className="w-[205px] h-[53.8px] flex items-center justify-center gap-2 px-6 py-3 rounded-tl-[4px] rounded-tr-[20px] rounded-br-[4px] rounded-bl-[4px] border border-[#D7F601] text-[#D7F601] font-orbitron font-black text-[16px] leading-[1.5] bg-transparent"
        >
          <StarIcon className="h-[29.8px] w-[28px] text-[#D7F601]" />
          <span className="whitespace-nowrap">View Agenda</span>
        </Link>

      </div>
    </div>
  );
};
export default WorkshopHighlights;