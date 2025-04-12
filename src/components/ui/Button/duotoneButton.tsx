import React from "react";

export const DuotoneButtonPurpleToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonCyanToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Cyan
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonGreenToBlue: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Green to Blue
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonPurpleToPink: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Purple to Pink
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonPinkToOrange: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Pink to Orange
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonTealToLime: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Teal to Lime
            </button>
        </React.Fragment>
    )
}

export const DuotoneButtonRedToYellow: React.FC<{ label: string }> = ({ label }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Red to Yellow
            </button>
        </React.Fragment>
    )
}

