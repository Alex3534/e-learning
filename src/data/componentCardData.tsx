import { Card, HorizontalProductCard, HorizontalProductCardFullWidth, ProductCard } from "@/components/ui/Card/card";
import { CardCode, HorizontalProductCardCode, HorizontalProductCardCode02, ProductCardCode } from "@/components/ui/Card/cardCode";

type ComponentCardDataType = {
  id: number;
  title: string;
  category: string;
  description?: string;
  tags: string[];
  component: JSX.Element;
  code: string;
  usage: string;
}

export const ComponentCardData: ComponentCardDataType[] = [
  {
    id: 1,
    title: 'Product Card',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex justify-center items-center p-4">
        <ProductCard />
      </div>
    ),
    code: ProductCardCode,
    usage: '',
  },
  {
    id: 3,
    title: 'Card en layout horizontal',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex justify-center items-center p-4">
        <HorizontalProductCardFullWidth />
      </div>
    ),
    code: HorizontalProductCardCode,
    usage: '',
  },
  {
    id: 4,
    title: 'Mini card en layout horizontal',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex justify-center items-center p-4">
        <HorizontalProductCard />
      </div>
    ),
    code: HorizontalProductCardCode02,
    usage: '',
  },
  {
    id: 2,
    title: 'Simple card',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex justify-center items-center p-4">
        <Card />
      </div>
    ),
    code: CardCode,
    usage: '',
  },

]
