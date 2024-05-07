const roles = [
    {value: "Frontend", label: "frontend"},
    {value: "Brontend", label: "backend"},
    {value: "FullStack", label: "fullstack"},
    {value: "IOS", label: "ios"},
    {value: "Android", label: "android"},
    {value: "Data Science", label: "data-science"},
    {value: "Business Analyst", label: "business-analyst"},
    {value: "HR", label: "hr"},
    {value: "Finance", label: "finance"},
    {value: "Tech Lead", label: "tech-lead"}
];

const modes = [
    {value: "Remote", label: "remote"},
    {value: "In-Office", label: "in-office"},
    {value: "Hybrid", label: "hybrid"},
];

const minBasePay = [
    {value: 0, label: 0},
    {value: 10, label: 10},
    {value: 20, label: 20},
    {value: 30, label: 30},
    {value: 40, label: 40},
    {value: 50, label: 50},
    {value: 60, label: 60},
    {value: 70, label: 70}
];

const experience = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
    {value: 6, label: 6},
    {value: 7, label: 7},
    {value: 8, label: 8},
    {value: 9, label: 9},
    {value: 10, label: 10}
];

const filters = {
    "Roles": roles, 
    "Experience (years)": experience, 
    "Modes": modes, 
    "Minimum Base Pay Salary (LPA)": minBasePay
 }

export default filters;