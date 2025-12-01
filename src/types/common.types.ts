import { ReactNode } from "react";

export interface ImageType {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export interface SocialMediaLink {
  platform: string;
  icon: ReactNode;
  url: string;
}
