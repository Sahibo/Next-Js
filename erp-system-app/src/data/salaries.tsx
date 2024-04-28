import { Salary, Level } from "@/types/Salary";

export const salaries: Salary[] = [
    {
        id: 1,
        title: "Senior Manager",
        level: Level.MD_CEO,
        basicSalary: 80000,
        allowance: 2000,
        grossSalary: 82000,
        deductions: 5000,
        netSalary: 77000
    },
    {
        id: 2,
        title: "Executive Director",
        level: Level.ED,
        basicSalary: 90000,
        allowance: 2500,
        grossSalary: 92500,
        deductions: 6000,
        netSalary: 86500
    },
    {
        id: 3,
        title: "General Manager",
        level: Level.GM,
        basicSalary: 70000,
        allowance: 1800,
        grossSalary: 71800,
        deductions: 4500,
        netSalary: 67300
    },
    {
        id: 4,
        title: "Deputy General Manager",
        level: Level.DGM,
        basicSalary: 65000,
        allowance: 1700,
        grossSalary: 66700,
        deductions: 4000,
        netSalary: 62700
    }

];