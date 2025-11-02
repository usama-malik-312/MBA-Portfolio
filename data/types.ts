// Type definitions for Experience and Projects

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | "Present";
    description: string[];
    achievements?: string[];
    technologies?: string[];
    metrics?: {
        label: string;
        value: string | number;
        description?: string;
    }[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    status: "completed" | "in-progress" | "archived";
    startDate?: string;
    endDate?: string | "Present";
    url?: string;
    githubUrl?: string;
    imageUrl?: string;
    highlights: string[];
    metrics?: {
        label: string;
        value: string | number;
    }[];
    category: "financial" | "analytics" | "automation" | "visualization" | "other";
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string; // Markdown content
    author: string;
    date: string; // ISO date string
    thumbnail: string;
    category: string;
    tags: string[];
    readTime: number; // in minutes
}