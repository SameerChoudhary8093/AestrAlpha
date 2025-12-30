import { Speakers } from "@/types/data/speaker.types";
import LinkedInIcon from "@/components/icons/LinkedIn";

export const heading = "Our Mentors";
export const byline =
  "Meet the visionaries steering our organization towards success.";

export const speakers: Speakers[] = [
  {
    id: 1,
    name: "Chaitanaya Sethi",
    // Combining bio/title as per user request
    position: "Senior Salesforce Consultant Automation Testing & Business Analyst Enthusiast",
    photo: {
      src: "/FeaturesSpeakers/Chaitanya.svg",
      alt: "Chaitanaya Sethi",
      height: 395,
      width: 395,
    },
    bio: "", // No long bio provided
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/chaitanayasethi/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
    ],
  },
  {
    id: 2,
    name: "Shipra Ojha",
    position: "Certified Life Coach | ICF Certified Personality Development & Soft Skill Trainer",
    photo: {
      src: "/FeaturesSpeakers/Shipra.svg",
      alt: "Shipra Ojha",
      height: 395,
      width: 395,
    },
    bio: "",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/shipraojha/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
    ],
  },
  {
    id: 3,
    name: "Sanjay Gupta",
    position: "Founder & CEO | Career Architect | India's Renowned Salesforce Educator | Content Creator",
    photo: {
      src: "/FeaturesSpeakers/Sanjay.svg",
      alt: "Sanjay Gupta",
      height: 395,
      width: 395,
    },
    bio: "",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/sanjay-gupta-bb2a79bb/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
    ],
  },
];

export const buttonText = "View All Members";
