"use client";
import React, { useState } from "react";
import { PlusIcon, ChevronRightIcon, CheckIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UI Component Imports (Assumed paths based on your provided code) ---
// Ensure these components exist in your project or adjust paths accordingly
import { Badge } from "@/components/ui/badge"; 
import { Button } from "@/components/ui/button";

// --- Image Imports ---
// In a single file, you would typically import these at the top. 
// Ensure these paths are correct relative to where you place this new file.
import TeamImage from "@/Public/Ticket/Team.svg";
import LinkedInLogo from "@/Public/Ticket/LinkedInlogo.svg";
import TwitterLogo from "@/Public/Ticket/Twitterlogo.svg";
import DribbbleLogo from "@/Public/Ticket/Dribblelogo.svg";
import CenterArtwork from "@/Public/Ticket/Placeholder3.svg";
import Vector1 from "@/Public/Ticket/Vector1.svg";
import Vector2 from "@/Public/Ticket/Vector2.svg";
import Vector3 from "@/Public/Ticket/Vector3.svg";
import Vector4 from "@/Public/Ticket/Vector4.svg";
import Gallery1 from "@/Public/Ticket/Gallery1.svg";
import Gallery2 from "@/Public/Ticket/Gallery2.svg";
import Gallery3 from "@/Public/Ticket/Gallery3.svg";
import Gallery4 from "@/Public/Ticket/Gallery4.svg";
import Gallery5 from "@/Public/Ticket/Gallery5.svg";
import Gallery6 from "@/Public/Ticket/Gallery6.svg";
import Gallery7 from "@/Public/Ticket/Gallery7.svg";
import ALogo from "@/Public/Ticket/Alogo.svg";
import ELogo from "@/Public/Ticket/Elogo.svg";
import SLogo from "@/Public/Ticket/Slogo.svg";
import TLogo from "@/Public/Ticket/Tlogo.svg";
import RLogo from "@/Public/Ticket/Rlogo.svg";
import Placeholder2 from "@/Public/Ticket/Placeholder2.svg";
import AmbassadorImage from "@/Public/Ticket/Placeholder4.svg";
import SmallLogo from "@/Public/Ticket/Smalllogo.svg";

// --- UTILS ---

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- TYPES & INTERFACES ---

interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

interface Speaker {
  name: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface MediaItem {
  src: string;
  alt: string;
  className: string;
}

// --- SECTIONS ---

// 1. PhotoGallerySection (Moved top as "What is Aestr Alpha")
const PhotoGallerySection: React.FC = () => {
  return (
    <section className="bg-[#181818] flex w-full items-center gap-20 px-16 py-28 relative photo-section">
      {/* Mobile-only heading above image */}
      <div className="w-full mb-6 block sm:hidden">
        <h2 className="mx-auto w-full max-w-[343px] [font-family:'Orbitron',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[40px] text-center">
          What is <br />
          Aestr Alpha?
        </h2>
      </div>
      <div className="relative flex-1 flex items-center justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] photo-section-image">
        <img
          className="w-full max-w-[616px] h-auto md:h-[640px] object-cover"
          alt="Placeholder"
          src={Placeholder2}
        />
      </div>

      <div className="flex flex-col items-start gap-8 relative flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] photo-section-content">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
          <h2 className="hidden sm:block relative self-stretch [font-family:'Orbitron',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-[60.0px]">
            What is <br />
            Aestr Alpha?
          </h2>

          <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-2xl tracking-[0] leading-9">
            Aestr Alpha is a mentorship and learning community that turns
            students into industry-ready professionals.
            <br />
            <br />
            Aestr Alpha Experience 2025 is where students,&nbsp;&nbsp;mentors,
            and professionals come together to close&nbsp;&nbsp;the gap between
            college and industry —&nbsp;&nbsp;transforming ideas into real-world
            impact.
          </p>

          <div className="inline-flex flex-col items-start gap-3 mt-6 sm:flex-row sm:items-center photo-section-buttons">
            <a href="#agenda">
              <Button
                variant="outline"
                className="flex items-center justify-center w-[122px] h-[48px] px-[24px] py-[12px] gap-2 rounded-none border border-solid border-[#d7f601] bg-transparent hover:bg-[#d7f601]/10 transition-colors"
              >
                <span className="[font-family:'Roboto',sans-serif] font-normal text-[#d7f601] text-[16px] leading-[150%] tracking-[0]">
                  View Agenda
                </span>
              </Button>
            </a>

            <Button
              variant="outline"
              className="flex items-center justify-center w-[122px] h-[48px] px-[24px] py-[12px] gap-2 rounded-none border border-solid border-[#d7f601] bg-transparent hover:bg-[#d7f601]/10 transition-colors"
            >
              <span className="[font-family:'Roboto',sans-serif] font-normal text-[#d7f601] text-[16px] leading-[150%] tracking-[0]">
                Buy Ticket
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. HeroSection (Workshop Highlights)
const highlights: Highlight[] = [
  {
    icon: Vector1,
    title: "Community Jams",
    description: "Collaborative challenges that spark creativity, innovation, and teamwork"
  },
  {
    icon: Vector2,
    title: "Hands-on Learning",
    description: "Real projects that turn ideas into prototypes and prototypes into portfolios"
  },
  {
    icon: Vector3,
    title: "Mentorship Circles",
    description: "One-on-one guidance from professionals who've built their way into the industry"
  },
  {
    icon: Vector4,
    title: "Expert Speakers",
    description: "Founders, innovators, and tech leaders from across India sharing actionable insights"
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-4 py-[102px] bg-[#d7f601] workshop-hero">
      <div className="flex flex-col w-full max-w-[1312px] items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center workshop-header">
          <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-[#181818] text-[48px] leading-[120%] tracking-[0] w-full max-w-[616px] text-center">
            Workshop Highlights
          </h2>

          <p className="max-w-[720px] mt-1 text-[#181818] text-base leading-relaxed">
            Join us for an immersive experience with industry experts, hands-on projects, and collaborative learning opportunities designed to accelerate your growth in the tech industry.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[303px_minmax(0,1fr)_303px] lg:items-center lg:h-[820px]">
          <div className="flex flex-col gap-16 lg:w-[303px] lg:h-[708px] justify-between">
            {highlights.slice(0, 2).map((highlight, index) => (
              <article
                key={highlight.title}
                className="flex flex-col gap-6 w-full max-w-[240px] text-[#181818] translate-y-[-1rem] animate-fade-in opacity-0 mx-auto items-center"
                style={{
                  "--animation-delay": `${200 + index * 200}ms`,
                } as React.CSSProperties}
              >
                <img
                  className="w-full max-w-[220px] h-auto object-contain"
                  alt={highlight.title}
                  src={highlight.icon}
                />

                <p className="flex flex-col gap-[16px] items-center">
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-[24px] leading-[140%] tracking-[0] text-center w-[240px] min-h-[68px] flex items-center justify-center">
                    {highlight.title}
                  </span>

                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-center w-[240px] min-h-[72px] flex items-center">
                    {highlight.description}
                  </span>
                </p>
              </article>
            ))}
          </div>

          <div className="flex justify-center items-center workshop-center-image">
            <img
              src={CenterArtwork}
              alt="Workshop highlights artwork"
              className="w-full max-w-[610px] h-[540px] object-contain"
            />
          </div>

          <div className="flex flex-col gap-16 lg:w-[303px] lg:h-[708px] justify-between">
            {highlights.slice(2).map((highlight, index) => (
              <article
                key={highlight.title}
                className="flex flex-col gap-12 w-full max-w-[240px] text-[#181818] translate-y-[-1rem] animate-fade-in opacity-0 mx-auto items-center pt-[30px]"
                style={{
                  "--animation-delay": `${200 + (index + 2) * 200}ms`,
                } as React.CSSProperties}
              >
                <img
                  className="w-full max-w-[220px] h-auto object-contain"
                  alt={highlight.title}
                  src={highlight.icon}
                />

                <p className="flex flex-col gap-[16px] items-center">
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-[24px] leading-[140%] tracking-[0] text-center w-[240px] min-h-[68px] flex items-center justify-center">
                    {highlight.title}
                  </span>

                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-center w-[240px] min-h-[72px] flex items-center">
                    {highlight.description}
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-6">
          <button className="px-8 py-3 border border-black text-black text-sm bg-transparent hover:bg-black hover:text-[#d7f601] transition-colors">
            Button
          </button>

          <button className="flex items-center gap-2 px-8 py-3  text-black text-sm bg-transparent hover:bg-black hover:text-[#d7f601] transition-colors">
            <span>Button</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// 3. AgendaSection
const AgendaSection: React.FC = () => {
  const agendaItems: AgendaItem[] = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full pt-[30px] md:pt-[40px] pb-0 agenda-section" id="agenda">
      <div className="max-w-[1312px] mx-auto px-4 agenda-inner">

        <div className="flex flex-col gap-4 agenda-list">
          {agendaItems.map((item, index) => (
            <article
              key={index}
              className={`flex items-center justify-between w-full max-w-[1312px] h-[98px] mx-auto border border-solid border-white px-[24px] py-[20px] transition-colors hover:bg-[#d7f601]/5 agenda-item ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => handleToggle(index)}
            >
              {/* Left: time + text */}
              <div className="flex items-center gap-[17px] w-full">
                <Badge
                  className={`agenda-time h-[47px] w-[129.57px] flex items-center justify-center bg-[#d7f601] hover:bg-[#d7f601] px-[19.05px] py-[11.43px] border-none shadow-none focus:ring-0 focus:ring-offset-0 rounded-none ${expandedIndex === index ? "" : "hidden md:block"}`}
                >
                  <span className="flex items-center justify-center w-[92px] h-[23px] text-[20.32px] leading-[100%] tracking-[0] font-medium text-[#181818] [font-family:'Aeonik-Medium',Helvetica]">
                    {item.time}
                  </span>
                </Badge>

                <div className="flex flex-col gap-[5px] w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[25px] font-bold leading-[35px] tracking-normal text-white [font-family:'Aeonik-Bold',Helvetica]">
                      {item.title}
                    </h3>
                    <PlusIcon className="h-6 w-6 text-white flex-shrink-0" />
                  </div>

                  <p className={`agenda-description text-base font-normal leading-[25px] tracking-normal text-white [font-family:'Aeonik-Regular',Helvetica] ${expandedIndex === index ? "" : "hidden md:block"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full max-w-[1312px] mx-auto mt-[40px] flex flex-col items-center text-center gap-4">
          <h3 className="[font-family:'Roboto',sans-serif] font-bold text-white text-[32px] leading-[130%] tracking-[0] text-center">
            Still have a question?
          </h3>

          <p className="max-w-[560px] text-sm sm:text-base text-white/80 whitespace-nowrap [font-family:'Aeonik-Regular',Helvetica]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <Button
            className="mt-2 w-[200px] h-[64px] px-[32px] py-[16px] flex items-center justify-center border border-white bg-transparent text-white [font-family:'Roboto',sans-serif] font-normal text-[18px] leading-[150%] tracking-[0] hover:bg-white/10 transition-colors rounded-none"
          >
            Buy Tickets
          </Button>
        </div>
      </div>
    </section>
  );
};

// 4. FeaturedSpeakersSection
const speakers: Speaker[] = [
  {
    name: "Full name",
    title: "Job title",
    image: TeamImage,
    alt: "Featured Speaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Full name",
    title: "Job title",
    image: TeamImage,
    alt: "Featured Speaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Full name",
    title: "Job title",
    image: TeamImage,
    alt: "Featured Speaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Full name",
    title: "Job title",
    image: TeamImage,
    alt: "Featured Speaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Full name",
    title: "Job title",
    image: TeamImage,
    alt: "Featured Speaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Full name",
    title: "Job title",
    image: TeamImage,
    alt: "Featured Speaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

const FeaturedSpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="flex flex-col w-full items-center gap-16 py-20 px-4 bg-[#1C1825] featured-section ">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10 featured-inner">
        <header className="flex flex-col items-start gap-4 text-left translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-white text-[48px] leading-[120%] tracking-[0] w-full max-w-[616px] text-left">
            Featured Speakers
          </h2>

          <p className="mt-2 font-small-subheading font-[number:var(--small-subheading-font-weight)] text-white/80 text-[length:var(--small-subheading-font-size)] tracking-[var(--small-subheading-letter-spacing)] leading-[var(--small-subheading-line-height)] [font-style:var(--small-subheading-font-style)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[48px] gap-y-[96px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] featured-grid">
          {speakers.map((speaker, index) => (
            <article key={index} className="flex flex-col items-start featured-card">
              <div className="w-[395px] h-[395px] bg-black featured-card-image">
                <img
                  className="w-full h-full object-cover"
                  alt={speaker.alt}
                  src={speaker.image}
                />
              </div>

              <div className="flex flex-col gap-3 mt-6 w-[395px] featured-card-body">
                <div className="flex flex-col gap-1">
                  <h3 className="font-text-large-semibold font-[number:var(--text-large-semibold-font-weight)] text-white text-[length:var(--text-large-semibold-font-size)] tracking-[var(--text-large-semibold-letter-spacing)] leading-[var(--text-large-semibold-line-height)] [font-style:var(--text-large-semibold-font-style)]">
                    {speaker.name}
                  </h3>

                  <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-white/80 text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    {speaker.title}
                  </p>
                </div>

                <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-white/70 text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                  {speaker.description}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={LinkedInLogo}
                    alt="LinkedIn"
                    className="w-7 h-7 object-contain"
                  />
                  <img
                    src={TwitterLogo}
                    alt="Twitter"
                    className="w-7 h-7 object-contain"
                  />
                  <img
                    src={DribbbleLogo}
                    alt="Dribbble"
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-4 featured-footer">
          <Button className="inline-flex items-center justify-center gap-6 w-[175px] h-[48px] bg-transparent border border-white text-white hover:bg-white/10 rounded-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] transition-colors featured-footer-button">
            <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-center w-[127px] h-[24px]">
              View All Speakers
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

// 5. MediaPreviewSection
const MediaPreviewSection: React.FC = () => {
  const mediaItems: MediaItem[] = [
    { src: Gallery1, alt: "Wristbands", className: "md:row-span-2" },    // Left: Tall
    { src: Gallery2, alt: "Posters", className: "md:row-span-1" },       // Middle: Short
    { src: Gallery3, alt: "Notebook", className: "md:row-span-2" },      // Right: Tall
    { src: Gallery4, alt: "Beyond Skills", className: "md:row-span-1" }, // Middle: Short
    { src: Gallery5, alt: "Ticket", className: "md:row-span-1" },        // Left: Short
    { src: Gallery6, alt: "Cap", className: "md:row-span-2" },           // Middle: Tall
    { src: Gallery7, alt: "Wall Posters", className: "md:row-span-2" },  // Right: Tall
  ];

  return (
    <section id="gallery" className="flex flex-col w-full items-center gap-20 px-4 md:px-16 pt-16 pb-28 bg-[#d7f601] media-section">

      <div className="flex flex-col w-full max-w-[768px] items-center gap-6 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="self-stretch [font-family:'Orbitron',Helvetica] font-bold text-black text-[40px] md:text-[50px] text-center tracking-[0] leading-tight md:leading-[60.0px]">
          Photo Gallery Preview
        </h2>

        <p className="self-stretch font-text-medium-normal text-black text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Mobile layout: simple stacked grid */}
      <div className="w-full max-w-[1312px] grid grid-cols-1 gap-4 md:hidden animate-fade-in opacity-0 [--animation-delay:400ms] media-grid">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-auto object-cover"
              alt={item.alt}
              src={item.src}
            />
          </div>
        ))}
      </div>

      {/* Desktop layout: 3 columns, fixed sizes per Figma */}
      <div className="hidden md:flex w-full max-w-[1312px] justify-center gap-8 animate-fade-in opacity-0 [--animation-delay:400ms] media-grid">
        {/* Column 1 */}
        <div className="flex w-[416px] h-[864px] flex-col gap-8">
          <div className="relative overflow-hidden rounded-lg w-[416px] h-[416px]">
            <img
              className="w-full h-full object-cover"
              alt="Wristbands"
              src={Gallery1}
            />
          </div>

          <div className="relative overflow-hidden rounded-lg w-[416px] h-[416px]">
            <img
              className="w-full h-full object-cover"
              alt="Posters"
              src={Gallery2}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex w-[416px] h-[948px] flex-col gap-8">
          <div className="relative overflow-hidden rounded-lg w-[416px] h-[234px]">
            <img
              className="w-full h-full object-cover"
              alt="Notebook"
              src={Gallery3}
            />
          </div>

          <div className="relative overflow-hidden rounded-lg w-[416px] h-[234px]">
            <img
              className="w-full h-full object-cover"
              alt="Beyond Skills"
              src={Gallery4}
            />
          </div>

          <div className="relative overflow-hidden rounded-lg w-[416px] h-[416px]">
            <img
              className="w-full h-full object-cover"
              alt="Ticket"
              src={Gallery5}
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex w-[416px] h-[864px] flex-col gap-8">
          <div className="relative overflow-hidden rounded-lg w-[416px] h-[416px]">
            <img
              className="w-full h-full object-cover"
              alt="Cap"
              src={Gallery6}
            />
          </div>

          <div className="relative overflow-hidden rounded-lg w-[416px] h-[416px]">
            <img
              className="w-full h-full object-cover"
              alt="Wall Posters"
              src={Gallery7}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

// 6. WorkshopHighlightsSection (Ambassador)
const WorkshopHighlightsSection: React.FC = () => {
  // Empty array from source
  const benefits: string[] = [];

  return (
    <section id="ambassador" className="bg-[#d7f601] flex flex-col w-full items-center gap-12 sm:gap-16 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 ambassador-section">
      <div className="flex flex-col gap-10 w-full max-w-[1200px] ambassador-inner">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-20 ambassador-row">
          <div className="flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ambassador-left">
            <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-black text-[48px] leading-[120%] tracking-[0] w-full max-w-[616px] text-center sm:text-left">
              Become an Aestr
              <br />
              Ambassador
            </h2>
            <ul className="flex flex-col items-start gap-4 w-full">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 w-full">
                  <CheckIcon
                    className="w-[25.15px] h-[25.15px] flex-shrink-0"
                    strokeWidth={3}
                  />
                  <span className="flex-1 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-[616px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms] ambassador-right">
            <p className="[font-family:'Roboto',Helvetica] font-normal text-[18px] leading-[150%] tracking-[0] text-black w-full max-w-[616px]">
              Aestr Ambassadors are the leaders who represent Aestr on their campus, build a strong learning
              community, and inspire students to become industry-grade professionals.
            </p>

            <div className="flex flex-col gap-4 w-[616px]">
              <div className="flex items-center gap-2 h-[48px]">
                <img
                  src={SmallLogo}
                  alt="Aestr logo"
                  className="w-8 h-8 object-contain"
                />

                <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-black w-[574px] h-[24px]">
                  Be the face of Aestr on your campus
                </span>
              </div>

              <div className="flex items-center gap-2 h-[48px]">
                <img
                  src={SmallLogo}
                  alt="Aestr logo"
                  className="w-8 h-8 object-contain"
                />

                <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-black w-[574px] h-[24px]">
                  Build and engage the student community
                </span>
              </div>

              <div className="flex items-center gap-2 h-[48px]">
                <img
                  src={SmallLogo}
                  alt="Aestr logo"
                  className="w-8 h-8 object-contain"
                />

                <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-black w-[574px] h-[24px]">
                  Organize meetups, jams & micro-events
                </span>
              </div>

              <div className="flex items-center gap-2 h-[48px]">
                <img
                  src={SmallLogo}
                  alt="Aestr logo"
                  className="w-8 h-8 object-contain"
                />

                <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-black w-[574px] h-[24px]">
                  Support cohort activities
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-8 ambassador-buttons">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfX-l0DhYna7HIFA_qjP4b3OQpvGZJo-wdSx5XbvrOa3YbIgg/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-3 border border-black text-black text-sm bg-transparent hover:bg-black hover:text-[#d7f601] transition-colors">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 ambassador-image">
        <img
          src={AmbassadorImage}
          alt="Aestr Ambassador"
          className="w-full max-w-[1312px] h-[700px] object-contain"
        />
      </div>
    </section>
  );
};

// 7. PartnersSection (Footer)
const footerLinks = {
  columnOne: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"],
  columnTwo: ["Link Six", "Link Seven", "Link Eight", "Link Nine", "Link Ten"],
};

const PartnersSection: React.FC = () => {
  return (
    <footer id="contact" className="w-full relative partners-section">
      <section className="flex flex-col gap-10 px-16 pt-10 pb-20 bg-[#181818] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] partners-inner">
        <div className="flex w-full items-start gap-16 partners-top">
          <div className="flex flex-col w-[864px] items-start gap-8 partners-left">
            <div className="flex items-center justify-center w-full md:w-auto md:justify-start gap-1">
              <img className="h-[16px] w-auto" src={ALogo} alt="A logo" />
              <img className="h-[16px] w-auto" src={ELogo} alt="E logo" />
              <img className="h-[16px] w-auto" src={SLogo} alt="S logo" />
              <img className="h-[16px] w-auto" src={TLogo} alt="T logo" />
              <img className="h-[16px] w-auto" src={RLogo} alt="R logo" />
            </div>

            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="font-text-small-semibold font-[number:var(--text-small-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-small-semibold-font-size)] tracking-[var(--text-small-semibold-letter-spacing)] leading-[var(--text-small-semibold-line-height)] [font-style:var(--text-small-semibold-font-style)]">
                  Address:
                </p>

                <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#d7f601] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                  Level 1, 12 Sample St, Sydney NSW 2000
                </p>
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <p className="font-text-small-semibold font-[number:var(--text-small-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-small-semibold-font-size)] tracking-[var(--text-small-semibold-letter-spacing)] leading-[var(--text-small-semibold-line-height)] [font-style:var(--text-small-semibold-font-style)]">
                  Contact:
                </p>

                <address className="not-italic font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]">
                  1800 123 4567
                  <br />
                  info@relume.io
                </address>
              </div>

              <img
                className="flex-[0_0_auto]"
                alt="Social media links"
                src="https://c.animaapp.com/mi4w2qmhW88gPU/img/social-links.svg"
              />
            </div>
          </div>

          <nav className="flex items-start gap-6 flex-1 partners-links">
            <div className="flex flex-col items-start gap-3 flex-1 partners-links-col">
              {footerLinks.columnOne.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-full font-text-regular-semibold font-[number:var(--text-regular-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-regular-semibold-font-size)] tracking-[var(--text-regular-semibold-letter-spacing)] leading-[var(--text-regular-semibold-line-height)] [font-style:var(--text-regular-semibold-font-style)] transition-opacity hover:opacity-80"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-start gap-3 flex-1">
              {footerLinks.columnTwo.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-full font-text-regular-semibold font-[number:var(--text-regular-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-regular-semibold-font-size)] tracking-[var(--text-regular-semibold-letter-spacing)] leading-[var(--text-regular-semibold-line-height)] [font-style:var(--text-regular-semibold-font-style)] transition-opacity hover:opacity-80"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-start gap-8 w-full partners-bottom">
          <div className="w-full h-px bg-[#d7f601]" />

          <div className="flex items-start justify-between w-full partners-bottom-row">
            <p className="w-fit font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#d7f601] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              Aestr Alpha All right reserved.
            </p>

            <nav className="flex gap-6 items-start">
              <a
                href="#"
                className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)] transition-opacity hover:opacity-80"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)] transition-opacity hover:opacity-80"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
};

// 8. InfoSection (Kept as null/empty per source)
const InfoSection: React.FC = () => {
  return null;
};

// --- MAIN EXPORT ---

export default function AestrAlphaLandingPage() {
  return (
    <main className="min-h-screen bg-[#181818]">
      <PhotoGallerySection />
      <HeroSection />
      <AgendaSection />
      <FeaturedSpeakersSection />
      <MediaPreviewSection />
      <WorkshopHighlightsSection />
      <PartnersSection />
      <InfoSection />
    </main>
  );
}