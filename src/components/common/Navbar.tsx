"use client";

import { useState } from "react";
import Link from "next/link";
import AestrIcon from "@/components/icons/Aestr";
import { NavigationLinks, NavigationButton } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-white/10">
      <div className="flex flex-row justify-between items-center px-6 py-4 md:px-8">
        {/* --- Logo --- */}
        <Link
          href="/"
          aria-label="Aestr Home"
          className="shrink-0 text-(--primary-color)"
          onClick={() => setIsOpen(false)}
        >
          {/* Adjusted width for mobile (w-32) vs desktop (w-48) */}
          <AestrIcon className="w-32 md:w-48 h-auto" />
        </Link>

        {/* --- Desktop Menu (Hidden on Mobile) --- */}
        <div className="hidden md:flex flex-row items-center justify-center gap-6">
          {NavigationLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="nav-link text-sm lg:text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://aestr-alpha-6vl6.vercel.app/"
            className="button-primary text-sm lg:text-base"
          >
            {NavigationButton}
          </Link>
        </div>

        {/* --- Mobile Menu Button (Hamburger) --- */}
        <button
          className="md:hidden text-(--primary-color) focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close Icon (X)
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
            // Hamburger Icon
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
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {/* Renders only when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 shadow-xl flex flex-col items-center gap-6 py-8 px-4 animate-in fade-in slide-in-from-top-5 duration-200">
          {NavigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-lg font-medium"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://aestr-alpha-6vl6.vercel.app/"
            className="button-primary w-full justify-center max-w-xs mt-2"
            onClick={() => setIsOpen(false)}
          >
            {NavigationButton}
          </Link>
        </div>
      )}
    </nav>
  );
}