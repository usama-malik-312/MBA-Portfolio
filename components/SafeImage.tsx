"use client";

import Image from "next/image";
import { useState } from "react";

interface SafeImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    sizes?: string;
}

export default function SafeImage({
    src,
    alt,
    fill,
    width,
    height,
    className = "",
    priority,
    sizes,
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23e5e7eb' width='800' height='400'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            setImgSrc(placeholder);
        }
    };

    if (fill) {
        return (
            <Image
                src={imgSrc}
                alt={alt}
                fill
                className={className}
                priority={priority}
                sizes={sizes}
                onError={handleError}
            />
        );
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority={priority}
            onError={handleError}
        />
    );
}
