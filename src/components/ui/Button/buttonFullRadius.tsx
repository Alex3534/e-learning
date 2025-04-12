import React from "react";

export const ButtonFullRadiusBlue: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-blue-600 border-2 border-transparent text-white hover:border-blue-600 hover:text-blue-600 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusRed: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-red-600 border-2 border-transparent text-white hover:border-red-600 hover:text-red-600 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusYellow: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-yellow-500 border-2 border-transparent text-white hover:border-yellow-500 hover:text-yellow-500 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusBlack: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-black border-2 border-transparent text-white hover:border-black hover:text-black hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusGreen: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-green-600 border-2 border-transparent text-white hover:border-green-600 hover:text-green-600 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusPurple: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-purple-600 border-2 border-transparent text-white hover:border-purple-600 hover:text-purple-600 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusGray: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-gray-200 border-2 border-transparent text-black hover:border-gray-200 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullRadiusOrange: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-orange-600 border-2 border-transparent text-white hover:border-orange-600 hover:text-orange-600 hover:bg-white`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}