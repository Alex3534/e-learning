export const RegisterFormCode = (
`
// 'use client'
// components/Forms/register.jsx
// import React, { useState } from 'react'

export const RegisterForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(form.username + ', ' + form.email + ", " + form.password)
        // ...
    }

    return (
        <React.Fragment>
            <div className="w-full h-full py-20 px-4 flex justify-center bg-gray-100">
                <div className="flex w-full max-w-6xl flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden bg-white">
                    <div className="bg-gradient-to-br from-blue-300 to-blue-600 lg:w-6/12 w-full text-center flex flex-col justify-center space-y-8 px-10 py-20" style={{ borderTopRightRadius: '200px', borderBottomRightRadius: '100px' }}>
                        <h1 className="text-4xl text-white font-bold">Welcome !</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa nesciunt id.</p>
                        <div>
                            <a href="#" className="text-white py-2 px-6 hover:bg-blue-300 bg-transparent rounded-lg hover:border-transparent border-2 border-white transtion duration-300">Sign In</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white lg:w-6/12 w-full space-y-6 p-10 py-20">
                        <h1 className="text-2xl font-bold text-blue-600 text-center">Create Account</h1>
                        <div className="space-y-4 text-center">
                            <div className="flex justify-center text-sm text-center space-x-4">
                                <button className="rounded-lg border border-transparent bg-blue-600 text-white p-2 w-12 h-12 flex justify-center items-center hover:text-blue-600 hover:bg-white hover:border-blue-700 transition duration-300 cursor-pointer">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
                                    </svg>
                                </button>
                                <button className="rounded-lg border border-transparent bg-red-600 text-white p-2 w-12 h-12 flex justify-center items-center hover:text-red-600 hover:border-red-600 hover:bg-white transition duration-300 cursor-pointer">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" />
                                    </svg>
                                </button>
                                <button className="rounded-lg border border-transparent bg-orange-600 text-white p-2 w-12 h-12 flex justify-center items-center hover:bg-white hover:text-orange-600 hover:border-orange-600 cursor-pointer transition duration-300">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m20.7011 10.1255-.0253-.0672-2.4501-6.63953c-.0498-.13013-.1381-.24053-.2521-.31534-.1141-.07354-.2472-.10896-.3812-.10147-.1341.00748-.2628.05751-.3686.14332-.1047.08828-.1806.2079-.2175.34259l-1.6543 5.2556H8.65334l-1.65429-5.2556c-.03588-.13542-.11197-.25564-.21745-.34356-.10584-.08582-.23449-.13584-.36857-.14333-.13409-.00748-.26716.02794-.38125.10148-.11376.07511-.20195.18541-.25213.31534l-2.45472 6.6367-.02437.0671c-.35269.9569-.39623 2.007-.12404 2.9918.27219.9849.84535 1.8511 1.63305 2.4682l.00844.0068.02249.0166 3.73223 2.9022 1.84647 1.4512 1.1247.8817c.1316.1037.2922.1599.4574.1599.1652 0 .3258-.0562.4574-.1599l1.1247-.8817 1.8464-1.4512 3.7548-2.9198.0093-.0077c.786-.6172 1.3578-1.4826 1.6296-2.4661.2717-.9835.2288-2.0321-.1224-2.9881Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <hr className="border border-gray-200" />

                        <h4 className="my-4 text-center font-bold">Or sign up with Mail</h4>
                        <div>
                            <input
                                type="text"
                                name='username'
                                placeholder='Username'
                                onChange={handleChange}
                                className="w-full rounded-lg py-4 text-sm border bg-gray-100 border-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                onChange={handleChange}
                                className="w-full rounded-lg py-4 text-sm border bg-gray-100 border-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name='password'
                                placeholder='Password'
                                onChange={handleChange}
                                className="w-full rounded-lg py-4 text-sm border bg-gray-100 border-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <button
                                type="submit"
                                className="bg-blue-600 w-full py-3 px-8 mt-6 text-white border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 transition duration-300 rounded-lg cursor-pointer"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

// page.jsx
// import React from "react";
// import RegisterForm from "@components/Forms/register.jsx"

export default function Page() {
    return (
        <div>
            <RegisterForm />
        </div>
    )
}
`
).trim()