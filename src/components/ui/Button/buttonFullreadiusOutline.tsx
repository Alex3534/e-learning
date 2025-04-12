import React from "react";

export const ButtonFullradiusOutlineBlue: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-blue-600 text-blue-600 hover:border-transparent hover:text-white hover:bg-blue-600`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlineRed: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-red-600 text-red-600 hover:border-transparent hover:text-white hover:bg-red-600`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlineYellow: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-yellow-500 text-yellow-500 hover:border-transparent hover:text-white hover:bg-yellow-500`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlineBlack: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-black text-black hover:border-transparent hover:text-white hover:bg-black`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlineGreen: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-green-600 text-green-600 hover:border-transprent hover:text-white hover:bg-green-600`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlinePurple: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-purple-600 text-purple-600 hover:border-transparent hover:text-white hover:bg-purple-600`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlineGray: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-gray-200 text-black hover:border-transparent hover:bg-gray-200`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonFullradiusOutlineOrange: React.FC<{label: string}> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-orange-600 text-orange-600 hover:border-transparent hover:text-white hover:bg-orange-600`}
            >
                {label}
            </button>
        </React.Fragment>
    )
}