import React from "react";
import Gallery1 from "../../../../../Public/Gallery1.svg";
import Gallery2 from "../../../../../Public/Gallery2.svg";
import Gallery3 from "../../../../../Public/Gallery3.svg";
import Gallery4 from "../../../../../Public/Gallery4.svg";
import Gallery5 from "../../../../../Public/Gallery5.svg";
import Gallery6 from "../../../../../Public/Gallery6.svg";
import Gallery7 from "../../../../../Public/Gallery7.svg";

export const MediaPreviewSection = () => {

  const mediaItems = [
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
        {/* Column 1: 416 x 864 (2 images 416x416) */}
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

        {/* Column 2: 416 x 948 (3 images: 234, 234, 416) */}
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

        {/* Column 3: 416 x 864 (2 images 416x416) */}
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