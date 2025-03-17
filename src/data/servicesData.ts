export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: "web-writing",
    title: "Rédaction Web",
    description: "Création de contenus optimisés SEO pour votre présence en ligne",
    icon: "fluent:document-text-24-regular",
    features: [
      "Articles de blog optimisés SEO",
      "Contenus pour réseaux sociaux",
      "Descriptions de produits",
      "Newsletters et emails"
    ]
  },
  {
    id: "content-strategy",
    title: "Stratégie de Contenu",
    description: "Développement de stratégies de contenu personnalisées",
    icon: "fluent:target-24-regular",
    features: [
      "Analyse de votre audience",
      "Planification éditoriale",
      "Stratégie de mots-clés",
      "Suivi des performances"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Solutions complètes pour votre boutique en ligne",
    icon: "fluent:cart-24-regular",
    features: [
      "Optimisation des fiches produits",
      "Stratégie de conversion",
      "Email marketing",
      "Analyse des performances"
    ]
  },
  {
    id: "formation",
    title: "Formation",
    description: "Formations personnalisées en rédaction web et stratégie digitale",
    icon: "fluent:book-24-regular",
    features: [
      "Ateliers pratiques",
      "Coaching personnalisé",
      "Ressources exclusives",
      "Suivi post-formation"
    ]
  }
];