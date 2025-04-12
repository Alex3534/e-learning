export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  pageName: string;
  description?: string;
  showBackground?: boolean;
  textWhite?: boolean;
  className?: string;
}