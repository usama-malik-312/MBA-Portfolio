export default function ResumeMetadata() {
    const metadata = {
        name: "Alex Fasih",
        email: "furqanfasih@yahoo.com",
        phone: "(832) 659-9897",
        location: "Houston, TX",
        title: "Senior Financial Analyst & FP&A Professional",
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-xl font-bold text-black dark:text-white mb-6">
                Contact Information
            </h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Name
                    </h3>
                    <p className="text-black dark:text-white">{metadata.name}</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Title
                    </h3>
                    <p className="text-black dark:text-white">{metadata.title}</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Email
                    </h3>
                    <a
                        href={`mailto:${metadata.email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {metadata.email}
                    </a>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Phone
                    </h3>
                    <a
                        href={`tel:${metadata.phone.replace(/\s/g, "")}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {metadata.phone}
                    </a>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Location
                    </h3>
                    <p className="text-black dark:text-white">{metadata.location}</p>
                </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Quick Links
                </h3>
                <div className="space-y-2">
                    <a
                        href="https://linkedin.com/in/alexfasih"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                        LinkedIn Profile
                    </a>
                    <a
                        href="https://github.com/alexfasih"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
