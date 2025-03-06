import React from "react";
import Link from "next/link";
import { BlogData } from "@/app/api/data";

const About = () => {
    return (
        <section className='text-center mt-20 bg-gray-100' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">

                <div className="p-8 text-start bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl py-4 font-bold">À propos de Horizon Écrit</h1>
                    <h4 className="text-2xl py-4 font-bold">🌍 Bienvenue dans mon petit coin d’inspiration, Horizon Écrit !</h4>
                    <p>
                        Si tu es ici, c’est que tu es curieux, en quête de savoir ou peut-être même d’un petit coup de pouce pour avancer dans tes projets. Et ça tombe bien, parce que c’est exactement pourquoi j’ai créé ce site.
                    </p>
                    <h4 className="text-2xl py-4 font-bold">💡 Pourquoi Horizon Écrit ?</h4>
                    <p>
                        Parce que j’ai toujours cru que les mots ont un pouvoir. Un pouvoir d’informer, d’inspirer et d’ouvrir de nouvelles perspectives. Que ce soit à travers la technologie, le commerce en ligne ou l’entrepreneuriat, je veux partager avec toi des idées, des expériences et des conseils qui peuvent vraiment faire la différence.
                    </p>
                    <ul className="list-disc py-4">
                        <span className="text-2xl py-4 font-bold">📖 Ce que tu trouveras ici :</span>
                        <li className="ml-20 mt-4">Des articles pensés pour t’aider à comprendre et avancer</li>
                        <li className="ml-20">Des analyses accessibles, sans jargon compliqué</li>
                        <li className="ml-20">Une envie sincère de partager et d’apprendre ensemble</li>
                    </ul>
                    <h4 className="text-2xl pb-4 font-bold">💬 Discutons !</h4>
                    <p>
                        Derrière cet écran, il y a moi, une personne comme toi, avec ses rêves, ses défis et ses passions. Alors si tu as une question, une idée ou juste envie d’échanger, n’hésite pas à m’écrire via la page <Link className="text-blue-600 underline font-bold" href={'./contact'}>Contact</Link>.
                    </p>
                    <p className="mt-10 font-bold">À très vite, et surtout, continue d’explorer et de croire en tes projets ! 🚀</p>
                </div>
            </div>
        </section>
    );
};

export default About;