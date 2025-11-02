"use client";

import dynamic from "next/dynamic";
import ResumeMetadata from "@/components/ResumeMetadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

// Dynamically import PDF viewer to avoid SSR issues
const PDFViewer = dynamic(() => import("@/components/ResumeViewer"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-96">
            <div className="text-gray-600 dark:text-gray-400">Loading PDF viewer...</div>
        </div>
    ),
});

export default function ResumePage() {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                <div className="mb-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
                        Resume
                    </h1>
                    <p className="text-gray-800 dark:text-gray-300 text-lg">
                        Download or view my professional resume below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Metadata Section */}
                    <div className="lg:col-span-1">
                        <ResumeMetadata />
                    </div>

                    {/* PDF Viewer Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Resume Preview
                                </h2>
                                <DownloadButton />
                            </div>
                            <div className="p-4">
                                <PDFViewer />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
