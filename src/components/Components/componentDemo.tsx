import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ComponentDemoProps {
    title: string;
    description: string;
    component: React.ReactNode;
    code: string;
    componentClassname?: string;
    properties?: {
        name: string;
        type: string;
        default?: string;
        description: string;
    }[];
}

export const ComponentDemo = ({
    title,
    description,
    component,
    code,
    properties,
    componentClassname = "p-6"
}: ComponentDemoProps) => {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
            {/* En-tête */}
            <div className="border-b border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>

            {/* Zone de prévisualisation */}
            <div className={`${componentClassname} bg-gray-50 flex items-center justify-center}`}>
                <div className="w-full">
                    {component}
                </div>
            </div>

            {/* Contrôles */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
                <button
                    onClick={() => setShowCode(!showCode)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 
                     dark:hover:text-blue-300 transition-colors"
                >
                    {showCode ? 'Masquer le code' : 'Afficher le code'}
                </button>
                <button
                    onClick={copyCode}
                    className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                     transition-colors text-sm ${copied ? 'bg-green-700' : ''}`}
                >
                    {copied ? 'Copié !' : 'Copier le code'}
                </button>
            </div>

            {/* Code source */}
            {showCode && (
                <div className="border-t border-gray-200 dark:border-gray-700">
                    <div className="relative w-full max-w-screen-xl mx-auto" style={{ height: '600px' }}>
                        <SyntaxHighlighter
                            style={atomDark}
                            language="jsx"
                            customStyle={{
                                margin: 0,
                                padding: '1.5rem',
                                background: '#1a1a1a',
                                height: '100%',
                                overflow: 'auto',
                                borderRadius: 0
                            }}
                            wrapLines={true}
                            showLineNumbers={true}
                            lineNumberStyle={{
                                color: '#888',
                                minWidth: '2.5em'
                            }}
                            lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            )}

        </motion.div>
    );
};