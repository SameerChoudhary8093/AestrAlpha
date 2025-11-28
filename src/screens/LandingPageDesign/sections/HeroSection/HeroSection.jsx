import React from "react";
import CenterArtwork from "../../../../../Public/Placeholder3.svg";
import Vector1 from "../../../../../Public/Vector1.svg";
import Vector2 from "../../../../../Public/Vector2.svg";
import Vector3 from "../../../../../Public/Vector3.svg";
import Vector4 from "../../../../../Public/Vector4.svg";

const sharedDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";

const highlights = [
  {
    icon: Vector1,
    title: "Community Jams",
    description: sharedDescription,
  },
  {
    icon: Vector2,
    title: "Mentorship Circles —",
    description: sharedDescription,
  },
  {
    icon: Vector3,
    title: "Hands-on Learning —",
    description: sharedDescription,
  },
  {
    icon: Vector4,
    title: "Expert Speakers —",
    description: sharedDescription,
  },
];

export const HeroSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-4 py-[102px] bg-[#d7f601] workshop-hero">
      <div className="flex flex-col w-full max-w-[1312px] items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center workshop-header">
          <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-[#181818] text-[48px] leading-[120%] tracking-[0] w-full max-w-[616px] text-center">
            Workshop Highlights
          </h2>

          <p className="max-w-[720px] mt-1 text-[#181818] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
            dolor interdum nulla, ut commodo diam libero vitae erat.
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
                }}
              >
                <img
                  className="w-full max-w-[220px] h-auto object-contain"
                  alt={highlight.title}
                  src={highlight.icon}
                />

                <p className="flex flex-col gap-4 items-center">
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-[24px] leading-[140%] tracking-[0] text-center w-[240px] h-[68px]">
                    Short heading goes here
                  </span>

                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-center w-[240px] h-[72px]">
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
                className="flex flex-col gap-6 w-full max-w-[240px] text-[#181818] translate-y-[-1rem] animate-fade-in opacity-0 mx-auto items-center"
                style={{
                  "--animation-delay": `${200 + (index + 2) * 200}ms`,
                }}
              >
                <img
                  className="w-full max-w-[220px] h-auto object-contain"
                  alt={highlight.title}
                  src={highlight.icon}
                />

                <p className="flex flex-col gap-4 items-center">
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-[24px] leading-[140%] tracking-[0] text-center w-[240px] h-[68px]">
                    Short heading goes here
                  </span>

                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[16px] leading-[150%] tracking-[0] text-center w-[240px] h-[72px]">
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
