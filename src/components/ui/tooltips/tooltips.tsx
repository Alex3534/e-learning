import React, { useState } from 'react';

// Define tooltip position type
type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

// Define tooltip props interface
interface TooltipProps {
    content: string;
    position?: TooltipPosition;
    children: React.ReactNode;
    className?: string;
}

// Define position classes mapping
const positionClasses: Record<TooltipPosition, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2'
};

const Tooltip: React.FC<TooltipProps> = ({
    content,
    position = 'top',
    children,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <div
                className={`
                    absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg
                    transition-opacity duration-200 whitespace-nowrap
                    ${positionClasses[position]}
                    ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    ${className}
                `}
                role="tooltip"
            >
                {content}
                <div
                    className={`
                        absolute w-2 h-2 bg-gray-900 transform rotate-45
                        ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}
                        ${position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}
                        ${position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}
                        ${position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}
                    `}
                />
            </div>
        </div>
    );
};

export default Tooltip;
