'use client'
import Table from "@/components/Table"
import { usePayrollContext } from "@/contexts/PayrollContext"
import { Tax } from "@/types/Tax"
import Link from "next/link"
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
        router.push('/create/taxDefinition')
    }

    const handleDelete = async (id: number) => {
        let taxes = await payrollContext.fetchDeleteTaxDefinition(id)
        setTaxes(taxes)
    }
    return (
        <div>
            {/* Tax Definition */}
            <hr />
            <div>
                <button onClick={() => navigateToCreatePage()}>Create Tax Definition</button>
            </div>
            <Table data={taxes}/>
        </div>
    )
}