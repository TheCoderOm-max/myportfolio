export interface NavLink {
  label: string;
  href: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  description: string;
  tags?: string[];
  past?: boolean;
}

export interface ProjectDetail {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  challenges: string;
  results: string;
  lessons: string;
}

export interface Project {
  key: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  detail: ProjectDetail;
}

export interface FutureProject {
  title: string;
  description: string;
  icon: 'brain' | 'openSource';
}

export interface Publication {
  title: string;
  venue: string;
  publisher: string;
  year: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CPStat {
  platform: string;
  stat: string;
  label: string;
  url: string;
  icon: 'code' | 'chess' | 'hourglass' | 'github';
  available: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'book' | 'mic' | 'flask' | 'gitBranch' | 'certificate';
  future?: boolean;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: 'mail' | 'linkedin' | 'github' | 'code' | 'chess' | 'mapPin';
}
