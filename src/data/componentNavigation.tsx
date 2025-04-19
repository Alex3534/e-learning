import { LoginFromInput04 } from "@/components/ui/InputForm/loginFormInput";
import { Navigation01, Navigation02 } from "@/components/ui/Navigation/navigation";
import { Navigation01Code } from "@/components/ui/Navigation/navigationCode";

export const NavigationComponent = [

    {
        id: 1,
        title: 'Navigation 01',
        description: '',
        category: 'UI',
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
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <Navigation02 />
            </div>
        ),
        code: '',
        usage: '',
    },
]