
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
    title: "Blog - Alex Fasih",
    description: "Read articles about finance, FP&A, and data analytics by Alex Fasih",
};

export default function BlogPage() {
    // Sort blogs by date (newest first)
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Blog</h1>
                    <p className="text-gray-800 dark:text-gray-300 text-lg">
                        Insights on financial planning, data analytics, and FP&A best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {sortedBlogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
