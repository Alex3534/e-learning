import { Card, ProductCard } from "@/components/ui/Card/card";

export const ComponentCardData = [
  {
    id: 1,
    title: 'Product Card',
    description: 'Une carte de produit avec une image, un titre, une description et un bouton d\'action.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex justify-center items-center p-4">
        <ProductCard />
      </div>
    ),
    code: '',
    usage: '',
  },
  {
    id: 2,
    title: 'Product Card',
    description: 'Une carte de produit avec une image, un titre, une description et un bouton d\'action.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex justify-center items-center p-4">
        <Card />
      </div>
    ),
    code: '',
    usage: '',
  },

]
