import ContactPage from "@/components/ui/Contact/contact";
import ContactPage02 from "@/components/ui/Contact/contact02";

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
        code: '',
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
        code: '',
        usage: '',
    },


]
