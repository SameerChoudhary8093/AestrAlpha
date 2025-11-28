import React from "react";
import { Button } from "../../../../components/ui/button";
import Placeholder2 from "../../../../../Public/Placeholder2.svg";

export const PhotoGallerySection = () => {
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
          alt="Placeholder image"
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
