import React from "react";

export const MediaPreviewSection = () => {
  const mediaItems = [
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 1",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 2",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 3",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 4",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 5",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 6",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 7",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 8",
    },
    {
      src: "https://c.animaapp.com/mi4w2qmhW88gPU/img/content-1.svg",
      alt: "Media preview 9",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-[#d7f601]">
      <div className="flex flex-col w-full max-w-[768px] items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="self-stretch [font-family:'Orbitron',Helvetica] font-bold text-black text-[50px] text-center tracking-[0] leading-[60.0px]">
          Photo Gallery Preview
        </h2>

        <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full max-w-[1312px] grid grid-cols-3 gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="aspect-[4/3] overflow-hidden rounded-lg transition-transform hover:scale-105"
          >
            <img
              className="w-full h-full object-cover"
              alt={item.alt}
              src={item.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
