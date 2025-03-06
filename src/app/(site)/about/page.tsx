
import React from 'react';
import { Metadata } from "next";
import About from '@/components/About';

export const metadata: Metadata = {
    title: "À propos - Horizon Écrit",
    description: "Découvrez la mission de Horizon Écrit"
}
export default function Page() {
    return (
        <>
            <About />
        </>
    ); 
};
