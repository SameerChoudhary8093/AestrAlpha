import { TrackType } from "@/types/data/tracks.types";

export const heading: string = "Choose Your Track";
export const byline: string = "(Or explore multiple, based on your clarity.)";

export const tracks: TrackType[] = [
  {
    id: 1,
    title: "Salesforce Ecosystem",
    description:
      "Admin, Flows, Automation, Org access, Real use-cases. Learn it all to become a Salesforce Guru.",
    image: {
      src: "/ChooseYourTrack/Mask group.png",
      alt: "",
      height: 240,
      width: 405,
    },
  },
  {
    id: 2,
    title: "UI/UX & Product Design",
    description:
      "Figma, design systems, research, real product design projects.",
    image: {
      src: "/ChooseYourTrack/Mask group-2.png",
      alt: "",
      height: 240,
      width: 405,
    },
  },
  {
    id: 3,
    title: "AI & Emerging Technologies",
    description:
      "Prompting, Agents, workflows, AI automation, real use-cases.",
    image: {
      src: "/ChooseYourTrack/Mask group-4.png",
      alt: "",
      height: 240,
      width: 405,
    },
  },
  {
    id: 4,
    title: "Full-Stack & No-Code",
    description:
      "HTML/CSS/JS basics, APIs, Webflow, Framer builds.",
    image: {
      src: "/ChooseYourTrack/Mask group-1.png",
      alt: "",
      height: 240,
      width: 405,
    },
  },
  {
    id: 5,
    title: "Data & Analytics",
    description:
      "SQL, dashboards, insights, data storytelling.",
    image: {
      src: "/ChooseYourTrack/Mask group-3.png",
      alt: "",
      height: 240,
      width: 405,
    },
  },
  {
    id: 6,
    title: "Branding & Creative",
    description:
      "Identity design, content creation, campaigns, video editing.",
    image: {
      src: "/ChooseYourTrack/Mask group-5.png",
      alt: "",
      height: 240,
      width: 405,
    },
  },
];
