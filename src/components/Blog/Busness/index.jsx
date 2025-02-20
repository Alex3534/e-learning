"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const OnlineBusness = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <section id="courses" className="bg-gray-100">
            <div className="block lg:hidden">
                <button onClick={openModal}
                    id="toast-bottom-left"
                    class="fixed flex items-center text-blue-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-full bottom-6 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                    role="alert">
                    <Icon icon="mdi:information" style={{ fontSize: "55px" }} />
                </button>
            </div>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="rounded-lg p-8 z-10 w-11/12">
                        <div>
                            <div className="bg-white rounded-3xl shadow-lg w-full">
                                {/* Social Media Icons */}
                                <div className="flex justify-center items-center py-4 space-x-2">
                                    <a href="#" className="text-blue-500 flex justify-center">
                                        <Icon icon="mdi:facebook" className="w-10 h-10" />
                                    </a>
                                    <a href="#" className="text-blue-500 flex justify-center">
                                        <Icon icon="mdi:twitter" className="w-10 h-10" />
                                    </a>
                                    <a href="#" className="text-blue-500 flex justify-center">
                                        <Icon icon="mdi:linkedin" className="w-10 h-10" />
                                    </a>
                                </div>
                            </div>


                            {/* Sidebar Right */}
                            <div className="w-full mt-4">
                                <div
                                    className="bg-white p-8 rounded-3xl shadow-lg"
                                >
                                    <h2 className="text-xl font-bold mb-2">Lancez votre activité</h2>
                                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, excepturi?</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded w-full rounded-full">valider</button>
                                </div>
                                <div
                                    className="mt-4 bg-white rounded-3xl shadow-lg text-center p-8"
                                >
                                    <p className="mt-2">Abonnez-vous à la newsletter</p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-full mt-8">
                            Fermer
                        </button>
                    </div>
                </motion.div>
            )}
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 mt-20'>
                <div className="flex flex-col lg:flex-row md:justify-between w-full mx-auto px-0">
                    {/* Sidebar */}
                    <motion.div
                        className="w-full lg:w-20 lg:block hidden"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white rounded-3xl shadow-lg w-full">
                            {/* Social Media Icons */}
                            <div className="flex lg:flex-col justify-center space-y-4 py-8 space-x-2">
                                <a href="#" className="text-blue-500 flex justify-center">
                                    <Icon icon="mdi:facebook" className="w-10 h-10" />
                                </a>
                                <a href="#" className="text-blue-500 flex justify-center">
                                    <Icon icon="mdi:twitter" className="w-10 h-10" />
                                </a>
                                <a href="#" className="text-blue-500 flex justify-center">
                                    <Icon icon="mdi:linkedin" className="w-10 h-10" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        className="w-full lg:w-8/12 lg:px-5"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="shadow-lg rounded-3xl bg-white p-8">
                            {/* How to get started in online e-commerce */}
                            <div>
                                <h1 className="text-3xl font-bold">
                                    Comment se lancer dans l’e-commerce en ligne ?
                                </h1>
                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-gray-500">Il y a 1jour</span>
                                    <span className="text-gray-500">• 200 vues</span>
                                </div>
                                <div className="mt-4 p-0">
                                    <img
                                        src="/images/busness/1.jpg"
                                        alt="Business Image"
                                        className="rounded-xl custom-image"
                                    />
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold">
                                        1) .Qu’est-ce que l’e-commerce en ligne?
                                    </h4>
                                    <p className="mt-4">
                                        Derrière ce terme un peu technique se cache une réalité simple et profondément humaine : l’e-commerce, ou commerce en ligne, est avant tout une nouvelle façon de connecter les gens. Il s’agit d’acheter et de vendre des produits ou des services via Internet, mais c’est bien plus qu’une simple transaction. C’est une révolution qui a transformé la manière dont nous, consommateurs et entrepreneurs, interagissons au quotidien.
                                    </p>
                                    <p className="mt-4">
                                        Imaginez : vous êtes chez vous, un café à la main, et en quelques clics, vous pouvez acheter un cadeau pour un proche, commander un produit rare venant de l’autre côté du monde, ou même lancer votre propre boutique en ligne pour partager votre passion avec des clients du monde entier. L’e-commerce, c’est cette liberté d’accéder à ce dont vous avez besoin, 24 heures sur 24, sans frontières géographiques.
                                    </p>
                                    <p className="mt-4">
                                        Que ce soit à travers une boutique en ligne personnalisée, une marketplace comme Amazon, ou encore le dropshipping (où vous vendez des produits sans avoir à gérer de stock), l’e-commerce s’est imposé comme un pilier incontournable du commerce moderne. Mais au-delà des chiffres et des technologies, il reste avant tout une histoire de connexion, de confiance et de partage entre des personnes. Et c’est ce qui en fait une aventure aussi passionnante !
                                    </p>
                                </div>
                            </div>
                            {/* End how to get started in online e-commerce */}

                            {/* Finding an idea and validating its market */}
                            <div className="mt-8">
                                <div className="mt-4 p-0">
                                    <img
                                        src="/images/busness/4.png"
                                        alt="Business Image"
                                        className="rounded-xl custom-image"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-2xl font-bold mt-8">
                                        2) .Trouver une idée et valider son marché
                                    </h4>
                                    <p className="mt-4">
                                        Avant de vous lancer dans l’e-commerce, il est essentiel de bien réfléchir à votre idée et de vous assurer qu’elle répond à un véritable besoin. Voici comment procéder de manière simple et efficace :
                                    </p>
                                    <div className="mt-4 ml-8">
                                        <ul class="space-y-1 list-disc list-inside dark:text-gray-400">
                                            <li>
                                                <span className="text-lg font-bold">Choisissez un créneau porteur :</span>
                                                <p className="ml-6">
                                                    Plutôt que de viser un marché trop général, cherchez un angle spécifique. Par exemple, des produits tendances, des articles de niche ou des solutions qui répondent à des besoins précis. Pensez à ce qui vous passionne ou à ce qui manque autour de vous.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Analysez la concurrence :</span>
                                                <p className="ml-6">
                                                    Observez les acteurs déjà présents sur le marché. Qui sont les leaders ? Quels sont leurs points forts, mais aussi leurs faiblesses ? Peut-être que leur service client est lent ou que leurs produits manquent de personnalisation. C’est là que vous pouvez faire la différence.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Étudiez la demande :</span>
                                                <p className="ml-6">
                                                    Utilisez des outils comme Google Trends pour repérer les tendances, explorez les best-sellers sur Amazon, ou plongez dans les forums et réseaux sociaux pour comprendre ce que les gens recherchent. Quels problèmes rencontrent-ils ? Quels produits ou services aimeraient-ils trouver ? Ces informations vous aideront à affiner votre offre.
                                                </p>
                                            </li>
                                        </ul>

                                    </div>
                                    <p className="mt-4">
                                        En résumé, trouver une idée et valider son marché, c’est comme poser les fondations d’une maison. Prenez le temps de bien comprendre votre public et de repérer les opportunités. C’est la clé pour partir du bon pied et construire quelque chose de solide !
                                    </p>
                                </div>
                            </div>
                            {/*End finding an idea and validating its market */}

                            {/* Finding an idea and validating its market */}
                            <div className="mt-8">
                                <div className="mt-4 p-0">
                                    <img
                                        src="/images/busness/3.jpeg"
                                        alt="Business Image"
                                        className="rounded-xl custom-image"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-2xl font-bold mt-8">
                                        3) .Choisir un modèle économique adapté
                                    </h4>
                                    <p className="mt-4">
                                        Vendre en ligne offre une multitude de possibilités, et choisir le bon modèle économique est essentiel pour réussir. Voici les principales options à explorer, en fonction de vos objectifs et de vos ressources :
                                    </p>
                                    <div className="mt-4 ml-8">
                                        <ul class="space-y-1 list-disc list-inside dark:text-gray-400">
                                            <li>
                                                <span className="text-lg font-bold">Boutique en ligne propre :</span>
                                                <p className="ml-6">
                                                    Créez votre propre site e-commerce et gérez tout de A à Z : design, stock, logistique et service client. C’est idéal si vous souhaitez avoir un contrôle total sur votre marque et votre relation client. Des plateformes comme Shopify ou WooCommerce peuvent vous aider à démarrer facilement.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Marketplace :</span>
                                                <p className="ml-6">
                                                    Vendez sur des plateformes déjà établies comme Amazon, Etsy ou eBay. Ces marketplaces vous donnent accès à une audience massive, mais vous devez souvent partager une partie de vos revenus et respecter leurs règles. Parfait pour tester un produit ou toucher rapidement des clients.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Dropshipping :</span>
                                                <p className="ml-6">
                                                    Avec ce modèle, vous vendez des produits sans avoir à gérer de stock. Un fournisseur expédie directement les commandes à vos clients. C’est une option peu coûteuse pour démarrer, mais il faut bien choisir ses partenaires pour garantir la qualité et les délais de livraison.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Abonnement & services :</span>
                                                <p className="ml-6">
                                                    Proposez des paiements récurrents pour des produits ou services. Par exemple, une box mensuelle, un abonnement à des cours en ligne ou un coaching personnalisé. Ce modèle offre une source de revenus régulière et renforce la fidélité des clients.
                                                </p>
                                            </li>
                                        </ul>

                                    </div>
                                    <p className="mt-4">
                                        Chaque modèle a ses avantages et ses défis. L’important est de choisir celui qui correspond le mieux à vos compétences, à votre budget et à votre vision. Et n’oubliez pas : vous pouvez toujours commencer avec un modèle et évoluer vers un autre en fonction de vos besoins et de votre croissance. L’e-commerce, c’est avant tout une histoire de flexibilité et d’adaptation !
                                    </p>
                                </div>
                            </div>
                            {/* End finding an idea and validating its market */}

                            {/* Create an e-commerce site */}
                            <div className="mt-8">
                                <div className="mt-4 p-0">
                                    <img
                                        src="/images/busness/7.jpg"
                                        alt="Business Image"
                                        className="rounded-xl custom-image"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-2xl font-bold mt-8">
                                        4) .Créer un site e-commerce
                                    </h4>
                                    <p className="mt-4">
                                        Le choix de la plateforme est l’une des décisions les plus importantes pour votre projet e-commerce. Chaque option a ses avantages et s’adapte à des besoins spécifiques. Voici un aperçu des principales solutions :
                                    </p>
                                    <div className="mt-4 ml-8">
                                        <ul class="space-y-1 list-disc list-inside dark:text-gray-400">
                                            <li>
                                                <span className="text-lg font-bold">Shopify :</span>
                                                <p className="ml-6">
                                                    C’est la solution clé en main par excellence, parfaite pour les débutants. Avec Shopify, vous pouvez créer un site professionnel en quelques clics, sans avoir besoin de compétences techniques. La plateforme propose des modèles de design, des applications pour étendre les fonctionnalités, et une gestion simplifiée des stocks, des paiements et des livraisons. Idéal pour se lancer rapidement et sans stress.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">WooCommerce (WordPress) :</span>
                                                <p className="ml-6">
                                                    Si vous souhaitez plus de flexibilité et de contrôle, WooCommerce est une excellente option. C’est un plugin gratuit pour WordPress qui vous permet de transformer un site web en boutique en ligne. Vous pouvez personnaliser presque tout, mais cela demande un peu plus de connaissances techniques ou l’aide d’un développeur. Parfait pour ceux qui veulent une solution évolutive et personnalisable.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">PrestaShop / Magento :</span>
                                                <p className="ml-6">
                                                    Ces plateformes sont conçues pour les entreprises ayant des besoins plus complexes ou un volume de ventes important. Elles offrent des fonctionnalités avancées pour la gestion des produits, des stocks et des clients, mais nécessitent une expertise technique pour être bien exploitées. Si vous avez une équipe technique ou des ressources pour externaliser, ces solutions peuvent être très puissantes.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Développement sur mesure :</span>
                                                <p className="ml-6">
                                                    Pour les projets très spécifiques ou les grandes entreprises, un site e-commerce développé sur mesure peut être la meilleure option. En utilisant des technologies comme Laravel, Next.js ou d’autres frameworks, vous pouvez créer une plateforme entièrement adaptée à vos besoins. C’est l’idéal si vous avez des exigences uniques, mais cela demande un investissement en temps et en budget plus important.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Éléments essentiels du site e-commerce</span>
                                                <ul class="space-y-2 mt-2 text-left text-gray-500 dark:text-gray-400 ml-10">
                                                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                                        <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                        <span>Un design professionnel : Interface intuitive et responsive.</span>
                                                    </li>
                                                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                                        <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                        <span>Des fiches produits optimisées : Descriptions claires, images de qualité, prix affiché.</span>
                                                    </li>
                                                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                                        <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                        <span>Des moyens de paiement sécurisés : PayPal, Stripe, Mobile Money, virement bancaire.</span>
                                                    </li>
                                                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                                        <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                        <span>Une bonne gestion des stocks : Outils d’automatisation pour éviter les ruptures.</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                    <p className="mt-4">
                                        En résumé, le choix de la plateforme dépend de vos objectifs, de vos compétences techniques et de votre budget. Que vous optiez pour une solution clé en main comme Shopify ou une plateforme plus flexible comme WooCommerce, l’important est de choisir un outil qui vous permet de vous concentrer sur ce qui compte vraiment : votre business et vos clients.
                                    </p>
                                </div>
                            </div>
                            {/* End finding an idea and validating its market */}

                            {/* Attract customers and boost sales */}
                            <div className="mt-8">
                                <div className="mt-4 p-0">
                                    <img
                                        src="/images/busness/9.webp"
                                        alt="Business Image"
                                        className="rounded-xl custom-image"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-2xl font-bold mt-8">
                                        5) .Attirer des clients et booster les ventes
                                    </h4>
                                    <p className="mt-4">
                                        Une boutique en ligne ne se suffit pas à elle-même : pour réussir, il faut la promouvoir activement. Voici les stratégies clés pour attirer des clients et augmenter vos ventes :
                                    </p>
                                    <div className="mt-4 ml-8">
                                        <ul class="space-y-1 list-disc list-inside dark:text-gray-400">
                                            <li>
                                                <span className="text-lg font-bold">Référencement naturel (SEO) :</span>
                                                <p className="ml-6">
                                                    Optimisez votre site pour les moteurs de recherche en utilisant des mots-clés pertinents dans vos descriptions de produits, titres et balises. Un bon SEO vous aide à apparaître dans les résultats de recherche et à attirer du trafic gratuitement.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Publicité en ligne :</span>
                                                <p className="ml-6">
                                                    Utilisez des plateformes comme Google Ads, Facebook Ads ou TikTok Ads pour cibler un large public. Ces outils vous permettent de toucher des clients potentiels en fonction de leurs centres d’intérêt, de leur localisation ou de leur comportement en ligne.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Réseaux sociaux :</span>
                                                <p className="ml-6">
                                                    Développez une communauté active sur des plateformes comme Instagram, Facebook ou LinkedIn. Partagez du contenu engageant (photos, vidéos, stories) et interagissez avec votre audience pour créer un lien fort avec vos clients.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Influenceurs & partenariats :</span>
                                                <p className="ml-6">
                                                    Collaborez avec des influenceurs ou des blogs dans votre niche pour gagner en visibilité. Leur recommandation peut vous aider à toucher un public plus large et à renforcer la crédibilité de votre marque.
                                                </p>
                                            </li>
                                        </ul>

                                    </div>
                                    <p className="mt-4">
                                        En combinant ces stratégies, vous pouvez attirer plus de clients, augmenter vos ventes et faire grandir votre boutique en ligne. L’important est de rester cohérent et de tester différentes approches pour trouver ce qui fonctionne le mieux pour vous.
                                    </p>
                                </div>
                            </div>
                            {/* End attract customers and boost sales */}

                            {/* Analyze performance and adapt */}
                            <div className="mt-8">
                                <div className="mt-4 p-0">
                                    <img
                                        src="/images/busness/10.png"
                                        alt="Business Image"
                                        className="rounded-xl custom-image"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-2xl font-bold mt-8">
                                        6) .Analyser les performances et s’adapter
                                    </h4>
                                    <p className="mt-4">
                                        Pour faire grandir votre boutique en ligne, il est essentiel de mesurer vos résultats et d’ajuster votre stratégie en conséquence. Voici les étapes clés :
                                    </p>
                                    <div className="mt-4 ml-8">
                                        <ul class="space-y-1 list-disc list-inside dark:text-gray-400">
                                            <li>
                                                <span className="text-lg font-bold">Suivre les données :</span>
                                                <p className="ml-6">
                                                    Utilisez des outils comme Google Analytics pour analyser le trafic sur votre site, comprendre d’où viennent vos visiteurs et mesurer les conversions (achats, inscriptions, etc.). Ces données vous aident à identifier ce qui fonctionne et ce qui doit être amélioré.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Optimiser les campagnes :</span>
                                                <p className="ml-6">
                                                    Analysez les performances de vos campagnes publicitaires (Google Ads, Facebook Ads, etc.) en surveillant les taux de conversion et le retour sur investissement (ROI). Ajustez vos budgets, cibles et messages pour maximiser l’efficacité.
                                                </p>
                                            </li>
                                            <li>
                                                <span className="text-lg font-bold">Améliorer l’expérience utilisateur :</span>
                                                <p className="ml-6">
                                                    Un site facile à naviguer, rapide et intuitif augmente les chances de conversion. Testez régulièrement des améliorations, comme simplifier le processus de paiement ou optimiser le design pour mobile.
                                                </p>
                                            </li>
                                        </ul>

                                    </div>
                                    <p className="mt-4">
                                        En résumé, analysez, testez et adaptez en continu pour rester compétitif et offrir la meilleure expérience à vos clients.
                                    </p>
                                </div>
                            </div>
                            {/* End analyze performance and adapt */}

                            {/* Conclusion */}
                            <div className="mt-8">
                                <p>
                                    Lancer un e-commerce demande une bonne préparation, une stratégie marketing solide et une gestion logistique efficace. En adoptant une approche structurée et en restant à l’écoute des tendances du marché, vous pouvez réussir dans la vente en ligne. L’essentiel est de rester flexible, d’apprendre en cours de route et de toujours mettre vos clients au cœur de votre projet. Avec de la persévérance et une bonne organisation, votre boutique en ligne a toutes les chances de prospérer. 🚀✨
                                </p>
                            </div>

                        </div>
                    </motion.div>

                    {/* Sidebar Right */}
                    <div className="w-full md:w-3/12 lg:block hidden">
                        <motion.div
                            className="bg-white p-4 rounded-3xl shadow-lg p-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <h2 className="text-xl font-bold mb-2">Besoin d’un site e-commerce clé en main 🚀 ?</h2>
                            <p className="mb-4">Nous créons votre boutique en ligne professionnelle, optimisée et prête à vendre ! Faites le premier pas vers votre succès en ligne dès aujourd’hui.</p>
                            <button className="bg-blue-500 text-white px-4 py-4 rounded w-full rounded-full">Créer maintenant</button>
                        </motion.div>
                        <motion.div
                            className="mt-4 bg-white p-4 rounded-3xl shadow-lg p-8 mt-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <h2 className="text-xl font-bold mb-2">Newsletter</h2>
                            <p>
                                Abonnez-vous à notre newsletter pour des réductions, des promotions et bien plus encore.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default OnlineBusness;
