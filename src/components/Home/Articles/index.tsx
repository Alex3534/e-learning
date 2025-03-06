"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import articles from "@/app/api/articles/data";

const NewArticles = () => {

    const truncateText = (text: string, wordLimit: number): string => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + " ......";
        }
        return text;
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section id="courses">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-20">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">Nos articles.</h2>
                    <Link href={'/blog/articles'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Explorer&nbsp;&gt;&nbsp;&gt;&nbsp;</Link>
                </div>

                <Slider {...settings}>
                    {articles.map((items, i) => (
                        <div key={i} aria-hidden="true">
                            <div aria-hidden="true" className='bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full'>
                                <div className="relative rounded-3xl">
                                    <img aria-hidden="true" src={items.sections[0].image} alt="#" className="w-full h-80 object-cover rounded-3xl" style={{ clipPath: "polygon(0 0, 100% 1%, 100% 88%, 0 99%, 0 100%, 0% 50%)" }} />
                                    <Link aria-hidden="true" href={"./blog/articles/" + items.id} className="absolute right-5 -bottom-2 bg-primary rounded-full p-6 py-8">
                                        <h3 className="text-white uppercase text-center text-sm font-medium w-[35px]">Lire</h3>
                                    </Link>
                                </div>

                                <div className="px-3 pt-6" aria-hidden="true">
                                    <Link href="./blog/busness" className='text-2xl font-bold text-black max-w-75% inline-block'>{items.title}</Link>
                                    <h3 className="text-base font-normal pt-6 text-black/75">
                                        {typeof items.sections[0].content[0].content === "string"
                                            ? truncateText(items.sections[0].content[0].content, 20)
                                            : "Contenu indisponible"}
                                    </h3>
                                    <div aria-hidden="true" className="flex justify-between pt-6">
                                        <div className="flex gap-4" aria-hidden="true">
                                            <Icon
                                                icon="solar:users-group-rounded-linear"
                                                className="text-primary text-xl inline-block me-2"
                                            />
                                            <h3 className="text-base font-medium text-black opacity-75">105 vues</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default NewArticles;
