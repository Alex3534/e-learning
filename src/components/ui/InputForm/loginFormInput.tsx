'use client'

import React, { useState } from "react";

export const LoginFromInput01: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
        error: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
        if (form.email == 'example@gmail.com' && form.password == '123456') {
            alert(form.email + ", " + form.password + ", " + form.remember)
            // ...
        } else {
            setForm({ ...form, error: 'Wrong password or Email' })
        }
    }

    return (
        <React.Fragment>
            <div className="w-full py-20 flex justify-center bg-gradient-to-br from-green-300 to-blue-500">
                <form onSubmit={handleSubmit} className="bg-white max-w-xl w-full p-10 md:p-20 m-8 space-y-8">
                    <h1 className="text-2xl font-bold text-green-600 text-center">Login</h1>
                    {form.error && <p className="text-red-600 text-center text-sm">{form.error}</p>}
                    <div>
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            onChange={handleChange}
                            className="w-full py-4 text-sm border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                            className="w-full py-4 text-sm border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <div className="flex mt-4">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                                className="w-4 h-4 text-green-600 bg-gray-100 rounded-sm " />
                            <span className="text-sm ml-2 text-gray-600">Remember me</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <button
                            type="submit"
                            className="bg-green-600 py-3 px-8 mt-10 text-white border border-transparent hover:bg-white hover:text-green-600 hover:border-green-600 transition duration-300"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="flex flex-col text-sm space-y-2 text-center">
                        <span>Forgot <a href="#" className="text-green-600">Username / Password ?</a></span>
                        <span>Don't have an account ? <a href="#" className="text-green-600">Sign up</a></span>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export const LoginFromInput02: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
        error: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
        if (form.email == 'example@gmail.com' && form.password == '123456') {
            alert(form.email + ", " + form.password + ", " + form.remember)
            // ...
        } else {
            setForm({ ...form, error: 'Wrong password or Email' })
        }
    }

    return (
        <React.Fragment>
            <div className="w-full flex justify-center bg-gradient-to-br from-purple-600 to-blue-500">
                <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl px-10 py-20 m-20 space-y-8">
                    <h1 className="text-2xl font-bold text-blue-600 text-center">Login</h1>
                    {form.error && <p className="text-red-600 text-center text-sm">{form.error}</p>}
                    <div>
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            onChange={handleChange}
                            className="w-full py-4 border-b-2 border-blue-400 text-sm px-3 py-2 outline-none focus:border-purple-600"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                            className="w-full py-4 border-b-2 border-blue-400 text-sm px-3 py-2 outline-none focus:border-purple-600"
                        />
                        <div className="flex mt-4">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                                className="w-4 h-4 text-green-600 bg-gray-100 rounded-sm " />
                            <span className="text-sm ml-2 text-gray-600">Remember me</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <button
                            type="submit"
                            className="w-full mt-10 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm text-black group bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100"
                        >
                            <span
                                className="px-5 py-2.5 transition-all duration-300 bg-transparent hover:text-black text-white group-hover:bg-white font-medium w-full"
                            >
                                Sign in
                            </span>
                        </button>
                    </div>
                    <div className="flex flex-col text-sm space-y-2 text-center">
                        <span>Forgot <a href="#" className="text-blue-600">Username / Password ?</a></span>
                        <span>Don't have an account ? <a href="#" className="text-blue-600">Sign up</a></span>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export const LoginFromInput03: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        error: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
        if (form.email == 'example@gmail.com' && form.password == '123456') {
            alert(form.email + ", " + form.password)
            // ...
        } else {
            setForm({ ...form, error: 'Wrong password or Email' })
        }
    }

    return (
        <React.Fragment>
            <div className="w-full py-20 px-4 flex justify-center bg-gray-100">
                <div className="flex  max-w-6xl flex-col-reverse lg:flex-row shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit} className="bg-white lg:w-6/12 w-full space-y-6 p-10 py-20">
                        <h1 className="text-2xl font-bold text-green-600 text-center">Login</h1>
                        {form.error && <p className="text-red-600 text-center text-sm">{form.error}</p>}
                        <div>
                            <input
                                type="text"
                                name='email'
                                placeholder='Email'
                                onChange={handleChange}
                                className="w-full py-4 text-sm border bg-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name='password'
                                placeholder='Password'
                                onChange={handleChange}
                                className="w-full py-4 text-sm border bg-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <button
                                type="submit"
                                className="bg-green-600 w-full py-3 px-8 mt-6 text-white border border-transparent hover:bg-white hover:text-green-600 hover:border-green-600 transition duration-300"
                            >
                                Sign in
                            </button>
                        </div>
                        <hr />
                        <div className="space-y-4 text-center">
                            <span>Or sign in with</span>
                            <div className="flex justify-center text-sm text-center space-x-4">
                                <button className="rounded-full border border-transparent bg-blue-600 text-white p-2 w-12 h-12 flex justify-center items-center hover:text-blue-600 hover:bg-white hover:border-blue-700 transition duration-300 cursor-pointer">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
                                    </svg>
                                </button>
                                <button className="rounded-full border border-transparent bg-red-600 text-white p-2 w-12 h-12 flex justify-center items-center hover:text-red-600 hover:border-red-600 hover:bg-white transition duration-300 cursor-pointer">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" />
                                    </svg>
                                </button>
                                <button className="rounded-full border border-transparent bg-orange-600 text-white p-2 w-12 h-12 flex justify-center items-center hover:bg-white hover:text-orange-600 hover:border-orange-600 cursor-pointer transition duration-300">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m20.7011 10.1255-.0253-.0672-2.4501-6.63953c-.0498-.13013-.1381-.24053-.2521-.31534-.1141-.07354-.2472-.10896-.3812-.10147-.1341.00748-.2628.05751-.3686.14332-.1047.08828-.1806.2079-.2175.34259l-1.6543 5.2556H8.65334l-1.65429-5.2556c-.03588-.13542-.11197-.25564-.21745-.34356-.10584-.08582-.23449-.13584-.36857-.14333-.13409-.00748-.26716.02794-.38125.10148-.11376.07511-.20195.18541-.25213.31534l-2.45472 6.6367-.02437.0671c-.35269.9569-.39623 2.007-.12404 2.9918.27219.9849.84535 1.8511 1.63305 2.4682l.00844.0068.02249.0166 3.73223 2.9022 1.84647 1.4512 1.1247.8817c.1316.1037.2922.1599.4574.1599.1652 0 .3258-.0562.4574-.1599l1.1247-.8817 1.8464-1.4512 3.7548-2.9198.0093-.0077c.786-.6172 1.3578-1.4826 1.6296-2.4661.2717-.9835.2288-2.0321-.1224-2.9881Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="bg-gradient-to-br from-green-400 to-green-600 lg:w-6/12 w-full text-center flex flex-col justify-center space-y-8 px-10 py-20">
                        <h1 className="text-2xl text-white font-bold">Welcome Back</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa nesciunt id quia eaque modi magni animi quos esse repudiandae.</p>
                        <div>
                            <a href="#" className="text-white py-4 px-6 bg-green-400 rounded-full hover:border-green-600 border-2 border-transparent transtion duration-300">No account ? SignUp</a>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export const LoginFromInput04: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        error: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
        if (form.email == 'example@gmail.com' && form.password == '123456') {
            alert(form.email + ", " + form.password)
            // ...
        } else {
            setForm({ ...form, error: 'Wrong password or Email' })
        }
    }

    return (
        <React.Fragment>
            <div className="w-full flex p-10 justify-center bg-gray-100">
                <div className="flex max-w-6xl flex-col-reverse lg:flex-row shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit} className="bg-white lg:w-6/12 w-full sm:p-20 p-10">
                        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                        {form.error && <p className="text-red-600 text-center text-sm">{form.error}</p>}
                        <div className="space-y-4 text-center mt-10">
                            <div className="space-y-4">
                                <button className="flex justify-center w-full items-center bg-red-100 rounded-lg py-2">

                                    <div className="flex justify-center  space-x-6 items-center">
                                        <div className="rounded-full bg-red-600 text-white p-2 w-10 h-10 flex justify-center items-center">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" />
                                            </svg>
                                        </div>
                                        <span className="font-bold">Sign Up with google</span>
                                    </div>

                                </button>

                                <button className="flex justify-center w-full items-center bg-orange-100 rounded-lg py-2">

                                    <div className="flex justify-center space-x-6 items-center">
                                        <div className="rounded-full bg-orange-600 text-white p-2 w-10 h-10 flex justify-center items-center">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m20.7011 10.1255-.0253-.0672-2.4501-6.63953c-.0498-.13013-.1381-.24053-.2521-.31534-.1141-.07354-.2472-.10896-.3812-.10147-.1341.00748-.2628.05751-.3686.14332-.1047.08828-.1806.2079-.2175.34259l-1.6543 5.2556H8.65334l-1.65429-5.2556c-.03588-.13542-.11197-.25564-.21745-.34356-.10584-.08582-.23449-.13584-.36857-.14333-.13409-.00748-.26716.02794-.38125.10148-.11376.07511-.20195.18541-.25213.31534l-2.45472 6.6367-.02437.0671c-.35269.9569-.39623 2.007-.12404 2.9918.27219.9849.84535 1.8511 1.63305 2.4682l.00844.0068.02249.0166 3.73223 2.9022 1.84647 1.4512 1.1247.8817c.1316.1037.2922.1599.4574.1599.1652 0 .3258-.0562.4574-.1599l1.1247-.8817 1.8464-1.4512 3.7548-2.9198.0093-.0077c.786-.6172 1.3578-1.4826 1.6296-2.4661.2717-.9835.2288-2.0321-.1224-2.9881Z" />
                                            </svg>
                                        </div>
                                        <span className="font-bold">Sign Up with gitLab</span>
                                    </div>

                                </button>
                            </div>
                        </div>
                        <div className="text-center my-14 h-10 relative flex justify-center items-center">
                            <div className="border w-full"></div>
                            <div className="absolute  flex items-center justify-center h-full bg-white transform  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="px-4">Or Sign Up with Email</span>
                            </div>
                        </div>
                        <div className="space-y-6">

                            <div>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    className="w-full py-4 text-sm border bg-gray-100 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    className="w-full py-4 text-sm border bg-gray-100 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="flex justify-center w-full">
                                <button
                                    type="submit"
                                    className="bg-blue-500 w-full py-3 px-8 mt-6 text-white border border-transparent hover:bg-white hover:text-blue-400 hover:border-blue-400 transition duration-300 rounded-lg"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="bg-gradient-to-br from-green-400 to-green-600 lg:w-6/12 w-full text-center">
                        <img src="/images/banner/1.png" alt="" className="w-full h-full bg-blue-300"/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}