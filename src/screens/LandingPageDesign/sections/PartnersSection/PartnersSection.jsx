import React from "react";
import ALogo from "../../../../../Public/Alogo.svg";
import ELogo from "../../../../../Public/Elogo.svg";
import SLogo from "../../../../../Public/Slogo.svg";
import TLogo from "../../../../../Public/Tlogo.svg";
import RLogo from "../../../../../Public/Rlogo.svg";

const footerLinks = {
  columnOne: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"],
  columnTwo: ["Link Six", "Link Seven", "Link Eight", "Link Nine", "Link Ten"],
};

export const PartnersSection = () => {
  return (
    <footer id="contact" className="w-full relative partners-section">
      <section className="flex flex-col gap-10 px-16 pt-10 pb-20 bg-[#181818] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] partners-inner">
        <div className="flex w-full items-start gap-16 partners-top">
          <div className="flex flex-col w-[864px] items-start gap-8 partners-left">
            <div className="flex items-center gap-1">
              <img className="h-[16px] w-auto" src={ALogo} alt="A logo" />
              <img className="h-[16px] w-auto" src={ELogo} alt="E logo" />
              <img className="h-[16px] w-auto" src={SLogo} alt="S logo" />
              <img className="h-[16px] w-auto" src={TLogo} alt="T logo" />
              <img className="h-[16px] w-auto" src={RLogo} alt="R logo" />
            </div>

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

          <nav className="flex items-start gap-6 flex-1 partners-links">
            <div className="flex flex-col items-start gap-3 flex-1 partners-links-col">
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

        <div className="flex flex-col items-start gap-8 w-full partners-bottom">
          <div className="w-full h-px bg-[#d7f601]" />

          <div className="flex items-start justify-between w-full partners-bottom-row">
            <p className="w-fit font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#d7f601] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              Aestr Alpha All right reserved.
            </p>

            <nav className="flex gap-6 items-start">
              <a
                href="#"
                className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)] transition-opacity hover:opacity-80"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#d7f601] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)] transition-opacity hover:opacity-80"
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
