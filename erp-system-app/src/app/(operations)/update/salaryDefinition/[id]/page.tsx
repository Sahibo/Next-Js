'use client'
import { usePayrollContext } from "@/contexts/PayrollContext"
import { Level } from "@/types/Salary"

interface Props {
    params:
    {
        id: string
    }
}


export default function UpdateSalaryDefinition({ params }: Props) {
    const { id } = params
    const payrollContext = usePayrollContext()
    const handleUpdate = async () => {
        const newSalaryDefinition = {
            title: "Updated",
            level: Level.MD_CEO,
            basicSalary: 80000,
            allowance: 2000,
            grossSalary: 82000,
            deductions: 5000,
            netSalary: 77000
        }

        payrollContext.fetchUpdateSalaryDefinition(Number(id), newSalaryDefinition)
    }

    return (
        <div>

            <button onClick={handleUpdate}>Update</button>
        </div>
    )

}
