'use client'
import { usePayrollContext } from "@/contexts/PayrollContext"
import { Tax } from "@/types/Tax"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function TaxDefinition() {
    let [taxes, setTaxes] = useState<Tax[]>([])

    let router = useRouter()
    let payrollContext = usePayrollContext()

    useEffect(() => {
        const fetchData = async () => {
            let taxes = await payrollContext.fetchTaxes()
            setTaxes(taxes)
        }
        fetchData()
    }, [payrollContext])

    const navigateToCreatePage = async () => {
        router.push('/')
    }

    return (
        <div>
            Tax Definition
            <hr />
            {taxes.map((tax) => (
                <div key={tax.id}>
                    {tax.id}
                    <button onClick={() => navigateToCreatePage()}>Create Tax Definition</button>
                    {/* <button onClick={() => handleDelete(salary.id)}>Delete</button> */}
                    {/* <Link href={`/payroll/update/${salary.id}`}>Update</Link> */}
                </div>
            ))}
        </div>
    )
}