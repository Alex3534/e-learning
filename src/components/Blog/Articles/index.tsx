import React from "react";
import Link from "next/link";
import { BlogData } from "@/app/api/data";

const Articles = () => {
    return (
        <section className='text-center mt-20 bg-gray-100' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">

                {/* Header */}
                    <div className="relative h-72  text-white flex items-center justify-center mb-8">
                        <img
                            src="/images/busness/13.jpg"
                            alt="Header Image"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                        <div className="relative z-10 text-center px-4">
                            <h4 className="text-3xl font-bold text-gray-900">
                                Découvrez nos articles sur l'e-commerce, <br />la rédaction web et les stratégies <br />digitales pour réussir en ligne.
                            </h4>
                        </div>
                    </div>
                {/*  Header */}

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {BlogData.map((item, index) => (
                        <div className="shadow-lg rounded-lg bg-white flex flex-col lg:flex-row p-4">
                            <div className="p-0 lg:w-1/2 w-full">
                                <img
                                    src={item.imgSrc}
                                    alt="Business Image"
                                    className="rounded-xl w-full"
                                />
                            </div>
                            <div className="lg:ml-0 lg:w-1/2 pl-4 text-start flex flex-col justify-center">
                                <h4 className="text-2xl font-bold mt-4 lg:mt-0">
                                    {item.title}
                                </h4>
                                <p className="py-3">Lorem ipsum dolor sit amet.</p>
                                <Link href={'/blog/busness'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Lire l'article&nbsp;&gt;&nbsp;&gt;&nbsp;</Link>
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