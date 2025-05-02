import Alert from "@/components/ui/Alert/alert";

export const ComponentAlerttData = [
    {
        id: 1,
        title: '',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="p-4">
                <Alert type="success" message="Alert success"/>
                <Alert type="error" message="Alert error"/>
            </div>
        ),
        code: '',
        usage: '',
    },

]
