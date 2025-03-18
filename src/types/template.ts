export interface Template {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'ecommerce' | 'portfolio' | 'business' | 'sport';
  image: string;
  demoUrl: string;
  price: string | number;
  features: string[];
  gallery?: string[];
  technicalDetails?: {
    technologies: string[];
    support: string[];
    compatibility: string[];
  };
}