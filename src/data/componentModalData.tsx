import ModalExample from "@/components/ui/Modal/modal";
import { modalCode } from "@/components/ui/Modal/modalCode";

export const ComponentModaltData = [
    {
        id: 1,
        title: '',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <ModalExample />
            </div>
        ),
        code: modalCode,
        usage: '',
    },

]
