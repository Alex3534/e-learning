export interface Template {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'ecommerce' | 'portfolio' | 'business' | 'sport';
  image: string;
  demoUrl: string;
  price: number | string;
  features: string[];
}