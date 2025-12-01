import {
  FooterLink,
  FooterContactDetails,
  LegalLink,
} from "@/types/data/footer.types";
import { SocialMediaLink } from "@/types/common.types";

import XIcon from "@/components/icons/X";
import FacebookIcon from "@/components/icons/Facebook";
import LinkedInIcon from "@/components/icons/LinkedIn";
import InstagramIcon from "@/components/icons/Instagram";

export const FooterLinks: FooterLink[] = [
  { label: "Link One", href: "/link-one" },
  { label: "Link Two", href: "/link-two" },
  { label: "Link Three", href: "/link-three" },
  { label: "Link Four", href: "/link-four" },
  { label: "Link Five", href: "/link-five" },
  { label: "Link Six", href: "/link-six" },
  { label: "Link Seven", href: "/link-seven" },
  { label: "Link Eight", href: "/link-eight" },
  { label: "Link Nine", href: "/link-nine" },
  { label: "Link Ten", href: "/link-ten" },
];

export const FooterContact: FooterContactDetails = {
  address: "123 Aestr St, Innovation City, Country",
  phone: "1800 123 4567",
  email: "info@aestralpha.com",
};

export const SocialMediaLinks: SocialMediaLink[] = [
  {
    platform: "Facebook",
    icon: <FacebookIcon className="h-8 w-auto" />,
    url: "https://facebook.com/aestralpha",
  },
  {
    platform: "Instagram",
    icon: <InstagramIcon className="h-8 w-auto" />,
    url: "https://instagram.com/aestralpha",
  },
  {
    platform: "Twitter",
    icon: <XIcon className="h-8 w-auto" />,
    url: "https://twitter.com/aestralpha",
  },
  {
    platform: "LinkedIn",
    icon: <LinkedInIcon className="h-8 w-auto" />,
    url: "https://linkedin.com/company/aestralpha",
  },
];

export const LegalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const LegalText: string = `© ${new Date().getFullYear()} Aestr Alpha. All rights reserved.`;
