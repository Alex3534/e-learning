import Accordion01 from "@/components/ui/Accordion/accordion";
import { accordionCode01 } from "@/components/ui/Accordion/accordionCode";

export const ComponentAccordionData = [
    {
        id: 1,
        title: 'Accordion',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="p-4">
                <Accordion01 />
            </div>
        ),
        code: accordionCode01,
        usage: '',
    },

]
