export interface Education {
    degree: string;
    institution: string;
    location: string;
    year: string;
    field?: string;
    achievements?: string[];
}

export interface AboutData {
    name: string;
    title: string;
    photo: string;
    professionalSummary: string;
    interests: string[];
    education: Education[];
}

export const aboutData: AboutData = {
    name: "Alex Fasih",
    title: "Senior Financial Analyst & FP&A Professional",
    photo: "/images/alex.jpg",
    professionalSummary: `Alex Fasih is a highly experienced financial professional based in Houston, Texas. With extensive expertise in FP&A, financial modeling, and corporate consolidation, Alex brings a strong analytical mindset and a results-driven approach to financial management. He has a track record of optimizing performance, leading cross-functional teams, and driving strategic decision-making for growth and efficiency.

Outside of work, Alex enjoys cricket, rugby, and staying active at the gym.`,
    interests: ["Cricket", "Rugby", "Gym"],
    education: [
        {
            degree: "B.B.A. in Accounting and B.B.A. in Finance",
            institution: "University of Houston",
            location: "Houston, TX",
            year: "1998-2003",
        },
    ],
};

export default aboutData;
