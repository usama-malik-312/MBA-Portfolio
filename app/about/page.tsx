import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
    title: "About - Alex Fasih",
    description: "Learn more about Alex Fasih, Senior Financial Analyst & FP&A Professional",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
                        About Me
                    </h1>
                    <p className="text-gray-800 dark:text-gray-300 text-lg">Get to know more about my background and interests.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Photo Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 mb-6 rounded-lg overflow-hidden shadow-lg border-4 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src={aboutData.photo}
                                    alt={aboutData.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                                    {aboutData.name}
                                </h2>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                    {aboutData.title}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Professional Summary */}
                        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Professional Summary
                            </h2>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                {aboutData.professionalSummary.split("\n\n").map((paragraph, idx) => (
                                    <p key={idx} className="text-black dark:text-gray-200 mb-6 leading-relaxed text-base">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                                Education
                            </h2>
                            <div className="space-y-6">
                                {aboutData.education.map((edu, idx) => (
                                    <div key={idx} className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                                        <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                                            {edu.institution}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            {edu.location} • {edu.year}
                                        </p>
                                        {edu.field && (
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                                <span className="font-medium">Field:</span> {edu.field}
                                            </p>
                                        )}
                                        {edu.achievements && edu.achievements.length > 0 && (
                                            <div className="mt-2">
                                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                                                    Achievements:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                                    {edu.achievements.map((achievement, aidx) => (
                                                        <li key={aidx}>{achievement}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Interests */}
                        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Interests & Hobbies
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {aboutData.interests.map((interest, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
