import React from "react";

export const DuotoneButtonPurpleToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white "
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonCyanToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white "
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonGreenToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white "
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonPurpleToPink: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white "
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonPinkToOrange: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white "
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonTealToLime: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-400 to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white "
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonRedToYellow: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 to-yellow-400 focus:ring-4 focus:outline-none focus:ring-red-100"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white rounded-md group-hover:bg-white"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}


