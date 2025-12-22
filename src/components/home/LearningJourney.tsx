import React from 'react';
import Image from "next/image";

export default function LearningJourney() {
  return (
    <section
      className="w-full bg-[#D7F601] flex justify-center py-28 px-4 md:px-16"
    >
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 max-w-[616px] flex flex-col mx-auto lg:mx-0">
          {/* Subheader */}
          <div
            className="text-[#181818] font-semibold text-base leading-[150%] mb-4"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            Your 6-Month Experience
          </div>

          {/* Heading */}
          <h2
            className="text-[#181818] font-bold leading-[120%] mb-12 lg:mb-20"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)"
            }}
          >
            Your Learning Journey Inside Aestr Alpha
          </h2>

          {/* Image */}
          <div className="w-full aspect-square md:aspect-auto md:h-[579px] rounded-lg overflow-hidden relative">
            <Image
              src="/home/LearningJourney.svg"
              alt="Learning Journey"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 max-w-[616px] flex flex-col gap-12 lg:gap-[90px] mx-auto lg:mx-0">

          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} className="shrink-0" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl md:text-[32px] leading-[130%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                Office hours, not classroom hours
              </h3>
              <p className="font-normal text-base leading-[150%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                9:00 AM – 12:00 PM: Concepts (“Download”)<br />
                1:00 PM – 6:00 PM: Build (“Work Simulation”)<br />
                You’ll use Slack/Discord, Jira/Trello, Git — and operate in sprints
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} className="shrink-0" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl md:text-[32px] leading-[130%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                Hands-on guided One massive product. One team.
              </h3>
              <p className="font-normal text-base leading-[150%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                The entire cohort collaborates on a single large build to learn how real cross-functional teams ship. Developers, data, and product workflows operate together. & mentor sessions.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} className="shrink-0" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl md:text-[32px] leading-[130%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                Real client outcomes
              </h3>
              <p className="font-normal text-base leading-[150%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                Residents work with partner startups/SMEs to build real deliverables — with real feedback, documentation, and professional artifacts (LOR + live work links).
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} className="shrink-0" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl md:text-[32px] leading-[130%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                Portfolio + Career Prep
              </h3>
              <p className="font-normal text-base leading-[150%] text-[#181818]" style={{ fontFamily: "Arial, sans-serif" }}>
                LinkedIn, Resume, Interviews, Portfolio review.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}