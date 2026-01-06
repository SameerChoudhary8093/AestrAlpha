"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { speakers } from "@/data/speaker";
import StarIcon from "@/components/icons/Star";
import ApplicationModal from './ApplicationModal';
import FeaturedMentor from './FeaturedMentor';

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 4.024 5.534 3.235 6.5 3.235C7.466 3.235 8.25 4.024 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#EAF0BD" />
  </svg>
);

const GuestMentorCard = ({ speaker }: { speaker: any }) => (
  <div className="w-full md:max-w-[395px] flex flex-col transition-transform duration-300">
    {/* Image */}
    <div
      className="w-full aspect-square relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      style={{ background: "linear-gradient(180deg, #D8F602 0%, #181818 100%)" }}
    >
      <Image
        src={speaker.photo.src}
        alt={speaker.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col mt-6">
      {/* Name */}
      <h3
        className="w-full text-[#EAF0BD] m-0"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "150%"
        }}
      >
        {speaker.name}
      </h3>
      {/* Title/Bio */}
      <p
        className="w-full text-[#EAF0BD] m-0 mt-2"
        style={{
          fontFamily: "var(--font-roboto), sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "150%"
        }}
      >
        {speaker.position}
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex gap-[14px]">
        {speaker.social.map((s: any, idx: number) => (
          <Link key={idx} href={s.url} aria-label={s.platform} target="_blank">
            <LinkedInIcon />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default function BoardMembers() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  // WhatsApp redirect handler for counselor button
  const handleCounselorClick = () => {
    const message = "Hi, I went through the “What You Graduate With” section on Aestr Alpha and would like to talk to a counselor.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9828781952?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-16 px-4 md:py-20 md:px-8 lg:py-28 lg:px-16"
      style={{ backgroundColor: "#5B1DD6" }}
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
            Our Mentors
          </h2>
        </div>

        {/* Featured Mentor Section */}
        <div className="mt-20 w-full">
          <FeaturedMentor />
        </div>

        {/* Content Container */}
        <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {speakers.map((speaker) => (
            <GuestMentorCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* Talk to Counselor Button */}
        <div style={{ marginTop: "120px" }}>
          <button
            onClick={handleCounselorClick}
            className="flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{
              width: "360px", // Slightly wider for longer text
              height: "53.8px",
              gap: "8px",
              padding: "12px 24px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
              backgroundColor: "#D8F602",
              color: "#181818",
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            <StarIcon
              style={{
                width: "28px",
                height: "29.8px",
                color: "#181818",
                fill: "currentColor"
              }}
            />
            <span className="font-extrabold whitespace-nowrap">Talk to a Counselor (Free 1:1)</span>
          </button>
        </div>

        <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />

      </div>
    </section>
  );
}