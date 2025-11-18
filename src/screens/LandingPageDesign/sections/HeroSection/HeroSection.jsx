import React from "react";

const highlights = [
  {
    icon: "https://c.animaapp.com/mi4w2qmhW88gPU/img/group.png",
    iconWidth: "w-[152.43px]",
    iconHeight: "h-[152.43px]",
    title: "Community Jams",
    description:
      " — Collaborative  challenges that spark  creativity, innovation,  and teamwork.",
    containerWidth: "w-[470px]",
    descriptionWidth: "self-stretch",
  },
  {
    icon: "https://c.animaapp.com/mi4w2qmhW88gPU/img/group-1.png",
    iconWidth: "w-[222.87px]",
    iconHeight: "h-[146.13px]",
    title: " Mentorship Circles — ",
    description:
      "One-on-one guidance from  professionals who've built  their way into the industry.",
    containerWidth: "w-[499px]",
    descriptionWidth: "w-[537px] mr-[-38.00px]",
  },
  {
    icon: "https://c.animaapp.com/mi4w2qmhW88gPU/img/asset12-1.svg",
    iconWidth: "w-[182px]",
    iconHeight: "h-[132.29px]",
    title: "Hands-on Learning — ",
    description:
      "Real projects that turn  ideas into prototypes and  prototypes into portfolios.",
    containerWidth: "w-[481px]",
    descriptionWidth: "self-stretch",
  },
  {
    icon: "https://c.animaapp.com/mi4w2qmhW88gPU/img/asset7-1.svg",
    iconWidth: "w-[186px]",
    iconHeight: "h-[99.9px]",
    title: "Expert Speakers — ",
    description:
      "Founders, innovators,  and tech leaders from  across India sharing  actionable insights.",
    containerWidth: "w-[496px] mr-[-8.00px]",
    descriptionWidth: "self-stretch",
  },
];

export const HeroSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-2.5 px-4 md:px-[163px] py-[102px] relative bg-[#d7f601]">
      <div className="flex flex-col w-full max-w-[1114px] items-center justify-center gap-[70px] relative">
        <h2 className="relative w-fit translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] [font-family:'Orbitron',Helvetica] font-bold text-[#181818] text-[50px] text-center tracking-[1.50px] leading-[38px] whitespace-nowrap">
          Workshop Highlights
        </h2>

        <div className="flex flex-col items-start gap-[71px] relative self-stretch w-full">
          <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-[71px] lg:gap-[145px] relative self-stretch w-full">
            <div
              className="flex flex-col items-start gap-[23px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
              style={{ width: highlights[0].containerWidth }}
            >
              <img
                className={`relative ${highlights[0].iconWidth} ${highlights[0].iconHeight}`}
                alt="Community Jams icon"
                src={highlights[0].icon}
              />

              <p
                className={`relative ${highlights[0].descriptionWidth} [font-family:'Aeonik-Bold',Helvetica] font-normal text-[#181818] text-[25px] tracking-[0] leading-[25px]`}
              >
                <span className="font-[number:var(--SUBHEADING-font-weight)] leading-[var(--SUBHEADING-line-height)] font-SUBHEADING [font-style:var(--SUBHEADING-font-style)] tracking-[var(--SUBHEADING-letter-spacing)] text-[length:var(--SUBHEADING-font-size)]">
                  {highlights[0].title}
                </span>

                <span className="[font-family:'Aeonik-Regular',Helvetica] leading-[35px]">
                  {highlights[0].description}
                </span>
              </p>
            </div>

            <div
              className="flex flex-col items-start gap-[23px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
              style={{ width: highlights[1].containerWidth }}
            >
              <img
                className={`relative ${highlights[1].iconWidth} ${highlights[1].iconHeight}`}
                alt="Mentorship Circles icon"
                src={highlights[1].icon}
              />

              <p
                className={`relative ${highlights[1].descriptionWidth} [font-family:'Aeonik-Bold',Helvetica] font-normal text-[#181818] text-[25px] tracking-[0] leading-[25px]`}
              >
                <span className="font-[number:var(--SUBHEADING-font-weight)] leading-[var(--SUBHEADING-line-height)] font-SUBHEADING [font-style:var(--SUBHEADING-font-style)] tracking-[var(--SUBHEADING-letter-spacing)] text-[length:var(--SUBHEADING-font-size)]">
                  {highlights[1].title}
                </span>

                <span className="[font-family:'Aeonik-Regular',Helvetica] leading-[35px]">
                  {highlights[1].description}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-[71px] lg:gap-[145px] relative self-stretch w-full">
            <div
              className="flex flex-col items-start gap-[23px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
              style={{ width: highlights[2].containerWidth }}
            >
              <img
                className={`relative ${highlights[2].iconWidth} ${highlights[2].iconHeight}`}
                alt="Hands-on Learning icon"
                src={highlights[2].icon}
              />

              <p
                className={`relative ${highlights[2].descriptionWidth} [font-family:'Aeonik-Bold',Helvetica] font-normal text-[#181818] text-[25px] tracking-[0] leading-[25px]`}
              >
                <span className="font-[number:var(--SUBHEADING-font-weight)] leading-[var(--SUBHEADING-line-height)] font-SUBHEADING [font-style:var(--SUBHEADING-font-style)] tracking-[var(--SUBHEADING-letter-spacing)] text-[length:var(--SUBHEADING-font-size)]">
                  {highlights[2].title}
                </span>

                <span className="[font-family:'Aeonik-Regular',Helvetica] leading-[35px]">
                  {highlights[2].description}
                </span>
              </p>
            </div>

            <div
              className={`flex flex-col items-start gap-[23px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] ${highlights[3].containerWidth}`}
            >
              <img
                className={`relative ${highlights[3].iconWidth} ${highlights[3].iconHeight}`}
                alt="Expert Speakers icon"
                src={highlights[3].icon}
              />

              <p
                className={`relative ${highlights[3].descriptionWidth} [font-family:'Aeonik-Bold',Helvetica] font-normal text-[#181818] text-[25px] tracking-[0] leading-[25px]`}
              >
                <span className="font-[number:var(--SUBHEADING-font-weight)] leading-[var(--SUBHEADING-line-height)] font-SUBHEADING [font-style:var(--SUBHEADING-font-style)] tracking-[var(--SUBHEADING-letter-spacing)] text-[length:var(--SUBHEADING-font-size)]">
                  {highlights[3].title}
                </span>

                <span className="[font-family:'Aeonik-Regular',Helvetica] leading-[35px]">
                  {highlights[3].description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
