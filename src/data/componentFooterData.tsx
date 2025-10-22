import { Footer02, Footer03 } from "@/components/ui/Footer/footer";
import { footerCode02, footerCode03 } from "@/components/ui/Footer/footerCode";

export const ComponentFootertData = [
    {
        id: 1,
        title: 'Footer 01',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Footer03 />
            </div>
        ),
        code: footerCode03,
        usage: '',
    },
    {
        id: 2,
        title: 'Footer 02',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Footer02 />
            </div>
        ),
        code: footerCode02,
        usage: '',
    },

]
