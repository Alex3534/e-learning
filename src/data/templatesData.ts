import { Template } from '@/types/template';

export const templates: Template[] = [
  {
    id: 'template-1',
    title: 'Madafit template',
    description: 'MadaFit est un template épuré et moderne conçu pour les passionnés de sport et de bien-être. Avec son design minimaliste, il met en avant votre contenu pour offrir une lecture fluide et immersive.',
    category: 'sport',
    image: '/images/templates/sport/madafit.jpg',
    demoUrl: '/demo/blog-template',
    price: 'Gratuit',
    features: [
      'Interface responsive et optimisée',
      'SEO optimisé',
      'Mode sombre',
      'Performance optimisée',
    ],
  },
  {
    id: 'template-2',
    title: 'E-commerce Modern',
    description: 'Solution complète pour votre boutique en ligne',
    category: 'ecommerce',
    image: '/images/templates/e-commerce/horizon-shop.png',
    demoUrl: '/demo/ecommerce-template',
    price: "24 $",
    features: [
      'Panier d\'achat',
      'Paiement intégré',
      'Gestion des stocks',
      'Dashboard admin',
    ],
  },
  // Ajoutez d'autres templates selon vos besoins
];