import React from "react";
import { Button } from "../../components/ui/button";
import { AgendaSection } from "./sections/AgendaSection/AgendaSection";
import { FeaturedSpeakersSection } from "./sections/FeaturedSpeakersSection";
import { HeroSection } from "./sections/HeroSection";
import { InfoSection } from "./sections/InfoSection";
import { MediaPreviewSection } from "./sections/MediaPreviewSection";
import { PartnersSection } from "./sections/PartnersSection";
import { PhotoGallerySection } from "./sections/PhotoGallerySection";
import { WorkshopHighlightsSection } from "./sections/WorkshopHighlightsSection";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Ambassador", href: "#ambassador" },
  { label: "Contact us", href: "#contact" },
];

export const LandingPageDesign = () => {
  return (
    <div
      className="bg-[#181818] w-full min-w-[1440px] relative"
      data-model-id="1:491"
    >
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-[46px] pt-[37px] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex items-center justify-between w-full max-w-[1356px] p-5 bg-[#181818] shadow-[0px_4px_34px_#d7f6014c]">
          <img
            className="w-[125.3px] h-[12.53px]"
            alt="Aestr Logo"
            src="https://c.animaapp.com/mi4w2qmhW88gPU/img/group-61824.png"
          />

          <div className="flex items-center justify-center gap-8 bg-[#181818]">
            <div className="flex items-start gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap hover:text-[#d8f602] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button className="gap-2 px-5 py-2 bg-[#d8f602] hover:bg-[#c4e002] h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#181818] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] transition-colors">
              Buy Ticket
            </Button>
          </div>
        </div>
      </nav>

      <header className="relative pt-[207px] px-11">
        <h1 className="inline-flex items-center justify-center gap-2.5 px-0 py-[5px] w-[1035px] mt-[-1.00px] [font-family:'Orbitron',Helvetica] font-bold text-white text-[85px] tracking-[2.55px] leading-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Aestr Alpha&nbsp;&nbsp;Experience 2025
        </h1>

        <p className="w-[733px] mt-[13px] font-small-subheading font-[number:var(--small-subheading-font-weight)] text-white text-[length:var(--small-subheading-font-size)] tracking-[var(--small-subheading-letter-spacing)] leading-[var(--small-subheading-line-height)] [font-style:var(--small-subheading-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Join the community that&apos;s helping students become industry-grade
          professionals — and&nbsp;&nbsp;turning Jaipur into a city built by its
          own talent.
        </p>

        <div className="inline-flex items-center gap-4 mt-[80px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Button className="flex flex-col w-[173px] h-[62px] items-center justify-center gap-2.5 rounded-[7px] bg-[#d7f601] hover:bg-[#c4e002] transition-colors">
            <span className="[font-family:'Orbitron',Helvetica] font-semibold text-[#000000] text-base tracking-[0.48px] leading-[normal]">
              Buy Ticket
            </span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col w-[173px] h-[62px] items-center justify-center gap-2.5 rounded-[7px] border border-solid border-[#d7f601] bg-transparent hover:bg-[#d7f601]/10 transition-colors"
          >
            <span className="[font-family:'Orbitron',Helvetica] font-semibold text-[#d7f601] text-base tracking-[0.48px] leading-[normal]">
              View Agenda
            </span>
          </Button>
        </div>

        <img
          className="absolute top-[426px] left-0 w-[1266px] h-[389px]"
          alt="Decorative rectangle"
          src="https://c.animaapp.com/mi4w2qmhW88gPU/img/rectangle-16.svg"
        />
      </header>

      <div className="absolute top-[1349px] left-[390px] w-[214px] h-[214px] bg-[#5b1dd6] rounded-[107px] blur-[212px] pointer-events-none" />

      <HeroSection />

      <FeaturedSpeakersSection />

      <section className="relative w-full">
        <div className="flex flex-col w-[598px] items-start gap-6 mx-auto pt-20 pb-12">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Orbitron',Helvetica] font-bold text-white text-[50px] text-center tracking-[1.50px] leading-[38px]">
            Agenda Snapshot
          </h2>

          <p className="self-stretch font-SUBHEADING font-[number:var(--SUBHEADING-font-weight)] text-white text-[length:var(--SUBHEADING-font-size)] text-center tracking-[var(--SUBHEADING-letter-spacing)] leading-[var(--SUBHEADING-line-height)] [font-style:var(--SUBHEADING-font-style)]">
            November 15 - Full Day Schedule
          </p>
        </div>

        <AgendaSection />
      </section>

      <InfoSection />

      <div className="absolute top-[3561px] left-[933px] w-[214px] h-[214px] bg-[#5b1dd6] rounded-[107px] blur-[212px] pointer-events-none" />

      <WorkshopHighlightsSection />

      <MediaPreviewSection />

      <PhotoGallerySection />

      <div className="relative flex justify-center py-20">
        <Button className="w-[218px] h-[92px] bg-[#d7f601] hover:bg-[#c4e002] transition-colors">
          <span className="[font-family:'Orbitron',Helvetica] font-semibold text-[#000000] text-base tracking-[0.48px] leading-[normal]">
            Become an Aestr Ambassador
          </span>
        </Button>
      </div>

      <PartnersSection />
    </div>
  );
};
