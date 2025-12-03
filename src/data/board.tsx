import { BoardMember } from "@/types/data/board.types";
import LinkedInIcon from "@/components/icons/LinkedIn";
import XIcon from "@/components/icons/X";

export const heading = "Board Members";
export const byline =
  "Meet the visionaries steering our organization towards success.";

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Dr. Shudhanshu",
    position: "Chairperson",
    photo: {
      src: "/BoardMembers/Dr.Sudhanshu.svg",
      alt: "",
      height: 395,
      width: 395,
    },
    bio: "Alice has over 20 years of experience in corporate governance and strategic planning.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/dr-sudhanshu-62ba2958/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
    ],
  },
  {
    id: 2,
    name: "Kanishk Sharma",
    position: "Chairperson",
    photo: {
      src: "/BoardMembers/Kanishk.jpg",
      alt: "",
      height: 395,
      width: 395,
    },
    bio: "Alice has over 20 years of experience in corporate governance and strategic planning.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/kanishk-sharma-195aa2178/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
      
    ],
  },
  {
    id: 3,
    name: "Dr. Arastu Sharma",
    position: "Chairperson",
    photo: {
      src: "/BoardMembers/Arastu.svg",
      alt: "",
      height: 395,
      width: 395,
    },
    bio: "Alice has over 20 years of experience in corporate governance and strategic planning.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/drarastu/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
    ],
  },

  {
    id: 4,
    name: "Satyanand Gora",
    position: "Chairperson",
    photo: {
      src: "/BoardMembers/satya.jpeg",
      alt: "",
      height: 395,
      width: 395,
    },
    bio: "Alice has over 20 years of experience in corporate governance and strategic planning.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/satyanand-gora-06719b30b/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
      
    ],
  },
  {
    id: 5,
    name: "Himanshu Varshney",
    position: "Chairperson",
    photo: {
      src: "/BoardMembers/himanshu.png",
      alt: "",
      height: 395,
      width: 395,
    },
    bio: "Alice has over 20 years of experience in corporate governance and strategic planning.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/himanshu-varshney-58b143a8/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
      
    ],
  },
  {
    id: 6,
    name: "Rishabh Seghal",
    position: "Chairperson",
    photo: {
      src: "/BoardMembers/rishab.png",
      alt: "",
      height: 395,
      width: 395,
    },
    bio: "Alice has over 20 years of experience in corporate governance and strategic planning.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/rishabh-sehgal-a68b771b2/",
        icon: <LinkedInIcon className="h-8 w-auto" />,
      },
      
    ],
  },
  
];

export const buttonText = "View All Members";
