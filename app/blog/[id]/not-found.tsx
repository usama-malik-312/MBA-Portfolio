import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    The blog post you're looking for doesn't exist or has been removed.
                </p>
                <Link
                    href="/blog"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                    Back to Blog
                </Link>
            </main>
            <Footer />
        </div>
    );
}
