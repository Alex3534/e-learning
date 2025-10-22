export const modalCode = (`
    
// app/components/modal.jsx

'use client'
// npm install framer-motion

import React, { useEffect, useCallback, memo, useState } from "react";
import { motion } from "framer-motion";

// Define size classes mapping
const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    full: "max-w-full"
};

// Define theme classes mapping
const themeClasses = {
    light: "bg-white text-gray-900",
    dark: "bg-gray-800 text-white"
};

const Modal = memo(({
    isOpen,
    onClose,
    title,
    children,
    size = "md",
    theme = "light",
    closable = true
}) => {
    useEffect(() => {
        let timeoutId;
        if (isOpen) {
            document.body.style.overflow = "hidden";
            timeoutId = setTimeout(() => {
                document.body.style.overflow = "hidden";
            }, 10);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleEscape = useCallback((e) => {
        if (e.key === "Escape" && closable) {
            onClose();
        }
    }, [closable, onClose]);

    useEffect(() => {
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [handleEscape]);

    const handleOverlayClick = useCallback((e) => {
        if (e.target === e.currentTarget && closable) {
            onClose();
        }
    }, [closable, onClose]);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4"
        >
            <div
                onClick={handleOverlayClick}
                className="w-full absolute top-0 left-0 h-full bg-black opacity-50"
            />
            <div
                className={\`relative w-full \${sizeClasses[size]} transform rounded-lg shadow-xl transition-all duration-300 \${themeClasses[theme]} \${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}\`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-300">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    {closable && (
                        <button
                            onClick={onClose}
                            className="rounded-lg p-1 hover:bg-gray-300"
                            aria-label="Close modal"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    )}
                </div>
                <div className="p-4">{children}</div>
            </div>
        </motion.div>
    );
});

Modal.displayName = "Modal";

// Usage Component
const ModalExample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-4">
            <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Open Modal
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Sample Modal"
                size="md"
                theme="light"
            >
                <div className="space-y-4">
                    <p>This is a sample modal content. You can put any content here.</p>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Close Modal
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ModalExample;



// app/page.jsx
import React from "react";
import ModalExample from "./components/modal";

export default function Home() {
  return (
    <React.Fragment>
      <ModalExample />

      // .....
    </React.Fragment>
  );
}
`).trim();