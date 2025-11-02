"use client";

import SafeImage from "@/components/SafeImage";

interface BlogDetailImageProps {
    src: string;
    alt: string;
}

export default function BlogDetailImage({ src, alt }: BlogDetailImageProps) {
    return (
        <div className="relative w-full h-64 sm:h-96 mb-8 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            <SafeImage
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
            />
        </div>
    );
}
