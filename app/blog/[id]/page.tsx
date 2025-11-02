import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogDetailImage from "@/components/BlogDetailImage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const blog = blogs.find((b) => b.id === params.id);

    if (!blog) {
        return {
            title: "Blog Post Not Found",
        };
    }

    return {
        title: `${blog.title} - Alex Fasih`,
        description: blog.description,
    };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const blog = blogs.find((b) => b.id === params.id);

    if (!blog) {
        notFound();
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
                <article>
                    {/* Header */}
                    <div className="mb-8">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 leading-tight tracking-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-800 dark:text-gray-300 mb-6">
                            <span>By {blog.author}</span>
                            <span>•</span>
                            <span>{formatDate(blog.date)}</span>
                            <span>•</span>
                            <span>{blog.readTime} min read</span>
                        </div>
                    </div>

                    {/* Thumbnail */}
                    <BlogDetailImage src={blog.thumbnail} alt={blog.title} />

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {blog.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-black dark:prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-black dark:prose-strong:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-black dark:prose-code:text-gray-200 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 mb-8 prose-ul:text-black dark:prose-ul:text-gray-200 prose-li:text-black dark:prose-li:text-gray-200">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
                    </div>

                    {/* Back Link */}
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/blog"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back to Blog
                        </a>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
