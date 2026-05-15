// NAV BAR
export interface Navigation {
  title: string;
  id: string;
  href: string;
}

// ICON
export interface Svg {
  viewBox: string;
  path: string;
}

// SKILLSET

export interface Skillset {
  id: string;
  title: string;
  description: string;
  icon: Svg;
  skillList: SkillItem[];
}

export interface SkillItem {
  id: string;
  name: string;
  icon: Svg;
}
