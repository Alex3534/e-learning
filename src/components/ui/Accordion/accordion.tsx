"use client";
// npm install framer-motion react-icons

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItem {
    id: number;
    title: string;
    content: string;
}

const items: AccordionItem[] = [
    {
        id: 1,
        title: "What is Next.js?",
        content:
            "Next.js is a modern React framework that enables server-side rendering, static site generation, and performance optimization.",
    },
    {
        id: 2,
        title: "Why use Tailwind CSS?",
        content:
            "Tailwind allows for rapid UI development with reusable utility classes and excellent compatibility with React.",
    },
    {
        id: 3,
        title: "What about Framer Motion?",
        content:
            "Framer Motion makes animations in React simple and powerful with a declarative and fluid syntax.",
    },
];

export default function Accordion01() {
    const [active, setActive] = useState<number | null>(null);

    const toggle = (id: number) => {
        setActive(active === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 space-y-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                    {/* header */}
                    <button
                        onClick={() => toggle(item.id)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                    >
                        {item.title}
                        <motion.div
                            animate={{ rotate: active === item.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                    </button>

                    {/* content */}
                    <AnimatePresence initial={false}>
                        {active === item.id && (
                            <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-5 pb-4 text-gray-600">{item.content}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
