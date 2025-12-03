import {
  FooterLink,
  FooterContactDetails,
  LegalLink,
} from "@/types/data/footer.types";
import { SocialMediaLink } from "@/types/common.types";

import LinkedInIcon from "@/components/icons/LinkedIn";
import InstagramIcon from "@/components/icons/Instagram";
import YoutubeIcon from "@/components/icons/Youtube";

export const FooterLinks: FooterLink[] = [
  // { label: "Ab", href: "/link-one" },
  // { label: "Link Two", href: "/link-two" },
  // { label: "Link Three", href: "/link-three" },
  // { label: "Link Four", href: "/link-four" },
  // { label: "Link Five", href: "/link-five" },

];

export const FooterContact: FooterContactDetails = {
  // address: "123 Aestr St, Innovation City, Country",
  phone: "9828781952",
  email: "info@aestralpha.com",
};

export const SocialMediaLinks: SocialMediaLink[] = [
 
  {
    platform: "Instagram",
    icon: <InstagramIcon className="h-8 w-auto" />,
    url: "https://www.instagram.com/aestr.alpha/",
  },
  {
    platform: "Youtube",
    icon: <YoutubeIcon className="h-8 w-auto" />,
    url: "https://www.youtube.com/@AestrAlpha",
  },
  {
    platform: "LinkedIn",
    icon: <LinkedInIcon className="h-8 w-auto" />,
    url: "https://www.linkedin.com/company/aestr-alpha",
  },
];

export const LegalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const LegalText: string = `© ${new Date().getFullYear()} Aestr Alpha. All rights reserved.`;
