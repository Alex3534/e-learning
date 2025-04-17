export const ButtonDuotoneCode = (
    `
// components/ui/button.jsx
import React from "react";

export const ButtonPurpleToBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100"
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

export const ButtonCyanToBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100"
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

export const ButtonGreenToBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-100"
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

export const ButtonPurpleToPink = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-100"
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

export const ButtonPinkToOrange = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-100"
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

export const ButtonTealToLime = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-teal-400 to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-100"
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

export const ButtonRedToYellow = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-red-400 to-yellow-400 focus:ring-4 focus:outline-none focus:ring-red-100"
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

// page.jsx
import React from "react";
import {ButtonPurpleToBlue, ButtonCyanToBlue} from "@/components/ui/button"

export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonPurpleToBlue label={'Purple to blue'} />
                <ButtonCyanToBlue label={'Cyan to blue'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}

`
).trim()

export const ButtonDuotoneOutlineCode = (
    `
// components/ui/button.jsx
import React from "react";

export const ButtonOutlineGradientPurpleToBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientCyanToBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientGreenToBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientPurpleToPink = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientPinkToOrange = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientTealToLime = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200"
            >
                <span
                    className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent"
                >
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGradientRedToYellow = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
            >
                <span className="px-5 py-2.5 transition-all duration-300 bg-white rounded-md group-hover:bg-transparent">
                    {label}
                </span>
            </button>
        </React.Fragment>
    )
}

// page.jsx
import React from "react";
import {ButtonOutlineGradientPurpleToBlue, ButtonOutlineGradientCyanToBlue} from "@/components/ui/button"

export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonOutlineGradientPurpleToBlue label={'Purple to blue'} />
                <ButtonOutlineGradientCyanToBlue label={'Cyan to blue'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}
`
)