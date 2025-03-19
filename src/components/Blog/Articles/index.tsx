import React from "react";
import Link from "next/link";
import { BlogData } from "@/app/api/data";
import articles from "@/app/api/articles/data";

const Articles = () => {

    return (
        <section className='text-center mt-20 bg-gray-100' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">

                {/* Header */}
                <div className="relative h-72  text-white flex items-center justify-center mb-8 rounded-2xl overflow-hidden">
                    <img
                        src="/images/busness/13.jpg"
                        alt="Header Image"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-50 rounded-2xl">

                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h4 className="text-3xl font-bold text-gray-900">
                            Découvrez nos articles sur l'e-commerce, <br />la rédaction web et les stratégies <br />digitales pour réussir en ligne.
                        </h4>
                    </div>
                </div>
                {/*  Header */}

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((item, index) => (

                        <div key={index} className="shadow-lg rounded-2xl bg-white p-6 flex flex-col justify-between">
                            <div>
                                <div className="p-0 w-full">
                                    <img
                                        src={item.sections[0].image}
                                        alt="Business Image"
                                        className="rounded-xl w-full"
                                    />
                                </div>
                                <div className="text-start mt-4 flex flex-col justify-center content-around">
                                    <h4 className="text-2xl font-bold mt-4 lg:mt-0">
                                        {item.title}
                                    </h4>
                                    <p className="py-3">
                                        {typeof item.sections[0]?.content[0]?.content === 'string'
                                            ? item.sections[0].content[0].content.split(" ").slice(0, 20).join(" ") + " ..."
                                            : "Aucun contenu disponible"}
                                    </p>
                                </div>
                            </div>
                            <div className="text-start">
                                <Link href={'/blog/articles/' + item.id} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Lire l'article &nbsp;&gt;&nbsp;&gt;&nbsp;</Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End articles */}
            </div>
        </section>
    );
};

export default Articles;