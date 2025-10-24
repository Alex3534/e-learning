export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  pageName: string;
  description?: string;
  textWhite?: boolean;
  className?: string;
}