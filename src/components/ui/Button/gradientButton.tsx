import React from "react";

export const GradientButtonBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonRed: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonYellow: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonBlack: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonGreen: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonPurple: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonGray: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-black bg-gradient-to-r from-white via-gray-100 to-gray-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const GradientButtonOrange: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}