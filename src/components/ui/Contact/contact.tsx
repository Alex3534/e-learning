import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaBuilding, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

// Define interfaces for form data and errors
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    phone: string;
    subject: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const ContactPage = () => {
    // Initialize form data with proper types
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        subject: "general",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (formData.phone && !/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number";
        }
        return newErrors;
    };

    // Add proper type for the event parameter
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    // Add proper type for the event parameter
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate form submission
            setTimeout(() => {
                setSubmitSuccess(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    phone: "",
                    subject: "general",
                    message: ""
                });
                setTimeout(() => setSubmitSuccess(false), 3000);
                setIsSubmitting(false);
            }, 2000);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="p-6 lg:p-12 bg-gradient-to-br from-blue-600 to-blue-800">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Get in touch
                            </h2>
                            <p className="mt-4 text-lg text-blue-100">
                                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-center">
                                    <FaPhone className="h-6 w-6 text-blue-200" />
                                    <span className="ml-3 text-blue-100">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="h-6 w-6 text-blue-200" />
                                    <span className="ml-3 text-blue-100">contact@company.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaBuilding className="h-6 w-6 text-blue-200" />
                                    <span className="ml-3 text-blue-100">123 Business Ave, Suite 100<br />New York, NY 10001</span>
                                </div>
                            </div>
                            <div className="mt-12 flex space-x-6">
                                <FaLinkedin className="h-8 w-8 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                                <FaTwitter className="h-8 w-8 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                                <FaGithub className="h-8 w-8 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 lg:p-12">
                        <div className="max-w-lg mx-auto">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.firstName ? 'border-red-500' : ''}`}
                                        />
                                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.lastName ? 'border-red-500' : ''}`}
                                        />
                                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.phone ? 'border-red-500' : ''}`}
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <select
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.message ? 'border-red-500' : ''}`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </div>

                                {submitSuccess && (
                                    <div className="rounded-md bg-green-50 p-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;