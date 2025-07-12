import { LoginForm01Code, LoginForm02Code, LoginForm03Code, LoginForm04Code } from "@/components/ui/InputForm/loginFormCode";
import { LoginFromInput01, LoginFromInput02, LoginFromInput03, LoginFromInput04 } from "@/components/ui/InputForm/loginFormInput";
import { RegisterFormCode } from "@/components/ui/InputForm/registerFormCode";
import { RegisterFromInput01 } from "@/components/ui/InputForm/registerFormInput";
import { ComponentItem } from "@/types/component";

export const InputFormComponents: ComponentItem[] = [
    {
        id: 1,
        title: 'Login 01',
        description: '',
        category: 'Forms',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="flex gap-4 flex-wrap">
                <LoginFromInput01 />
            </div>
        ),
        code: LoginForm01Code,
        usage: '',
    },

    {
        id: 2,
        title: 'Login 02',
        description: 'Forms',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="flex gap-4 flex-wrap">
                <LoginFromInput02 />
            </div>
        ),
        code: LoginForm02Code,
        usage: '',
    },

    {
        id: 3,
        title: 'Login 03',
        description: '',
        category: 'Forms',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="flex gap-4 flex-wrap">
                <LoginFromInput03 />
            </div>
        ),
        code: LoginForm03Code,
        usage: '',
    },

    {
        id: 4,
        title: 'Login 04',
        description: '',
        category: 'Forms',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="flex gap-4 flex-wrap">
                <LoginFromInput04 />
            </div>
        ),
        code: LoginForm04Code,
        usage: '',
    },

    {
        id: 5,
        title: 'Register',
        description: '',
        category: 'Forms',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="flex gap-4 flex-wrap">
                <RegisterFromInput01 />
            </div>
        ),
        code: RegisterFormCode,
        usage: '',
    },
]