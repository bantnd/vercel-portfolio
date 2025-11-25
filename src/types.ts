import type { ImageMetadata } from "astro";

export interface Header {
  logoTitle: string;
}

export interface Footer {
  content: string;
}

interface IconLink {
  icon: string;
  iconUrl?: string;
  href: string;
}

interface WorkExperience {
  title: string;
  timeline: string;
  company: string;
  description: string;
}

interface Education {
  title: string;
  timeline: string;
  institution: string;
  description: string;
}

interface TechStack {
  name: string;
  icon: string;
}

interface TechStackCategories {
  databases: TechStack[];
  languages: TechStack[];
  tools: TechStack[];
}

export interface About {
  headLine: string;
  tagLine: string;
  profilePic: ImageMetadata;
  description: string;
  links: IconLink[];
  resumeHref: string;
  workExperience: WorkExperience[];
  education: Education[];
  getInTouch: string;
  techStack: TechStackCategories;
}

export interface Project {
  logoImage: ImageMetadata | string;
  title: string;
  techs: string[];
  description: string;
  sourceHref?: string;
  liveHref?: string;
}
