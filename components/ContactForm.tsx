"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            // Initialize EmailJS with your public key
            // Get these from https://www.emailjs.com/
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check environment variables.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    to_email: "furqanfasih@yahoo.com",
                    message: formData.message,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully.",
            });
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again or contact directly via email.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john.doe@example.com"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message here..."
                />
            </div>

            {submitStatus.type && (
                <div
                    className={`p-4 rounded-md ${
                        submitStatus.type === "success"
                            ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300"
                            : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300"
                    }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
