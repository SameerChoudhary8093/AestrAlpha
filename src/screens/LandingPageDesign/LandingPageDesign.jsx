import React from "react";
import { Button } from "../../components/ui/button";
import Placeholder from "../../../Public/Placeholder.svg";
import ALogo from "../../../Public/Alogo.svg";
import ELogo from "../../../Public/Elogo.svg";
import SLogo from "../../../Public/Slogo.svg";
import TLogo from "../../../Public/Tlogo.svg";
import RLogo from "../../../Public/Rlogo.svg";
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
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <div
      className="bg-[#181818] w-full relative overflow-hidden"
      data-model-id="1:491"
    >
      <nav className="fixed top-4 left-4 right-4 z-50 bg-[#050505] border border-white/10 rounded-[18px] border-b border-white/5 shadow-[0_5px_30px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-3 w-full max-w-[1356px] px-6 py-3 mx-auto md:max-w-none md:mx-0">
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-1 nav-logo-group">
              <img className="h-[16px] w-auto" src={ALogo} alt="A logo" />
              <img className="h-[16px] w-auto" src={ELogo} alt="E logo" />
              <img className="h-[16px] w-auto" src={SLogo} alt="S logo" />
              <img className="h-[16px] w-auto" src={TLogo} alt="T logo" />
              <img className="h-[16px] w-auto" src={RLogo} alt="R logo" />
            </div>

            <div className="hidden items-center gap-6 ml-auto text-white text-[0.95rem] font-light tracking-[0.08em] uppercase md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="whitespace-nowrap opacity-90 hover:opacity-100 hover:text-[#d8f602] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-4 nav-cta">
              <Button className="flex items-center justify-center w-[114px] h-[40px] px-[20px] py-[8px] gap-2 rounded-none bg-[#d8f602] hover:bg-[#c4e002] text-[#181818] transition-colors nav-buy-button">
                <span className="[font-family:'Roboto',sans-serif] font-normal text-[16px] leading-[150%] tracking-[0]">
                  Buy Ticket
                </span>
              </Button>

              <button
                type="button"
                className="flex flex-col items-center justify-center gap-1 w-9 h-9 rounded-full border border-white/30 text-white md:hidden"
                aria-label="Toggle navigation menu"
                onClick={() => setIsMobileNavOpen((open) => !open)}
              >
                <span className="block h-[2px] w-4 bg-white" />
                <span className="block h-[2px] w-4 bg-white" />
                <span className="block h-[2px] w-4 bg-white" />
              </button>
            </div>
          </div>

          {isMobileNavOpen && (
            <div className="flex flex-col items-center justify-center gap-3 pt-2 text-white text-[0.85rem] font-light tracking-[0.08em] uppercase md:hidden">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="whitespace-nowrap opacity-90 hover:opacity-100 hover:text-[#d8f602] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <header id="home" className="relative pt-[207px] px-[44px] hero-section">
        <h1 className="inline-flex items-left justify-left gap-2.5 px-0 py-[5px] w-full max-w-[1070px] mt-[-1.00px] [font-family:'Orbitron',Helvetica] font-bold text-white text-[96px] tracking-[0] leading-[120%] text-center sm:text-left translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Aestr Alpha <br /> Experience 2025
        </h1>

        <p className="w-full max-w-[343px] sm:max-w-[953px] mt-[13px] font-small-subheading font-[number:var(--small-subheading-font-weight)] text-white text-[18px] sm:text-[28px] tracking-[0] leading-[150%] [font-style:var(--small-subheading-font-style)] text-center sm:text-left translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Join the community that&apos;s helping students become industry-grade
          professionals — and&nbsp;&nbsp;turning Jaipur into a city built by its
          own talent.
        </p>  

        <div className="inline-flex flex-col items-center gap-3 mt-[40px] sm:flex-row sm:items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] hero-buttons">
          <Button className="flex items-center justify-center w-[122px] h-[48px] px-[24px] py-[12px] gap-2 rounded-none bg-[#d7f601] hover:bg-[#c4e002] transition-colors">
            <span className="[font-family:'Roboto',sans-serif] font-normal text-[#000000] text-[16px] leading-[150%] tracking-[0]">
              Buy Ticket
            </span>
          </Button>

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
        </div>

        <div className="flex justify-left mt-[80px] mb-4 pointer-events-none hero-image">
          <img
            className="h-[700px] w-full max-w-[1312px] object-contain"
            alt="Decorative rectangle"
            src={Placeholder}
          />
        </div>
      </header>

      <div className="absolute top-[1349px] left-[50%] hidden h-[214px] w-[214px] -translate-x-1/2 rounded-[107px] bg-[#5b1dd6] blur-[212px] pointer-events-none md:block" />

      <main className="flex flex-col gap-16 sm:gap-20">
        <PhotoGallerySection />
        <HeroSection />

        <FeaturedSpeakersSection />

        <WorkshopHighlightsSection />

        <section id="agenda" className="relative w-full bg-[#1C1825]">
          <div className="flex flex-col w-full max-w-[598px] items-center gap-6 mx-auto pt-15 pb-6">
            <h2 className="self-stretch mt-[-1.00px] [font-family:'Orbitron',Helvetica] font-bold text-white text-[48px] leading-[120%] tracking-[0] w-full max-w-[616px] text-center">
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

        <MediaPreviewSection />

        <PartnersSection />
      </main>
    </div>
  );
};
