import { CheckIcon } from "lucide-react";
import React from "react";
import AmbassadorImage from "../../../../../Public/Placeholder4.svg";
import SmallLogo from "../../../../../Public/Smalllogo.svg";

const benefits = [];

export const WorkshopHighlightsSection = () => {
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
