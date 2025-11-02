"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


// Configure PDF.js worker
if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
}

interface PDFViewerProps {
    file?: string;
}

export default function ResumeViewer({ file = "/resume.pdf" }: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setLoading(false);
        setError(null);
    }

    function onDocumentLoadError(error: Error) {
        setError("Failed to load PDF. Please try downloading it instead.");
        setLoading(false);
        console.error("PDF load error:", error);
    }

    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const goToNextPage = () => {
        if (numPages && pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <div className="flex flex-col items-center">
            {error ? (
                <div className="w-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                    <p className="text-red-800 dark:text-red-200 mb-4">{error}</p>
                    <a
                        href={file}
                        download
                        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                    >
                        Download PDF Instead
                    </a>
                </div>
            ) : (
                <>
                    <div className="mb-4 w-full flex items-center justify-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                        <button
                            onClick={goToPreviousPage}
                            disabled={pageNumber <= 1}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Previous page"
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            Page {pageNumber} of {numPages || "--"}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={!numPages || pageNumber >= numPages}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Next page"
                        >
                            Next
                        </button>
                    </div>

                    {loading && (
                        <div className="flex items-center justify-center h-96 w-full bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="text-gray-600 dark:text-gray-400">Loading PDF...</div>
                        </div>
                    )}

                    <div className="w-full overflow-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-center p-4">
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={
                                <div className="flex items-center justify-center h-96">
                                    <div className="text-gray-600 dark:text-gray-400">
                                        Loading PDF...
                                    </div>
                                </div>
                            }
                            className="flex flex-col items-center"
                        >
                            <Page
                                pageNumber={pageNumber}
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                                className="shadow-lg"
                                width={
                                    typeof window !== "undefined"
                                        ? Math.min(800, window.innerWidth - 100)
                                        : 800
                                }
                            />
                        </Document>
                    </div>
                </>
            )}
        </div>
    );
}
