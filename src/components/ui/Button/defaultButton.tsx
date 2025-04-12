import React from "react"

export const DefaultButtonBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-blue-600 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonRed: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-red-600 hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonYellow: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-yellow-600 hover:bg-white hover:text-yellow-600 border border-transparent hover:border-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonBlack: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-black hover:bg-white hover:text-black border border-transparent hover:border-black focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonGreen: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-green-600 hover:bg-white hover:text-green-600 border border-transparent hover:border-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonPurple: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-purple-600 hover:bg-white hover:text-purple-600 border border-transparent hover:border-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonGray: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-gray-900 transition duration-300 bg-gray-200 hover:bg-white border border-transparent hover:border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOrange: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white transition duration-300 bg-orange-600 hover:bg-white hover:text-orange-600 border border-transparent hover:border-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}