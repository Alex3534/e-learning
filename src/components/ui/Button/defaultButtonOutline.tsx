import React from "react"

export const DefaultButtonOutlineBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-blue-600 transition duration-300 bg-white hover:bg-blue-600 hover:text-white border border-blue-600 hover:border-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlineRed: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-red-600 transition duration-300 bg-white hover:bg-red-600 hover:text-white border border-red-600 hover:border-transparent focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlineYellow: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-yellow-600 transition duration-300 bg-white hover:bg-yellow-600 hover:text-white border border-yellow-600 hover:border-transparent focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlineBlack: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-black transition duration-300 bg-white hover:bg-black hover:text-white border border-black hover:border-transparent focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlineGreen: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-green transition duration-300 bg-white hover:bg-green-600 hover:text-white border border-green-600 hover:border-transparent focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlinePurple: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-purple-600 transition duration-300 bg-white hover:bg-purple-600 hover:text-white border border-purple-600 hover:border-transparent focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlineGray: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-gray-900 transition duration-300 bg-white hover:bg-gray-200 border border-gray-200 hover:border-transparent focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DefaultButtonOutlineOrange: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-orange-600 transition duration-300 bg-white hover:bg-orange-600 hover:text-white border border-orange-600 hover:border-transparent focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}