export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  duration: string;
  techStack: string[];
  features: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  details: string[];
  contractType: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  certificateUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}
