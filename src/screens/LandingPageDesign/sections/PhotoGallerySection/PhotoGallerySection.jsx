import React from "react";

export const PhotoGallerySection = () => {
  return (
    <section className="bg-[#181818] flex w-full items-center gap-20 px-16 py-28 relative">
      <div className="relative flex-1 h-[640px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <img
          className="w-full h-full object-cover"
          alt="Placeholder image"
          src="https://c.animaapp.com/mi4w2qmhW88gPU/img/placeholder---image-1.png"
        />
      </div>

      <div className="flex flex-col items-start gap-8 relative flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
          <h2 className="relative self-stretch [font-family:'Orbitron',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-[60.0px]">
            What is <br />
            Aestr Alpha ?
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
        </div>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
          <div className="relative self-stretch w-full h-6" />

          <div className="relative self-stretch w-full h-6" />

          <div className="relative self-stretch w-full h-6" />
        </div>
      </div>
    </section>
  );
};
