import React from "react";

export const ButtonOutlineGradientPurpleToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    Purple to blue
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientCyanToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    Cyan to blue
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientGreenToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    Green to blue
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientPurpleToPink: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    Purple to pink
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientPinkToOrange: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    Pink to orange
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientTealToLime: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    Teal to Lime
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientRedToYellow: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
            >
                <span className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent">
                    Red to Yellow
                </span>
            </button>
        </React.Fragment>
    )
}