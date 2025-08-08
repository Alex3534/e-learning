import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

interface Errors {
    fullName?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const ContactPage02 = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!formData.fullName || formData.fullName.length < 3) {
            newErrors.fullName = "The name must contain at least 3 characters";
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number";
        }
        if (!formData.message || formData.message.length < 10) {
            newErrors.message = "The message must contain at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                // Simulating API call
                await new Promise((resolve) => setTimeout(resolve, 2000));
                alert("Message sent successfully!");
                setFormData({ fullName: "", email: "", phone: "", message: "" });
            } catch (error) {
                alert("An error occurred. Please try again.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information Section */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                                    <p className="text-gray-600">123 Rue du Commerce<br />75001 Paris, France</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-blue-600 text-xl mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
                                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-600 text-xl mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Mail</h3>
                                    <p className="text-gray-600">contact@entreprise.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <FaTwitter className="text-2xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <FaInstagram className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full rounded-md border border-gray-300 focus:outline-none p-2 focus:border-blue-500 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                                    aria-required="true"
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Mail address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full rounded-md border border-gray-200 focus:outline-none p-2 focus:border-blue-500 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                    aria-required="true"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full rounded-md border border-gray-300 focus:outline-none p-2 focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full rounded-md border border-gray-300 focus:outline-none p-2 focus:border-blue-500 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                                    aria-required="true"
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isLoading ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <span>Send the message</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage02;