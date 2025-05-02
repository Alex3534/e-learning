import Tooltip from "@/components/ui/tooltips/tooltips";

export const ComponentTooltipstData = [
    {
        id: 1,
        title: '',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="p-4">
                <Tooltip content="Tooltip text" position="top" className="bg-blue-200">
                    <button className="bg-blue-500 text-white p-2 rounded">Hover me</button>
                </Tooltip>
            </div>
        ),
        code: '',
        usage: '',
    },

]
