"use client";

import Link from "next/link";
import { BlogPost } from "@/data/types";
import SafeImage from "@/components/SafeImage";

interface BlogCardProps {
    blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    };

    return (
        <Link href={`/blog/${blog.id}`}>
            <article className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-800">
                    <SafeImage
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                            {blog.category}
                        </span>
                    </div>
                    <h2 className="text-xl font-bold text-black dark:text-white mb-2 line-clamp-2">
                        {blog.title}
                    </h2>
                    <p className="text-black dark:text-gray-200 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                        {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span>{formatDate(blog.date)}</span>
                        <span>{blog.readTime} min read</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
