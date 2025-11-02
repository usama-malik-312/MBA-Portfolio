import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary-color, #2563eb)",
                    hover: "var(--primary-hover, #1d4ed8)",
                },
                secondary: "var(--secondary-color, #64748b)",
                accent: "var(--accent-color, #0ea5e9)",
            },
        },
    },
    plugins: [],
};
export default config;


