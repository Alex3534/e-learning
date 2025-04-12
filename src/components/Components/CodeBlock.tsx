import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

interface CodeBlockProps {
    code: string;
    language: string;
    showCopyButton?: boolean;
}

export const CodeBlock = ({ code, language, showCopyButton = true }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="relative rounded-lg overflow-hidden">
            {showCopyButton && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 px-3 py-1 text-sm rounded-md 
                     bg-gray-700 text-white opacity-80 hover:opacity-100 
                     transition-opacity z-10"
                >
                    {copied ? 'Copié !' : 'Copier'}
                </motion.button>
            )}
            <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    background: '#000000', // Changed to black
                }}
                wrapLines={true}
                showLineNumbers={true} // Line numbers already enabled
                lineNumberStyle={{ color: '#888' }} // Added styling for line numbers
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
