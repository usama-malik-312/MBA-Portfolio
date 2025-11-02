import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
    title: "Projects - Alex Fasih",
    description: "Portfolio of projects and initiatives by Alex Fasih",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
                        Projects & Initiatives
                    </h1>
                    <p className="text-gray-800 dark:text-gray-300 text-lg">
                        A collection of financial analysis tools, automation projects, and data visualization
                        initiatives.
                    </p>
                </div>
                <ProjectsGrid />
            </main>
            <Footer />
        </div>
    );
}
