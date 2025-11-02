"use client";

import Link from "next/link";
import { useTheme } from "@/lib/hooks/useTheme";

export default function Navbar() {
    const { theme, toggleTheme, mounted } = useTheme();

    return (
        <nav className="w-full border-b border-transparent bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-xl font-bold text-white hover:text-blue-100 transition-colors"
                        >
                            Alex Fasih
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href="/"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/experience"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    Experience
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/resume"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    Resume
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                                >
                                    Contact
                                </Link>
                                {/* Chat tab hidden for now */}
                            </div>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600"
                            aria-label="Toggle dark mode"
                            disabled={!mounted}
                        >
                            {mounted ? (
                                theme === "dark" ? (
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                )
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
