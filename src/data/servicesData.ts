export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  language?: string[] ;
}

export const servicesData: Service[] = [
  {
    id: "1",
    title: "Refonte de site web",
    description: "Donnez une nouvelle vie à votre site",
    icon: "fluent:document-text-24-regular",
    features: [
      "Modernisation du design et de l’expérience utilisateur",
      "Optimisation des performances et du SEO",
      "Adaptation aux nouveaux standards du web",
      "Intégration responsive (mobile, tablette, desktop)",
      "Intégration de fonctionnalités dynamiques (API, formulaires, bases de données)"
    ]
  },
  {
    id: "2",
    title: "Création de site web",
    description: "Du concept à la mise en ligne, nous construisons un site moderne et efficace",
    icon: "fluent:target-24-regular",
    features: [
      "Conception visuelle sur mesure",
      "Développement avec Next.js, TailwindCSS",
      "Autres: HTML, Css, Javascript, Node.js, PHP, Laravel, MySql",
      "Intégration de fonctionnalités dynamiques (API, formulaires, bases de données)",
      "Suivi des performances",
    ],
    language: [
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "HTML",
      "CSS",
      "Javascript",
      "Laravel",
      "PHP",
    ]
  },
  {
    id: "3",
    title: "Rédaction web",
    description: "Des mots qui captivent, informent et convertissent",
    icon: "fluent:cart-24-regular",
    features: [
      "Articles de blog optimisés SEO",
      "Textes de présentation et storytelling de marque",
      "Ton adapté à votre audience",
      "Fiches produits et contenus marketing"
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