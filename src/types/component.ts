export interface Component {
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
}

export type ComponentCategory = 'Basic' | 'Navigation' | 'Form' | 'Layout' | 'Data Display' | 'all';