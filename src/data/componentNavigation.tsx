import { Navigation01, Navigation02, Navigation03, Navigation04, Navigation05, Navigation06 } from "@/components/ui/Navigation/navigation";
import { Navigation01Code } from "@/components/ui/Navigation/navigationCode";

export const NavigationComponent = [

    {
        id: 1,
        title: 'Navigation 01',
        description: 'Une barre de navigation réactive et élégante, dotée d\'un fond en dégradé bleu et émeraude. Elle propose des liens de menu cliquables avec des effets de hover animés. Sur les petits écrans, elle se transforme en menu hamburger mobile avec une animation fluide pour afficher les liens.',
        category: 'Navigation',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation01 />
            </div>
        ),
        code: Navigation01Code,
        usage: '',
    },
    {
        id: 2,
        title: 'Navigation 02',
        description: "Barre de navigation moderne avec menu déroulant, mode sombre, recherche intégrée et responsive design. Convient parfaitement pour des sites d'entreprise ou des applications web avancées.",
        category: 'Navigation',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation02 />
            </div>
        ),
        code: '',
        usage: '',
    },
    
    {
        id: 3,
        title: 'Navigation 03',
        description: 'Composant de barre de navigation principale pour une boutique en ligne.Il gère à la fois l\'affichage desktop et mobile avec une navigation responsive.',
        category: 'Navigation',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation03 />
            </div>
        ),
        code: '',
        usage: '',
    },
    
    {
        id: 4,
        title: 'Navigation 04',
        description: '',
        category: 'Navigation',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation04 />
            </div>
        ),
        code: '',
        usage: '',
    },
    
    {
        id: 5,
        title: 'Navigation 05',
        description: '',
        category: 'Navigation',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation05 />
            </div>
        ),
        code: '',
        usage: '',
    },
    
    {
        id: 6,
        title: 'Navigation 06',
        description: '',
        category: 'Navigation',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation06 />
            </div>
        ),
        code: '',
        usage: '',
    },
]