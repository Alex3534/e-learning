export const ProductCardCode = (`
// Component/ui/cards.jsx
// npm install react-icons 

import React from "react";
import React, { useState } from "react";
import { FaStar, FaStarHalf, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

export const ProductCard = ({
    productImage = "images/shoe.png",
    productName = "Premium Sport Shoes",
    price = 199.99,
    originalPrice = 249.99,
    description = "High-performance athletic shoes with superior comfort and innovative design. Perfect for professional athletes and casual runners alike.",
    rating = 4.5,
    reviews = 128,
    stockStatus = "In Stock"
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);


    const renderStars = (rating: RenderStarsProps["rating"]): JSX.Element[] => {
        const stars: JSX.Element[] = [];
        const fullStars: number = Math.floor(rating);
        const hasHalfStar: boolean = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={\`star-\${i}\`} className="text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div
            className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden group">
                <img
                    src={productImage}
                    alt={productName}
                    className={\`w-full h-64 object-cover transition-transform duration-300 \${isHovered ? "scale-110" : ""}\`}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1604147495798-57beb5d6af73";
                    }}
                    loading="lazy"
                />
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Add to wishlist"
                >
                    <FaHeart className={isWishlisted ? "text-red-500" : "text-gray-400"} />
                </button>
            </div>

            <div className="p-6">
                <div className="flex justify-between flex-col items-start mb-2 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800 truncate">{productName}</h2>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            {renderStars(rating)}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{reviews} reviews</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4 mt-4">{description}</p>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">\${price}</span>
                        {originalPrice && (
                            <span className="text-sm text-gray-500 line-through">\${originalPrice}</span>
                        )}
                    </div>
                    <span
                        className={\`text-sm font-medium \${stockStatus === "In Stock" ? "text-green-500" : "text-red-500"}\`}
                    >
                        {stockStatus}
                    </span>
                </div>

                <div className="flex space-x-2">
                    <button
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        aria-label="Add to cart"
                    >
                        <FaShoppingCart className="text-lg" />
                        <span>Add to Cart</span>
                    </button>
                    <button
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Quick view"
                    >
                        <FaEye className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// page.jsx
import React from "react";
import ProductCard from "@/components/ui/cards"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ProductCard productName='Name of product'/>
            </div>
        </React.Fragment>
    )
}

`).trim()

export const HorizontalProductCardCode = (`
// Component/ui/cards.jsx
// npm install react-icons 

import React from "react";
import React, { useState } from "react";
import { FaStar, FaStarHalf, FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";


export const ProductCard = ({
    productImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    productName = "Premium Sport Shoes",
    price = 199.99,
    originalPrice = 249.99,
    description = "High-performance athletic shoes with superior comfort and innovative design. Perfect for professional athletes and casual runners alike.",
    rating = 4.5,
    reviews = 128,
    stockStatus = "In Stock"
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);


    const renderStars = (rating: RenderStarsProps["rating"]): JSX.Element[] => {
        const stars: JSX.Element[] = [];
        const fullStars: number = Math.floor(rating);
        const hasHalfStar: boolean = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={\`star-\${i}\`} className="text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div
            className="w-[300px] sm:w-full max-w-sm sm:max-w-none flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative sm:w-1/2 lg:w-2/5 h-48 sm:h-auto overflow-hidden group">
                <img
                    src={productImage}
                    alt={productName}
                    className={\`w-full h-full object-cover transition-transform duration-300 \${isHovered ? "scale-105" : "scale-100"}\`}
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1604147495798-57beb5d6af73";
                        e.target.className = "w-full h-full object-cover";
                    }}
                    loading="lazy"
                />
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-gray-100 transition-colors duration-200"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    <FaHeart className={isWishlisted ? "text-red-500 fill-current" : "text-gray-400 fill-transparent stroke-gray-400 stroke-2"} />
                </button>
            </div>

            <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex justify-between flex-col items-start mb-2 space-y-2">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">{productName}</h2>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            {renderStars(rating)}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 ml-2">{reviews} reviews</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 mt-2 line-clamp-3">{description}</p>

                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">\${price}</span>
                            {originalPrice && (
                                <span className="text-sm text-gray-500 line-through">\${originalPrice}</span>
                            )}
                        </div>
                        <span
                            className={\`text-xs sm:text-sm font-medium \${stockStatus === "In Stock" ? "text-green-600" : "text-red-600"}\`}
                        >
                            {stockStatus}
                        </span>
                    </div>

                    <div className="flex space-x-2">
                        <button
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                            aria-label="Add to cart"
                        >
                            <FaShoppingCart className="text-base sm:text-lg" />
                            <span className="text-sm sm:text-base">Add to Cart</span>
                        </button>
                        <button
                            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-200"
                            aria-label="Quick view"
                        >
                            <FaEye className="text-lg sm:text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// page.jsx
import React from "react";
import ProductCard from "@/components/ui/cards"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ProductCard productName="Name of product" .../>
            </div>
        </React.Fragment>
    )
}

`).trim()

