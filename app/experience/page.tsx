import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
    title: "Experience - Alex Fasih",
    description: "Professional experience and career history of Alex Fasih",
};

export default function ExperiencePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
                        Professional Experience
                    </h1>
                    <p className="text-gray-800 dark:text-gray-300 text-lg">
                        A timeline of my career journey, achievements, and professional growth.
                    </p>
                </div>
                <ExperienceTimeline />
            </main>
            <Footer />
        </div>
    );
}
