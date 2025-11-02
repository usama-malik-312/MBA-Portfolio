"use client";

import { Experience } from "@/data/types";
import { experiences } from "@/data/experience";

interface ExperienceTimelineProps {
    data?: Experience[];
}

export default function ExperienceTimeline({ data = experiences }: ExperienceTimelineProps) {
    const formatDate = (date: string) => {
        if (date === "Present") return "Present";
        const [year, month] = date.split("-");
        const dateObj = new Date(parseInt(year), parseInt(month) - 1);
        return dateObj.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    const calculateDuration = (start: string, end: string) => {
        if (end === "Present") {
            const startDate = new Date(start + "-01");
            const now = new Date();
            const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            return remainingMonths > 0 ? `${years}y ${remainingMonths}m` : `${years}y`;
        }
        const startDate = new Date(start + "-01");
        const endDate = new Date(end + "-01");
        const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return remainingMonths > 0 ? `${years}y ${remainingMonths}m` : `${years}y`;
    };

    return (
        <div className="space-y-8">
            {data.map((experience, index) => (
                <div key={experience.id} className="relative">
                    {/* Timeline line */}
                    {index < data.length - 1 && (
                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                    )}

                    <div className="flex gap-6">
                        {/* Timeline dot */}
                        <div className="flex-shrink-0">
                            <div className="relative z-10 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                {index + 1}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                                            {experience.title}
                                        </h3>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                                            {experience.company}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {experience.location}
                                        </p>
                                    </div>
                                    <div className="mt-2 sm:mt-0 text-right">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-500">
                                            {calculateDuration(experience.startDate, experience.endDate)}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <ul className="list-disc list-inside space-y-2 text-black dark:text-gray-200 text-sm leading-relaxed">
                                        {experience.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Achievements */}
                                {experience.achievements && experience.achievements.length > 0 && (
                                    <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-800">
                                        <h4 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
                                            Key Achievements:
                                        </h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-green-700 dark:text-green-300">
                                            {experience.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                {experience.technologies && experience.technologies.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                            Technologies:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Metrics */}
                                {experience.metrics && experience.metrics.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        {experience.metrics.map((metric, idx) => (
                                            <div key={idx} className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                    {metric.value}
                                                </p>
                                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-1">
                                                    {metric.label}
                                                </p>
                                                {metric.description && (
                                                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                                        {metric.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
