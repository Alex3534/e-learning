
import React from 'react';
import { Metadata } from "next";
import Contact from '@/components/Contact';

export const metadata: Metadata = {
    title: "Contactez-nous",
    description: "Contactez-nous pour toute question ou demande d'information."
};
export default function Page() {
    return (
        <>
            <Contact />
        </>
    ); 
};
