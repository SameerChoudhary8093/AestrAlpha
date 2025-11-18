import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const benefits = [
  "Be the face of Aestr on your campus",
  "Build and engage the student community",
  "Organize meetups, jams & micro-events",
  "Support cohort activities",
];

export const WorkshopHighlightsSection = () => {
  return (
    <section className="bg-[#d7f601] flex flex-col w-full items-center gap-20 px-16 py-28">
      <div className="flex items-start gap-20 w-full max-w-full">
        <div className="flex flex-col items-start gap-4 flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[57.6px]">
            Become an
            <br />
            Aestr Ambassador
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6 flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col items-start gap-8 w-full">
            <p className="[font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[27px]">
              Aestr Ambassadors are the leaders who represent Aestr on their
              campus, build a strong learning community, and inspire students to
              become industry-grade professionals.
            </p>

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

          <div className="inline-flex items-center gap-6 pt-4">
            <Button
              variant="outline"
              className="h-auto gap-2 px-6 py-3 border border-solid border-black bg-transparent hover:bg-black hover:text-[#d7f601] transition-colors"
            >
              <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Apply Now
              </span>
            </Button>
          </div>
        </div>
      </div>

      <img
        className="w-full h-[700px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        alt="Placeholder image"
        src="https://c.animaapp.com/mi4w2qmhW88gPU/img/placeholder---image.png"
      />
    </section>
  );
};
