"use client";

import Link from "next/link";
import { useTheme } from "@/lib/hooks/useTheme";
import { useState, useCallback } from "react";

export default function Navbar() {
    const { theme, toggleTheme, mounted } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <nav className="w-full border-b border-transparent bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-xl font-bold text-white hover:text-blue-100 transition-colors"
                            onClick={closeMenu}
                        >
                            Alex Fasih
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                onClick={closeMenu}
                                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                            >
                                About
                            </Link>
                            <Link
                                href="/experience"
                                onClick={closeMenu}
                                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                            >
                                Experience
                            </Link>
                            <Link
                                href="/projects"
                                onClick={closeMenu}
                                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                onClick={closeMenu}
                                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                onClick={closeMenu}
                                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                            >
                                Contact
                            </Link>

                            {/* Download Resume Button */}
                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                                    />
                                </svg>
                                Resume
                            </a>
                        </div>

                        {/* Dark mode toggle */}
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
                            )}
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                            aria-label="Toggle dark mode"
                            disabled={!mounted}
                        >
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
                        </button>
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-white/20 dark:border-gray-800 shadow-xl">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/experience"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            Experience
                        </Link>
                        <Link
                            href="/projects"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blog"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            Contact
                        </Link>

                        {/* Mobile Resume Download */}
                        <a
                            href="/resume.pdf"
                            download
                            onClick={closeMenu}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                                />
                            </svg>
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