export const HorizontalProductCardCode02 = (`
// Component/ui/cards.jsx
// npm install react-icons 

import React from "react";
import React, { useState } from "react";
import { FaStar, FaShoppingCart, FaStarHalf, FaEye } from "react-icons/fa";


export const ProductCard = ({
    productImage = "images/shoe.png",
    productName = "Premium Sport Shoes",
    price = 199.99,
    originalPrice = 249.99,
    rating = 5,
    reviews = 128,
    stockStatus = "In Stock"
}) => {
    const [isHovered, setIsHovered] = useState(false);


    const renderStars = (rating: RenderStarsProps["rating"]): JSX.Element[] => {
        const stars: JSX.Element[] = [];
        const fullStars: number = Math.floor(rating);
        const hasHalfStar: boolean = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={\`star-\${i}\`} className="text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div
            className="max-w-lg sm:grid sm:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="overflow-hidden group">
                <img
                    src={productImage}
                    alt={productName}
                    className={\`w-full h-full object-cover transition-transform duration-300 \${isHovered ? "scale-110" : ""}\`}
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1604147495798-57beb5d6af73";
                    }}
                    loading="lazy"
                />
            </div>

            <div className="p-6 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between flex-col items-start mb-2 space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800 truncate">{productName}</h2>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                {renderStars(rating)}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">{reviews} reviews</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">\${price}</span>
                            {originalPrice && (
                                <span className="text-sm text-gray-500 line-through">$\{originalPrice}</span>
                            )}
                        </div>
                        <span
                            className={\`text-sm font-medium \${stockStatus === "In Stock" ? "text-green-500" : "text-red-500"}\`}
                        >
                            {stockStatus}
                        </span>
                    </div>
                </div>

                <div className="flex space-x-2">
                    <button
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        aria-label="Add to cart"
                    >
                        <FaShoppingCart className="text-lg" />
                        <span>Add to Cart</span>
                    </button>
                    <button
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Quick view"
                    >
                        <FaEye className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};


// page.jsx
import React from "react";
import ProductCard from "@/components/ui/cards"


export function Page () {
    return (
        <React.Fragment>
            <div>
                <ProductCard />
            </div>
        </React.Fragment>
    )
}

`).trim()

export const CardCode = (`
// Component/ui/cards.jsx
// npm install react-icons 

import React from "react";
import React, { useState } from "react";
import { FaStar, FaHeart, FaEye, FaShare } from "react-icons/fa";

export const Card = ({
    title,
    subtitle,
    imageUrl = "images/nature.png",
    content,
    tags = ["Design", "UI/UX", "Development"],
    variant = "default",
}) => {
    const baseStyles = "transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const cardStyles = {
        default: \`\${baseStyles} bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden\`,
        bordered: \`\${baseStyles} bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700\`,
        minimal: \`\${baseStyles} bg-gray-50 dark:bg-gray-900 rounded-lg\`
    };

    return (
        <div className={\`\${cardStyles[variant]} max-w-sm mx-auto\`}>
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe";
                        e.target.alt = "Fallback Image";
                    }}
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                    <FaBookmark className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {title || "Card Title"}
                        </h2>
                        {subtitle && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
                        )}
                    </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {content || "This is a versatile card component that supports various content types and features. It includes responsive design, hover effects, and accessibility considerations."}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-4">
                        <button
                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                            aria-label="Like"
                        >
                            <FaHeart className="mr-2" />
                            <span>24</span>
                        </button>
                        <button
                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            aria-label="Share"
                        >
                            <FaShare className="mr-2" />
                            <span>Share</span>
                        </button>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};


// page.jsx
import React from "react";
import Card from "@/components/ui/cards"


export function Page () {
    return (
        <React.Fragment>
            <div>
                <Card />
            </div>
        </React.Fragment>
    )
}

`).trim()