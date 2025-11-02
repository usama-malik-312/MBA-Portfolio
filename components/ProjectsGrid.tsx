"use client";

import { Project } from "@/data/types";
import { projects } from "@/data/projects";
import { useState } from "react";

interface ProjectsGridProps {
    data?: Project[];
    showCategoryFilter?: boolean;
}

export default function ProjectsGrid({ data = projects, showCategoryFilter = true }: ProjectsGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = ["all", "financial", "analytics", "automation", "visualization", "other"] as const;
    const categoryLabels: Record<string, string> = {
        all: "All Projects",
        financial: "Financial",
        analytics: "Analytics",
        automation: "Automation",
        visualization: "Visualization",
        other: "Other",
    };

    const filteredProjects =
        selectedCategory === "all" ? data : data.filter((project) => project.category === selectedCategory);

    const getStatusColor = (status: Project["status"]) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            case "in-progress":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
            case "archived":
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
        }
    };

    const getStatusLabel = (status: Project["status"]) => {
        switch (status) {
            case "completed":
                return "Completed";
            case "in-progress":
                return "In Progress";
            case "archived":
                return "Archived";
            default:
                return status;
        }
    };

    const getCategoryColor = (category: Project["category"]) => {
        switch (category) {
            case "financial":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
            case "analytics":
                return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
            case "automation":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "visualization":
                return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
        }
    };

    return (
        <div>
            {/* Category Filter */}
            {showCategoryFilter && (
                <div className="mb-8 flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                selectedCategory === category
                                    ? "bg-blue-600 text-white dark:bg-blue-500"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                        >
                            {categoryLabels[category]}
                        </button>
                    ))}
                </div>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-bold text-black dark:text-white flex-1">
                                    {project.title}
                                </h3>
                                <span
                                    className={`px-2 py-1 rounded text-xs font-medium ml-2 ${getStatusColor(project.status)}`}
                                >
                                    {getStatusLabel(project.status)}
                                </span>
                            </div>
                            <span
                                className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(project.category)}`}
                            >
                                {categoryLabels[project.category]}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-black dark:text-gray-200 text-sm mb-4 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        {/* Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                            <div className="mb-4">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                    Highlights:
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-gray-400">
                                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-4">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                    Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 4).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-2 py-0.5 text-gray-500 dark:text-gray-500 text-xs">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Metrics */}
                        {project.metrics && project.metrics.length > 0 && (
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {project.metrics.slice(0, 2).map((metric, idx) => (
                                    <div key={idx} className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                            {metric.value}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Links */}
                        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Live Demo →
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    GitHub →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
                </div>
            )}
        </div>
    );
}
