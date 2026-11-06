export interface NavItem {
  label: string;
  href: string;
}

export interface InfoCard {
  label: string;
  value: string;
  subValue?: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  description?: string;
  category: 'core' | 'tools' | 'exploring';
  badge?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  iconName: string;
  period?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
  visible: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    wordmark: string;
    greeting: string;
    headline: string;
    mainHeading: string;
    shortBio: string;
    college: string;
    degree: string;
    email: string;
    location: string;
    resumeUrl: string;
    hasResume: boolean;
    profilePhotoUrl?: string; // Optional real image path; avatar fallback used if empty
  };
  navigation: NavItem[];
  about: {
    heading: string;
    paragraphs: string[];
    infoCards: InfoCard[];
  };
  skills: {
    heading: string;
    description: string;
    items: SkillItem[];
  };
  projects: {
    heading: string;
    description: string;
    items: ProjectItem[];
  };
  activities: {
    heading: string;
    description: string;
    items: ActivityItem[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    formspreeEndpoint: string;
    socialLinks: SocialLink[];
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

