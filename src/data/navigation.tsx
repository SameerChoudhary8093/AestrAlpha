import { NavItem } from "@/types/data/navigation.types";

export const NavigationLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#track" },
  { label: "Gallery", href: "#gallery" },
  { label: "Ambassador", href: "#ambassador" },
  { label: "Contact Us", href: "#footer" },
];

// Ticket page specific navigation (used on /Ticket)
export const TicketNavigationLinks: NavItem[] = [
  { label: "Home", href: "#tickets" },
  { label: "Agenda", href: "#agenda" },
  { label: "Workshops", href: "#track" },
  { label: "Speakers", href: "#speakers" },
  { label: "Buy Tickets", href: "https://finance.gyanvihar.org/aestr-alpha" },
];

export const NavigationButton: string = "Attend The Workshop";
