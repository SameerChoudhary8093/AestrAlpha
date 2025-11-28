import React from "react";
import { Button } from "../../../../components/ui/button";
import TeamImage from "../../../../../Public/Team.svg";
import LinkedInLogo from "../../../../../Public/LinkedInlogo.svg";
import TwitterLogo from "../../../../../Public/Twitterlogo.svg";
import DribbbleLogo from "../../../../../Public/Dribblelogo.svg";

const speakers = [
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

export const FeaturedSpeakersSection = () => {
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
