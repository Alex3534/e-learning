export interface Component {
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
}

export type ComponentCategory = 'Basic' | 'Navigation' | 'Form' | 'Layout' | 'Data Display' | 'all';

export interface ComponentProperty {
  name: string;
  type: string;
  default?: string | boolean;
  description: string;
  required?: boolean;
  values?: string[];
}

export interface ComponentItem {
  id: Number;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  component: React.ReactNode;
  code?: string;
  previewClassName?: string;
  properties?: ComponentProperty[];
  usage?: string;
}