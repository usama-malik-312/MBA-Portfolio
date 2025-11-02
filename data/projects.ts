import { Project } from "./types";

export const projects: Project[] = [
    {
        id: "proj-1",
        title: "Financial Forecasting Dashboard",
        description: "Interactive Excel/Power BI model for executive reporting and real-time financial forecasting.",
        longDescription:
            "Built a comprehensive financial forecasting dashboard that enables executive-level reporting with real-time data visualization. The model integrates multiple data sources and provides actionable insights for strategic decision-making.",
        technologies: ["Excel", "Power BI", "SQL", "Financial Modeling"],
        status: "completed",
        startDate: "2020-01",
        endDate: "2020-06",
        highlights: [
            "Real-time executive reporting capabilities",
            "Integrated multiple financial data sources",
            "Streamlined forecasting processes",
        ],
        metrics: [
            { label: "Reporting Time", value: "Reduced by 70%" },
            { label: "Data Sources", value: "5+" },
        ],
        category: "financial",
    },
    {
        id: "proj-2",
        title: "Budget Variance Analyzer",
        description: "Automated variance reporting tool for FP&A teams to identify discrepancies and optimize budget performance.",
        longDescription:
            "Developed an automated budget variance analysis tool that enables FP&A teams to quickly identify discrepancies, analyze root causes, and optimize budget performance. The tool provides detailed reporting and actionable insights.",
        technologies: ["Excel", "VBA", "Power BI", "SQL"],
        status: "completed",
        startDate: "2019-08",
        endDate: "2019-12",
        highlights: [
            "Automated variance analysis process",
            "Reduced analysis time significantly",
            "Improved accuracy in budget tracking",
        ],
        metrics: [
            { label: "Time Savings", value: "60%" },
            { label: "Accuracy", value: "95%+" },
        ],
        category: "analytics",
    },
];

export default projects;