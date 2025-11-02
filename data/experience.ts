import { Experience } from "./types";

export const experiences: Experience[] = [
    {
        id: "exp-1",
        title: "Financial Analyst",
        company: "Robert Half International",
        location: "Houston, TX",
        startDate: "2019-05",
        endDate: "Present",
        description: [
            "Lead role in FP&A group for timely consolidation and reporting.",
            "Partner with FP&A Director and CFO to prepare variance and bridge analysis.",
            "Prepare forecasts and plans for 30 sites and identify inconsistencies.",
            "Build strategic productivity models to optimize resource utilization.",
            "Create monthly and quarterly executive presentations.",
            "Collaborate with sales, marketing, and operations to analyze cost drivers.",
        ],
        technologies: ["Excel", "Power BI", "SQL", "Financial Modeling"],
    },
    {
        id: "exp-2",
        title: "Director",
        company: "SIF Enterprise",
        location: "Houston, TX",
        startDate: "2016-10",
        endDate: "2019-03",
        description: [
            "Directed multi-business operations with sales over $2 million.",
            "Improved resource efficiency, saving $200k in 6 months.",
            "Developed growth-oriented sales and marketing strategies.",
            "Analyzed financial statements to guide strategic decisions.",
        ],
        achievements: [
            "Generated over $2M in annual sales",
            "Achieved $200k in cost savings within 6 months",
        ],
        technologies: ["Financial Analysis", "Operations Management", "Strategic Planning"],
    },
    {
        id: "exp-3",
        title: "Business Analyst",
        company: "Shaw Cor",
        location: "Houston, TX",
        startDate: "2015-09",
        endDate: "2016-10",
        description: [
            "Supported CEO/CFO with business analyses and forecasts.",
            "Evaluated under-performing sites and new opportunities.",
            "Prepared corporate and divisional business plans.",
            "Developed pricing models for large customer proposals.",
        ],
        technologies: ["Business Analysis", "Financial Modeling", "Strategic Planning"],
    },
    {
        id: "exp-4",
        title: "Senior Financial Analyst",
        company: "Shaw Cor",
        location: "Houston, TX",
        startDate: "2013-09",
        endDate: "2015-09",
        description: [
            "Consolidated financial statements and reconciliations.",
            "Produced variance analysis and executive summaries.",
            "Managed debt schedules exceeding $1 billion.",
        ],
        achievements: [
            "Managed debt schedules exceeding $1 billion",
        ],
        technologies: ["Financial Consolidation", "Variance Analysis", "Debt Management"],
    },
    {
        id: "exp-5",
        title: "Senior Staff Accountant",
        company: "HCC Insurance Holdings",
        location: "Houston, TX",
        startDate: "2008-09",
        endDate: "2010-10",
        description: [
            "Maintained GAAP-compliant ledgers and journal entries.",
            "Conducted monthly financial closes and consolidations.",
            "Assisted in SEC filings (10-K, 10-Q).",
        ],
        technologies: ["GAAP", "SEC Reporting", "Financial Close", "Consolidation"],
    },
    {
        id: "exp-6",
        title: "Accountant",
        company: "U.S. Oncology",
        location: "Houston, TX",
        startDate: "2006-09",
        endDate: "2008-09",
        description: [
            "Handled month-end close, depreciation schedules, and analytical review.",
        ],
        technologies: ["Month-end Close", "Depreciation", "Financial Analysis"],
    },
    {
        id: "exp-7",
        title: "Accountant",
        company: "Mir Fox & Rodriguez",
        location: "Houston, TX",
        startDate: "2006-03",
        endDate: "2006-07",
        description: [
            "Reviewed FEMA contracts ($300 million) for City of Houston.",
            "Designed efficient methodologies for contract file audits.",
        ],
        achievements: [
            "Reviewed $300M in FEMA contracts",
        ],
        technologies: ["Contract Review", "Audit", "Compliance"],
    },
];

export default experiences;