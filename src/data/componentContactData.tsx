import ContactPage from "@/components/ui/Contact/contact";
import ContactPage02 from "@/components/ui/Contact/contact02";
import { contactCode01, contactCode02 } from "@/components/ui/Contact/contactCode";

export const ComponentContactData = [
    {
        id: 1,
        title: 'Contact 01',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <ContactPage />
            </div>
        ),
        code: contactCode01,
        usage: '',
    },
    {
        id: 2,
        title: 'Contact 02',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <ContactPage02 />
            </div>
        ),
        code: contactCode02,
        usage: '',
    },


]
