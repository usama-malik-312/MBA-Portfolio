"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
    const sectionVariant = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Floating background gradient */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300 to-blue-200 blur-3xl opacity-40 dark:from-indigo-900 dark:to-blue-900 dark:opacity-30"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 min-h-[70vh]">
                    <motion.div
                        className="text-center max-w-4xl w-full"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6">
                            Alex Fasih
                        </h1>
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-8 font-medium min-h-[2.5rem]">
                            <TypeAnimation
                                sequence={[
                                    "Senior Financial Analyst",
                                    1800,
                                    "FP&A Professional",
                                    1800,
                                    "Financial Modeling Expert",
                                    1800,
                                ]}
                                wrapper="span"
                                speed={40}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Transforming complex financial data into actionable business insights.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <Link href="/projects" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                                View Projects
                            </Link>
                            <Link href="/contact" className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* About / Mission */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Mission & Focus</h2>
                        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                            I help organizations make better financial decisions through accurate forecasting, insightful analysis,
                            and scalable reporting systems. My work blends finance acumen with modern data tools.
                        </p>
                    </div>
                </motion.section>

                {/* Expertise / Services */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "FP&A", desc: "Forecasting, budgeting, variance analysis" },
                                { title: "Financial Modeling", desc: "Executive-ready models & presentations" },
                                { title: "Automation", desc: "Reporting automation with BI & scripting" },
                                { title: "Data Visualization", desc: "Power BI dashboards, KPI tracking" },
                            ].map((item) => (
                                <motion.div key={item.title} whileHover={{ y: -4 }} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Projects Preview */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-end justify-between mb-6">
                            <h2 className="text-3xl font-bold text-black dark:text-white">Featured Projects</h2>
                            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">View all</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.slice(0, 3).map((p) => (
                                <div key={p.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">{p.title}</h3>
                                    <p className="text-gray-800 dark:text-gray-300 text-sm mb-4 leading-relaxed">{p.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {p.technologies.slice(0, 3).map((t) => (
                                            <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">{t}</span>
                                        ))}
                                    </div>
                                    <Link href="/projects" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Learn more →</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Testimonials / Clients (placeholder) */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">What People Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                "Alex delivers insightful financial analysis that drives results.",
                                "A go-to partner for forecasting and executive reporting.",
                                "Highly professional and detail-oriented across complex projects.",
                            ].map((quote, i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed">“{quote}”</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="px-4 sm:px-6 lg:px-8 py-20"
                >
                    <div className="max-w-5xl mx-auto text-center bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-10 shadow-lg">
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Let’s work together</h2>
                        <p className="text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                            Looking for FP&A support, financial modeling, or executive-ready reporting? I can help.
                        </p>
                        <Link href="/contact" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                            Contact Me
                        </Link>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    );
}


