import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Newsletter = () => {
    return (
        <section>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div
                        className="col-span-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl"
                        style={{ clipPath: 'polygon(100% 0, 100% 38%, 100% 100%, 0 100%, 0 15%)' }}
                    >
                        <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
                            <h3 className="text-4xl md:text-5xl text-center font-semibold text-white mb-3">Newsletter.</h3>
                            <h3 className="text-base font-normal text-white/75 text-center mb-8">
                                Abonnez-vous à notre newsletter pour des réductions,<br /> des promotions et bien plus encore.
                            </h3>
                            <div>
                                <form className="text-white focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
                                    <button type="submit" className="p-3 lg:p-5 rounded-full border-2 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Send-Email--Streamline-Core" height="30" width="50"><desc>Send Email Streamline Icon: https://streamlinehq.com</desc><g id="send-email--mail-send-email-paper-airplane"><path id="Vector" fill="#d7e0ff" d="m5.8077 11.0005 2.17799 2.168c0.13364 0.1369 0.30071 0.2366 0.4847 0.2892 0.18399 0.0526 0.37852 0.0562 0.56434 0.0105 0.18698 -0.0435 0.35963 -0.1343 0.50135 -0.2638 0.14173 -0.1295 0.24776 -0.2932 0.3079 -0.4755L13.4207 2.00876c0.0746 -0.20086 0.09 -0.41893 0.0444 -0.62829 -0.0457 -0.20937 -0.1505 -0.401209 -0.3021 -0.552731 -0.1515 -0.151523 -0.3433 -0.256351 -0.5527 -0.302025 -0.2093 -0.045674 -0.4274 -0.030273 -0.6283 0.044373L1.26189 4.14679c-0.18858 0.06441 -0.356533 0.17802 -0.486507 0.32907 -0.129974 0.15105 -0.217252 0.33407 -0.252815 0.53014 -0.036707 0.17833 -0.028535 0.36298 0.02378 0.53737 0.052316 0.17438 0.147138 0.33304 0.275944 0.46171L3.55977 8.74256l-0.08992 3.46684 2.33785 -1.2089Z" stroke-width="1"></path><path id="Vector_2" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="m5.8077 11.0005 2.17799 2.168c0.13364 0.1369 0.30071 0.2366 0.4847 0.2892 0.18399 0.0526 0.37852 0.0562 0.56434 0.0105 0.18698 -0.0435 0.35963 -0.1343 0.50135 -0.2638 0.14173 -0.1295 0.24776 -0.2932 0.3079 -0.4755L13.4207 2.00876c0.0746 -0.20086 0.09 -0.41893 0.0444 -0.62829 -0.0457 -0.20937 -0.1505 -0.401209 -0.3021 -0.552731 -0.1515 -0.151523 -0.3433 -0.256351 -0.5527 -0.302025 -0.2093 -0.045674 -0.4274 -0.030273 -0.6283 0.044373L1.26189 4.14679c-0.18858 0.06441 -0.356533 0.17802 -0.486507 0.32907 -0.129974 0.15105 -0.217252 0.33407 -0.252815 0.53014 -0.036707 0.17833 -0.028535 0.36298 0.02378 0.53737 0.052316 0.17438 0.147138 0.33304 0.275944 0.46171L3.55977 8.74256l-0.08992 3.46684 2.33785 -1.2089Z" stroke-width="1"></path><path id="Vector_3" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M13.101 0.789917 3.55975 8.74259" stroke-width="1"></path></g></svg>
                                    </button>
                                    <input type="email" name="q" className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Entrer votre adresse Email" autoComplete="off" />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;