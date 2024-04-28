'use client'
import { OutlinedButton } from "@/components/unknown/CustomButtons"
import { usePayrollContext } from "@/contexts/PayrollContext"
import { Level } from "@/types/Salary"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateSalaryDefinition() {

    const [salaryDefinition, setSalaryDefinition] = useState(
        {
            title: "",
            level: Level,
            basicSalary: 0,
            allowance: 0,
            grossSalary: 0,
            deductions: 0,
            netSalary: 0
        }
    )

    const payrollContext = usePayrollContext()
    const router = useRouter()
    const titles = [
        {
            id: 1,
            name: "Managing Director"
        },
        {
            id: 2,
            name: "Executive Director"
        },
        {
            id: 3,
            name: "General Manager"
        },
        {
            id: 4,
            name: "Deputy General Manager"
        }] // maybe we'll move it to data folder



    const handleCreate = async () => {
        // const newSalaryDefinition: Salary =
        // {
        //     id: salaries.length + 1,
        //     title: salaryDefinition.title,
        //     level: salaryDefinition.level,
        //     basicSalary: salaryDefinition.basicSalary,
        //     allowance: salaryDefinition.allowance,
        //     grossSalary: salaryDefinition.grossSalary,
        //     deductions: salaryDefinition.deductions,
        //     netSalary: salaryDefinition.netSalary
        // }

        const newSalaryDefinition = {
            title: "Senior Manager",
            level: Level.MD_CEO,
            basicSalary: 80000,
            allowance: 2000,
            grossSalary: 82000,
            deductions: 5000,
            netSalary: 77000
        }

        await payrollContext.fetchCreateSalaryDefinition(newSalaryDefinition)
    }

    const handleChangeTitle = (e: any) => {
        setSalaryDefinition((prev) => ({
            ...prev,
            title: e.target.value
        }));
    }

    const handleGoBack = () => {
        router.back()
    }
    return (
        <div>
            <OutlinedButton onClick={() => handleGoBack()}>
                Go Back
            </OutlinedButton>
            <select
                value="Select option"
                onChange={handleChangeTitle}
            >
                <option value="" onChange={() => { }}>Select title</option>
                {
                    titles.map((title) =>
                    (
                        <option onChange={() => { }} key={title.id} value={title.name}>
                            {title.name}
                        </option>
                    ))
                }
            </select>
            <select />
            <input />
            <input />
            <input />
            <input />
            <input />
            <OutlinedButton onClick={handleCreate}>
                Create
            </OutlinedButton>
        </div>
    )
}