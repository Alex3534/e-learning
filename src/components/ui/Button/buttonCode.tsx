export const ButtonFullRadiusCode = 
(`
// Component/ui/button.jsx
import React from "react";

export const ButtonBlue = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-blue-600 border-2 border-transparent text-white hover:border-blue-600 hover:text-blue-600 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonRed = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-red-600 border-2 border-transparent text-white hover:border-red-600 hover:text-red-600 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonYellow = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-yellow-500 border-2 border-transparent text-white hover:border-yellow-500 hover:text-yellow-500 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonBlack = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-black border-2 border-transparent text-white hover:border-black hover:text-black hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonGreen = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-green-600 border-2 border-transparent text-white hover:border-green-600 hover:text-green-600 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonPurple = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-purple-600 border-2 border-transparent text-white hover:border-purple-600 hover:text-purple-600 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonGray = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-gray-200 border-2 border-transparent text-black hover:border-gray-200 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOrange = ({label, ...props}) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-orange-600 border-2 border-transparent text-white hover:border-orange-600 hover:text-orange-600 hover:bg-white"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}


// page.jsx
import React from "react";
import {ButtonBlue, ButtonRed} from "@/components/ui/button"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonBlue label={'Blue'} />
                <ButtonRed label={'Red'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}

`).trim()

export const ButtonFullRadiusOutlineCode = 
(`
// Component/ui/button.jsx
import React from "react";

export const ButtonOutlineBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-blue-600 text-blue-600 hover:border-transparent hover:text-white hover:bg-blue-600"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineRed = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-red-600 text-red-600 hover:border-transparent hover:text-white hover:bg-red-600"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineYellow = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-yellow-500 text-yellow-500 hover:border-transparent hover:text-white hover:bg-yellow-500"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineBlack = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-black text-black hover:border-transparent hover:text-white hover:bg-black"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGreen = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-green-600 text-green-600 hover:border-transprent hover:text-white hover:bg-green-600"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlinePurple = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-purple-600 text-purple-600 hover:border-transparent hover:text-white hover:bg-purple-600"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineGray = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-gray-200 text-black hover:border-transparent hover:bg-gray-200"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOutlineOrange = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="transition duration-300 px-12 py-5 rounded-full font-medium bg-white border-2 border-orange-600 text-orange-600 hover:border-transparent hover:text-white hover:bg-orange-600"
                {...props}
            >
                {label}
            </button>
        </React.Fragment>
    )
}


// page.jsx
import React from "react";
import {ButtonOutlineOrange, ButtonOutlinePurple} from "@/components/ui/button"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonOutlineOrange label={'Orange'} />
                <ButtonOutlinePurple label={'Purple'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}
`).trim()

export const DefaultButtonCode = (
`
// Component/ui/button.jsx
import React from "react"

export const ButtonBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-blue-600 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonRed = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-red-600 hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonYellow = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-yellow-600 hover:bg-white hover:text-yellow-600 border border-transparent hover:border-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonBlack = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-black hover:bg-white hover:text-black border border-transparent hover:border-black focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonGreen = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-green-600 hover:bg-white hover:text-green-600 border border-transparent hover:border-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonPurple = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-purple-600 hover:bg-white hover:text-purple-600 border border-transparent hover:border-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonGray = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-gray-900 transition duration-300 bg-gray-200 hover:bg-white border border-transparent hover:border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOrange = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-white transition duration-300 bg-orange-600 hover:bg-white hover:text-orange-600 border border-transparent hover:border-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}


// page.jsx
import React from "react";
import {ButtonBlue, ButtonRed} from "@/components/ui/button"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonBlue label={'Blue'} />
                <ButtonRed label={'Red'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}
`
).trim()

export const DefaultButtonOutlineCode = (
`
// components/ui/button.jsx
import React from "react"

export const ButtonBlue = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-blue-600 transition duration-300 bg-white hover:bg-blue-600 hover:text-white border border-blue-600 hover:border-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonRed = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-red-600 transition duration-300 bg-white hover:bg-red-600 hover:text-white border border-red-600 hover:border-transparent focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonYellow = ({ , ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-yellow-600 transition duration-300 bg-white hover:bg-yellow-600 hover:text-white border border-yellow-600 hover:border-transparent focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonBlack = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-black transition duration-300 bg-white hover:bg-black hover:text-white border border-black hover:border-transparent focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonGreen = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-green transition duration-300 bg-white hover:bg-green-600 hover:text-white border border-green-600 hover:border-transparent focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonPurple = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-purple-600 transition duration-300 bg-white hover:bg-purple-600 hover:text-white border border-purple-600 hover:border-transparent focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonGray = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-gray-900 transition duration-300 bg-white hover:bg-gray-200 border border-gray-200 hover:border-transparent focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

export const ButtonOrange = ({ label, ...props }) => {
    return (
        <React.Fragment>
            <button
                type="button"
                {...props}
                className="text-orange-600 transition duration-300 bg-white hover:bg-orange-600 hover:text-white border border-orange-600 hover:border-transparent focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {label}
            </button>
        </React.Fragment>
    )
}

// page.jsx
import React from "react";
import {ButtonBlue, ButtonRed} from "@/components/ui/button"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonBlue label={'Blue'} />
                <ButtonRed label={'Red'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}
`
).trim()

export const GradientButtonCode = (
`
// components/ui/button.jsx
import React from "react";

export const ButtonBlue = ({ label, ...props }) => {
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

export const ButtonRed = ({ label, ...props }) => {
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

export const ButtonYellow = ({ label, ...props }) => {
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

export const ButtonBlack = ({ label, ...props }) => {
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

export const ButtonGreen = ({ label, ...props }) => {
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

export const ButtonPurple = ({ label, ...props }) => {
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

export const ButtonGray = ({ label, ...props }) => {
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

export const ButtonOrange = ({ label, ...props }) => {
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

// page.jsx
import React from "react";
import {ButtonBlue, ButtonRed} from "@/components/ui/button"


export  function Page () {
    return (
        <React.Fragment>
            <div>
                <ButtonBlue label={'Blue'} />
                <ButtonRed label={'Red'} onClick={() => alert('Click !')} />
                // ....
            </div>
        </React.Fragment>
    )
}
`    
)