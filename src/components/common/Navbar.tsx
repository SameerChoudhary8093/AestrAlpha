"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AestrIcon from "@/components/icons/Aestr";
import { NavigationLinks, TicketNavigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const currentNavLinks = pathname === "/Workshop" ? TicketNavigationLinks : NavigationLinks;

  return (
    <nav
      className="sticky top-[36px] z-50 w-[calc(100%-64px)] max-w-[1376px] mx-auto mt-[36px] h-[72px] rounded-[10px] px-[33px] py-[16px] flex items-center justify-between"
      style={{
        border: "1px solid transparent",
        borderRadius: "10px",
        background: "linear-gradient(#181818, #181818) padding-box, linear-gradient(91.07deg, #D8F602 -79.46%, #181818 43.53%) border-box",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Aestr Home"
        className="shrink-0 text-[var(--primary-color)]"
        onClick={() => setIsOpen(false)}
      >
        <AestrIcon
          className="h-auto"
          style={{
            width: "224.299px",
            height: "24px",
            opacity: 1,
            transform: "rotate(0deg)"
          }}
        />
      </Link>

      {/* Desktop Menu - Custom Breakpoint for ~1350px width */}
      <div className="hidden min-[1350px]:flex items-center">
        {/* Links Section with specific margins and gap */}
        <div className="flex items-center gap-[32px] ml-[173.7px] w-[661px]">
          {currentNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-orbitron font-extrabold text-[18px] leading-[150%] text-[#EAF0BD] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Download Brochure Button */}
        <button
          className="ml-[32px] w-[219px] h-[40px] bg-[#D8F602] text-[#181818] font-orbitron font-black text-[16px] leading-[150%] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[4px] rounded-bl-[4px] px-[20px] pt-[8px] pb-[8px] flex items-center justify-center hover:bg-opacity-90 transition-all whitespace-nowrap"
        >
          Download Brochure
        </button>
      </div>

      {/* Mobile Toggle Button - Show below 1350px */}
      <button
        className="min-[1350px]:hidden text-[#EAF0BD] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111111] border-t border-white/10 shadow-xl flex flex-col items-center gap-6 py-8 px-4 rounded-b-[10px] min-[1350px]:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          {currentNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-orbitron font-bold text-[18px] text-[#EAF0BD]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="w-full max-w-xs h-[40px] bg-[#D8F602] text-[#181818] font-orbitron font-black text-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[4px] rounded-bl-[4px] flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            Download Brochure
          </button>
        </div>
      )}
    </nav>
  );
}