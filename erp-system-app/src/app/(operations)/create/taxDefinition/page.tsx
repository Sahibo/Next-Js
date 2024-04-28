
'use client'

import { usePayrollContext } from "@/contexts/PayrollContext"
import { useRouter } from "next/navigation"
import {  useState } from "react"

export default function Create() {
    const [taxDefinition, setTaxDefinition] = useState(
        {
            taxType: '',
            value: 0
        }
    )
    const router = useRouter()
    const payrollContext = usePayrollContext()

    const handleCreateTaxDefinition = async () => {
        let taxDefinition = {
            taxType: 'VAT',
            value: 2.5
        }
        await payrollContext.fetchCreateTaxDefinition(taxDefinition)

    }


    const handleGoBack = () => {
        router.back()
    }

    return (
        <div>
            <button onClick={handleGoBack}>Go back</button>
            <button onClick={() => handleCreateTaxDefinition()}>Create</button>
        </div>
    )
}