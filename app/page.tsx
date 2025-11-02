import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 min-h-[70vh]">
                    <div className="text-center max-w-4xl w-full">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6">
                            Alex Fasih
                        </h1>
                        <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-8 font-medium">
                            Senior Financial Analyst & FP&A Professional
                        </p>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Transforming complex financial data into actionable business insights.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}


