"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Get theme from localStorage or default to light
        const storedTheme = (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || "light";
        setTheme(storedTheme);
        // Apply theme class to document element
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);

        // Update class on document element
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return { theme, toggleTheme, mounted };
}
