import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 4.024 5.534 3.235 6.5 3.235C7.466 3.235 8.25 4.024 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#EAF0BD" />
  </svg>
);

const GuestMentorCard = () => (
  <div className="w-full md:max-w-[395px] flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
    {/* Image */}
    <div className="w-full aspect-square relative rounded-lg overflow-hidden">
      <Image
        src="/FeaturesSpeakers/Mentor.svg"
        alt="Mentor"
        fill
        className="object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col mt-6">
      {/* Name */}
      <h3 className="w-full font-semibold text-xl leading-[150%] text-[#EAF0BD] m-0" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
        Full name
      </h3>
      {/* Title */}
      <p className="w-full font-normal text-lg leading-[150%] text-[#EAF0BD] m-0" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
        Job title
      </p>

      {/* Bio */}
      <p className="w-full font-normal text-base leading-[150%] text-[#EAF0BD] mt-4 mb-0" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex gap-[14px]">
        <Link href="#" aria-label="LinkedIn">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  </div>
);

export default function BoardMembers() {
  return (
    <section
      className="w-full bg-[#181818] flex justify-center py-28 px-4 md:px-16"
    >
      <div className="w-full max-w-[1280px] flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full flex flex-col gap-6 items-start text-left">
          <h2
            className="w-full text-[#EAF0BD] font-bold leading-[120%]"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontSize: "clamp(32px, 5vw, 50px)"
            }}
          >
            Our Guests Mentors
          </h2>
          <p
            className="w-full text-[#EAF0BD] font-normal text-lg leading-[150%]"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Content Container */}
        <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Row 1 */}
          <GuestMentorCard />
          <GuestMentorCard />
          <GuestMentorCard />
          {/* Row 2 */}
          <GuestMentorCard />
          <GuestMentorCard />
          <GuestMentorCard />
        </div>

      </div>
    </section>
  );
}