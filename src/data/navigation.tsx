import { NavItem } from "@/types/data/navigation.types";

export const NavigationLinks: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Tracks", href: "/#track" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Ambassador", href: "/#ambassador" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact Us", href: "/#footer" },
];

// Workshop page specific navigation (used on /Workshop)
export const TicketNavigationLinks: NavItem[] = [
  { label: "Home", href: "#tickets" },
  { label: "Agenda", href: "#agenda" },
  { label: "Workshops", href: "#workshops" },
  { label: "Gallery", href: "#gallery" },
];

export const NavigationButton: string = "Attend The Workshop";
