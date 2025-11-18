import React from "react";
import { Button } from "../../../../components/ui/button";

const speakerImages = [
  {
    src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/56.png",
    alt: "Featured Speaker 1",
  },
  {
    src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/57.png",
    alt: "Featured Speaker 2",
  },
  {
    src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/58.png",
    alt: "Featured Speaker 3",
  },
  {
    src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/59.png",
    alt: "Featured Speaker 4",
  },
];

export const FeaturedSpeakersSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-[70px] py-16 px-4">
      <header className="flex flex-col max-w-[598px] items-center gap-2.5">
        <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-white text-[50px] text-center tracking-[1.50px] leading-[38px] translate-y-[-1rem] animate-fade-in opacity-0">
          Featured Speakers
        </h2>
      </header>

      <div className="w-full max-w-[1360px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {speakerImages.map((speaker, index) => (
          <div
            key={index}
            className="w-full aspect-[319/391] translate-y-[-1rem] animate-fade-in opacity-0"
            style={{
              "--animation-delay": `${400 + index * 100}ms`,
            }}
          >
            <img
              className="w-full h-full object-cover"
              alt={speaker.alt}
              src={speaker.src}
            />
          </div>
        ))}
      </div>

      <Button className="h-auto px-6 py-3 bg-[#d7f601] hover:bg-[#c4e001] text-[#000000] [font-family:'Orbitron',Helvetica] font-semibold text-base tracking-[0.48px] rounded-[7px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] transition-colors">
        View All Speakers
      </Button>
    </section>
  );
};
