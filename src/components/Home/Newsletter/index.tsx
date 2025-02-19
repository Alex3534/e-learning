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
                                <form className="text-white focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-4 max-lg:flex max-lg:justify-center">
                                    <button type="submit" className="p-3 lg:p-5 rounded-full border-2 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Send-Email--Streamline-Core" height="30" width="50"><desc>Send Email Streamline Icon: https://streamlinehq.com</desc><g id="send-email--mail-send-email-paper-airplane"><path id="Union" fill="#8fbffa" fill-rule="evenodd" d="M12.7219 0.0367172c-0.3 -0.0654306 -0.6122 -0.04423501 -0.9005 0.0610159L1.10787 3.67225l0 -0.00001 -0.00337 0.00115c-0.27285 0.09319 -0.515863 0.25756 -0.703923 0.47612 -0.186781 0.21707 -0.3126225 0.47977 -0.3647391 0.76128 -0.0520494 0.25768 -0.03977407 0.52424 0.0357814 0.77609 0.0760967 0.25366 0.2139987 0.48444 0.4013217 0.67163l0.000126 0.00013 0.000058 0.00005L3.05875 8.94432 2.9744 12.1967c-0.00459 0.1767 0.08452 0.3428 0.23434 0.4366 0.14983 0.0939 0.3381 0.1017 0.49515 0.0205l2.01406 -1.0415 1.91734 1.9086c0.19397 0.1978 0.43602 0.3418 0.70245 0.4179 0.26667 0.0762 0.54856 0.0818 0.81798 0.0161 0.26937 -0.0632 0.51808 -0.1943 0.72238 -0.381 0.2049 -0.1872 0.3582 -0.4239 0.4453 -0.6873l0.0002 -0.0007 3.574 -10.71201c0.1052 -0.28823 0.1264 -0.60051 0.061 -0.90043 -0.0661 -0.302923 -0.2178 -0.580503 -0.437 -0.799741 -0.2192 -0.219238 -0.4968 -0.370916 -0.7997 -0.4370018Z" clip-rule="evenodd" stroke-width="1"></path><path id="Union_2" fill="#2859c5" d="M3.05875 8.94434 2.9744 12.1967c-0.00459 0.1767 0.08452 0.3428 0.23434 0.4367 0.14983 0.0938 0.33809 0.1016 0.49515 0.0204l2.01406 -1.0415 -2.6592 -2.66796Z" stroke-width="1"></path><path id="Intersect" fill="#2859c5" fill-rule="evenodd" d="M3.05699 9.01302 10.102 3.89561c0.2792 -0.20286 0.3412 -0.59371 0.1383 -0.87299 -0.2028 -0.27927 -0.59369 -0.34122 -0.87297 -0.13835L2.20285 8.08848l0.85592 0.85592 -0.00178 0.06862Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                                    </button>
                                    <input type="email" name="q" className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black max-lg:w-80" placeholder="Entrer votre adresse Email" autoComplete="off" />
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