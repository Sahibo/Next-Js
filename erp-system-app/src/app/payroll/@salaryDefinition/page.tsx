'use client'
import Table from "@/components/Table"
import { usePayrollContext } from "@/contexts/PayrollContext"
import { Salary } from "@/types/Salary"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SalaryDefinition() {
    const [salaries, setSalaries] = useState<Salary[]>([])
    const payrollContext = usePayrollContext()
    useEffect(() => {
        const fetchData = async () => {

            const salaries = await payrollContext.fetchSalaries()
            setSalaries(salaries)
        }
        fetchData()

    }, [payrollContext])

    const handleDelete = async (id: number) => {
        console.log(id);

        const salaries = await payrollContext.fetchDeleteSalaryDefinition(id)

        setSalaries(salaries)
    }

    return (
        <div>
            Salary Definition
            <hr />
            <Link href={`/create/salaryDefinition`}>
                Create Salary Definition
            </Link>
            <Table data={salaries}/>
        </div>
    )
}