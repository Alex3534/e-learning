
import React from 'react';
import { Metadata } from "next";
import Articles from '@/components/Blog/Articles';

export const metadata: Metadata = {
    title: "Comment se lancer dans l’e-commerce en ligne ?",
    description: "Découvrez comment créer et développer votre boutique en ligne : choix de plateforme, logistique, marketing et stratégies pour booster vos ventes sur Internet."
};
export default function Page() {
    return (
        <>
            <Articles />
        </>
    ); 
};
