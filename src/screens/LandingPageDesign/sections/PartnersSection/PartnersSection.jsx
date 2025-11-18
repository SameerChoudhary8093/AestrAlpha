import React from "react";

const footerLinks = {
  columnOne: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"],
  columnTwo: ["Link Six", "Link Seven", "Link Eight", "Link Nine", "Link Ten"],
};

export const PartnersSection = () => {
  return (
    <footer className="w-full relative">
      <section className="flex flex-col w-full items-center gap-12 px-16 py-20 bg-[#d7f601] translate-y-[-1rem] animate-fade-in opacity-0">
        <h2 className="w-fit [font-family:'Orbitron',Helvetica] font-bold text-black text-[50px] tracking-[0] leading-[75px] whitespace-nowrap">
          Our Partners
        </h2>

        <img
          className="flex-[0_0_auto]"
          alt="Partner logos"
          src="https://c.animaapp.com/mi4w2qmhW88gPU/img/content.svg"
        />
      </section>

      <section className="flex flex-col gap-20 px-16 py-20 bg-[#181818] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex w-full items-start gap-16">
          <div className="flex flex-col w-[864px] items-start gap-8">
            <img
              className="w-[63px] h-[27px]"
              alt="Logo"
              src="https://c.animaapp.com/mi4w2qmhW88gPU/img/logo.svg"
            />

            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="font-text-small-semibold font-[number:var(--text-small-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-small-semibold-font-size)] tracking-[var(--text-small-semibold-letter-spacing)] leading-[var(--text-small-semibold-line-height)] [font-style:var(--text-small-semibold-font-style)]">
                  Address:
                </p>

                <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#d7f601] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                  Level 1, 12 Sample St, Sydney NSW 2000
                </p>
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <p className="font-text-small-semibold font-[number:var(--text-small-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-small-semibold-font-size)] tracking-[var(--text-small-semibold-letter-spacing)] leading-[var(--text-small-semibold-line-height)] [font-style:var(--text-small-semibold-font-style)]">
                  Contact:
                </p>

                <address className="not-italic font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]">
                  1800 123 4567
                  <br />
                  info@relume.io
                </address>
              </div>

              <img
                className="flex-[0_0_auto]"
                alt="Social media links"
                src="https://c.animaapp.com/mi4w2qmhW88gPU/img/social-links.svg"
              />
            </div>
          </div>

          <nav className="flex items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-3 flex-1">
              {footerLinks.columnOne.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-full font-text-regular-semibold font-[number:var(--text-regular-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-regular-semibold-font-size)] tracking-[var(--text-regular-semibold-letter-spacing)] leading-[var(--text-regular-semibold-line-height)] [font-style:var(--text-regular-semibold-font-style)] transition-opacity hover:opacity-80"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-start gap-3 flex-1">
              {footerLinks.columnTwo.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-full font-text-regular-semibold font-[number:var(--text-regular-semibold-font-weight)] text-[#d7f601] text-[length:var(--text-regular-semibold-font-size)] tracking-[var(--text-regular-semibold-letter-spacing)] leading-[var(--text-regular-semibold-line-height)] [font-style:var(--text-regular-semibold-font-style)] transition-opacity hover:opacity-80"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="w-full h-px bg-[#d7f601]" />

          <div className="flex items-start justify-between w-full">
            <p className="w-fit font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#d7f601] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              Aestr Alpha All right reserved.
            </p>

            <nav className="flex gap-6 items-start">
              <a
                href="#"
                className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)] transition-opacity hover:opacity-80"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)] transition-opacity hover:opacity-80"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
};
