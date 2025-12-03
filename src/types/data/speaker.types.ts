import { ImageType, SocialMediaLink } from "@/types/common.types";

export interface Speakers {
  id: number;
  name: string;
  position: string;
  bio: string;
  photo: ImageType;
  social: SocialMediaLink[];
}
